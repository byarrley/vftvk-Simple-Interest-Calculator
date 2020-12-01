function compute()
{
    //User inputs
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseFloat(document.getElementById("years").value);
    
    //Input validation
    if (principal <= 0) {
        alert("Enter a positive number");
        return;
    }

    //Computations
    var interest = principal * years * rate /100;
    var currentYear = new Date().getFullYear();
    var futureYear = currentYear + years;
    
    //Set result
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark> at an interest rate of <mark>" + rate + "%</mark>.  You will receive an amount of <mark>" + interest + "</mark>, in the year <mark>" + futureYear + "</mark><br/>";
}

function displayRateValue() {
    var rate = document.getElementById("rate").value;
    document.getElementById("rate-val").innerHTML = rate + "%";
}
