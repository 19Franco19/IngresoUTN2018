function mostrar()
{
	
	var EstaciondelAño;
	var Temperatura;

	EstaciondelAño= prompt("Ingrese una Estacion");
	Temperatura=prompt("Ingrese la temperatura");

	switch (EstaciondelAño)

	{
		case "invierno":
			if(Temperatura >= 1 && Temperatura <= 5)
			{
				alert("Que fresquete");
			}
			break;
		case "otoño":
			if (Temperatura == 15) 
			{
				alert("Esta lindo");
			}

			else if (Temperatura > 15 && Temperatura <= 21) 
			{
				alert("Esta re bueno");
			}
			 else if (Temperatura < 15) 
			 	{
			 		alert("Se vino el frio");
				}
			 if (Temperatura > 21) 
			 {
			 	alert("Mucho calor para el otoño");
			 }
			 break;


		case "primavera":
		case "verano":
			if(Temperatura > 32 )
			{
				alert("Es un horno");
			}
			else if (Temperatura < 32 && Temperatura > 20) 
			{
				alert("Que Calorcito");
			}	
			break;





	}






	
}
