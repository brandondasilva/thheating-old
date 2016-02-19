function formValidation()
{
var flowerNAME = document.registration.flower_Name;
var flowerCOLOR = document.registration.flower_color;
var flowerPRICE = document.registration.flower_Price;
var flowerPATH = document.registration.flower_path;
var flowerGROUP = document.registration.flower_category;
var flowerSTOCK = document.registration.flower_stock;
{
	if(allLetterfirst(flowerNAME)){
		if(allLettersecond(flowerCOLOR)){
			if(allnumericPRICE(flowerPRICE)){
				if(allnumericQUAN(flowerSTOCK)){
					if(allnumericGROUP(flowerGROUP)){
						if(bullshit(flowerPATH)){

}
}
}
}
}
}
}
return false;
} 


function bullshit(flowerPATH)
{
	alert("we here"); 
	return true;

}

function allnumericGROUP(flowerGROUP)
{ 
var numbers = /^[1-9]+$/;
if(flowerGROUP.value.match(numbers))
{
return true;
}
else
{
alert('Your flower category is invalid');
flowerGROUP.focus();
return false;
}
}

function allLetterfirst(flowerNAME)
	{
		var letters = /^[A-Za-z]+$/;
		if(flowerNAME.value.match(letters))
			{
				
				return true;
			}
		else
			{
				alert("Flower name must not be empty and have letters only(No spaces)");
				flowerNAME.focus();
				return false;
			}

	}

function allLettersecond(flowerCOLOR)
	{
		var letters = /^[A-Za-z]+$/;
		if(flowerCOLOR.value.match(letters))
			{
			
				return true;
			}
		else
			{
				alert("Flower Color must not be empty and have letters only");
				flowerCOLOR.focus();
				return false;
			}

	}


function allnumericPRICE(flowerPRICE)
{ 
var numbers = /^[0-9.]+$/;
if(flowerPRICE.value.match(numbers))
{
return true;
}
else
{
alert('Your price  is invalid');
flowerPRICE.focus();
return false;
}
}


function allnumericQUAN(flowerSTOCK)
{ 
var numbers = /^[0-9]+$/;
if(flowerSTOCK.value.match(numbers))
{
return true;
}
else
{
alert('Your flower quantity is invalid');
flowerSTOCK.focus();
return false;
}
}
