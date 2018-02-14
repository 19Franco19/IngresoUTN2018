function Mostrar()
{var nota
	//Genero el número RANDOM entre 1 y 10 
nota= document.getElementById("FormIngreso").value;
nota = Math.floor(Math.random() * 10) + 1;
if(nota >= 9 )
{alert("Exelente" + nota);
}
else if(nota >= 4)
{
	alert("Aprobo" + nota);
}
else(nota <= 3);

alert("Vamos, la proxima se puede" + nota);




}//FIN DE LA FUNCIÓN