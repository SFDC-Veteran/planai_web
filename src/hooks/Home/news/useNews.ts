import React, { useState } from 'react';
import { useGetSearchNewsMutation } from 'src/query/Home/news/news.query';
import {  NewsResponse } from 'src/types/Home/news/news.type';

const useNews = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [news, setNews] = useState<NewsResponse>();

  const handlekKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const getSearchNewsMutation = useGetSearchNewsMutation();
  const getSearchNews = async (keyword: string) => {
    getSearchNewsMutation.mutate(keyword, {
      onSuccess: (res) => {
        setNews(res);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return {
    keyword,
    news,
    handlekKeyword,
    getSearchNews,
  };
};

export default useNews;
