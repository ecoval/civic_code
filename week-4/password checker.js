$(document).ready(function(){
    $("#myform").submit(function(event){
        event.preventDefault();
        var data = $("#myform").serializeArray();
        var passwordCheck = function(password){
        	if (password.length > 8) {
        		return "Your password is strong!"
        	}
        	else {
        		return "Your password is not strong enough!"
        	}
        }
        var password = data[3].value;
        $("#info").html(passwordCheck(password));
    });
 
});