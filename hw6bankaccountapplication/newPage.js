window.onload = function() {

    // Button Submit
    var btnSubmitElement = document.getElementById("submit");
    btnSubmitElement.onclick = makeTransaction;

    // Input Amount
    var amountElement = document.getElementById("amount");

    var titleElement = document.getElementById("title");
    titleElement.innerText = localStorage.getItem("action");

    // DropDown List Accounts
    var dropdownElement = document.getElementById("accountName");
    dropdownElement.onchange = enableButton;
    
    const accountInfoList = JSON.parse(localStorage.getItem("accountList"));

    for(let i = 0; i < accountInfoList.length; i++) {
        var account = accountInfoList[i];
        var option = document.createElement('option');
        option.text = option.value = account.accountName;
        dropdownElement.add(option, 0);
    }
   

    function enableButton() {

        if (dropdownElement.value !== "none") {
            btnSubmitElement.disabled = false;
        } else {
            btnSubmitElement.disabled = true;
        }
    }
    
    function makeTransaction() {

        for(let i = 0; i < accountInfoList.length; i++) {
            const account = accountInfoList[i];
            if (account.accountName === dropdownElement.value) {
                var action = localStorage.getItem("action");
                if (action === "Debit") {
                    if (parseFloat(amountElement.value) > parseFloat(account.balanc)) {
                        alert("Sorry, insufficient transaction");
                    }
                    account.balance = +account.balance - +amountElement.value;
                } else if (action === "Deposit"){
                    account.balance = +account.balance + +amountElement.value;
                }
                break;
            }
        }
        localStorage.setItem("accountList", JSON.stringify(accountInfoList));
        window.open("https://sonytaNget.github.io/hw6bankaccountapplication/index.html");
    }

}
