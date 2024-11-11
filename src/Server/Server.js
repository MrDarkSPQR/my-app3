const express = require('express');
const sharp = require('sharp');  // Для роботи з зображеннями
const multer = require('multer'); // Для завантаження файлів
const app = express();
const cors = require('cors'); 
const port = 5000;

const upload = multer({ storage: multer.memoryStorage() });

app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [];

app.post('/register', (req, res) => {
  const { email, login, password } = req.body;
  const existingUser = users.find(user => user.email === email || user.login === login);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  const newUser = { email, login, password };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/login', (req, res) => {
  const { login, password } = req.body;
  const user = users.find(user => user.login === login && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid login or password' });
  }
  res.status(200).json({ message: 'Login successful' });
});

app.post('/convert-image', upload.single('image'), (req, res) => {
  const format = req.body.format; 
  const supportedFormats = ['jpeg', 'png', 'webp'];

  if (!supportedFormats.includes(format)) {
    return res.status(400).json({ message: 'Unsupported format' });
  }

  sharp(req.file.buffer)
    .toFormat(format)
    .toBuffer()
    .then((data) => {
      res.set('Content-Type', `image/${format}`);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error processing image', error: err.message });
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
