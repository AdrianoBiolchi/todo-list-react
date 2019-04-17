const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const TaskRoutes = require('./routes/Task');


app.use(bodyParser.json());
app.use('/api/tasks', TaskRoutes);


const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log('Server rodando na porta ' + port);
});