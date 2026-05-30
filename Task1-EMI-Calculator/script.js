function calculateEMI() {

    let P = document.getElementById("amount").value;
    let annualRate = document.getElementById("rate").value;
    let N = document.getElementById("months").value;

    if(P === "" || annualRate === "" || N === ""){
        document.getElementById("result").innerHTML =
        "⚠ Please fill all fields";
        return;
    }

    if(P <= 0 || annualRate <= 0 || N <= 0){
        document.getElementById("result").innerHTML =
        "⚠ Values must be greater than zero";
        return;
    }

    let R = annualRate / 12 / 100;

    let EMI =
    (P * R * Math.pow(1 + R, N)) /
    (Math.pow(1 + R, N) - 1);

    let totalPayment = EMI * N;
 let totalInterest = totalPayment - P;

 document.getElementById("result").innerHTML = `
 <h3>Monthly EMI: Rs. ${EMI.toFixed(2)}</h3>
 <h3>Total Payment: Rs. ${totalPayment.toFixed(2)}</h3>
 <h3>Total Interest: Rs. ${totalInterest.toFixed(2)}</h3>`;

}
 function resetForm(){

    document.getElementById("amount").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("months").value = "";

    document.getElementById("result").innerHTML = "";
}