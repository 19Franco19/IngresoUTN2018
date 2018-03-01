//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var nota;
    var sexo;
    var promedio;
    var notaBaja;
    var contvaronesAprobado = 0;
    var flag = 0
    var acumNotas = 0
    
    for( var i = 0; i < 6 ; i++)
    {
    nota = parseInt(prompt("Ingrese Nota Del Alumno"));
    
    while(nota < 0 || nota > 10)
    { 
    nota=parseInt(prompt("Error. La nota debe estar entre 0 y 10 Reingresar la nota"));
    }
  
   sexo=prompt("Ingrese el sexo");

   while (sexo != 'f' && sexo != 'm')
   {
       sexo=prompt("Error. El sexo debe ser f o m. Reingrese el sexo");
   }

   acumNotas += nota;

    if( nota < notaBaja || flag == 0)
    {
    notaBaja = nota;
    flag = 1
    }

    if(nota >= 6 && sexo == 'm')
    {
    contvaronesAprobado++;
    }

}
promedio= acumNotas / 6

alert("El promedio de las notas totales es " + promedio + " La nota mas baja es " + notaBaja + " Y la cantidad de varones con 6 o mas es " + contvaronesAprobado);

}
