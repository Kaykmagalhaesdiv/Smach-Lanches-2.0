import { viwNewProduct,productServices} from "../script.js";
import { tableBody } from "../variable/variables.mjs";

export const updateProduct = async (id,product) =>{
    await productServices.atualizarProduct(id,product);
  }
  
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

