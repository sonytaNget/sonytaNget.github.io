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

    function getAccountName() {
        const accountInfoList = Bank.accountInfoList;

        var result = "";

        for (let i=0; i<accountInfoList.length; i++) {
            var account = accountInfoList[i];
            result = account.accountName;
            selectAccountElement.options[selectAccountElement.options.length] = new Option(result, i);
        }
    }

    function bringDepositNewPage(){
        bringNewPage("deposit");
    }

    function bringDebitNewPage() {
        bringNewPage("debit");
    }

    function bringNewPage(action) {
        window.open("https://sonytanget.github.io/hw6bankaccountapplication/newPage.html");
        getAccountName()
        localStorage.setItem("action", action);
    }

}

class Account {

    // #accountName;
    // #balance;

    constructor(accountName, balance) { 
        this.accountName = accountName;
        this.balance = balance;
    }

}

class Bank {

    static accountInfoList = [];

    createAccount(accountName, depositBalance) { 
        // debugger;
        const account = new Account(accountName, depositBalance);
        Bank.accountInfoList.push(account);
        // this.showList();
    }

    showList() {
        debugger;
        var listAccountInfo = Bank.accountInfoList;
        var result = "";
        if (listAccountInfo.length > 0) {
            for (let i=0; i<listAccountInfo.length; i++) {
                var account = listAccountInfo[i];
                result += "Account name " + account.accountName + " Balance " + account.balance;
            }
        }
        return result;
    }
}

