
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var CantidadLitros;

	ancho=parseInt(prompt("Ingrese el Ancho"));
	largo=parseInt(prompt("Ingrese el Largo"));
	perimetro= ancho + ancho + largo + largo
	CantidadLitros= perimetro * 3;

	alert("El perimetro es " + perimetro + "Y si necesitan " + CantidadLitros + " de Pintura" );
}
