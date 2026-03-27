const AnimaisModel =  require('../models/animaisModel');

module.exports = {
    exibirLista(req, res){
        const animais = AnimaisModel.listar();
        res.render('listaAnimais', {animais}); 
    },
    exibirAdicionarAnimal(req, res){
       res.render('adicionarAnimal');
    },
    adicionarAnimal(req, res){
         const novoAnimal = {
            especie: req.body.especie,
            vacinado: false
        };
        AnimaisModel.adicionar(novoAnimal);
        res.redirect('/');
    },
    exibirEdicao(req, res){
        const {id} = req.params;
        const animal = AnimaisModel.listar().find((a) => a.id == id);
        res.render('editaAnimal', {animal});
    },
    editarAnimal(req, res){
        const {id} = req.params;
        AnimaisModel.editar(id, req.body);
        res.redirect('/');
    },
    excluirAnimal(req, res){
        const {id} = req.params;
        AnimaisModel.excluir(id);
        res.redirect('/');
    }
};