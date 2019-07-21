$(function(){
    $("#name").keyup(function(){
        $("#headText").text("Hello " + $("#name").val());
    })
})