import { btnVerificar,btnSaveProduct,btnCancelProduct,btnCheckedSideProduct,btnCheckedSideRequest,btnNewRequest,tableBody,
inputCodProduct,inputNameProduct,inputPriceProduct} from "../variable/variables.mjs";
import { checkSelected} from "../Functions/viewPage.mjs";
import { tradePage } from "../Functions/viewPage.mjs";
import Product from "../models/products.mjs";
import { saveProduct,getAllProducts} from "../Functions/methods.mjs";

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

btnCheckedSideRequest.addEventListener("click", checkSelected)
btnCheckedSideProduct.addEventListener("click", checkSelected)
btnNewRequest.addEventListener("click", tradePage);

btnSaveProduct.addEventListener("click", async () => {
    let valueCodeProduct = inputCodProduct.value
    let valueNameProduct = inputNameProduct.value
    let valuePriceProduct = inputPriceProduct.value
    tableBody.innerHTML = '';
  
    const newProduct = new Product(valueCodeProduct, valueNameProduct, valuePriceProduct)
    saveProduct(newProduct)
    getAllProducts()
  })
