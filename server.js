const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const animaisController = require('./controllers/animaisController');

const app = express();
app.engine('handlebars', exphbs.engine({
defaultLayout: 'layout', // Define layout padrão como "layout.handlebars"
layoutsDir: __dirname + '/views/' // Ajusta o diretório de layouts
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rotas
app.get('/', animaisController.exibirLista);
app.get('/animais/adicionar', animaisController.exibirAdicionarAnimal);
app.post('/animais', animaisController.adicionarAnimal);
app.get('/animais/:id/editar', animaisController.exibirEdicao);
app.post('/animais/:id/editar', animaisController.editarAnimal);
app.get('/animais/:id/excluir', animaisController.excluirAnimal);

// Iniciar o servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});