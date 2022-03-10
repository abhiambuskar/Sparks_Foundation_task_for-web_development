var index = 1;

function sendMoney(){
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);

    let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

    if(enterAmount > myAccountBalance){
        alert("Insufficient Balance");
    }else{
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
        document.getElementById("myAccountBalance").innerText = myAccountBalance
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert(`Successful Transaction !! $${enterAmount} is sent to ${enterName}@email.com`)

        var rowContent ="<tr><td>" + index + "</td><td>" + enterName + "@email.com</td><td>$ " + enterAmount + "</td><td>" + Date(); +
        "</td></tr>";
        index += 1;
        $("#transaction-history-body").append(rowContent);
    }
}