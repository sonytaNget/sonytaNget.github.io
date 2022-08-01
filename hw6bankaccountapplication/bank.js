class Bank {

    static accountInfoList = [];

    createAccount(accountName, depositBalance) { 
        
        const account = new Account(accountName, depositBalance);
        var accountList = Bank.accountInfoList;//JSON.parse(localStorage.getItem("accountList"));
        accountList.push(account);
        // localStorage.setItem("accountList", JSON.stringify(accountList));
    }

    showList() {
       
        var listAccountInfo = Bank.accountInfoList;//JSON.parse(localStorage.getItem("accountList"));
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