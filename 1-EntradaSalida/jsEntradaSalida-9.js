/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{var sueldo;
    var resultado;
    var aumento;
    var multiplicacion;
    var division;
    sueldo= document.getElementById("sueldo").value;
    sueldo= parseInt (sueldo);
    multiplicacion= sueldo * 10;
    multiplicacion= parseInt (multiplicacion) 
    division= multiplicacion / 100;
    division= parseInt (division)
    document.getElementById("resultado").value = resultado;
    aumento= sueldo + division;
    aumento = parseInt (aumento);
    resultado = aumento;
    resultado = parseInt (resultado);
    
   
    


}
