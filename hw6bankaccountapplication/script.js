window.onload = function() {

    // Input Name and Balance
    var accountNameElement = document.getElementById("name");
    var balanceElement = document.getElementById("deposit");

    // Button create account
    var btnCreateAccount = document.getElementById("createAcc");
    btnCreateAccount.onclick = addAndDisplayAccountList;

    // Button deposit
    var btnDeposit = document.getElementById("depositBtn");
    btnDeposit.onclick = bringNewPage;

    // Button debit
    var btnDebit = document.getElementById("debit");
    btnDeposit.onclick = bringNewPage;

    // TextArea List
    var txtAreaList = document.getElementById("list");
   
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

    function bringNewPage() {
        window.open("");
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

