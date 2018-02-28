function Mostrar()
{
    var numero;
    var contDivisores = 0;
    var i;

 numero= parseInt(prompt("Ingrese un numero: "));

for (var i = 1 ; i <= numero  ; i++ )
{
    if( numero % i == 0 ) 
{
    contDivisores++;
    console.log( i );
}

}

console.log("Se encontraron" +  contDivisores  + "numeros divisores");



}//FIN DE LA FUNCIÓN