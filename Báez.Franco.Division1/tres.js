function mostrar()
{
	var Importe;
	var Cantidad;
	var Nombre;
	var IVA;
	var ImporteConIVA;
	
	Importe=parseInt(prompt("Ingrese el Importe del producto: "));
	
	Cantidad=parseInt(prompt("Ingrese la Cantidad del producto: "));
	
	Nombre=prompt("Ingrese el nombre del producto: ");
	
	IVA=Importe * 0.21;
	ImporteConIVA= parseInt(Importe + IVA) * Cantidad;

	alert("Compro la cantidad de " + Cantidad + " del producto " + Nombre + " a un precio de " + Importe + " pagando el precio de " + ImporteConIVA + " con IVA incluido");
}
