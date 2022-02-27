"use strict"

window.addEventListener("load", () => inital())

const calculateTemperature = (value, fromUnit, toUnit) => {
    switch (fromUnit){
        case "fahrenheit":
            if (toUnit === "celsius") { return 5*(Number(value)-32) / 9; }
            if (toUnit === "kelvin") { return (Number(value)-32)/1.8+273.15; }
        case "kelvin":
            if (toUnit === "celsius") { return Number(value)-273.15; }
            if (toUnit === "fahrenheit") { return (9*(Number(value)-273.15)/5)+32; }
        case "celsius":
            if (toUnit === "fahrenheit") { return (Number(value)*1.8)*+32; }
            if (toUnit === "kelvin") { return Number(value)+273.15; }
        default:
            return null;
    }
}

const getShortUnit = (unitName) => {
    return unitName === "kelvin" ? "K" : unitName === "celsius" ? "°C" : "F";
}

const displayError = (text, errorContainer) => {
    errorContainer.classList = '';
    errorContainer.textContent = text;
    document.querySelector("#result").classList = 'hide';
}

const displayResult = (value=0, fromUnit=none, toUnit=none, result=0, errorContainer) => {
    // hide error
    errorContainer.classList = 'hide';
    errorContainer.textContent = "";
    //display result container and values
    document.querySelector("#result").classList = '';
    document.querySelector("#result #from_value_span").textContent = value + " " + getShortUnit(fromUnit);
    document.querySelector("#result #to_value_span").textContent = result.toFixed(2) + " " + getShortUnit(toUnit);

}

const handleConvertFormSubmission = (event) => {
    event.preventDefault();
    // get value to convert
    const value = event.target.querySelector("#value").value;
    // get units to and from
    const fromUnit = event.target.querySelector("#from_temperature").value;
    const toUnit = event.target.querySelector("#to_temperature").value;
    // get errorcontainer
    const errorContainer = document.querySelector("#error_container");

    // check for errors and display them or the result
    if (fromUnit === toUnit) {
        displayError("Please choose two different units", errorContainer);
    } else {
        // do calculation
        const result = calculateTemperature(value, fromUnit, toUnit);
        if (result === null) {
            displayError("Sorry, an error occured while calculating!", errorContainer);
        }
        // display result
        displayResult(value, fromUnit, toUnit, result, errorContainer);
    }
}

const inital = () => {
    // listen for form submission
    document.querySelector("form").addEventListener("submit", (e) => handleConvertFormSubmission(e));
}