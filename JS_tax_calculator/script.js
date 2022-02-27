"use strict";

const calculateTax = (amount, percentage) => {
    return amount / 100 * percentage;
}

const formSumbited = (event) => {
    event.preventDefault();

    // get values from form
    const moneratyAmount = event.target.querySelector("#monetary_amount").value;
    const taxPercentage = event.target.querySelector("#tax_percentage").value;

    // calculate tax and final result
    const calculatedTax = calculateTax(moneratyAmount, taxPercentage);
    const finalResult = moneratyAmount - calculatedTax;

    // display tax result
    const taxResultSpan = document.querySelector("#tax_result");
    taxResultSpan.textContent = calculatedTax.toFixed(2);
    
    // display final result
    const finalResultSpan = document.querySelector("#final_result");
    finalResultSpan.textContent = finalResult.toFixed(2);
}

const initalLoad = () => {
    // get form and add listener for submit
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => formSumbited(event));
}

window.addEventListener("load", initalLoad);
