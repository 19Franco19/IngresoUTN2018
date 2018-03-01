//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var Lado;
	var perimetro;

    Lado=parseInt(document.getElementById("lado").value);
    perimetro= Lado * 3

    alert("El Perimetro de este triangulo equilatero es " +  perimetro);

}

