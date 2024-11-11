import { useLocation } from 'react-router-dom';

const useActivePage = (path) => {
  const location = useLocation();
  return location.pathname === path;
};

export default useActivePage;
