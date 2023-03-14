function definirEstilos(){
	var estilo = document.createElement("STYLE");
	var texto = document.createTextNode("\
		@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');\
		:root {\
  			--color1: #17625b;\
  			--color2: #e99119;\
  			--color3: #2ec4b6;\
  			--color4: #90f9ef;\
  			--color5: #114f48;\
			}\
		#pHeader{\
			text-transform: uppercase;\
			font-size: 24px;\
			font-family: 'Poppins', sans-serif;\
			font-weight: 300;\
			background-image: linear-gradient(to left, var(--color3), var(--color5));\
			color: transparent;\
  			background-clip: text;\
  			-webkit-background-clip: text;\
		}\
		\
		#pTituloSeccion{\
			text-transform: uppercase;\
			font-size: 24px;\
			font-family: 'Poppins', sans-serif;\
			font-weight: 700;\
			border-left: 5px solid var(--color3);\
			padding: 5px;\
		}\
		\
		#pTituloTema{\
			color: var(--color2);\
			font-size: 22px;\
			font-weight: 300;\
			font-family: 'Poppins', sans-serif;\
			border-left: 5px solid var(--color2);\
			margin-left: 15px;\
			padding: 5px;\
		}\
		\
		#pSubtitulo{\
			color: var(--color1);\
			font-size: 20px;\
			font-family: 'Poppins', sans-serif;\
			font-weight: 500;\
			margin-left: 15px;\
			border-left: 5px solid var(--color3);\
			padding: 5px;\
		}\
		\
		#pDescripcion{\
			font-size: 16px;\
			font-family: 'Poppins', sans-serif;\
			text-align: justify;\
			margin-left: 20px;\
		}\
		#pDescripcionV{\
			font-size: 16px;\
			font-family: 'Poppins', sans-serif;\
			text-align: center;\
			margin-left: 10px;\
		}\
		#ulDescripcion{\
			font-size: 16px;\
			font-family: 'Poppins', sans-serif;\
			text-align: justify;\
		}\
		\
		#pHyperlink {\
			box-shadow: inset 0 0 0 0 var(--color2);\
			color: var(--color2);\
			margin: 0 -.25rem;\
			padding: 0 .25rem;\
			transition: color .3s ease-in-out, box-shadow .3s ease-in-out;\
		}\
		#pHyperlink:hover {\
			box-shadow: inset 500px 0 0 0 var(--color2);\
			color: white;\
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
