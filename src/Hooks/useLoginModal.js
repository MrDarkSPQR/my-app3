import { useState } from 'react';

const useLoginModal = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  return {
    isLoginOpen,
    openLoginModal,
    closeLoginModal
  };
};

export default useLoginModal;
