import React, { useState } from 'react';
import './Editor.css';

const Editor = () => {
  const [image, setImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [outputFormat, setOutputFormat] = useState('JPG');
  const [inputFormat, setInputFormat] = useState('PNG');
  const [imageSize, setImageSize] = useState({ width: 0, height: 0, size: 0 });
  const [outputSize, setOutputSize] = useState({ width: 0, height: 0, size: 0 });
  const [imageFile, setImageFile] = useState(null); // Збереження об’єкта файлу для сервера

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Зберігаємо файл для серверного запиту

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);

      const format = file.type.split('/')[1].toUpperCase();
      setInputFormat(format);

      const img = new Image();
      img.onload = () => {
        setImageSize({ width: img.width, height: img.height, size: file.size });
      };
      img.src = reader.result;
    }
  };

  const handleConvert = async () => {
    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile); // Додаємо файл зображення
      formData.append('format', outputFormat.toLowerCase()); // Додаємо бажаний формат

      try {
        const response = await fetch('http://localhost:5000/convert-image', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setOutputImage(url);
          const newImageSize = blob.size;

          setOutputSize({
            width: imageSize.width,
            height: imageSize.height,
            size: newImageSize,
          });
        } else {
          console.error('Conversion failed:', await response.json());
        }
      } catch (error) {
        console.error('Error converting image:', error);
      }
    }
  };

  const handleDownload = () => {
    if (outputImage) {
      const link = document.createElement('a');
      link.href = outputImage;
      link.download = `converted_image.${outputFormat.toLowerCase()}`;
      link.click();
    }
  };

  return (
    <div className="editor-container">
      <div className="editor-panel">
        <h2>Конвертація</h2>

        <div className="format-selection">
          <div className="format-label">Ваш Формат</div>
          <input type="text" value={inputFormat} readOnly className="format-input" />

          <div className="format-label">В</div>
          <select
            className="format-select"
            value={outputFormat}
            onChange={(e) => setOutputFormat(e.target.value)}
          >
            <option>JPG</option>
            <option>PNG</option>
            <option>WEBP</option>
          </select>
        </div>

        <button className="convert-button" onClick={handleConvert}>
          Конвертувати
        </button>

        <div className="image-info">
          <div className="info-row">
            <span className="info-label">Початкове</span>
            <span className="info-details">
              {imageSize.width} x {imageSize.height} | {Math.round(imageSize.size / 1024)} Кб | {inputFormat}
            </span>
          </div>
          <div className="info-row">
            <span className="info-label">Кінцеве</span>
            <span className="info-details">
              {outputSize.width} x {outputSize.height} | {Math.round(outputSize.size / 1024)} Кб | {outputFormat}
            </span>
          </div>
        </div>
      </div>

      <div className="image-display">
        <div className="image-placeholder">
          {image ? (
            <img src={image} alt="Selected" className="image" />
          ) : (
            <p>Будь ласка, завантажте зображення</p>
          )}
        </div>
        <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
        <button className="download-button" onClick={handleDownload}>
          Завантажити
        </button>
      </div>
    </div>
  );
};

export default Editor;
