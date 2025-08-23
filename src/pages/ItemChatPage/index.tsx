import CustomHeader from '@/common/components/CustomHeader';
import SafeArea from '@/common/components/SafeArea';
import ChatList from '@/features/chatList/components/ChatList';
import useGetItemChatList from '@/features/itemChatList/apis/useGetItemChat';
import { CHAT_PAGING_SIZE } from '@/libs/constants';
import { useNavigate, useParams } from 'react-router';
import * as s from './style.css';
import Pagination from '@/common/components/Pagination';
import NoResult from '@/common/components/NoResult';
import Btn from '@/common/components/Button';

const ItemChatPage = () => {
  const navigate = useNavigate();
  const { itemId } = useParams<{ itemId: string }>();

  const {
    data: rooms = [],
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetItemChatList({
    params: { pageSize: CHAT_PAGING_SIZE },
    itemId: Number(itemId),
  });

  const isEmpty = isSuccess && rooms.length === 0;

  return (
    <SafeArea>
      <div className={s.Wrapper}>
        <CustomHeader onClick={() => navigate(-1)} title="해당 상품과 연관된 채팅" />
        <div className={s.Content({ isEmpty })}>
          {isEmpty ? (
            <div className={s.NoResult}>
              <NoResult type="chat" />
              <Btn mode="main" className={s.Button} onClick={() => navigate('/')}>
                홈으로 돌아가기
              </Btn>
            </div>
          ) : (
            <Pagination
              fetchNextPage={fetchNextPage}
              items={rooms}
              render={item => <ChatList data={item} />}
              hasNextPage={hasNextPage}
              isFetchingNextPage={isFetchingNextPage}
            />
          )}
        </div>
      </div>
    </SafeArea>
  );
};

export default ItemChatPage;
