function controll(){
	var input1 = document.getElementById('full_name');
	var input2 = document.getElementById('email_address');
	var input3 = document.getElementById('user_name');
	var input4 = document.getElementById('password');
	var input5 = document.getElementById('repassword');
	var input6 = document.getElementById('phone_number');
	var input7 = document.getElementById('check1');
	var input8 = document.getElementById('check2');

	if(userid_validation(input1)){
		if(email_validation(input2)){
			if(ValidateEmail(input2)){
				if(username_validation(input3)){
					if(password_validation(input4)){
						if(password_validation1(input4)){
							if(repasswpord_validation(input5)){
								if(check_pass(input4,input5)){
									if(check_nr(input6)){
										if(check_nr_form(input6)){
											if(checkbox1(input7,input8)){
												pageRedirect();
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return false;

}


function userid_validation(x)
{
	if (x.value.length == 0 )
	{
		alert("Vendosni nje emer!");
		x.focus();
		return false;
	}
	return true;
}

function email_validation(x)
{
	if (x.value.length == 0 )
	{
		alert("Vendosni nje email!");
		x.focus();
		return false;
	}
	return true;
}

function username_validation(x)
{
	if (x.value.length == 0 )
	{
		alert("Vendosni nje username!");
		x.focus();
		return false;
	}
	return true;
}

function password_validation(x)
{
	if (x.value.length == 0 )
	{
		alert("Vendosni nje password!");
		x.focus();
		return false;
	}
	return true;
}

function password_validation1(x)
{
	if (x.value.length >=1 && x.value.length <=7)
	{
		alert("Passwordi duhet te jete minimalisht 8 karaktere");
		x.focus();
		return false;
	}
	return true;
}

function repasswpord_validation(x)
{
	if (x.value.length == 0 )
	{
		alert("Rivendosni passwordin e mesiperm!");
		x.focus();
		return false;
	}
	return true;
}

function check_pass(x,y){
	if(x.value != y.value){
		alert("Passwordi nuk rezulton i njejte. Ju lutem vendosni password te njejte");
		y.focus();
		return false;
	}
	return true;

}

function check_nr(x)
{
	if (x.value.length == 0 )
	{
		alert("Vendosni nje numer telefoni!");
		x.focus();
		return false;
	}
	return true;
}

function check_nr_form(x)
{
	if(x.value[0] != 0  || x.value[1] != 6){
		alert('Format jo i duhur');
		x.focus();
		return false;

	}else if (x.value[2] !=9 && x.value[2] != 8 && x.value[2] != 7){
		alert('Format jo i duhur');
		x.focus();
		return false;
	}
	return true;


}




function ValidateEmail(x)

{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(x.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("Adresa Email nuk eshte e sakte !");
		x.focus();
		return false;
	}
}



function pageRedirect(){
	var delay = 4000;
	alert("Rregjistrimi u krye me sukses! Do te zhvendoseni ne faqen e punes!! ");
	document.getElementById('id02').style.display='none';

	setTimeout(function () {
		window.location = "http://localhost:63342/untitled/homepage/frontpage/index.html";
	}, delay);
}

function checkbox1(x,y) {
	if(x.checked == false && y.checked == false){
		alert('Duhet te zgjidhni njeren');
		x.focus();
		return false;
	}
	if(x.checked == true && y.checked == true){
		alert('Duhet te zgjidhni njeren');
		x.focus();
		return false;
	}

	return true;

}





