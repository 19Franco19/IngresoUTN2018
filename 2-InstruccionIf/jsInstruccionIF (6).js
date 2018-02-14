function Mostrar()
{var edad
//tomo la edad  
edad= document.getElementById("edad").value
if(edad <13)
{
    alert("Niño")
}
else if(edad < 18)
{
    alert("Es adolescente");
}
else
alert("Adulto");
}//FIN DE LA FUNCIÓN