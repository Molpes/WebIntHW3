$(document).ready(function() {
// Function to get input value.
$('#text_value').click(function() {
var text_value = $("#text").val();
if(text_value=='') {
alert("Enter Some Text In Input Field");
}else{
alert(text_value);
}
});


$('#text_reset').click(function() {
$("#text").val('');
});


// To get value of textarea.
$('#textarea_value').click(function() {
var textarea_value = $("#textarea").val();
var name_value = $("#text").val();
if(textarea_value=='') {
alert("Enter Some Text In Textarea");
}else{
<!-- $("#i").click(function () { -->
		

    $('.main').before('<div class="main2"><h1>'+name_value+'</h1><p>'+textarea_value+'</p></div>'); 
    $('#textarea').val('');
$('#text').val('');

<!-- alert(textarea_value); -->
}
});
$('#textarea_reset').click(function() {
$("textarea").val('');
});
});
