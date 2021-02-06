function validateForm()
{
	var number = document.getElementById('number').value;
	
	try
	{
		if ( number == "") throw "The number should not be empty";
		else if ( isNaN(number) ) throw " The entered value should be a number";
		else if ( number < 0 ) throw " The number should be greater than zero";
		else if ( number % 2 != 0 ) throw " The number should be even";
		else if ( number * number >= 100 ) throw "The square of the number should be less than 100";
		else alert(number);
	}
	catch( err )
	{
		var message = err;
		document.write( message );

	}
	// if(username == "")
	// {
	// 	alert("Username should not be empty");
	// 	return;
	// }
	
	// password = document.getElementById('password').value;
	// if(password.length <= 6)
	// {
	// 	alert("Length of Password should be greater than 6");
	// 	return;
	// }

	// alert("Form Validated");
}

