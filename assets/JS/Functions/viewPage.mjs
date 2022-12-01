import {btnDelete,btnSave,firstPage,inputFindProduct,resultPrice,secondPage,tableBody,tableBodyStatus,btnCheckedSideProduct,sideProduct,sideRequest,thirdPage} from "../variable/variables.mjs";

export const tradePage = () => {
    firstPage.setAttribute("hidden", "true");
    secondPage.removeAttribute("hidden");
    resultPrice.setAttribute("hidden", "true");
  
    tableBodyStatus.innerHTML = "";
    inputFindProduct.value = "";
    tableBody.innerHTML = "";
    btnSave.removeAttribute('class', 'btn-save-inactive')
    btnSave.setAttribute('class', 'btn-save btn-config btn-save-inactive');
    btnSave.setAttribute('disabled','true')
  }; // Purpose of function: Change page view and return empty order array and inputs;

export let viewTable = (arrView) => {
    tableBodyStatus.innerHTML = "";
    arrView.forEach((element) => {
      let html = "";
      element.itens.forEach((item) => {
        html += `${item.qty + "-" + item.productName + "<br>"}`;
      });
      tableBodyStatus.innerHTML += `<tr>
                                  <td> <input name="check" id="${element.orderNumber}" type="checkbox" class="checkClass"/> ${element.orderNumber}</td>
                                  <td>${html}</td>
                                  <td>${element.type}</td>
                                  <td>R$ ${element.total.toFixed(2)}</td>
                                  <td><button id="buttonStatus" class="btn-config ${validStatus(element.status)}">${element.status}</button></td>
                                </tr>`;
  
    let btnClick = document.querySelector(".checkClass")
    btnClick.addEventListener("click", viewBtn)
    let btnChangeStatus = document.querySelector("#buttonStatus");
    
    let changer = () =>{
      arrayOrders.forEach((value) =>{
        if (value.orderNumber == element.orderNumber) {
          if (value.status === "Recebido") {
            value.status = "Pronto";
          } else if (value.status === "Pronto") {
            value.status = "Entregue";
          }
        }
      })
      viewTable(arrayOrders)
    }
    btnChangeStatus.addEventListener("click", changer);
  
  
  }); // Standard function to loop through desired array and show in HTML.
};

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

