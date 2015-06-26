function formValidation()
{
var uid = document.registration.myusername;
var passid = document.registration.mypassword;
var passid1 = document.registration.mypassword1;
var fname = document.registration.first_name;
var lname = document.registration.last_name;
var uadd = document.registration.Address;
var addressnum = document.registration.addr_num;
var ucountry = document.registration.country;
var ucity = document.registration.city;
var uprovince = document.registration.province;
var uzip = document.registration.postal_code;
var uemail = document.registration.email;

{
		if(allLetterfirst(fname)){		
		if(allLettersecond(lname)){
		if(allnumeric(addressnum)){	
		if(allleteraddy(uadd)){
		if(suckthis(uzip)){
		if(allletercity(ucity)){
		if(allleterprovince(uprovince)){
		if(allletercountry(ucountry)){
		if(userid_validation(uid,5,12)){
		if(ValidateEmail(uemail)){
		if(passid_validation(passid,5,12)){
		if(passid_validation1(uid,passid1,passid)){
												
			
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
}
}
return false;
} 

function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("Username must not be empty and have length between "+mx+" to "+my+" chatacters");
uid.focus();
return false;
}
return true;
}

function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password must not be empty and have length between "+mx+" to "+my+" chatacters");
passid.focus();
return false;
}
return true;
}

function passid_validation1(uid,passid1,passid)
{
	
if (passid1.value != passid.value )
{
alert("Passwords musst be the same ");
passid1.focus();
return false;
}
var total = uid.value.concat(passid.value);
setCookie(total,"username",1);
alert("Form Succesfully Submitted");
window.location.reload()
return 
}

function allLetterfirst(fname)
{ 
var letters = /^[A-Za-z]+$/;
	if(fname.value.match(letters))
	{
		return true;
	}
	else
		{
		alert("First Name must not be empty and have letters only");
		fname.focus();
		return false;
		}
}

function allLettersecond(lname)
{ 
var letters = /^[A-Za-z]+$/;
	if(lname.value.match(letters))
	{
		return true;
	}
	else
		{
		alert("Last Name must not be empty and have letters only");
		lname.focus();
		return false;
		}
}


function allletercity(ucity)
{ 
var letters = /^[A-Za-z]+$/;
	if(ucity.value.match(letters))
	{
		return true;
	}
	else
		{
		alert("CIty must not be empty and have letters only");
		ucity.focus();
		return false;
		}
}

function allleterprovince(uprovince)
{ 
var letters = /^[A-Za-z]+$/;
	if(uprovince.value.match(letters))
	{
		return true;
	}
	else
		{
		alert("Province/State must not be empty and have letters only");
		uprovince.focus();
		return false;
		}
}


function allletercountry(ucountry)
{ 
var letters = /^[A-Za-z]+$/;
	if(ucountry.value.match(letters))
	{
		return true;
	}
	else
		{
		alert("Country must not be empty and have letters only");
		ucountry.focus();
		return false;
		}
}

function allleteraddy(uadd)
{ 
var letters = /^[A-Za-z]+$/;
	if(uadd.value.match(letters))
	{
		return true;
	}
	else
		{
		alert("Address must not be empty and have letters only");
		uadd.focus();
		return false;
		}
}

function allnumeric(addressnum)
{ 
var numbers = /^[0-9]+$/;
if(addressnum.value.match(numbers))
{
return true;
}
else
{
alert('Your address number is invalid');
addressnum.focus();
return false;
}
}





function alphanumeric(uzip)
{ 
var letters = /^([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)/;
if(uzip.value.match(letters))
{
return true;
}
else
{
alert('Your Zip code must be Canadian format');
uzip.focus();
return false;
}

}function suckthis(uzip)
{ 
var letters = /^([A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d)/;
if(uzip.value.match(letters))
{
return true;
}
else
{
alert('Your Zip code must be Canadian format');
uzip.focus();
return false;
}
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;

}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
