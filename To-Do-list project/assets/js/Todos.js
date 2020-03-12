//check out specific todos by clicking
$("ul").on("click","li",function(){
   $(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todos text from input
        var todosText =   $(this).val();
        //create a new li and add it to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todosText + "</li>");
        $(this).val("");
    }
})
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
})