// alert("connected");
console.log('connected to html');
//to get a line through
$("ul").on("click","li",function(){
	$(this).toggleClass("line-thru");
})

//get that particular li deleted
$("ul").on("click","button",function(event){
	$(this).parent().remove();

	// for stopping the furthur triggering of line through
	event.stopPropagation();
})

//Take input text and add them!
$("input[type='text']").keypress(function(){
       if(event.which===13)
       {var task=$("input[type='text']").val();
       	$("ul").append("<li><button><i class='fa fa-times'></i></button>"+ task +"</li>");
       	$(this).val("");
       }  
});  

//toggle form
$(".fa-plus").click(function(){
	$("input").fadeToggle();
})

