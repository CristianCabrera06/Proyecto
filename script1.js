document.getElementById('hablar').addEventListener("click",()=>{
	decir(document.getElementById("texto1").value);
});
function decir(texto1) {
	speechSynthesis.speak(new SpeechSynthesisUtterance(texto1));
}