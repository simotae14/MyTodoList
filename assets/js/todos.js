// Spuntare i Todo Specifici Cliccando su di essi
$("ul").on('click', "li", function(){
	// attivo o disattivo stile per todo completato
	$(this).toggleClass("completed");
});

// Clicca su X per cancellare il todo
$("ul").on('click', "span", function(event){
	// dissolvenza e remove li
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// aggiungo un listener sull'input text che
// esegua un'istruzione ad ogni inserimento da 
// tastiera
$("input[type='text']").keypress(function(event){
	// se premo INVIO
	if(event.which === 13){
		// estraggo il testo del nuovo todo dall'input 
		var todoText = $(this).val();
		//e creo un nuovo li e aggiungilo all'ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
		// e poi resetto l'input
		$(this).val("");

	}
});