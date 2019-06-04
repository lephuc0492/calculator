function press(button)
{
	document.querySelectorAll("input")[0].value += button.innerHTML;
}
function backspace()
{
	document.querySelectorAll("input")[0].value = document.querySelectorAll("input")[0].value.slice(0,(document.querySelectorAll("input")[0].value.length -1));
}
function clearr()
{
	document.querySelectorAll("input")[0].value = "";
		document.querySelectorAll("input")[1].value = "";		
}
function bang()
{
	document.querySelectorAll("input")[1].value = eval(document.querySelectorAll("input")[0].value)

}
function nhan()
{
document.querySelectorAll("input")[0].value += "*"
}
function chia()
{
document.querySelectorAll("input")[0].value += "/"
}
function tru()
{
document.querySelectorAll("input")[0].value += "-"
}
function phantram()
{
document.querySelectorAll("input")[0].value += "/100"
}
function binhphuong()
{
	document.querySelectorAll("input")[0].value = document.querySelectorAll("input")[0].value + "*" + document.querySelectorAll("input")[0].value; 
}
function giaithua()
{
var x = document.querySelectorAll("input")[0].value.slice(document.querySelectorAll("input")[0].value.length - 1);
var z = 1;
	for(let i = 2; i <= x; i++)
	{
		z = z + "*" + i; 

	}
	var y = document.querySelectorAll("input")[0].value.slice(0,(document.querySelectorAll("input")[0].value.length -1))
			document.querySelectorAll("input")[0].value = y+z;
}
function canbac2()
{
	var x = document.querySelectorAll("input")[0].value;
	document.querySelectorAll("input")[0].value = Math.sqrt(x);

}