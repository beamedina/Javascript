const express = require('express');
const colecaoUf = require('./dados/dados.js');

const buscarUfPorNome = (nomeUf) => {
    return colecaoUf.filter(uf => uf.nome.ToLowerCase().includes(nomeUf.ToLowerCase()));
};

const app = express();
app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfPorNome(nomeUf) : colecaoUf ;
    if (resultado.length > 0){
        res.json(resultado);
    } else {
        res.status(404).send({"erro": "nenhuma UF encontra"});
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = parseInt(req.params.iduf);
    let mensagemErro= '';
    let uf;
    
    if (!(isNaN(idUF))){
        uf = colecaoUf.colecaoUf.find(itens => itens.id === idUF)
        if (!uf){
            mensagemErro = 'UF não encontrada';
        }
    } else{
        mensagemErro = 'Requisição inválida'
    }
    if (uf){
        res.json(uf);
    } else{
        res.status(404).json({"erro": mensagemErro})
    }
    
    

 });



app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080')
});