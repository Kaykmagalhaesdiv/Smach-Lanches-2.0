const URL = "http://localhost:3000"
import { loader,btnAddProduct,inputQuantidade} from "../variable/variables.mjs"

export default class ProductServices{
  async saveProduct(product){
    let response = await fetch(`${URL}/produto`,{
        method:'POST',
        headers:{'Content-type': "application/json"},
        body:JSON.stringify(product)
    }).then(async response =>{
        loader.removeAttribute("hidden");
        await new Promise((resolve,rejected) =>{
            setTimeout(() =>{
                if(response.ok){
                    resolve() 
                    loader.setAttribute("hidden",'true');
                    return alertify.success('Produto cadastrado!');         
                }
                rejected(new Error("Produto já cadastrado!"))
            },2000)
        })
        
    }).catch(err =>{
        loader.setAttribute("hidden",'true');
        alertify.error(err.message);
    })
    }

    async atualizarProduct(id,product){
    let response = await fetch(`${URL}/produto/${id}/atualizar`,{
        method:'POST',
        headers:{'Content-type': "application/json"},
        body: JSON.stringify(product)
    }).then(response =>{
        if(response.ok){
            alertify.success("Produto Atualizado com sucesso!")
            return response.json().then(jsonData =>{
                return jsonData
            })
        }
        throw new Error("Erro ao atualizar o produto!")
    }).catch(err =>{
        alertify.error(err.message)
    })
    }

    async deleteProduct(id){
        let response = await fetch(`${URL}/produto/${id}/deletar`,{
            method:"POST"
        }).then(response =>{
            if(response.ok){
                alertify.success("Produto excluido com sucesso!")
                return response.json().then(jsonData =>{
                    return jsonData
                })
            }
            throw new Error("Ocorreu um erro ao excluir o produto!")
        }).catch(err =>{
            alertify.error(err.message)
        })
    }

    async getAllProducts(){
        const response = await fetch(`${URL}/produto/todos`,{
            method:"GET",
            headers:{'Content-type': "application/json"}
        })

        const data = await response.json();
        
        let allProducts = data.map(values =>{
            return values
        })
        
        return allProducts
    }

    async getProductForId(id){
        const productForId = await fetch(`${URL}/produto/${id}`,{
            method:"GET",
            headers:{'Content-type': "application/json"}
        })

        if(!productForId.ok){
            alertify.error('Produto não encontrado!');
        }else{
            inputQuantidade.removeAttribute("disabled")
            alertify.success("Produto encontrado!")
        }
        const dataId = await productForId.json();
       
        let productsId = dataId.map(elements =>{
            return elements
        })

        return productsId;
    }
}