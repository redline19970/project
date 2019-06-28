function formValidation()
{
	var input1= document.getElementById('emri');
	var input2= document.getElementById('email-address');
	if( userid_validation(input1)){
		if(ValidateEmail(input2)){
			if (cvvalidation() ){
				alert ("Faleminderit per aplikimin tuaj. Do te kontaktoheni nga stafi yne sa me shpejte. Gjithe te mirat!!");
				document.getElementById('id01').style.display='none';
			}
			
		}
		
	}
	return false;
}

function cvvalidation(){
		var input1= document.getElementById('cv');
		if(input1.value != ""){
			return true;
			}
		else{
			alert("Duhet te vendosni nje CV!!");
			}
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


function ValidateEmail(email)
 
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat))
{
return true;
}
else
{
alert("Adresa Email nuk eshte e sakte !");
email.focus();
	return false;
}
}