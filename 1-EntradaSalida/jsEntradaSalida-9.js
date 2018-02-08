/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{var sueldo;
    var NuevoSueldo
    var aumento;
    
    sueldo= parseFloat (document.getElementById("sueldo").value);
    
    aumento = sueldo * 0.1;
    NuevoSueldo= sueldo + aumento;
    document.getElementById("resultado").value = NuevoSueldo.toFixed(0)
    
    
    
    
   
    


}
