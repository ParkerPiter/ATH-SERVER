const express = require('express');

const app = require('./src/app'); // Aquí es donde importas app.js
const port = process.env.PORT || 3000;



app.listen(port, ()=> console.log(`El servidor esta funcionando y escucha en el puerto ${port}`));