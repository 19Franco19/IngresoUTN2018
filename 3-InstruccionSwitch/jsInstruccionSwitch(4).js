function Mostrar()
{var mesDelAño
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
 {

    case ("Enero"):
    case("Marzo"):
    case ("Mayo"):
    case("Julio"):
    case("Agosto"):
    case("Octubre"):
    case("Diciembre"):
    alert("Tiene 31 dias")
    break;

    case ("Febrero"):
    alert("Tiene 28 dias")
    break;

    
    default:
    alert("Tiene 30 dias")
    break;

    
    
 }
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN