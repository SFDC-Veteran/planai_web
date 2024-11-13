import React, { useState, useEffect } from "react";
import { PlanButton } from "src/components/common/bottombar/style";
import planaiAxios from "src/libs/axios/customAxios";
import { TextWriteStore } from "src/store/write/text.store";


const UseWrite = () => {
  const [onclick, setOnClick] = useState<number>(0);
  const [patch, setPatch] = useState();

  const storeSetTitle = TextWriteStore((state) => state.setTitle);
  const storeSetDes = TextWriteStore((state) => state.setDescription);
  const storeTitle = TextWriteStore((state) => state.title);
  const storeDes = TextWriteStore((state) => state.description);

  const PatchPage = async () => {
    await planaiAxios
      .patch("/plan/update", {
        planId: onclick,
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



  return {PatchPage,  patch, storeSetDes, storeSetTitle, storeTitle, storeDes, setOnClick, onclick };
};

export default UseWrite;
