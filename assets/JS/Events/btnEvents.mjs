import { btnVerificar,btnSaveProduct,btnCancelProduct,btnCheckedSideProduct,btnCheckedSideRequest,btnNewRequest,btnFind,inputFindProduct,inputQuantidade,btnAddProduct} from "../variable/variables.mjs";
import { checkSelected} from "../Functions/viewPage.mjs";
import { tradePage } from "../Functions/viewPage.mjs";
import { productServices } from "../script.js";
import { getProductsForId } from "../Functions/methodsProducts.mjs";

// check if the three inputs are filled in to enable the save product button.
export function checkInputs(inputs) {
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
//---------------*****************************-----------

btnFind.addEventListener("click", async () =>{
  let valueCodProduct = inputFindProduct.value;
  getProductsForId(valueCodProduct)
})

inputQuantidade.addEventListener("keyup",() =>{
  if(inputQuantidade.value > 0){
    btnAddProduct.classList.replace("btn-inactive","btn-active")
    btnAddProduct.removeAttribute('disabled')
  }else{
    btnAddProduct.classList.replace("btn-active", "btn-inactive")
    btnAddProduct.setAttribute("disabled",'true')
  }
})
btnCheckedSideRequest.addEventListener("click", checkSelected)
btnCheckedSideProduct.addEventListener("click", checkSelected)
btnNewRequest.addEventListener("click", tradePage)


