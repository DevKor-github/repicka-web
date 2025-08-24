import MainTopBar from '@/common/components/MainTopBar';
import SafeArea from '@/common/components/SafeArea';
import * as s from './style.css';
import PickItemList from '@/features/pickList/components/PickItemList';
import useGetAppointment from '@/features/pickList/apis/useGetAppointment';
import { CHAT_PAGING_SIZE } from '@/libs/constants';
import Pagination from '@/common/components/Pagination';

const PickPage = () => {
  const {
    data: picks = [],
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetAppointment({
    pageSize: CHAT_PAGING_SIZE,
    period: 'ALL',
    subject: 'OWNER',
  });

  const isEmpty = isSuccess && picks.length === 0;

  return (
    <SafeArea>
      <MainTopBar />
      <div className={s.Section}>
        <div className={s.Type({ g: true })}>
          <div>내 게시물</div>
          <div className={s.Bar} />
        </div>
        <div className={s.Type({ g: true })}>
          <div>다른 게시물</div>
          <div className={s.Bar} />
        </div>
      </div>

      <div className={s.Wrapper}>
        <div className={s.Content}>
          {!isEmpty && (
            <Pagination
              fetchNextPage={fetchNextPage}
              items={picks}
              render={item => <PickItemList data={item} />}
              hasNextPage={hasNextPage}
              isFetchingNextPage={isFetchingNextPage}
            />
          )}
        </div>
      </div>
    </SafeArea>
  );
};
export default PickPage;
