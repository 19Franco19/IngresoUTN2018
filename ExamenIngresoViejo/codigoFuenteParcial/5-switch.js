//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var mesdelAño;
    
    mesdelAño=prompt("Ingrese un mes del año");

    switch (mesdelAño) 
    {
        case "Enero":
        case "Febrero":
        alert("Veranito!!!")
            break;
    
        default:
        alert("Extraño Enero y Febrero");
            break;
    }

}

