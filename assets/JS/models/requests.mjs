export default class Requests{
    id = 0;
    tipo;
    produtos = [];
    
    constructor(id,tipo,produtos){
        this.id = id;
        this.tipo = tipo;
        this.produtos = produtos;
    }
}
