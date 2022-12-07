const URL = "http://localhost:3000";

export default class RequestsServices{
   async saveNewRequest(product){
    let saveNewRequest =  await fetch(`${URL}/pedido`,{
        method:"POST",
        headers:{'Content-type': "application/json"},
        body: JSON.stringify(product)
    }).then(response =>{
        if(response.ok){
            return response.json().then(jsonData =>{
                return jsonData
            })
        }
        throw new Error("Erro ao salvar pedido!")
    }).catch(err =>{
        alertify.error(err.message);
    })
   }

   async allRequest(){
    const response = await fetch(`${URL}/pedido/todos`,{
        method:"GET",
        headers:{'Content-type': "application/json"}
    })

    const data = await response.json();
    
    let allRequest = data.map(values =>{
        return values
    })
    
    return allRequest
   }

   async changeStatus(id,status) {
    let response = await fetch(`${URL}/pedido/${id}/mudar-status`,{
        method:"POST",
        headers:{'Content-type': "application/json"},
        body:JSON.stringify(status)
    }).then(response =>{
        if(response.ok){
            return response.json().then(jsonData =>{
                return jsonData
            })
        }
    })
   }

   async deleteRequest(id){
    let response = await fetch(`${URL}/pedido/${id}/deletar`,{
        method:"POST",
        headers:{'Content-type': "application/json"}
    }).then(response =>{
        if(response.ok){
            alertify.success("pedido Excluido!")
            return response.json().then(jsonData =>{
                return jsonData
            })
        }
        throw new Error("Erro ao excluir pedido!")
    }).catch(err =>{
        alertify.error(err.message)
    })
   }
}