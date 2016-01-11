$(document).ready(function() {

$('#login').click(function() {
alert("You need first to log in, in order to  log of");
});


//alert user to login first
$('#Search').click(function() {
alert("Please Login in first before you start your search");
});

$('#SearchB').click(function() {
alert("Please Login in first before you start your search");
});


$('#signinbtn').click(function() {
var usr_value = $("#usr").val();
var pwd_value = $("#pwd").val();
var n=usr_value.match(/@eurecom.fr/g);
var m=usr_value.indexOf("@");
var l=pwd_value.lenght;
 
if(usr_value == ''){
alert("Please login with your @eurecom.fr email address!")
}
else if((m == 0) || (n != "@eurecom.fr")) {
alert("Plese type a valid email.");
}
else if(pwd_value == '' || l < 6){
alert("Your password must be at least 6 characters long.");
}
else{
location.href = "page2.html";
}
});
});
