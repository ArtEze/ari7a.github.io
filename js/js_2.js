﻿function agregar_estilo(){
	var l = document.createElement("link")
	l.href = "css/estilo.css" + "?" + r(10000000000)
	l.rel = "stylesheet"
	document.head.appendChild(l)
}
function mostrar(){
	document.body.style.display="block"
}
function principal(){
	document.querySelector("a").innerHTML = document.querySelector("meta").content
	agregar_estilo()
	setTimeout(mostrar,100)
}
principal()