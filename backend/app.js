// Punto #1 - Nestor Cabrera - Gopenux

const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

app.get('/date', (req, res) => {
    const currentDate = new Date();
    res.json({ date: currentDate.toISOString() });
});

app.listen(port, () => {
    console.log(`Estoy Listo! Trabajando en: http://localhost:${port}`);
});
