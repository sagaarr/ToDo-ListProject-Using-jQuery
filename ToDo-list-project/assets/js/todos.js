//there are two Different logic for this one is hard and leanthy
//and inefficient

// {{LOGIC 1}}
// $("li").click(function(){
//   // if li is gray
//   //we have to put rgb color to compare nothing will work
//   if($(this).css("color") ==="rgb(128, 128, 128)"){
//     $(this).css({
//       color:"black",
//       textDecoration:"none"
//     });
//   }
//
//   else{
//     //turn it gray
//     $(this).css({
//       color:"gray",
//       textDecoration:"line-through"
//     });
//   }
// });

//{{LOGIC 2}}
$("ul").on("click","li",function(){
  $(this).toggleClass("selected");
});

//click on X to detect todos
$("ul").on("click","span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
}) ;

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //creat a new li and add to const ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>")
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
