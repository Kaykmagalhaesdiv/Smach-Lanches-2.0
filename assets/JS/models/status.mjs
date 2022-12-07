export default class Status{
    status = ""
    constructor(status){
        this.status = status
    }

    mudarStatus(){
        if(this.status == "Recebido"){
            this.status = "Pronto"
        }else if(this.status == "Pronto"){
            this.status = "Entregue"
        }
    }
}