import { connectSocket, subChatRoomSocket } from '@/common/utils/wsClient';
import type { ChatInterface } from '@/features/chatRoom/types';
import { useEffect, useState } from 'react';

interface Props {
  chatRoomId: number;
  userId: number;
  restIsOpponentOnline: boolean;
  restOpponentLastEnterAt: string;
}
const useChatRoomSocket = ({ chatRoomId, userId, restIsOpponentOnline, restOpponentLastEnterAt }: Props) => {
  const [newMessages, setNewMessages] = useState<ChatInterface[]>([]);
  const [isOpponentOnline, setIsOpponentOnline] = useState(restIsOpponentOnline);
  const [opponentLastEnterAt, setOpponentLastEnterAt] = useState(restOpponentLastEnterAt);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    connectSocket().then(() => {
      if (!isNaN(chatRoomId)) {
        unsubscribe = subChatRoomSocket(chatRoomId, data => {
          if (data.type === 'CHAT') {
            setNewMessages(prev => [...prev, data.message]);
            return;
          }
          if (data.type === 'ENTER' || data.type === 'EXIT') {
            if (data.message.ownerId === userId) {
              setIsOpponentOnline(data.message.isRequesterOnline);
              setOpponentLastEnterAt(data.message.requesterLastEnterAt);
            }
            if (data.message.requesterId === userId) {
              setIsOpponentOnline(data.message.isOwnerOnline);
              setOpponentLastEnterAt(data.message.ownerLastEnterAt);
            }
          }
        });
      }
    });

    return () => {
      unsubscribe?.();
    };
  }, [chatRoomId, userId]);

  return { newMessages, isOpponentOnline, opponentLastEnterAt };
};

export default useChatRoomSocket;
