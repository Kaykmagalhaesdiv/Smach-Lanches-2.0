export default class Product{
    id;
    nome;
    preco;

    constructor(id,name,price){
        this.id = Number.parseInt(id);
        this.nome = name;
        this.preco = Number.parseFloat(price)
    }
}