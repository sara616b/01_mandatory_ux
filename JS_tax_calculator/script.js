"use strict";

const formSumbited = (event) => {
    event.preventDefault();

    // get values from form
    const moneraty_amount = event.target.querySelector("#monetary_amount").value;
    const tax_percentage = event.target.querySelector("#tax_percentage").value;

    // calculate tax and final result
    const calculated_tax = moneraty_amount / 100 * tax_percentage;
    const final_result = moneraty_amount - calculated_tax;

    // display tax result
    const tax_result_span = document.querySelector("#tax_result");
    tax_result_span.textContent = calculated_tax.toFixed(2);
    
    // display final result
    const final_result_span = document.querySelector("#final_result");
    final_result_span.textContent = final_result.toFixed(2);
}

const initalLoad = () => {
    // get form and add listener for submit
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => formSumbited(event));
}

window.addEventListener("load", initalLoad);
