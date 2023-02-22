const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
// const userRouter = require('./routes/users');

app.use('/', indexRouter);

// app.use('/users', userRouter);

app.listen(port, () => console.log(`Servidor funcionando en el puerto ${port}!`));