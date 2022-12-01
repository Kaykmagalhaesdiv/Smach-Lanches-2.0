import {tableBody} from "../JS/variable/variables.mjs";
import { tradePage,checkSelected} from "./Functions/viewPage.mjs";
import Product from "./models/products.mjs";
import {deleteProducts,updateProduct,saveProduct,getAllProducts} from "./Functions/methods.mjs";
import ProductServices from "./services/services.mjs"
import {checkInputs } from "./Events/btnEvents.mjs";

export const viwNewProduct = (arr) => {
  arr.forEach(values => {
  tableBody.innerHTML += `<tr>
      <td>${values.id}</td>
      <td>${values.nome}</td>
      <td>${values.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
      <td><button id="${values.id}" class="btn-edit" onclick="updateProduct(${values.id})"><img src="assets/img/edit.svg"></button> 
      <button id="${values.id}" class="btn-delete" onclick="deleteProducts(${values.id})"><img src="assets/img/deleteProduct.svg"</button>
      </td>                              
  </tr>`                             
  })
}
window.updateProduct = updateProduct
window.deleteProducts = deleteProducts


export const productServices = new ProductServices()
export let productsAll = await productServices.getAllProducts();
viwNewProduct(productsAll)