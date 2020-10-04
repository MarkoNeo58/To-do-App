// switching style on <li></li>
$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

//remove li
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    // disable event bubbling
    event.stopPropagation();
});

//adding new todo
$("input[type='text']").keypress(function(event){
    // if we press enter
    if(event.which === 13){
        // taking the value
        let result = $(this).val();
        // making new <li></li>
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + result + "</li>");
        //clean input
        $(this).val("");
    }
});

// plus sign functionality
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});