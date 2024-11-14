import { useState, useEffect } from "react";
import planaiAxios from "src/libs/axios/customAxios";
import { TextWriteStore } from "src/store/write/text.store";

type NowPage = {
  id: number;
  title: string;
};

const UseBottomBar = () => {
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
        setNow(res.data.data);
        if (now.length >= 7) {
          alert("가능한 페이지 수가 다 찼습니다!");
          return;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    NowPage();
  }, [now.map((item) => item.id).join(",")]);

  return {
    onclick,
    message,
    now,
    PostPage,
    NowPage,
  };
};

export default UseBottomBar;
