function Mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var numero
	var respuesta='s';
    var contadorNeg


do
{
numero = parseInt(prompt("Ingrese un número")) ;

if(numero >= 0)
{
	positivo = positivo + numero;
}
else
{
	negativo = negativo * numero;
	contadorNeg++

}
respuesta = prompt("Desea continuar?:");

}while(respuesta == 's');

document.getElementById('suma').value=positivo;

 if(contadorNeg == 0)
 {
	 negativo = 0;
 }  
   
    

document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN