import planaiAxios from 'src/libs/axios/customAxios';
import { AiGetRepository, AiSearchRepository } from './ai.repository';
import { Ai, AiRespons } from 'src/types/ai/ai.type';

class AiSearchRepositoryImpl implements AiSearchRepository {
  public async getYoutube(params: Ai): Promise<AiRespons> {
    const { data } = await planaiAxios.get(
      `/ai/youtube?query=${params.query}&planId=${params.planId}&channelId=${params.channelId}`
    );
    return data;
  }

  public async getWrite(params: Ai): Promise<AiRespons> {
    const { data } = await planaiAxios.get(
      `/ai/write?query=${params.query}&planId=${params.planId}&channelId=${params.channelId}`
    );
    return data;
  }

  public async getWolfram(params: Ai): Promise<AiRespons> {
    const { data } = await planaiAxios.get(
      `/ai/wolfram?query=${params.query}&planId=${params.planId}&channelId=${params.channelId}`
    );
    return data;
  }

  public async getWeb(params: Ai): Promise<AiRespons> {
    const { data } = await planaiAxios.get(
      `/ai/web?query=${params.query}&planId=${params.planId}&channelId=${params.channelId}`
    );
    return data;
  }

  public async getReddit(params: Ai): Promise<AiRespons> {
    const { data } = await planaiAxios.get(
      `/ai/reddit?query=${params.query}&planId=${params.planId}&channelId=${params.channelId}`
    );
    return data;
  }

  public async getAcademic(params: Ai): Promise<AiRespons> {
    const { data } = await planaiAxios.get(
      `/ai/academic?query=${params.query}&planId=${params.planId}&channelId=${params.channelId}`
    );
    return data;
  }
}

class AiGetRepositoryImpl implements AiGetRepository {
  public async getPlanChat(planId: number): Promise<{ data: string[] }> {
    const { data } = await planaiAxios.get(`/ai/plan-chat?planId=${planId}`);
    return data;
  }

  public async getChat(chatId: number): Promise<{ data: [[]] }> {
    const { data } = await planaiAxios.get(`/ai/chat?chatId=${chatId}`);
    return data;
  }
}

const aiSearchRepositoryImpl = new AiSearchRepositoryImpl();
const aiGetRepositoryImpl = new AiGetRepositoryImpl();

export { aiSearchRepositoryImpl, aiGetRepositoryImpl };