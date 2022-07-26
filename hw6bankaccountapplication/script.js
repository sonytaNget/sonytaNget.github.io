window.onload = function() {

    // Input Name and Balance
    var accountNameElement = document.getElementById("name");
    var balanceElement = document.getElementById("deposit");

    // Button create account
    var btnCreateAccountElement = document.getElementById("createAcc");
    btnCreateAccountElement.onclick = addAndDisplayAccountList;

    // Button deposit
    var btnDepositElement = document.getElementById("depositBtn");
    btnDepositElement.onclick = bringDepositNewPage;

    // Button debit
    var btnDebitElement = document.getElementById("debit");
    btnDebitElement.onclick = bringDebitNewPage;

    // TextArea List
    var txtAreaList = document.getElementById("list");

    var selectAccountElement = document.getElementById("account");
    debugger;
    Bank.accountInfoList = JSON.parse(localStorage.getItem("accountList"));
    var result = "";

    var accountInfoList = Bank.accountInfoList;
    for(let i = 0; i < accountInfoList.length; i++) {
        var account = accountInfoList[i];
        result += "Account name: " + account.accountName + " Balance: " + account.balance + "\n";
    }
    txtAreaList.value = result;
   
    function addAndDisplayAccountList() {

        addAccount();
        displayAccountList();
    }

    function addAccount() {

        const objBank = new Bank();
        objBank.createAccount(accountNameElement.value, balanceElement.value);
    }

    function displayAccountList() {

        const accountInfoList = Bank.accountInfoList;

        var result = "";

        for (let i=0; i<accountInfoList.length; i++) {
            var account = accountInfoList[i];
            result += "Account name: " + account.accountName + " Balance: " + account.balance + "\n";
        }

        txtAreaList.value = result;
    }

    function bringDepositNewPage(){
        bringNewPage("Deposit");
    }

    function bringDebitNewPage() {
        bringNewPage("Debit");
    }

    function bringNewPage(action) {

        localStorage.setItem("accountList", JSON.stringify(Bank.accountInfoList));
        localStorage.setItem("action", action);
        window.open("/sonytaNget.github.io/hw6bankaccountapplication/newPage.html");
    }

}




