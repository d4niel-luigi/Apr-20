let ChangeColor = document.querySelector(".button");

function szín() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let RGBrandom = "rgb(" + x + "," + y + "," + z + ")";
    ChangeColor.style.backgroundColor = RGBrandom;
};
ChangeColor.addEventListener('click', szín)
let Item = document.querySelector(".input");
let BtnAdd = document.querySelector(".add");
let BtnDelete = document.querySelector(".delete");
let number = 0;
let index = 0;

function Add() {
    let mainList = document.querySelector(".lista");
    let Row = document.createElement("tr");
    let Number = document.createElement("td")
    let Item = document.createElement("td");
    number++;
    mainList.appendChild(Row);
    Number.textContent = number;
    Row.appendChild(Number);
    Item.textContent = Item.value;
    Row.appendChild(Item);
    Item.value = ("");
    index++;
}
BtnAdd.addEventListener("click", Add)

function removeChild() {
    if (index > 0) {
        let mainList = document.querySelector(".lista");
        let lastChild = mainList.lastChild;
        mainList.removeChild(lastChild);
        index--;
        number--;
    }
}
BtnDelete.addEventListener("click", removeChild);