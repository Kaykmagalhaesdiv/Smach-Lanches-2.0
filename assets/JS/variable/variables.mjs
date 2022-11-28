let firstPage = document.getElementById("requests");
let secondPage = document.getElementById("newRequest");

let btnNewRequest = document.getElementById("btn-novo-pedido");
let btnFind = document.getElementById("btn-find");
let btnAddProduct = document.getElementById("btn-add");
let btnSave = document.getElementById("btn-save-id");
let btnCancel = document.getElementById("btn-cancel");
let btnDelete = document.getElementById("btn-delete");
let btnPrint = document.querySelector("#print")


let inputQuantidade = document.getElementById("amount-product");
let inputProduct = document.getElementById("name-product");
let inputPrice = document.getElementById("price-product");
let inputFindProduct = document.getElementById("codeProduct");

let tableBody = document.getElementById("table-body");
let tableBodyStatus = document.getElementById("table-body-result");
let resultPrice = document.getElementById("result");
let dateTimer = document.getElementById('date');

let imgBody = document.getElementById("img-hidden");
let imgFirstPage = document.getElementById("img-hidden-first");
// Elements HTML To use;

export default{
    firstPage,
    secondPage,
    btnNewRequest,
    btnFind,
    btnAddProduct,
    btnSave,
    btnCancel,
    btnDelete,
    inputQuantidade,
    inputProduct,
    inputPrice,
    inputFindProduct,
    tableBody,
    tableBodyStatus,
    resultPrice,
    dateTimer,
    imgBody,
    imgFirstPage,
    btnPrint
}