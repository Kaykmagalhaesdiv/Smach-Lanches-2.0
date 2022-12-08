
export let firstPage = document.getElementById("requests");
export let secondPage = document.getElementById("newRequest");
export let thirdPage = document.querySelector("#products")
export let questionDelete = document.querySelector(".deleteQuestion")
export let nameOfProduct = document.querySelector(".nameOfProduct")
export let filterType = document.querySelector("#filter-types")
export let filterStatus = document.querySelector("#filter-status")

export let btnNewRequest = document.getElementById("btn-novo-pedido");
export let btnFind = document.getElementById("btn-find");
export let btnAddProduct = document.getElementById("btn-add");
export let btnSave = document.getElementById("btn-save-id");
export let btnCancel = document.getElementById("btn-cancel");
export let btnDelete = document.getElementById("btn-delete");
export let btnPrint = document.querySelector("#print")
export let btnCheckedSideRequest = document.querySelector("#requestButton");
export let btnCheckedSideProduct = document.querySelector("#productButton");
export let btnSaveProduct = document.querySelector("#save-product")
export let btnCancelProduct = document.querySelector(".btn-cancel-product")
export let btnVerificar = document.querySelectorAll(".btnVerificar")
export let btnDeleteProduct = document.querySelector(".btnDelete")
export let btnCancelQuestion  = document.querySelector(".btn-cancel-question")
export let btnCancelQuestionHeader = document.querySelector(".btn-cancel-question-header")

export let inputQuantidade = document.getElementById("amount-product");
export let inputProduct = document.getElementById("name-product");
export let inputPrice = document.getElementById("price-product");
export let inputFindProduct = document.getElementById("codeProduct");
export let inputCodProduct = document.querySelector("#codeProducts");
export let inputNameProduct = document.querySelector("#nameProducts")
export let inputPriceProduct = document.querySelector("#priceProducts");



export let tableBody = document.getElementById("table-body-products");
export let tableBodyStatus = document.getElementById("table-body-result")
export let tableBodyRequest = document.querySelector("#table-body")
export let resultPrice = document.getElementById("result");
export let dateTimer = document.getElementById('date');
export let sideProduct = document.querySelector("#sideProduct") 
export let sideRequest = document.querySelector("#sideRequest")
export let filterView = document.querySelector("#filter-user")

export let imgBody = document.getElementById("img-hidden");
export let imgFirstPage = document.getElementById("img-hidden-first");
export let loader = document.querySelector(".screenLoader");
export let loaderDelete = document.querySelector(".loaderDelete")

let dataHora = new Date().toLocaleString();
dateTimer.innerHTML = dataHora
// Elements HTML To use;
