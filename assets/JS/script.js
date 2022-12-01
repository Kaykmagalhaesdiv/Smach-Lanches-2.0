import {btnAddProduct,btnCancel,btnCancelProduct,btnCheckedSideProduct,btnCheckedSideRequest,btnDelete,
btnFind,btnNewRequest,btnPrint,btnSave,btnSaveProduct,btnVerificar,dateTimer,firstPage,imgBody,imgFirstPage,inputCodProduct,
inputFindProduct,inputNameProduct,inputPrice,inputPriceProduct,inputProduct,inputQuantidade,resultPrice,secondPage,sideProduct,sideRequest,tableBody,tableBodyStatus,thirdPage} from "../JS/variable/variables.mjs";
import { tradePage,deleteProducts,updateProduct} from "./Functions/viewPage.mjs";
import ProductServices from "./services/services.mjs"
import Product from "./models/products.mjs"
// import {findProduct} from './Functions/findProducts.mjs'

let dataHora = new Date().toLocaleString();
dateTimer.innerHTML = dataHora

export const viwNewProduct = (arr) => {
  arr.forEach(values => {
    tableBody.innerHTML += `<tr>
                                        <td>${values.id}</td>
                                        <td>${values.nome}</td>
                                        <td>${values.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                                        <td><button id="${values.id}" class="btn-edit" onclick="updateProduct(${values.id,values})"><img src="assets/img/edit.svg"></button> 
                                        <button id="${values.id}" class="btn-delete" onclick="deleteProducts(${values.id})"><img src="assets/img/deleteProduct.svg"</button>
                                        </td>                              
                                      </tr>`                             
  })
  
}
window.updateProduct = updateProduct
window.deleteProducts = deleteProducts

// const filterTypes = document.querySelector("#filter-types");
// filterTypes.addEventListener("change",filter) // Filtro para os Tipos;

// const filtersStatus = document.querySelector("#filter-status");
// filtersStatus.addEventListener("change",filters);

const saveProduct = async (product)  =>{
  await productServices.saveProduct(product)
}
const getAllProducts = async() =>{
  let productsAll = await productServices.getAllProducts()
  viwNewProduct(productsAll)
}

const checkSelected = () => {
  if (btnCheckedSideProduct.checked == true) {
    // Botões side!
    sideRequest.setAttribute("hidden", "true")
    sideProduct.removeAttribute("hidden");

    // visualização da page
    firstPage.setAttribute("hidden", 'true');
    secondPage.setAttribute("hidden", 'true');
    thirdPage.removeAttribute("hidden")
  } else {
    //Botões side!
    sideProduct.setAttribute("hidden", "true");
    sideRequest.removeAttribute("hidden")

    // visualização da page
    thirdPage.setAttribute("hidden", "true");
    firstPage.removeAttribute("hidden")

  }
}

function checkInputs(inputs) {
  var filled = true;

  inputs.forEach(function (input) {
    if (input.value === "") {
      filled = false;
    }
  });
  return filled;

}
btnVerificar.forEach(function (input) {

  input.addEventListener("keyup", function () {
    if (checkInputs(btnVerificar)) {
      btnSaveProduct.disabled = false;
      btnSaveProduct.classList.replace("btn-inactive", "btn-active");
      btnCancelProduct.removeAttribute("hidden");
    } else {
      btnSaveProduct.disabled = true;
      btnSaveProduct.classList.replace("btn-active", "btn-inactive")
      btnCancelProduct.setAttribute("hidden", "true");
    }
  });
});

btnSaveProduct.addEventListener("click", async () => {
  let valueCodeProduct = inputCodProduct.value
  let valueNameProduct = inputNameProduct.value
  let valuePriceProduct = inputPriceProduct.value
  tableBody.innerHTML = '';

  const newProduct = new Product(valueCodeProduct, valueNameProduct, valuePriceProduct)
  saveProduct(newProduct)
  getAllProducts()
})

export const productServices = new ProductServices()
export let productsAll = await productServices.getAllProducts()
viwNewProduct(productsAll)

btnCheckedSideRequest.addEventListener("click", checkSelected)
btnCheckedSideProduct.addEventListener("click", checkSelected)
// btnPrint.addEventListener("click", printIt)
// btnDelete.addEventListener('click',viewQuestion)
btnNewRequest.addEventListener("click", tradePage);
// btnFind.addEventListener("click", findProduct);
// btnAddProduct.addEventListener("click", newProductOrder);
// btnSave.addEventListener("click", saveOrder);