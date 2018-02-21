function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s';
    var numero;
    var promedio;
	
	while (respuesta == 's')
    {
	numero = parseInt(prompt("Ingrese un número")) ;
	 acumulador += numero;
	 contador++
	 respuesta = prompt("Desea continuar?:");
}
promedio = acumulador/contador
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN