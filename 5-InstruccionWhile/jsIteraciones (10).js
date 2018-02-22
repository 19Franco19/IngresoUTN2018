function Mostrar()
{

	
	//declarar contadores y variables 
	
	var numero
	var respuesta;
    var contNeg=0;
    var sumaNeg=0;	
    var sumaPos=0;
    var contPos=0;
    var contCeros=0;
	var contPares=0;
	var promPos;
	var promNeg;
	var diferencia;
	
	do
	{
    numero= parseInt(pormpt("Desea continuar?:"));

    if(numero > 0 )
    {
	sumaPos += numero;
	contPos++
    }
	
    else if (numero < 0);
    {
	sumaNeg += numero
	cont++
    }
    
else
    
	contCeros++
    

    if(numero % 2 == 0);
    {
     contPares++
    }

	
	

    respuesta = prompt("Desea continuar?:");

}   while(respuesta == 's');

promPos= sumaPos / contPos
promNeg= sumaNeg / contNeg
diferencia= sumaPos - sumaNeg
    

document.write("1-Suma de los negativos" + sumaNeg + "<br/>");
document.write("2-Suma de los Positivos" + sumaPos + "<br/>");
document.write("3-Cantidad de Positivos" + contPos + "<br/>");
document.write("4-Cantidad de Negativos" + contNeg + "<br/>");
document.write("5-Cantidad de Ceros" + contCeros + "<br/>");
document.write("6-Cantidad de numeros Pares" + contPares + "<br/>");
document.write("7-Promedio de Positivos" + promPos + "<br/>");
document.write("8-Promedio de Negativos" + promNeg + "<br/>");
document.write("9-Diferencia entre Positivos y Negativos" + diferencia + "<br/>");

}
	
	
	



//FIN DE LA FUNCIÓN