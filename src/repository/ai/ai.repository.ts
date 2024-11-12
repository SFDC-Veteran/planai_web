import { Ai, AiRespons } from 'src/types/ai/ai.type';

export interface AiSearchRepository {
  getYoutube(params: Ai): Promise<AiRespons>;
  getWrite(params: Ai): Promise<AiRespons>;
  getWolfram(params: Ai): Promise<AiRespons>;
  getWeb(params: Ai): Promise<AiRespons>;
  getReddit(params: Ai): Promise<AiRespons>;
  getAcademic(params: Ai): Promise<AiRespons>;
}

export interface AiGetRepository {
  getPlanChat(planId: number): Promise<{ data: string[] }>;
  getChat(chatId: number): Promise<{ data: [[]] }>;
}
