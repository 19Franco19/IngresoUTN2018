//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1;
    var num2;
    var mult;
    var suma;
    var resta;

    num1= prompt("Ingrese un primer numero");
    num2= prompt("Ingrese un segundo numero");
    num1=parseInt(num1);
    num2=parseInt(num2);
    if (num1 > num2)
    {
    resta= num1 - num2
    }

    else if (num1 < num2) 
    {
    suma= num1 + num2;
    }

    else
    {
    mult= num1 * num2;
    }


document.write("1-Multiplicacion de numeros iguales " + mult + "<br/>");
document.write("2-Resta de Numero 1 y Numero 2 " + resta + "<br/>");
document.write("3-Suma de Numero 1 y Numero 2 " + suma +  "<br/>");		
}

