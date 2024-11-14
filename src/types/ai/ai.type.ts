export interface Ai {
  query: string;
  planId: number;
  chatId?: string;
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
