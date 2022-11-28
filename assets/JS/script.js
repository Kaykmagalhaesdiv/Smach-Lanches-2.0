import variables from "./variable/variables.mjs";
import {newProductOrder,tradePage,saveOrder,viewQuestion,filter,filters,printIt} from "./Functions/viewPage.mjs";
import {findProduct} from './Functions/findProducts.mjs'

let  dataHora = new Date().toLocaleString();
variables.dateTimer.innerHTML = dataHora


const filterTypes = document.querySelector("#filter-types");
filterTypes.addEventListener("change",filter) // Filtro para os Tipos;

const filtersStatus = document.querySelector("#filter-status");
filtersStatus.addEventListener("change",filters);

variables.btnPrint.addEventListener("click", printIt)
variables.btnDelete.addEventListener('click',viewQuestion)
variables.btnNewRequest.addEventListener("click", tradePage);
variables.btnFind.addEventListener("click", findProduct);
variables.btnAddProduct.addEventListener("click", newProductOrder);
variables.btnSave.addEventListener("click", saveOrder);