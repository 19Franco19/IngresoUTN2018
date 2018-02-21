function Mostrar()
{
// declarar variables
	var flag=0;
	var numero;
	var respuesta='s';
    var max; 
	var min
	
	do
	{
	numero = parseInt(prompt("Ingrese un número")) ;
    
	if(numero > max || flag == 0)
	{
     max = numero;
	}

	if(numero < min || flag == 0)
	{
	 min = numero;
	 flag = 1; 
	} 

    respuesta = prompt("Desea continuar?:");

	 }while (respuesta == 's');

	 document.getElementById("maximo").value = max;
	 document.getElementById("minimo").value = min;




}//FIN DE LA FUNCIÓN