import React, { useState, useEffect } from "react";
import { PlanButton } from "src/components/common/bottombar/style";
import planaiAxios from "src/libs/axios/customAxios";
import { TextWriteStore } from "src/store/write/text.store";
import { PageData, TextType } from "src/types/write/page.type";

interface Props {
  pageId: number;
}
const UseWrite = ({ pageId }: Props) => {
  const [patch, setPatch] = useState();
  const [pagedata, setPageData] = useState<PageData>({ id: 0, title: "", description: "", userId: "" });
  const storeSetTitle = TextWriteStore((state) => state.setTitle);
  const storeSetDes = TextWriteStore((state) => state.setDescription);
  const storeTitle = TextWriteStore((state) => state.title);
  const storeDes = TextWriteStore((state) => state.description);

  const PatchPage = async () => {
    await planaiAxios
      .patch("/plan/update", {
        planId: pageId,
        title: storeTitle,
        description: storeDes,
      })
      .then((res) => {
        setPatch(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const GetPage = async () => {
    await planaiAxios
      .get(`/plan/single/${pageId}`)
      .then((res) => {
        setPageData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    PatchPage();
  }, [storeDes, storeTitle]);

  

  return { GetPage, PatchPage, pagedata, patch, storeSetDes, storeSetTitle, storeTitle };
};

export default UseWrite;
