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
//$("#i").click(function () //
		

    $('.main').before('<div class="main2"><p id="commentator">'+name_value+":"+'</p><p id="comment">'+textarea_value+'</p></div>'); 
    $('#textarea').val('');
$('#text').val('');

// alert(textarea_value);
}
});
$('#textarea_reset').click(function() {
$("textarea").val('');
});

//word count
//http://jsfiddle.net/yzLbh/
//input[maxlength]

$("#wordcount").each(function() {
    var $this = $(this);
    var maxLength = parseInt($this.attr('maxlength'));
    $this.attr('maxlength', null);
    
    var el = $("<span class=\"character-count\">" + maxLength + "</span>");
    el.insertAfter($this);
    
    $this.bind('keyup', function() {
        var cc = $this.val().length;
        
        el.text(maxLength - cc);
        
        if(maxLength < cc) {
            el.css('color', 'red');
        } else {
            el.css('color', null);
        }
    });
});



});
