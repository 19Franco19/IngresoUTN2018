//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var Largo;
    var Ancho;
    var Perimetro;
    var metrosAlambre;
    Ancho = parseInt(document.getElementById("ancho").value);
    Largo  = parseInt(document.getElementById("largo").value);

    Perimetro = (Largo + Ancho) * 2;
    metrosAlambre = Perimetro * 6;

    alert("Se necesitan " +  metrosAlambre + " metros de alambre ");
}

