"use strict"

window.addEventListener("load", () => inital())

const calculateTemperature = (value, from_unit, to_unit) => {
    if (from_unit === "fahrenheit" && to_unit === "celsius") {
        // C = 5(F-32)/9
        return 5*(Number(value)-32) / 9; 
    }
    if (from_unit === "fahrenheit" && to_unit === "kelvin") {
        return (Number(value)-32)/1.8+273.15; 
    }
    if (from_unit === "kelvin" && to_unit === "celsius") {
        return Number(value)-273.15; 
    }
    if (from_unit === "kelvin" && to_unit === "fahrenheit") {
        return (9*(Number(value)-273.15)/5)+32; 
    }
    if (from_unit === "celsius" && to_unit === "fahrenheit") {
        return (Number(value)*1.8)*+32;
    }
    if (from_unit === "celsius" && to_unit === "kelvin") {
        return Number(value)+273.15; 
    }
    return null;
}

const handleConvertFormSubmission = (event) => {
    event.preventDefault();
    // get value to convert
    const value = event.target.querySelector("#value").value;
    // get units to and from
    const from_unit = event.target.querySelector("#from_temperature").value;
    const to_unit = event.target.querySelector("#to_temperature").value;

    const errorContainer = document.querySelector("#error_container");
    errorContainer.classList = 'hide';
    if (from_unit === to_unit) {
        errorContainer.classList = '';
        errorContainer.textContent = "Please choose two different units";
    } else {
        errorContainer.classList = 'hide';
        errorContainer.textContent = "";
        // do calculation
        const result = calculateTemperature(value, from_unit, to_unit);
        if (result === null) {
            errorContainer.classList = '';
            errorContainer.textContent = "Sorry, an error occured while calculating!";
        }
        // display result
        document.querySelector("#result span").textContent = result.toFixed(2) + " " + (to_unit === "kelvin" ? "K" : to_unit === "celsius" ? "C" : "F");
    }
}

const inital = () => {
    // listen for form submission
    document.querySelector("form").addEventListener("submit", (e) => handleConvertFormSubmission(e));
}