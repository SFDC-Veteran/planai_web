export interface Ai {
  query: string;
  planId: number;
  channelId: string;
}

export interface AiRespons {
  data: {
    question: string;
    message: string;
    source: Source[];
    chatId: string;
  };
}

export interface Source {
  pageContent: string;
  metadata: {
    title: string;
    url: string;
  };
}
