var password = $('#signupPassInput');
var username = $('#signupUsernameInput');
var mobileNumber = $('#mobilePassInput');
var VEmail = $('#signupEmailInput');
var readyFunc = function(client , freelancer){
    $("#btn_sign_up_freelancer").click(function(){
      	localStorage.setItem('registertype' , 'freelancer' )
		
		window.location.href = "signup-user-pass.html";
	
		
	});
};

$(document).ready(readyFunc);
$(document).ready(function(client , freelancer){
	$('#btn_sign_up_client').click(function(){
	localStorage.setItem('registertype' , 'client' )
		window.location.href = "signup-user-pass.html" ;
	});
});



// 0 || checkingMobile === 'ok' && checkingName != null || checkingName != ""
//$('#signup-form').submit(function(){
//	console.log('kir');
//	window.location.href = "signup-form.html";
//});
var form = $('#signup-form');
function gotonext(){
	var validityPass = checkPassword(password.val());
	var validityUser = checkUserName(username.val());
	var CheckBox = document.getElementById("checkBox");
	if(username.val() ===""){
		validityUser = "EmptyUsername";
	}
	console.log(validityPass,validityUser,CheckBox.checked);
	if(validityPass === "okpass" && validityUser ==="okusername" && CheckBox.checked === true)
	window.location.href = "signup-form.html";
	else {
	if(CheckBox.checked != true && validityPass != "okpass" && validityUser ==="okusername")
		$('#error-msg').text('لطفا پسوورد خود را صحیح وارد کنید و قوانین را تایید کنید.').css('display' , 'block');
	if (CheckBox.checked != true && validityUser ==="okusername" && validityPass === "okpass")
		$('#error-msg').text('لطفا قوانین را تایید کنید.').css('display' , 'block');
	if(CheckBox.checked != true && validityUser !="okusername" && validityPass === "okpass")
		$('#error-msg').text('لطفا نام کاربری را صحیح وارد کنید و قوانین را تایید کنید.').css('display' , 'block');
	if (CheckBox.checked === true && validityUser !="okusername" && validityPass != "okpass")
		$('#error-msg').text('لطفا نام کاربری و پسوورد خود را صحیح وارد کنید.').css('display' , 'block');
	if(CheckBox.checked === true && validityUser ==="okusername" && validityPass != "okpass")
		$('#error-msg').text('لطفا پسوورد خود را صحیح وارد کنید.').css('display' , 'block');
	if (CheckBox.checked != true && validityUser !="okusername" && validityPass != "okpass")
		$('#error-msg').text('انتخاب نام کاربری و رمز عبور مناسب و همچنین تایید قوانین الزامی است!').css('display' , 'block');
		}
}
function gotonext2(){
	var checkingMobile = checkmobile(mobileNumber.val());
	var checkingName = $('#signupNameInput').val();
	var EMail = $('#signupEmailInput').val();
		localStorage.setItem('EmailVerification' , EMail ) //storage Email of client for signup-verification-msg.html
	console.log(EMail);
	console.log(checkingName);
	if(checkingMobile === 'ok' && checkingName != "" && EMail !="" && validateEmail(EMail) === true){
		if(localStorage.getItem('registertype') === 'freelancer'){
 window.location.href = "signup-freelancer-skills.html" ; }
		else window.location.href = "signup-verification-msg.html";
	}

else if (checkingMobile != 'ok' || checkingName==="" || EMail==="" ){
	if(checkingName === "") {
		$('#nameError').show();
	}
	if(EMail ===""){
		$('#EmailError').text('لطفا ایمیل خود را وارد کنید').css('display' , 'block').css('color' , 'red');
	}
	if(validateEmail(EMail) ===false && EMail != ""){
		$('#EmailError').text('ایمیل شما نامعتبر است').css('display' , 'block').css('color' , 'red');

	}
	if(checkingMobile != 'ok'){
		$('#mobileError').text('شماره تماس نامعتبر است').css('display' , 'block').css('color' , 'red');
		
	}
	$("#ErrorMessage").show();	
}
}
	



//validation of characters
var checkPassword = function(passText){
	if (passText.length < 8) 
	{
		 return "پسورد شما باید حداقل شامل ۸ حرف باشد";	 
    } 
	else if (passText.length > 50)
	{
         return "پسورد شما باید حداکثر شامل ۵۰ حرف باشد";
		
    } 
	else if (passText.search(/\d/) == -1) {
 		return "پسورد شما باید حداقل شامل یک عدد باشد";
	} 
	else if (passText.search(/[A-Z]/) == -1) {
        return "پسورد شما باید حداقل شامل یک حرف انگلیسی بزرگ باشد";
	 
    }
	else if (passText.search(/[!\@\#\$\%\^\&\*\(\)\_\+]/) != -1) {
         return "پسورد شما دارای نماد های نامعتبر است";	
    }
    else return "okpass";
}

password.keyup(function(){
	var passStatus = checkPassword(this.value);
	if (passStatus === "okpass") 
	{
	
		$('#form-control-feedback-pass').text("پسورد شما مناسب می باشد").css('color' , '#3399ff');
	
		
    } 
	else
	{
       
		$('#form-control-feedback-pass').text(passStatus).css('display' , 'block').css('color' , 'red');
		
    }
});
username.keyup(function (){
	var UserNameX = checkUserName(this.value)
	if(UserNameX != "okusername"){
		
		$("#form-control-feedback-username").text(UserNameX).css('display' , 'block').css('color' , 'red').addClass('class' , 'has-danger');
	}
	else 
		$("#form-control-feedback-username").css('display' , 'none');
});
var checkUserName = function (userText){

	if (userText.search(/[!\@\#\$\%\^\&\*\(\)\+\;\']/) != -1)
	         return "نام کاربری شما دارای نماد های نامعتبر است";	
	if(userText === ""){
		return "لطفا نام کاربری خود را وارد کنید."
	}
	if(userText.match(/^[0-9a-zA-Z]/))
			return "okusername";
	if(userText.length < 4 )
			return "نام کاربری شما باید حداقل شامل ۴ کاراکتر باشد";
	   
	else 
		return " نام کاربری شما دارای نماد های نامعتبر است(نام کاربری باید تنها شامل حروف انگلیسی باشد)";	

}

var checkmobile = function(signUpForm) {
	
	signUpForm = persianToEnglish(signUpForm);
	
	if(signUpForm.search(/\d/) == -1 ){
		return 'شماره موبایل شامل کاراکتر های نامعتبر است';
	}
	if(signUpForm.match(/^\d{11}/)){
		return 'ok';
	}
	else {
		return 'شماره موبایل شما نامعتبر است' ;
}
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
VEmail.on('input' , function(){
	var checkMail = this.value;
	if(!validateEmail(checkMail)){
		$('#EmailError').text('ایمیل شما نامعتبر است').css('display' , 'block').css('color' , 'red');
	}
	else{
		$('#EmailError').css('display' , 'none');
	}
	
})


mobileNumber.on('input',function(){
	var mobile = checkmobile(this.value)
	if(mobile != 'ok'){
	
		$('#mobileError').text(mobile).css('display' , 'block').css('color' , 'red');
	}
	else{
		console.log('ok');
		$('#mobileError').css('display' , 'none');
	}
});
//----------------------------------------------------------------------------------------
									//Persian To English Numbers
//----------------------------------------------------------------------------------------
function persianToEnglish(value) {
  var newValue = "";
  for (var i = 0; i < value.length; i++) {
    var ch = value.charCodeAt(i);
    if (ch >= 1776 && ch <= 1785) // For Persian digits.
    {
      var newChar = ch - 1728;
      newValue = newValue + String.fromCharCode(newChar);
    } else if (ch >= 1632 && ch <= 1641) // For Arabic & Unix digits.
    {
      var newChar = ch - 1584;
      newValue = newValue + String.fromCharCode(newChar);
    } else
      newValue = newValue + String.fromCharCode(ch);
  }
  return newValue;
}

//-----------------------------------------------------------------
                    // AJAX For SignUp/In Wish-Work
//-----------------------------------------------------------------


