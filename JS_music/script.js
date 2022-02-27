"use strict";

const deleteCdFromList = (event) => {
    document.querySelector("table").removeChild(event.target.parentElement);
}

const addCdToTable = (cdInfo) => {
    // clone template 
    const clone = document.querySelector("template").cloneNode(true).content;

    // add info to template
    clone.querySelector(".author").textContent = cdInfo.author;
    clone.querySelector(".title").textContent = cdInfo.title;
    clone.querySelector(".year").textContent = cdInfo.year;
    clone.querySelector(".delete").addEventListener("click", (e) => {deleteCdFromList(e)})

    // add to table
    document.querySelector("table").appendChild(clone);
}

const handleFormSumbited = (event) => {
    event.preventDefault();

    const newCdInfo = {}
    // get values
    newCdInfo.author = event.target.querySelector("#author").value;
    newCdInfo.title = event.target.querySelector("#title").value;
    newCdInfo.year = event.target.querySelector("#year").value;

    addCdToTable(newCdInfo);
}

const initalLoad = () => {
    // form listens for submission
    document.querySelector("form").addEventListener("submit", (event) => handleFormSumbited(event));
}

window.addEventListener("load", initalLoad());
