class Veiculo{
    marca;
    modelo;
    ano;

    exibirDetalhes(){
        return `O veículo é da marca ${this.marca}, do modelo ${this.modelo}, fabricado em ${this.ano}.`
    }

}

const carro = new Veiculo();
carro.marca = 'Toyota';
carro.modelo = 'Corolla';
carro.ano = 2022;

const motocicleta =  new Veiculo();
motocicleta.marca = 'Honda';
motocicleta.modelo = 'CBR 600RR';
motocicleta.ano = 2021;

console.log(carro.exibirDetalhes());
console.log(motocicleta.exibirDetalhes());