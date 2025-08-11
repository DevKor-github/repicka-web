import { throttle } from 'es-toolkit';
import { type ReactNode, useCallback } from 'react';

import * as s from './style.css';

import useIntersect from '@/common/utils/useIntersect';
import { LoadingSpinner } from '@/common/components/Spinner';

type Props<T> = {
  items: T[];
  render: (item: T, index: number) => ReactNode;
  fetchNextPage: () => void;
  hasNextPage?: boolean; // 옵션 값이지만 웬만하면 넣어주삼
  isFetchingNextPage?: boolean; // 옵션 값이지만 웬만하면 넣어주삼
  direction?: 'normal' | 'reverse';
};

const Pagination = <T,>({
  items,
  render,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  direction = 'normal',
}: Props<T>) => {
  const isReverse = direction === 'reverse';
  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetchingNextPage) throttle(() => fetchNextPage(), 200)();
  });

  const Loader = useCallback(() => {
    if (!hasNextPage) return null;

    if (isFetchingNextPage)
      return (
        <div className={s.LoadingWrapper}>
          <LoadingSpinner />
        </div>
      );

    return <div className={s.Trigger} ref={fetchNextRef} />;
  }, [hasNextPage, isFetchingNextPage, fetchNextRef]);

  return (
    <>
      {isReverse ? (
        <>
          <Loader />
          {items.map(render)}
        </>
      ) : (
        <>
          {items.map(render)}
          <Loader />
        </>
      )}
    </>
  );
};

export default Pagination;
