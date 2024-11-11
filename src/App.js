import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header/Header';
import AppRoutes from './Routes/AppRoutes';  
import Login from './Pages/0.5_Auth/Login';  
import Register from './Pages/0.5_Auth/Register';  

// Імпортуємо наші хуки
import useLoginModal from './Hooks/useLoginModal';
import useRegisterModal from './Hooks/useRegisterModal';

function App() {
  // Використовуємо хуки для керування модальними вікнами
  const { isLoginOpen, openLoginModal, closeLoginModal } = useLoginModal();
  const { isRegisterOpen, openRegisterModal, closeRegisterModal } = useRegisterModal();

  return (
    <Router>
      <div className="App">
        <Header />
        {/* Передаємо функції openLoginModal і openRegisterModal в AppRoutes */}
        <AppRoutes openLogin={openLoginModal} openRegister={openRegisterModal} />
        {/* Модалки входу та реєстрації */}
        <Login isOpen={isLoginOpen} onClose={closeLoginModal} />
        <Register isOpen={isRegisterOpen} onClose={closeRegisterModal} />
      </div>
    </Router>
  );
}

export default App;
