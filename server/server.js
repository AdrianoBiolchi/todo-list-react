const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const TaskRoutes = require('./routes/Task');
const mongoose = require('mongoose');
const config = require('./config/keys.config.js');


app.use(bodyParser.json());
app.use('/api/tasks', TaskRoutes);

mongoose.connect(config.mongodbUri, { useNewUrlParser: true })
  .then(() => console.log('Database conectada'))
  .catch((err) => console.log('Erro ao se conectar a database', err));
mongoose.set('useFindAndModify', false);


const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log('Server rodando na porta ' + port);
});