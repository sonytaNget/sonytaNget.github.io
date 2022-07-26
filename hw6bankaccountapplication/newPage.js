window.onload = function() {

    // Button Submit
    var btnSubmitElement = document.getElementById("submit");

    // DropDown List Accounts
    var dropdownElement = document.getElementById("account");
    dropdownElement.onchange = enableButton;

    // Input Amount
    var amountElement = document.getElementById("amount");

    var titleElement = document.getElementById("title");
    // titleElement.innerHTML = ;
    console.log(localStorage.getItem("action"));

    function enableButton() {

        btnSubmitElement.disabled = false;
        makeTransaction()
    }
    
    function makeTransaction() {

        var text = dropdownElement.options[dropdownElement.selectedIndex].text;
        console.log(text);
        console.log(amountElement.value);
    }

}
