import {inputPriceProduct,inputNameProduct,btnDelete,btnSave,firstPage,inputFindProduct,resultPrice,secondPage,tableBody,tableBodyStatus,btnCheckedSideProduct,sideProduct,sideRequest,thirdPage,inputProduct,inputPrice,inputQuantidade,tableBodyRequest,imgBody,imgFirstPage,filterStatus,filterType, inputCodProduct,btnCancelProduct,btnPrint} from "../variable/variables.mjs";
import { getAllProducts } from "./methodsProducts.mjs";
import { viewAllRequests,changerStatus,showBtnDelete,retornaTodos} from "./methodsRequests.mjs";
import ProductServices from "../services/productServices.mjs";
export const tradePage = () => {
    firstPage.setAttribute("hidden", "true");
    secondPage.removeAttribute("hidden");
    resultPrice.setAttribute("hidden", "true");

    tableBodyStatus.innerHTML = "";
    inputFindProduct.value = "";
    inputPrice.value = ""
    inputProduct.value = ""
    inputQuantidade.value = ""
    tableBody.innerHTML = "";
    imgBody.removeAttribute("hidden")
    btnSave.removeAttribute('class', 'btn-save-inactive')
    btnSave.setAttribute('class', 'btn-save btn-config btn-save-inactive');
    btnSave.setAttribute('disabled','true')
    getAllProducts()
  }; // Purpose of function: Change page view and return empty order array and inputs;

export let viewTable = (arrView) => {
    tableBodyStatus.innerHTML = "";
    arrView.forEach((element) => {
      let html = "";
      element.produtos.forEach((produto) => {
        html += `${produto.quantidade + "-" + produto.nome + "<br>"}`;
      });
      tableBodyStatus.innerHTML += `<tr class="mb-5" id="request_${element.id}">
                                  <td> <input name="check" id="${element.id}" type="checkbox" class="checkClass" value="${element.id}" onclick="showBtnDelete()"/> ${element.id}</td>
                                  <td>${html}</td>
                                  <td>${element.tipo}</td>
                                  <td>R$ ${element.total.toFixed(2)}</td>
                                  <td><button id="buttonStatus" class="btn-config ${validStatus(element.status)}" onclick="changerStatus(${element.id},'${element.status}')">${element.status}</button></td>
                                </tr>`;
  }); // Standard function to loop through desired array and show in HTML.
};

window.changerStatus = changerStatus
window.showBtnDelete = showBtnDelete

export let validStatus = (status) => {
  let statusClass = "";
  switch (status) {
    case "Recebido":
      statusClass = "received";
      break;

    case "Pronto":
      statusClass = "ready";
      break;

    case "Entregue":
      statusClass = "delivered";
      break;

    default:
      statusClass = "received";
      break;
  }
  return statusClass;
};

export let viewBtn = () =>{
  let valueChecked = document.querySelectorAll('input[name="check"]:checked');
  let valueFilter = document.getElementById("filter-user");
  let valuesCheckeds = [];
    valueChecked.forEach((values) =>{
    valuesCheckeds.push(values.id)
  })
  if(valuesCheckeds.length > 0){
    valueFilter.setAttribute('hidden','true');
    btnDelete.removeAttribute('hidden','true')
  } else{
    valueFilter.removeAttribute('hidden');
    btnDelete.setAttribute('hidden','true')
  };
} // Appear and disappear delete button;

export const checkSelected = () => {
  if (btnCheckedSideProduct.checked == true) {
    // Botões side!
    sideRequest.setAttribute("hidden", "true")
    sideProduct.removeAttribute("hidden")

    // visualização da page
    firstPage.setAttribute("hidden", 'true');
    secondPage.setAttribute("hidden", 'true')
    thirdPage.removeAttribute("hidden")
  } else {
    //Botões side!
    sideProduct.setAttribute("hidden", "true");
    sideRequest.removeAttribute("hidden")
    // visualização da page
    thirdPage.setAttribute("hidden", "true");
    firstPage.removeAttribute("hidden")
    imgFirstPage.removeAttribute("hidden")
    viewAllRequests()
  }
}

export async function filterSelect(){
  let orders = await retornaTodos()
  
  if(filterType.value != '' && filterType.value != 'type'){
    orders = orders.filter(item =>{ 
      return item.tipo.toUpperCase() == filterType.value.toUpperCase()
    } )
    viewTable(orders)
  }
  if(filterStatus.value != '' && filterStatus.value != 'status'){
    orders = orders.filter(item =>{ 
      return item.status.toUpperCase() == filterStatus.value.toUpperCase()
    } )
    viewTable(orders)
  }

  if(filterStatus.value == 'status' || filterType.value == 'type'){
    return viewTable(orders)
  }
  console.log(orders)
}

export let btnCancelProductt = () =>{
  inputPrice.value = ""
  inputNameProduct.value = ""
  inputPriceProduct.value = ""
}
btnCancelProduct.addEventListener("click",btnCancelProductt)

export function printIt() {
  let contentPrint = document.getElementById('table').innerHTML;
  var win = window.open();
  self.focus();
  win.document.open();
  win.document.write('<'+'html'+'><'+'body'+'>');
  win.document.write(contentPrint);
  win.document.write('<'+'/body'+'><'+'/html'+'>');
  win.document.close();
  win.print();
  win.close();
} // function responsible for printing the screen when clicking on the "Print" button

btnPrint.addEventListener("click",printIt)


