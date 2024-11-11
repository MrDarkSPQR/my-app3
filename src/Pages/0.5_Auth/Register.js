import React, { useState } from 'react';
import './Auth.css';

const Register = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // Якщо модальне вікно не відкрите, не рендеримо компонент
    if (!isOpen) return null;

    const handleRegister = async () => {
        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, login, password }),
            });
            const result = await response.json();
            
            alert(result.message);  // Показуємо повідомлення
            onClose();  // Закриваємо модальне вікно після успішної реєстрації
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Реєстрація</h2>
                <input
                    type="email"
                    placeholder="Email"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
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
                <button className="register-button" onClick={handleRegister}>Зареєструватися</button>
            </div>
        </div>
    );
};

export default Register;
