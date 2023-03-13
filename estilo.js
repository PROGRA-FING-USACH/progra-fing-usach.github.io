function definirEstilos(){
	var estilo = document.createElement("STYLE");
	var texto = document.createTextNode("\
		@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,300&display=swap');\
		#pTitulo{\
			font-size: 24px;\
			font-family: 'Roboto', sans-serif;\
			font-weight: 300;\
		}\
		#pTitulo2{\
			font-size: 22px;\
			font-family: 'Roboto', sans-serif;\
		}\
		#pDescripcion{\
			font-size: 16px;\
			font-family: 'Roboto', sans-serif;\
			text-align: justify;\
			margin-left: 10px;\
		}\
		#pDescripcionV{\
			font-size: 16px;\
			font-family: 'Roboto', sans-serif;\
			text-align: center;\
			margin-left: 10px;\
		}\
		#ulDescripcion{\
			font-size: 16px;\
			font-family: 'Roboto', sans-serif;\
			text-align: justify;\
		}\
	");
	estilo.appendChild(texto);
	document.head.appendChild(estilo);
}

/*
function llamarFuente(){
	var enlace = document.createElement("LINK");
	enlace.setAttribute("rel","stylesheet");
	enlace.setAttribute("href","https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
	document.head.appendChild(enlace);
}
*/
