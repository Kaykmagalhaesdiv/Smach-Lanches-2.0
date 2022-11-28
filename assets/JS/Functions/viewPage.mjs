import variables from "../variable/variables.mjs";

export let totalSum = 0;
export let arrayProductOrder = [];
export let arrayOrders = [];
let orderNumber = 1;


export const newProductOrder = () => {
    variables.imgBody.setAttribute("hidden", "true");
  
    arrayProductOrder.push({
      cod: variables.inputFindProduct.value,
      productName: variables.inputProduct.value,
      qty: variables.inputQuantidade.value,
      price: parseInt(variables.inputPrice.value),
    }); // Fill the empty array with cetted data in the inputs
  
    variables.inputFindProduct.value = "";
    variables.inputProduct.value = "";
    variables.inputQuantidade.value = "";
    variables.inputPrice.value = "";
    // Then return the default inputs
  
    let mapPrice = arrayProductOrder.map((valor) => {
      return valor.price;
    });
  
    
    totalSum = mapPrice.reduce((total, next) => {
      return (total += next);
    });
  
    variables.resultPrice.removeAttribute("hidden");
    variables.resultPrice.innerHTML = `<h4>Total do pedido: <strong>${totalSum.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</strong:</h4>`;
    alertify.success('Produto adicionado!')
    variables.btnSave.removeAttribute("class", "btn-save-inactive");
    variables.btnSave.removeAttribute("disabled", "true");
    variables.btnSave.setAttribute("class", "btn-save btn-config btn-save-active");
  
    if (variables.inputFindProduct.value == "" || variables.inputQuantidade.value == "") {
      variables.btnAddProduct.removeAttribute("class", "btn-active");
      variables.btnAddProduct.setAttribute("class","btn-inactive btn-save-product btn-config mt-3");
      variables.btnAddProduct.setAttribute("disabled", "true");
    }
    
    tableOrderView();
    return false;
  };
export const tableOrderView = () => {
    variables.tableBody.innerHTML = "";
    arrayProductOrder.forEach((item) => {
      variables.tableBody.innerHTML += `<tr>
                            <td>${item.cod}</td>
                            <td>${item.productName}</td>
                            <td>${item.qty}</td>
                            <td>R$ ${item.price}</td>
                          </tr>`;
    }); // It loops through the filled array and puts the data in the HTML
  };

export const tradePage = () => {
    variables.firstPage.setAttribute("hidden", "true");
    variables.secondPage.removeAttribute("hidden");
    variables.resultPrice.setAttribute("hidden", "true");
  
    variables.tableBodyStatus.innerHTML = "";
    variables.inputFindProduct.value = "";
    variables.tableBody.innerHTML = "";
    variables.btnSave.removeAttribute('class', 'btn-save-inactive')
    variables.btnSave.setAttribute('class', 'btn-save btn-config btn-save-inactive');
    variables.btnSave.setAttribute('disabled','true')
    arrayProductOrder = [];
  }; // Purpose of function: Change page view and return empty order array and inputs;

export let viewTable = (arrView) => {
    variables.tableBodyStatus.innerHTML = "";
    arrView.forEach((element) => {
      let html = "";
      element.itens.forEach((item) => {
        html += `${item.qty + "-" + item.productName + "<br>"}`;
      });
      variables.tableBodyStatus.innerHTML += `<tr>
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
    variables.btnDelete.removeAttribute('hidden','true')
  } else{
    valueFilter.removeAttribute('hidden');
    variables.btnDelete.setAttribute('hidden','true')
  };
} // Appear and disappear delete button;

export let saveOrder = () => {
  let status = document.querySelector('input[name="option"]:checked').value;
  variables.secondPage.setAttribute("hidden", "true");
  variables.firstPage.removeAttribute("hidden");

  variables.imgFirstPage.setAttribute("hidden", "");
  variables.tableBodyStatus.innerHTML = "";

  arrayOrders.push({
    orderNumber: (orderNumber += 1),
    itens: arrayProductOrder,
    type: status,
    total: totalSum,
    status: "Recebido",
  }); // Added new items to empty array;
  alertify.success('Pedido Salvo!')
  viewTable(arrayOrders);
};

export let filterCheckbox = () =>{
  let checked = document.querySelectorAll('input[name="check"]:checked');
  let checkedMarked = [];
  checked.forEach((value) =>{
    checkedMarked.push(value.id)
  }); // return id of CheckBox to empy Array

  let filtrado = checkedMarked.map((value) =>{
    return value
  })

  arrayOrders = arrayOrders.filter((received) =>{
    const select = filtrado.some((checked) => checked == received.orderNumber);
    if(!select){
      return received
    }
  })

  let valueFilterType = document.getElementById("filter-types");
  valueFilterType.value = '';

  let valueFilterStatus = document.getElementById("filter-status");
  valueFilterStatus.value = '';
  alertify.error('Pedido Excluido(s)!')
  viewTable(arrayOrders);
}

export let viewQuestion = () =>{
  alertify.confirm("Excluir pedido", "Você deseja realmente excluir um pedido?.",
   function(){
    filterCheckbox();
    },
    function(){
    });
}

let resultFilterType = '';
export let filterType = () => {
  let valueFilterType = document.getElementById("filter-types").value;
  resultFilterType = valueFilterType
  return arrayOrders.filter((values) => {
    if (values.type == valueFilterType) {
      return values;
    } else if(valueFilterType == ''){
      return arrayOrders;
    }
  });
};


let resultFilterStatus = ''
export let filterStatus = () =>{
  let valueFilterStatus = document.getElementById("filter-status").value;
  resultFilterStatus = valueFilterStatus
  return arrayOrders.filter((values) => {
    if (values.status == valueFilterStatus) {
      return values;
    }
      else if(valueFilterStatus == ''){
      return arrayOrders;
    }
  });
}

export let filter = () => {
  let arrFilterType = filterType();
  viewTable(arrFilterType)
};

export let filters = () =>{
  let arrFilterStatus = filterStatus();
  viewTable(arrFilterStatus)
}

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

