var myVar;

function loadScreen() {
alert('aaa');
    myVar = setTimeout(showPage, 5000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}