function colar(msg){
	
	let textarea = document.getElementById("inputbuscador");
	textarea.value = msg;

	
	//const response = await navigator.clipboard.readText();
	//textArea.value = response;
	
}

let btcolar = document.getElementById("btcolar");
btcolar.addEventListener('click', async (e) => {
	e.preventDefault();
	let msg = await navigator.clipboard.readText();
	colar(msg);
});