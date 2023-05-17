const express = require('express');
// Import do Framework Express ^

const server = express();
//Ela cria uma instância de um servidor HTTP utilizando o framework Node.js chamado Express

server.use(express.json());

const cursos = ['FullStack Java', 'Desenvolvimento Mobile', 'Desenvolvimento Front End'];

// CRUD ---> Create, Read, Update and Delete
// CRUD ---> Criar, Ler, Atualizar e Deletar

// Retorna um curso
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
});

//Retornar todos os cursos
server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

//Criar um novo curso
server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);


    return res.json(cursos);
});

//Atualizar um curso
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});

// Deletar um curso
server.delete('/cursos/:index', (req, res) =>{
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({ message: "O curso foi deletado"});
})










server.listen(3000);
// é utilizada para iniciar o servidor e fazê-lo escutar em uma porta específica, neste caso, a porta 3000.