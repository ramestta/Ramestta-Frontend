// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the pathname changes
    document.getElementById('root')?.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
