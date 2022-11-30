import variables from "../variable/variables.mjs";


// export let findProduct = () => {
//     let valueInput = variables.inputFindProduct.value;
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
//       let totalySum = variables.inputQuantidade.value * value.price;
//       return totalySum;
//     }); // Return sum total between quantity and price;
  
//     if (
//       findObj.length == 0 ||
//       variables.inputQuantidade.value == "" ||
//       variables.inputQuantidade.value <= 0 ||
//       variables.inputFindProduct.value == ""
//     ) {
//       alertify.error("Por favor, verifique o código do produto ou Quantidade estão corretos.",'aa');
//     } else {
//       variables.inputProduct.value = findObj[0].productFood;
//       variables.inputPrice.value = arrSum[0].toFixed(2);
//       // inside the inputs, put the name of the product and the price that was found in FindObj;
  
//       variables.btnAddProduct.removeAttribute("class", "btn-inactive");
//       variables.btnAddProduct.removeAttribute("disabled", "true");
//       variables.btnAddProduct.setAttribute(
//         "class",
//         "btn-active btn-save-product btn-config mt-3"
//       );
//     }
//   };