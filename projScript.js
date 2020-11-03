// JavaScript source file
function checkForm() {/*
    validateImage();*/
}

function validateImage() {
    var file = document.getElementById("myfile");
    var t = file.type.split('/').pop().toLowerCase();
    if (t != ".jpeg" && t != ".jpg" && t != "png" && t != "bmp" && t != "gif") {
        alert('Please select a valid image file');
        document.getElementById("myfile").value = '';
    }
}

function accntCheck() {
    if (document.getElementById('no').checked) {
        document.getElementById("noAccnt").innerHTML = "Please make an account before entering a watch";
        var radioButton = document.getElementById("no");
        radioButton.checked = false;
    }
    else {
        document.getElementById("noAccnt").innerHTML = "";
    }
}

function checkPhone() {
    if (document.getElementById('no').value) {
    }
}

function ValidateEmail() {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var inputText = document.getElementById("mail");
    if(inputText.value.match(mailformat)) {
        document.getElementById("mailWrng").innerHTML = "";
    }
    else {
        document.getElementById("mailWrng").innerHTML = "Please enter valid email address.";
        document.getElementById("mail").value = '';
    }
}

function ValidatePhone() {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var inputtxt = document.getElementById("phone");
    if((inputtxt.value.match(phoneno))) {
        document.getElementById("phoneWrng").innerHTML = "";
    }
    else {
        document.getElementById("phoneWrng").innerHTML = "Please enter valid phone number.";
        document.getElementById("phone").value = '';
    }
}

function validateCost() {
    var num = document.getElementById("cost").value;
    if (num >= 1 && num <= 1500) {
        document.getElementById("costWrng").innerHTML = "";
    }
    else {
        document.getElementById("costWrng").innerHTML = "Please enter valid cost.";
        document.getElementById("cost").value = '';
    }
}

function validateAmnt() {
    var num = document.getElementById("amnt").value;
    if (num >= 0 && num <= 1000) {
        document.getElementById("amntWrng").innerHTML = "";
    }
    else {
        document.getElementById("amntWrng").innerHTML = "Please enter valid amount.";
        document.getElementById("amnt").value = '';
    }
}