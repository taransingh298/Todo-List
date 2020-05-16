$("ul").on("click", "li", function(){ // when li is clicked inside of ul run this function
	/*if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
			color: "black",
			textDecoration: "none"
		});
	}
	else{
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}*/

	// by toggling a class
	$(this).toggleClass("select");
});


// deleting list
$("ul").on("click" , "span" , function(event){
	//alert("clicked on span");
	$(this).parent().fadeOut(500 , function(){
		$(this).remove();
	});
	// as soon as JS read the statement it goes forward it don't wait for the statement to perform delay
	event.stopPropagation();

});

// below code was written to show the effect of event propagation

/*
$("li").click(function(){
	alert("clicked on li");
});

$("ul").click(function(){
	alert("clicked on ul");
})

$("#container").click(function(){
	alert("clicked on container");
})
*/

// adding new list elements

$("input[type = 'text']").keypress(function(event){
	 if(event.which === 13){
	 	var todoText = $(this).val();
	 	$(this).val("");
	 	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
	 }
});


$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
});