import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePages from '../Pages/0.1_Home/Home';  // Ваш компонент домашньої сторінки
import Editor from '../Pages/0.2_Editor/Editor';
import Updates from '../Pages/0.3_Updates/Updates';
import About from '../Pages/0.4_About/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />  {/* Тепер без пропсів openLogin та openRegister */}
      <Route path="/editor" element={<Editor />} />
      <Route path="/updates" element={<Updates />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
