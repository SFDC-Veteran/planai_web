import { useRef, useState, useEffect } from "react";
import Page from "src/assets/images/common/bottombar/page.png";
import Select from "src/assets/images/common/bottombar/selectpage.png";
import { PageType } from "src/types/common/bottomBar/bottom.type";

const UseBottomBar = () => {
  const [onclick, setOnClick] = useState<number>(0);
  const [page, setPage] = useState<PageType[]>(() => {
    const savedPages = localStorage.getItem("pages");
    return savedPages ? JSON.parse(savedPages) : [];
  });

  useEffect(() => {
    localStorage.setItem("pages", JSON.stringify(page));
    // localStorage.removeItem("pages"); 아이템 삭제 할때 
  }, [page]);

  const PlusPage = () => {
    if (page.length > 5) return;

    const newPage: PageType = {
      id: page.length + 1,
      Page: `${Page}`,
      Select: `${Select}`,
    };

    setPage((prev) => [...prev, newPage]);
  };
  return {
    setOnClick,
    onclick,
    PlusPage,
    page,
  };
};

export default UseBottomBar;
