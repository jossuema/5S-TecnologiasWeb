const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require('./routes/prendas'));
app.use(require('./routes/marcas'));
app.use(require('./routes/categorias'));

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

module.exports = app;