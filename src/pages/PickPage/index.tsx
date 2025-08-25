import MainTopBar from '@/common/components/MainTopBar';
import SafeArea from '@/common/components/SafeArea';
import * as s from './style.css';
import PickItemList from '@/features/pickList/components/PickItemList';
import useGetAppointment from '@/features/pickList/apis/useGetAppointment';
import { CHAT_PAGING_SIZE } from '@/libs/constants';
import Pagination from '@/common/components/Pagination';
import { useSearchParams } from 'react-router';
import { motion } from 'framer-motion'; // motion/react → framer-motion
import NoResult from '@/common/components/NoResult';

const PickPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawSubject = searchParams.get('subject');

  const subject = rawSubject === 'requester' ? 'REQUESTER' : 'OWNER'; // 기본값 OWNER

  const {
    data: picks = [],
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetAppointment({
    pageSize: CHAT_PAGING_SIZE,
    period: 'ALL',
    subject, // OWNER or REQUESTER
  });

  const isEmpty = isSuccess && picks.length === 0;

  const handleTabClick = (value: 'OWNER' | 'REQUESTER') => {
    setSearchParams({ subject: value.toLowerCase() });
  };

  return (
    <SafeArea>
      <MainTopBar />
      <div className={s.Section}>
        <div className={s.Type({ active: subject === 'OWNER' })} onClick={() => handleTabClick('OWNER')}>
          받은 PICK
          {subject === 'OWNER' && <motion.div layoutId="underline" className={s.Underline} />}
        </div>

        <div className={s.Type({ active: subject === 'REQUESTER' })} onClick={() => handleTabClick('REQUESTER')}>
          보낸 PICK
          {subject === 'REQUESTER' && <motion.div layoutId="underline" className={s.Underline} />}
        </div>
      </div>

      <div className={s.Wrapper}>
        <div className={s.Content({ isEmpty })}>
          {isEmpty ? (
            <NoResult type="pick" />
          ) : (
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
