var form=document.getElementById("form");
var email = prompt("enter your email");
var password = prompt("enter your password");
if (email == "hossam@google" && password == "12345") 
{
	form.setAttribute("action" , "next.html")
}
else
{
	form.setAttribute("action" , "error.html")
}

