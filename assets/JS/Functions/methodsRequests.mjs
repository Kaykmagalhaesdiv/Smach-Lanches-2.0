import RequestsServices from "../services/requestsServices.mjs";
import Requests from "../models/requests.mjs";
import { btnAddProduct, inputFindProduct, inputQuantidade, inputProduct, inputPrice, resultPrice, tableBodyRequest, btnSave, imgBody,secondPage,firstPage,imgFirstPage,btnDelete,filterView} from "../variable/variables.mjs"
import { viewTable } from "./viewPage.mjs";
import Status from "../models/status.mjs"
let arrRequestTable = [];
let arrRequestOrder = [];


export default btnAddProduct.addEventListener("click", async () => {
    arrRequestTable.push({
        cod: Number.parseInt(inputFindProduct.value),
        qty: Number.parseInt(inputQuantidade.value),
        nome: inputProduct.value,
        preco: Number.parseInt(inputPrice.value)
    })

    arrRequestOrder.push({
        idProduto: Number.parseInt(inputFindProduct.value),
        quantidade: Number.parseInt(inputQuantidade.value)
    })

    btnSave.removeAttribute("disabled")
    btnSave.classList.replace("btn-save-inactive", "btn-save-active")
    inputFindProduct.value = "";
    inputQuantidade.value = "";
    inputProduct.value = "";
    inputPrice.value = "";
    btnAddProduct.setAttribute("disabled","true")
    btnAddProduct.classList.replace("btn-active","btn-inactive")
    viewOrderRequest()

})

let viewOrderRequest = () => {
    tableBodyRequest.innerHTML = "";
    imgBody.setAttribute("hidden", "true")
    arrRequestTable.forEach(values => {
        tableBodyRequest.innerHTML += `<tr>
                                <td>${values.cod}</td>
                                <td>${values.nome}</td>
                                <td>${values.qty}</td>
                                <td>${(values.qty * values.preco).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                                </tr>`
    })
}

btnSave.addEventListener("click", async () => {
    const requestServices = new RequestsServices()
    let type = document.querySelector('input[name="option"]:checked').value;
    let IdRequest = await retornaIdUltimoPedido()
    let newRequest = new Requests(IdRequest, type, arrRequestOrder)
    let saveNewRequest = await requestServices.saveNewRequest(newRequest)
    arrRequestOrder = [];
    arrRequestTable = [];
    inputQuantidade.setAttribute("disabled","true")
    btnAddProduct.setAttribute("disabled","true")
    btnAddProduct.classList.replace("btn-active","btn-inactive")
    tableBodyRequest.innerHTML = "";
    
    alertify.success("Pedido Salvo!")
    viewAllRequests()
    secondPage.setAttribute("hidden","true");
    firstPage.removeAttribute("hidden")
})

let retornaIdUltimoPedido = async () => {
    const newRequest = new RequestsServices;
    let allRequests = await newRequest.allRequest()
    return allRequests.length > 0 ? ++allRequests[allRequests.length - 1].id : 1;
}

export let retornaTodos = async () => {
    const newRequest = new RequestsServices;
    let allRequest = await newRequest.allRequest()
    return allRequest
}

export let viewAllRequests = async () =>{
    imgFirstPage.setAttribute("hidden","true")
    let allRequestProducts = await retornaTodos()
    viewTable(allRequestProducts)
}

export let changerStatus = async (id,status) =>{
    
    let newStatus = new Status(status);
    newStatus.mudarStatus()
    
    let requestServices = new RequestsServices();
    let teste = await requestServices.changeStatus(id,newStatus);
    viewAllRequests()
}

export let showBtnDelete = () =>{
    let checked = document.querySelectorAll('input[name="check"]:checked');
    if(checked.length <= 0){
        btnDelete.setAttribute("hidden","true")
        filterView.removeAttribute("hidden")
    } else{
      btnDelete.removeAttribute("hidden")
      filterView.setAttribute("hidden","true")
    }
}

let deleteRequest = async () =>{
    let checked = document.querySelectorAll('input[name="check"]:checked');
    checked.forEach(element =>{
      let requestDelete = new RequestsServices();
      requestDelete.deleteRequest(element.id)
        const newRequest = new RequestsServices;
        let allRequest = newRequest.allRequest()
        btnDelete.setAttribute("hidden","true")
        filterView.removeAttribute("hidden")
        imgFirstPage.removeAttribute("hidden")
        viewAllRequests()
        
    })
    
}

btnDelete.addEventListener("click", deleteRequest)