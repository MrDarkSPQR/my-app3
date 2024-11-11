import { useState } from 'react';

const useRegisterModal = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegisterModal = () => setIsRegisterOpen(true);
  const closeRegisterModal = () => setIsRegisterOpen(false);

  return {
    isRegisterOpen,
    openRegisterModal,
    closeRegisterModal
  };
};

export default useRegisterModal;
