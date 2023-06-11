function convertToTenge() {
    let dollar = parseFloat(document.getElementById("dollar").value);

    if (isNaN(dollar)) {
        document.getElementById("result").innerText = "Write down correct number of dollar";
        return;
    }

    let conversionRate = 450; 
    let tengeAmount = dollar * conversionRate;

    document.getElementById("result").innerText = "Result in Tenge: " + tengeAmount.toFixed(2);
}