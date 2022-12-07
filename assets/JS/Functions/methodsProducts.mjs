import { viwNewProduct,productServices} from "../script.js";
import { tableBody,inputCodProduct,inputNameProduct,inputPriceProduct,btnSaveProduct,btnCancelProduct,inputProduct,inputPrice} from "../variable/variables.mjs";
import Product from "../models/products.mjs";

export let updateProductBoolean = false;
export const updateProduct = async (id) =>{ /*Responsible for updating the products! */
    let linha = document.querySelector(`#produto_${id}`)
    let colunas = linha.querySelectorAll("td")
    let price = colunas[2].innerText.replace("R$","")
    updateProductBoolean = true;
    inputCodProduct.value = colunas[0].innerText;
    inputNameProduct.value = colunas[1].innerText
    inputPriceProduct.value = Number.parseInt(price);
    linha.remove()

    btnSaveProduct.classList.replace("btn-inactive", "btn-active")
    btnSaveProduct.removeAttribute("disabled","true")
    btnCancelProduct.removeAttribute("hidden", "true");

}
btnSaveProduct.addEventListener("click", async () => {  /*button event responsible for saving products or updating products! */
    tableBody.innerHTML = '';
    let valueCodeProduct = inputCodProduct.value
    let valueNameProduct = inputNameProduct.value
    let valuePriceProduct = inputPriceProduct.value
  
    if(updateProductBoolean == false){
      btnSaveProduct.disabled = true;
      btnSaveProduct.classList.replace("btn-active", "btn-inactive")
      btnCancelProduct.setAttribute("hidden", "true");
      const newProduct = new Product(valueCodeProduct, valueNameProduct, valuePriceProduct)
      await saveProduct(newProduct)
    }else{
      const newProduct = new Product(valueCodeProduct, valueNameProduct, valuePriceProduct)
      productServices.atualizarProduct(valueCodeProduct,newProduct);
      btnSaveProduct.classList.replace("btn-active", "btn-inactive")
      btnCancelProduct.setAttribute("hidden", "true");
      updateProductBoolean = false;
    }
    inputCodProduct.value = ""
    inputNameProduct.value = ""
    inputPriceProduct.value = ""
    getAllProducts()
})

export const deleteProducts = async (id) =>{
  tableBody.innerHTML = ''
  productServices.deleteProduct(id)
  let productsAll = await productServices.getAllProducts()
  viwNewProduct(productsAll)
  }

export const saveProduct = async (product)  =>{
  await productServices.saveProduct(product)
  }

export const getAllProducts = async() =>{
   let productsAll =  await productServices.getAllProducts()
    viwNewProduct(productsAll)
}

export const getProductsForId  = async (id) =>{
  let productForId  = await productServices.getProductForId(id);
  let viewProductsIds = productForId.forEach(values =>{
    inputProduct.value = values.nome;
    inputPrice.value = values.preco;
  })
}

