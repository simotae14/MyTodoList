// Spuntare i Todo Specifici Cliccando su di essi
$("li").click(function(){
	// attivo o disattivo stile per todo completato
	$(this).toggleClass("completed");
});

// Clicca su X per cancellare il todo
$("span").click(function(event){
	// dissolvenza e remove li
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});