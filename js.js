const puntos = 0;

document.addEventListener("keydown", function (event) {
	if (event.key === "ArrowUp") {
		console.log(`arriba`);
        puntos++;
        console.log(puntos);
	}
	else if (event.key === "ArrowDown") {
		console.log(`abajo`);
        puntos++;
        console.log(puntos);
	}
    else{
        
    }
});
