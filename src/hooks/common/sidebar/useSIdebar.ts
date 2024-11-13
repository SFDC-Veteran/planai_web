import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavigationProps } from 'src/types/common/sidebar/sidebar.type';

const useSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [item, setItem] = useState<string>('홈');
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [writeItem, setWriteItem] = useState<string>('서비스 비교');

  const handleIsClicked = () => {
    setIsClicked((prev) => !prev);
  };
  
  const HandleNavigation = ({ location, navigate }: NavigationProps) => {
    switch (location.pathname) {
      case '/':
        setItem('홈');
        break;
      case '/write':
        setItem('작성');
        break;
      case '/news':
        setItem('뉴스');
      default:
        setItem('');
        break;
    }
  };

  const HandleCategoryClick = (itemName: string) => {
    setItem(itemName);
    switch (itemName) {
      case '홈':
        navigate('/');
        break;
      case '작성':
        navigate('/write');
        break;
      case '뉴스':
        navigate('/news');
        break;
      default:
        navigate('');
    }
  };

  useEffect(() => {
    HandleNavigation({ location, navigate });
  }, [location.pathname]);

  return {
    item,
    isVisible,
    isClicked,
    writeItem,
    setWriteItem,
    setItem,
    setIsVisible,
    handleIsClicked
    HandleCategoryClick
  };
};

export default useSidebar;
