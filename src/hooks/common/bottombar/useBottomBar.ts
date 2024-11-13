import { useState, useEffect } from "react";
import Page from "src/assets/images/common/bottombar/page.png";
import Select from "src/assets/images/common/bottombar/selectpage.png";
import { PageType } from "src/types/common/bottomBar/bottom.type";
import planaiAxios from "src/libs/axios/customAxios";
import { TextWriteStore } from "src/store/write/text.store";

type NowPage = {
  data: [
    {
      id: number;
      title: string;
    }
  ];
};

const UseBottomBar = () => {
  const [onclick, setOnClick] = useState<number>(0);
  const [now, setNow] = useState<NowPage[]>([]);
  const [message, setMessage] = useState("");
  const storeTitle = TextWriteStore((state) => state.title);
  const storeDes = TextWriteStore((state) => state.description);

  const PostPage = async () => {
    await planaiAxios
      .post("/plan/save", {
        title: storeTitle,
        description: storeDes,
      })
      .then((res) => {
        if (res.status === 200) {
          setMessage(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const NowPage = async () => {
    await planaiAxios
      .get("/plan/all")
      .then((res) => {
        setNow(res.data);
        console.log("nowdata", now);
      })
      .catch((err) => {
        console.error(err);
      });
  };


  return {
    setOnClick,
    onclick,
    message,
    now,
    PostPage,
    NowPage,
  };
};

export default UseBottomBar;
