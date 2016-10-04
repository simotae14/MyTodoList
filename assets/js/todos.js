// Spuntare i Todo Specifici Cliccando su di essi
$("li").click(function(){
	// attivo o disattivo stile per todo completato
	$(this).toggleClass("completed");
});