/* var myImage = document.querySelector("img");

myImage.onclick = function()
{
	let mySrc = myImage.getAttribute("src");
	if(mySrc === "res.png")
	{
		myImage.setAttribute("src", "res1.png");
	}
	else
	{
		myImage.setAttribute("src", "res2.png");
	}
}; */

var myHeading = document.querySelector("h1");
var myButton = document.querySelector("button");

function setUserName()
{
	let myName = prompt("Please enter your name.");
	if(!myName || myName === null)
	{
		setUserName();
	}
	else
	{
		localStorage.setItem("name", myName);
		myHeading.innerHTML = "HTML is cool." + myName;
	}
}

if (!localStorage.getItem("name"))
{
	setUserName();
}
else
{
	let storedName = localStorage.getItem("name");
	myHeading.innerHTML = "HTML is cool." + storedName;
}

myButton.onclick = function()
{
	setUserName();
}


/*
var myHTML = document.querySelector("html");
myHTML.onclick = function()
{
	alert("Ouch, stop poking me!");
}
*/
