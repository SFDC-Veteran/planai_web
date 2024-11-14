import React, { useState } from 'react';
import * as S from './style';
import { WRITE_PANNEL_ITEM } from 'src/constants/common/writePannel/writePannel.constants';
import {
  useGetAcademicMutation,
  useGetChat,
  useGetRedditMutation,
  useGetWebMutation,
  useGetWolframMutation,
  useGetWriteMutation,
  useGetYoutueMutation,
} from 'src/query/ai/ai.query';
import bottomStore from 'src/store/common/bottom.store';
import { chatStroe } from 'src/store/write/text.store';
import { QueryClient, useQueryClient } from 'react-query';

export interface WritePannel {
  query: string;
}

const WritePannel = ({ query }: WritePannel) => {
  const planId = bottomStore((state) => state.planId);
  const [isclicked, setIsclicked] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [chatId, setChatId] = useState<string>();
  const storedSetChatId = chatStroe((state) => state.setChatId);
  const storedChatId = chatStroe((state) => state.chatId);
  const queryClient = useQueryClient();

  const getYoutubeMutation = useGetYoutueMutation();
  const getWriteMutation = useGetWriteMutation();
  const getWolframMutation = useGetWolframMutation();
  const getWebMutation = useGetWebMutation();
  const getRedditMutation = useGetRedditMutation();
  const getAcademicMutation = useGetAcademicMutation();

  const { data } = useGetChat(chatId!);
  

  const onGetAiResult = (item: string) => {
    switch (item) {
      case '유튜브':
        return getYoutubeMutation.mutate(
          { query, planId, chatId: chatId },
          {
            onSuccess: (data) => {
              setChatId(data.data.chatId);
              storedSetChatId(!storedChatId.length ? data.data.chatId : storedChatId);
              queryClient.invalidateQueries('/ai/chats');
            },
          }
        );
      case '쓰기 보조':
        return getWriteMutation.mutate(
          { query, planId, chatId: chatId },
          {
            onSuccess: (data) => {
              setChatId(data.data.chatId);
              storedSetChatId(!storedChatId.length ? data.data.chatId : storedChatId);
              queryClient.invalidateQueries('/ai/chats');
            },
          }
        );
      case 'WolframAlpha':
        return getWolframMutation.mutate(
          { query, planId, chatId: chatId },
          {
            onSuccess: (data) => {
              setChatId(data.data.chatId);
              storedSetChatId(!storedChatId.length ? data.data.chatId : storedChatId);
              queryClient.invalidateQueries('/ai/chats');
            },
          }
        );
      case '전체':
        return getWebMutation.mutate(
          { query, planId, chatId: chatId },
          {
            onSuccess: (data) => {
              setChatId(data.data.chatId);
              storedSetChatId(!storedChatId.length ? data.data.chatId : storedChatId);
              queryClient.invalidateQueries('/ai/chats');
            },
          }
        );
      case '레딧':
        return getRedditMutation.mutate(
          { query, planId, chatId: chatId },
          {
            onSuccess: (data) => {
              setChatId(data.data.chatId);
              storedSetChatId(!storedChatId.length ? data.data.chatId : storedChatId);
              queryClient.invalidateQueries('/ai/chats');
            },
          }
        );
      case '학술 검색':
        return getAcademicMutation.mutate(
          { query, planId, chatId: chatId },
          {
            onSuccess: (data) => {
              setChatId(data.data.chatId);
              storedSetChatId(!storedChatId.length ? data.data.chatId : storedChatId);
              queryClient.invalidateQueries('/ai/chats');
            },
          }
        );
      default:
        return;
    }
  };

  return (
    <S.WritePannelWrapper>
      {WRITE_PANNEL_ITEM.map((item, idx) => (
        <S.Pannel key={idx} isclicked={isclicked === item} onClick={() => onGetAiResult(item)}>
          {item}
        </S.Pannel>
      ))}
    </S.WritePannelWrapper>
  );
};

export default WritePannel;
