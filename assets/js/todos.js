// Check off todos by clicking
$("ul").on("click", "li", function(){
    // toggle completion: mark-out and gray
    $(this).toggleClass("completed");
        
});

//click on X to delete to do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        // grab new todo text from input
        var todoText = $(this).val()
        // create a new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});