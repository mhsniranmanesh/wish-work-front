var password = $('#signupPassInput');
var username = $('#signupUsernameInput');
var mobileNumber = $('#mobilePassInput');
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
console.log('Y');




//$('#signup-form').submit(function(){
//	console.log('kir');
//	window.location.href = "signup-form.html";
//});
var form = $('#signup-form');
	console.log(form);
function gotonext(){
	var validityPass = checkPassword(password.val());
	var validityUser = checkUserName(username.val());
	if(validityPass === "okpass" && validityUser =="okusername")
	window.location.href = "signup-form.html";
	else
	$('#error-msg').show();
}
function gotonext2(){
	console.log('kir');
	var checking = checkmobile(mobileNumber.val());
	if(checking === 'ok' ){
		if(localStorage.getItem('registertype') === 'freelancer'){
 window.location.href = "signup-freelancer-skills.html" ; }
		else window.location.href = "signup-verification-msg.html";
	}

else $("#ErrorMessage").show();	

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

	if (userText.search(/[!\@\#\$\%\^\&\*\(\)\+]/) != -1)
	         return "نام کاربری شما دارای نماد های نامعتبر است";	
	else 
		return "okusername";
}

var checkmobile = function(signUpForm) {
	if(signUpForm.search(/\d/) == -1 ){
		return 'شماره موبایل شامل کاراکتر های نامعتبر است';
	}
	else {
		return 'ok' ;
}
}
mobileNumber.keyup(function(){
	var mobile = checkmobile(this.value)
	if(mobile != 'ok'){
		$('#mobileError').text(mobile).css('display' , 'block').css('color' , 'red');
	}
	else {
		$('#mobileError').css('display' , 'none');
	}
});
