import React from 'react';
import './About.css';

const About = () => (
    <div className="about-page">
        <p className="highlight-text">Ми молода компанія, яка спеціалізується на розробці додатків та сайтів, призначених для редактування фото та відео.</p>

        <p className="section-title">Наші напрацювання:</p>
        <p>
            <span className="first-word">Image</span> <span className="second-word">Editor</span> - сайт призначений для зміни форматів зображень
        </p>

        <footer className="support-section">
            <p className="section-title">Технічна підтримка: </p>
            <a href="mailto:mrdarklord56@gmail.com" className="email-link">mrdarklord56@gmail.com</a>
        </footer>
    </div>
);

export default About;
