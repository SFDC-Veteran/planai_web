import { useState } from 'react';

const useSidebar = () => {
  const [item, setItem] = useState<string>('홈');
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleIsClicked = () => {
    setIsClicked((prev) => !prev);
  };

  return {
    item,
    isVisible,
    isClicked,
    setItem,
    setIsVisible,
    handleIsClicked
  };
};

export default useSidebar;
