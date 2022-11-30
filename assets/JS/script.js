import variables from "./variable/variables.mjs";
import {tradePage} from "./Functions/viewPage.mjs";
import ProductServices from "./services/services.mjs"
import Product from "./models/products.mjs"
// import {findProduct} from './Functions/findProducts.mjs'

let  dataHora = new Date().toLocaleString();
variables.dateTimer.innerHTML = dataHora


// const filterTypes = document.querySelector("#filter-types");
// filterTypes.addEventListener("change",filter) // Filtro para os Tipos;

// const filtersStatus = document.querySelector("#filter-status");
// filtersStatus.addEventListener("change",filters);

const checkSelected = () =>{
    if(variables.btnCheckedSideProduct.checked == true){
        // Botões side!
        variables.sideRequest.setAttribute("hidden","true")
        variables.sideProduct.removeAttribute("hidden");

        // visualização da page
        variables.firstPage.setAttribute("hidden",'true');
        variables.secondPage.setAttribute("hidden",'true');
        variables.thirdPage.removeAttribute("hidden")
    } else{
        //Botões side!
        variables.sideProduct.setAttribute("hidden","true");
        variables.sideRequest.removeAttribute("hidden")

        // visualização da page
        variables.thirdPage.setAttribute("hidden","true");
        variables.firstPage.removeAttribute("hidden")

    }
}

function checkInputs(inputs) {
    var filled = true;
    
    inputs.forEach(function(input) {
      if(input.value === "") {
          filled = false;
      }
    });
    return filled;
    
  }
  variables.btnVerificar.forEach(function(input) {
      
    input.addEventListener("keyup", function() {
      if(checkInputs(variables.btnVerificar)) {
        variables.btnSaveProduct.disabled = false;
        variables.btnSaveProduct.classList.replace("btn-inactive", "btn-active");
        variables.btnCancelProduct.removeAttribute("hidden");
      } else {
        variables.btnSaveProduct.disabled = true;
        variables.btnSaveProduct.classList.replace("btn-active", "btn-inactive")
        variables.btnCancelProduct.setAttribute("hidden","true");
      }
    });
  });

variables.btnSaveProduct.addEventListener("click",() =>{
    let valueCodeProduct = variables.inputCodProduct.value
    let valueNameProduct = variables.inputNameProduct.value
    let valuePriceProduct = variables.inputPriceProduct.value

    const newProduct = new Product(valueCodeProduct,valueNameProduct,valuePriceProduct)
    console.log(newProduct)
    const productServices = new ProductServices()
    productServices.saveProduct(newProduct);
    
})
variables.btnCheckedSideRequest.addEventListener("click",checkSelected)
variables.btnCheckedSideProduct.addEventListener("click",checkSelected)
// variables.btnPrint.addEventListener("click", printIt)
// variables.btnDelete.addEventListener('click',viewQuestion)
variables.btnNewRequest.addEventListener("click", tradePage);
// variables.btnFind.addEventListener("click", findProduct);
// variables.btnAddProduct.addEventListener("click", newProductOrder);
// variables.btnSave.addEventListener("click", saveOrder);