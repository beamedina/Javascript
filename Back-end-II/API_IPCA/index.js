import express from 'express';
import historicoInflacao from './dados/dados.js';
import {buscarIPCAPorAno, buscarIPCAPorid} from './servico/servico.js';


const app = express();

app.get('/historicoIPCA', (req, res) => {
    res.json(historicoInflacao);
});

app.get('/historicoIPCA', (req, res) =>{
    const ano = buscarIPCAPorAno(req.query.ano);
    if (ano){
        res.json(ano)
    } else if(isNaN(parseInt(req.query.ano))){
        res.status(400).send({'erro': 'requisição inválida'})
    } else{
        res.status(404).send({ "erro": 'Ano não encontrado' })
    };
});

app.get('/historicoiPCA/:id', (req, res) => {
    const i = buscarIPCAPorid(req.params.id);

    if (i) {
        res.json(i);
    } else if (isNaN(parseInt(req.params.id))) {
        res.status(400).send({ "erro": 'Requisição inválida' })
    } else {
        res.status(404).send({ "erro": 'UF não encontrada' })
    }    
});



app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
});