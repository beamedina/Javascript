class Imovel {
    quartos;
    tipo;
    endereco;

    exibirInformacoes() {
        return `O imóvel é do tipo ${this.tipo}, tem ${this.quartos} quartos e está localizado no endereço ${this.endereco}`
    }

}

const casa = new Imovel();
casa.tipo = 'Casa';
casa.quartos = 4;
casa.endereco = 'Rua da Amizade, 789 - Bairro Alegre';

const apartamento = new Imovel();
apartamento.quartos = 2;
apartamento.tipo = 'Apartamento';
apartamento.endereco = 'Avenida da Paz, 123 - Centro';

console.log(casa.exibirInformacoes())
console.log(apartamento.exibirInformacoes())