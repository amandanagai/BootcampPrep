// $(function(){
// 	var $footer = $("footer");
// 	var $container = $("#container");
// 	var $nav = $(".nav li");
// 	var $listContainer = $(".list-container li:nth-child(3)");
// 	var $lastUlLis = $("ul li:last-child");
// 	debugger
// })

$(document).ready(function() {
	// var $lastParagraph = $("article p:last-child");
	// $lastParagraph.remove();
	$("article p:last-child").remove();
	var $newLastLiItem = $("<li>");
	$newLastLiItem.text("This is what I want to say");
	$("ol li").append($newLastLiItem);
	var $aside = $("aside");
	$aside.empty();
	var $newParagraph = $("<p>");
	$newParagraph.text("I'm sorry I ever thought lists were cool.")
	$aside.append($newParagraph);
	var $h1 = $("#title");
	$h1.css("fontSize", (Math.random()*100));

	$("img").on("click", function(e){
		$(e.target).remove();
	})
	var $colors = $("input");
	$(backgroundColor).css("backgroundColor", "rgb($colors.eq(0).val(), $colors.eq(1).val(), $colors.eq(2).val()")
});

