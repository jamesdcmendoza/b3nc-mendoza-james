function changeMeToNumber() {
	var x = 101;
	document.getElementById("firstVar").innerHTML = x;
}

function getNewName() {
	var name = "James Mendoza";
	document.getElementById("secondVar").innerHTML = name;
}



function welcome() {
	var message = "Welcome to JS programming!";
	document.getElementById("thirdVar").innerHTML = message;
}

var var1 = 10;
var var2 = 3;
var result = 0;

document.getElementById("var1").value = var1;
document.getElementById("var2").value= var2;
document.getElementById("result").innerHTML = result;

function addThem() {
	// result = var1 + var2;
	// document.getElementById("result").innerHTML = result;
	var1 = parseInt(document.getElementById("var1").value);
	var2 = parseInt(document.getElementById("var2").value);

	var result = var1 + var2;

	document.getElementById("result").innerHTML = result;
}

function subtractThem() {
	var1 = parseInt(document.getElementById("var1").value);
	var2 = parseInt(document.getElementById("var2").value);

	var result = var1 - var2;

	document.getElementById("result").innerHTML = result;
}

function multiplyThem() {
	result = var1 * var2;
	document.getElementById("result").innerHTML = result;
}

function divideThem() {
	result = var1 / var2;
	document.getElementById("result").innerHTML = result;
}

function modulateThem() {
	result = var1 % var2;
	document.getElementById("result").innerHTML = result;
}
