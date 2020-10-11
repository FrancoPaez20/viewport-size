function tamVentana(){
	var tam = [0, 0];
	if (typeof window.innerWidth != 'undefined'){
		tam = [window.innerWidth,window.innerHeight];
	}
	else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth !='undefined' && document.documentElement.clientWidth != 0){
		tam = [document.documentElement.clientWidth, document.documentElement.clientHeight];
	}
	else{
		tam = [document.getElementsByTagName('body')[0].clientWidth, document.getElementsByTagName('body')[0].clientHeight];
	}
	document.getElementById('texto').innerHTML=`${tam[0]}px de ancho - ${tam[1]}px de alto`;
}
tamVentana();
window.addEventListener('resize', tamVentana);