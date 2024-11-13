import planaiAxios from 'src/libs/axios/customAxios';
import { AiGetRepository, AiSearchRepository } from './ai.repository';
import { Ai, AiRespons } from 'src/types/ai/ai.type';

class AiSearchRepositoryImpl implements AiSearchRepository {
  public async getYoutube(params: Ai): Promise<AiRespons> {
    const { data } = await planaiAxios.post(
      `/ai/youtube?planId=${params.planId}${params.chatId?.length ? `&chatId=${params.chatId}` : ''}`,
      { query: params.query }
    );
    return data;
  }

  public async getWrite(params: Ai): Promise<AiRespons> {
    const { data } = await planaiAxios.post(
      `/ai/write?planId=${params.planId}${params.chatId?.length ? `&chatId=${params.chatId}` : ''}`,
      { query: params.query }
    );
    return data;
  }

  public async getWolfram(params: Ai): Promise<AiRespons> {
    const { data } = await planaiAxios.post(
      `/ai/wolfram?planId=${params.planId}${params.chatId?.length ? `&chatId=${params.chatId}` : ''}`,
      { query: params.query }
    );
    return data;
  }

  public async getWeb(params: Ai): Promise<AiRespons> {
    const { data } = await planaiAxios.post(
      `/ai/web?planId=${params.planId}${params.chatId?.length ? `&chatId=${params.chatId}` : ''}`,
      { query: params.query }
    );
    return data;
  }

  public async getReddit(params: Ai): Promise<AiRespons> {
    const { data } = await planaiAxios.post(
      `/ai/reddit?planId=${params.planId}${params.chatId?.length ? `&chatId=${params.chatId}` : ''}`,
      { query: params.query }
    );
    return data;
  }

  public async getAcademic(params: Ai): Promise<AiRespons> {
    const { data } = await planaiAxios.post(
      `/ai/academic?planId=${params.planId}${params.chatId?.length ? `&chatId=${params.chatId}` : ''}`,
      { query: params.query }
    );
    return data;
  }
}

class AiGetRepositoryImpl implements AiGetRepository {
  public async getPlanChat(planId: number): Promise<{ data: string[] }> {
    const { data } = await planaiAxios.get(`/ai/plan/chat?planId=${planId}`);
    return data;
  }

  public async getChat(chatId: string): Promise<any[]> {
    const { data } = await planaiAxios.get(`/ai/chats/${chatId}`);
    return data;
  }
}

const aiSearchRepositoryImpl = new AiSearchRepositoryImpl();
const aiGetRepositoryImpl = new AiGetRepositoryImpl();

export { aiSearchRepositoryImpl, aiGetRepositoryImpl };
