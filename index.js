const express = require('express');
const cors = require('cors');
const app = require('./src/app'); // Aquí es donde importas app.js
const port = process.env.PORT || 3000;

app.use(cors({
    origin: ['https://spontaneous-salamander-a129ea.netlify.app', 'http://127.0.0.1:5173']
}));

app.listen(port, ()=> console.log(`El servidor esta funcionando y escucha en el puerto ${port}`));