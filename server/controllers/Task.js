const Task = require('../models/Task');

module.exports = {
    add: function(req, res){
        let task = new Task(req.body);

        task.save()
            .then(task => res.status(200).json(task))
            .catch(err => {
                res.status(400).send("Ocorreu um erro ao adicionar um nova Task", err)
            });
    },


    //O método find pode receber como primeiro parâmetro uma query de 
    //busca, caso não receba, que é o caso acima, ele retorna todas as tasks.

    getAll: function (req, res) {
        Task.find(function (err, tasks) {
          if (err) {
            res.status(400).send("Ocorreu um erro ao buscar as Task's");
          }
          else {
            res.status(200).json(tasks);
          }
        });
      },


      //O método findById recebe como primeiro parâmetro um id, 
      //retornando apenas a task com aquele id específico.
      getById: function (req, res) {
        Task.findById(req.params.id, function (err, task) {
            if (err) {
                res.status(400).send("There's was an error while retrieving this task " + err);
            }
            else {
                res.status(200).json(task);
            }
        })
    },


    //Através do comando findByIdAndRemove nós podemos pesquisar uma Task apenas
    // passando como parâmetro um id e caso for encontrada a deletar. 
    delete: function (req, res) {
        Task.findByIdAndRemove(req.paramas.id, function (err, tasks) {
          if (err) {
            res.status(400).send("There's was an error while deleting the task", err);
          }
          else {
            res.status(200).json(req.params.id);
          }
        });
      },



      //Aqui utilizaremos o mesmo conceito do método para deletar uma Task,
      // só que desta vez passaremos como segundo argumento o req.body que
      // irá conter toda a estrutura da Task modificada e enviada pelo cliente.
      update: function (req, res) {
        Task.findByIdAndUpdate(req.params.id, req.body, { new: true}, function (err, task) {
          if (err) {
            res.status(400).send("There's was an error while updating the task", err);
          }
          else {
            res.status(200).json(task);
          }
        });
      },

    
};