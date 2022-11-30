const URL = "http://localhost:3000"

export default class ProductServices{
  async saveProduct(product){
    let response = await fetch(`${URL}/produto`,{
        method:'POST',
        headers:{'Content-type': "application/json"},
        body:JSON.stringify(product)
    }).then(response =>{
        if(response.ok){ 
            return alert("Produto cadastrado!")         
        }
        throw new Error("Produto já cadastrado!")
    }).catch(err =>{
        alert(err.message)
    })
    }

    async atualizarProduct(id,product){
    let response = await fetch(`${URL}/produto/${id}/atualizar`,{
        method:"POST",
        headers:{'Content-type': "application/json"},
        body: JSON.stringify(product)
    })
    if(response.ok){
        let data = await response.json()
        return data;
    }
        return await response.text()
    }

    async deleteProduct(id){
        let response = await fetch(`${URL}/produto/${id}/deletar`,{
            method:"POST"
        })
        if(response.ok()){
            await response.text()
        } else{
            console.log(response.text())
        }
    }

    async getAllProducts(){
        let response = await fetch(`${URL}/produtos/todos`,{
            method:"GET",
            headers:{'Content-type': "application/json"}
        }).then(response =>{
            return response.json().then(jsonData =>{
                return  jsonData;
            })
        })
        if(response.ok()){
            await response.text()
        } else{
            console.log(response.text())
        }
    }

    async getProductForId(id){
        let response = await fetch(`${URL}/produto/${id}`,{
            method:"GET",
            headers:{'Content-type': "application/json"}
        }).then(response =>{
            return response.json().then(jsonData =>{
                return jsonData
            })
        })
    }
}