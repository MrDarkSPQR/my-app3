import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Register from '../0.5_Auth/Register'; // Імпортуємо компонент Register
import Login from '../0.5_Auth/Login'; // Імпортуємо компонент Login
import useRegisterModal from '../../Hooks/useRegisterModal';  // Імпортуємо хук для реєстрації
import useLoginModal from '../../Hooks/useLoginModal'; // Імпортуємо хук для авторизації

const HomePages = () => {
  const navigate = useNavigate();
  // Використовуємо хук для відкриття/закриття модалки реєстрації
  const { isRegisterOpen, openRegisterModal, closeRegisterModal } = useRegisterModal();
  // Використовуємо хук для відкриття/закриття модалки авторизації
  const { isLoginOpen, openLoginModal, closeLoginModal } = useLoginModal();

  const handleNavigateToEditor = () => {
    navigate('/editor'); 
  };

  return (
    <div className="container">
      <h1>
        <span className="green-text">Image</span>
        <span className="orange-text">Editor</span>
      </h1>
      <button className="select-image" onClick={handleNavigateToEditor}>
        Почати
      </button>

      <div className="auth-buttons">
        <button className="login" onClick={openLoginModal}>Увійти</button>
        <button className="register" onClick={openRegisterModal}>Зареєструватись</button>
      </div>

      <Register isOpen={isRegisterOpen} onClose={closeRegisterModal} />
      <Login isOpen={isLoginOpen} onClose={closeLoginModal} />
    </div>
  );
};

export default HomePages;
