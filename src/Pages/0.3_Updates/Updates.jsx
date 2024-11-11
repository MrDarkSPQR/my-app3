// Updates.js
import React, { useState } from 'react';
import './Updates.css';

const Updates = () => {
    // Створюємо стан для керування відображенням детальної інформації
    const [isExpanded, setIsExpanded] = useState(false);

    // Функція для обробки натискання на кнопку
    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="updates-container">
            <div className="update-item">
                <div className="update-info">
                    <span className="version">V 0.0.1</span>
                    <span className="date">21.12.2012</span>
                    <span className="update-description">Оновлення інтерфейсу</span>
                </div>
                <button className="expand-btn" onClick={handleExpandClick}>
                    {isExpanded ? 'Згорнути' : 'Розгорнути'}
                </button>
            </div>

            {isExpanded && (
                <div className="expanded-info">
                    Тут поки що нічого немає.
                </div>
            )}
        </div>
    );
};

export default Updates;
