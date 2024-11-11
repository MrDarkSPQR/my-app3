import React, { useState } from 'react';
import './Auth.css';

const Login = ({ isOpen, onClose }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ login, password }),
            });
            const result = await response.json();
            alert(result.message);
            onClose();  // Закриваємо модальне вікно після успішного логіну
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Авторизація</h2>
                <input
                    type="text"
                    placeholder="Логін"
                    className="input-field"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    className="input-field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" onClick={handleLogin}>Увійти</button>
            </div>
        </div>
    );
};

export default Login;
