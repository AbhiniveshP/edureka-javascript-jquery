function mouseOver()
{
	document.getElementById( 'q1-props' ).setAttribute("style", "color:green");
}

function mouseOut()
{
	document.getElementById( 'q1-props' ).setAttribute("style", "color:red");
}

function validateForm()
{
	username = document.getElementById('username').value;
	if(username == "")
	{
		alert("Username should not be empty");
		return;
	}
	
	password = document.getElementById('password').value;
	if(password.length <= 6)
	{
		alert("Length of Password should be greater than 6");
		return;
	}

	alert("Form Validated");
}

document.getElementById( 'q1-props' ).addEventListener("mouseover", mouseOver );
document.getElementById( 'q1-props' ).addEventListener("mouseout", mouseOut );

document.write("<br>");
document.write( "Application Language: " + navigator.language);
document.write("<br>");
document.write( "Application Code Name: " + navigator.appCodeName);
document.write("<br>");
document.write( "Application Name: " + navigator.appName);
document.write("<br>");
document.write( "Application Version: " + navigator.appVersion);
