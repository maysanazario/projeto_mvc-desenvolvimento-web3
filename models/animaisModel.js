let animais = [
    //Animais de estimação — nome, espécie, vacinado (sim/não)

    { id: 1, especie: "Pug", vacinado: true },
    { id: 2, especie: "Pastor Alemão", vacinado: false },
    { id: 3, especie: "Shih Tzu", vacinado: true },
    { id: 4, especie: "Labrador", vacinado: false }
];

module.exports = {
    listar() {
        return animais;
    },
    adicionar(animal) {
        animal.id = animais.length + 1;
        animais.push(animal);
    },
    editar(id, dados) {
        const animal = animais.find((a) => a.id == id);
        if (animal) {
            animal.especie = dados.especie;
            animal.vacinado = dados.vacinado === 'on'? true : false;
        }
    },
    excluir(id) {
        animais = animais.filter((a) => a.id != id);
    }
};