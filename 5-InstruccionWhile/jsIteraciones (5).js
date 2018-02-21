function Mostrar()
{ var sexo

 sexo = prompt("ingrese f ó m .");
 var sexo= sexo.toLowerCase()
while (!(sexo == 'f' || sexo == 'm' ))

{
sexo = prompt("Error, ingrese f o m")

}
document.getElementById("Sexo").value = sexo;

}//FIN DE LA FUNCIÓN