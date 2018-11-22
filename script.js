var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("ul");
var element = document.getElementById("li");
var del = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function listenList(){
	for (var i = 0; i < element.length; i++) {
		element[i].addEventListener("click", doneUndone);
	}}

function listenDelite()	{
	for (var i = 0; i < del.length; i++) {
	del[i].addEventListener("click", delThis);
	}}


function addDelete(ele) {
	var listButton = document.createElement("button");
	listButton.appendChild(document.createTextNode("Delete"));
	listButton.classList.add("delete");
	ele.appendChild(listButton);
	del = document.getElementsByClassName("delete");
	element = document.querySelectorAll("li");
	listenDelite();
	listenList();
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneUndone() {
	this.classList.toggle("done"); }

function delThis (event) {
	this.parentNode.remove();
}


for (var i = 0; i < element.length; i++) {
	addDelete(element[i]);
} 

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

listenDelite();
listenList();