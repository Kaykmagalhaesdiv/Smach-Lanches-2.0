import {btnAddProduct,btnCancel,btnCancelProduct,btnCheckedSideProduct,btnCheckedSideRequest,btnDelete,
    btnFind,btnNewRequest,btnPrint,btnSave,btnSaveProduct,btnVerificar,dateTimer,firstPage,imgBody,imgFirstPage,inputCodProduct,
    inputFindProduct,inputNameProduct,inputPrice,inputPriceProduct,inputProduct,inputQuantidade,resultPrice,secondPage,sideProduct,sideRequest,tableBody,tableBodyStatus,thirdPage} from "./variable/mjs";


// export let findProduct = () => {
//     let valueInput = inputFindProduct.value;
//     if (valueInput.length > 4) {
//       alertify.error("Por favor digite apenas 4 numeros para o codigo");
//       return false;
//     }
  
//     let findObj = product.filter((value) => {
//       let valueCode = value.code;
//       if (valueInput == "") {
//         return false;
//       }
//       return valueCode.indexOf(valueInput) != -1;
//     }); // Checks if the code entered by the user is present in the object and returns the object referring to the code 
  
//     let arrSum = findObj.map((value) => {
//       let totalySum = inputQuantidade.value * value.price;
//       return totalySum;
//     }); // Return sum total between quantity and price;
  
//     if (
//       findObj.length == 0 ||
//       inputQuantidade.value == "" ||
//       inputQuantidade.value <= 0 ||
//       inputFindProduct.value == ""
//     ) {
//       alertify.error("Por favor, verifique o código do produto ou Quantidade estão corretos.",'aa');
//     } else {
//       inputProduct.value = findObj[0].productFood;
//       inputPrice.value = arrSum[0].toFixed(2);
//       // inside the inputs, put the name of the product and the price that was found in FindObj;
  
//       btnAddProduct.removeAttribute("class", "btn-inactive");
//       btnAddProduct.removeAttribute("disabled", "true");
//       btnAddProduct.setAttribute(
//         "class",
//         "btn-active btn-save-product btn-config mt-3"
//       );
//     }
//   };