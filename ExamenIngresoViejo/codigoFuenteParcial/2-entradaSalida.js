//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var Precio;
    var precioFinal;
    
    Precio = prompt("El precio es?");
    
    precioFinal= Precio * 1.21

    parseInt(document.getElementById("importe").value =precioFinal);
}

