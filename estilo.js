function definirEstilos(){
	var estilo = document.createElement("STYLE");
	var texto = document.createTextNode("\
		@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\
		
		:root {\
  			--color1: #2EC4B6;\
  			--color2: ##E99119;\
		}\

		#pTitulo{\
			font-size: 24px;\
			font-family: 'Roboto', sans-serif;\
			font-weight: lighter;\
		}\
		#pTitulo2{\
			font-size: 22px;\
			font-family: 'Roboto', sans-serif;\
		}\

		#pTituloUnidad{\
			font-size: 22px;\
			font-family: 'Roboto', sans-serif;\
		}\


		#pTituloTema{\
			font-size: 22px;\
			font-family: 'Roboto', sans-serif;\
    			font-weight: bold;\
    			border-left: 5px solid var(--color1);\
    			text-transform: uppercase;\
    			padding: 5px;\
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
