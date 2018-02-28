/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var Largo;
var Ancho;
var cantAlambre;
var Perimetro;

Largo=parseInt(document.getElementById("Largo").value);
Ancho=parseInt(document.getElementById("Ancho").value);
Perimetro= Largo + Largo + Ancho + Ancho
cantAlambre= Perimetro * 3
alert("La cantidad de alambre necesaria es " + cantAlambre + " metros");
}
function Circulo () 
{
	var Radio;
    var Perimetro;
    var cantAlambre;
    Radio= parseInt(document.getElementById("Radio").value);
    Perimetro= 2 * 3.14 * Radio
    cantAlambre= Perimetro * 3
    alert("La cantidad de alambre necesaria es " + cantAlambre + "metros");
}
function Materiales () 
{
	var Largo;
    var Ancho;
    var Superficie;
    var cantCemento;
    var cantCal;
    Largo=parseInt(document.getElementById("Largo").value);
    Ancho=parseInt(document.getElementById("Ancho").value);
    Superficie= Largo * Ancho
    cantCal= 3 * Superficie
    cantCemento= 2 * Superficie
    alert("Para una superficie de " + Superficie + " metros cuadrados, se necesitan " + cantCemento + " Bolsas de cemento y " + cantCal + " Bolsas de cal ")
}