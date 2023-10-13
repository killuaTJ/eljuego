const btnDepartamentos = document.getElementById('btn-departamentos'),
	  btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
	  grid = document.getElementById('grid'),
	  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
	  contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
	  esDispositivoMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover', () => {
	if(!esDispositivoMovil()){
		grid.classList.add('activo');
	}
});

grid.addEventListener('mouseleave', () => {
	if(!esDispositivoMovil()){
		grid.classList.remove('activo');
	}
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
		if(!esDispositivoMovil()){
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		};
	});
});

// EventListeners para dispositivo movil.
document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
	e.preventDefault();
	if(contenedorEnlacesNav.classList.contains('activo')){
		contenedorEnlacesNav.classList.remove('activo');
		document.querySelector('body').style.overflow = 'visible';
	} else {
		contenedorEnlacesNav.classList.add('activo');
		document.querySelector('body').style.overflow = 'hidden';
	}
});

// Click en boton de todos los departamentos (Para version movil).
btnDepartamentos.addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.add('activo');
	btnCerrarMenu.classList.add('activo');
});

// Boton de regresar en el menu de categorias
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
	e.preventDefault();
	grid.classList.remove('activo');
	btnCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		if(esDispositivoMovil()){
			contenedorSubCategorias.classList.add('activo');
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		}
	});
});

// Boton de regresar en el menu de categorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		contenedorSubCategorias.classList.remove('activo');
	});
});

btnCerrarMenu.addEventListener('click', (e)=> {
	e.preventDefault();
	document.querySelectorAll('#menu .activo').forEach((elemento) => {
		elemento.classList.remove('activo');
	});
	document.querySelector('body').style.overflow = 'visible';
});

/*JS de POP*/
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
overlay = document.getElementById('overlay'),
popup = document.getElementById('popup'),
btnCerrarPopup= document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});
btnCerrarPopup.addEventListener('click', function(){
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

//Mostrar Informacion
function mostrarv(){
	document.getElementById('infov').style.display = 'block';
	ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrare(){
	document.getElementById('infoe').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrar8b(){
	document.getElementById('info8b').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrar3d(){
	document.getElementById('info3d').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarns(){
	document.getElementById('infons').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrari(){
	document.getElementById('infoi').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarm(){
	document.getElementById('infom').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarr(){
	document.getElementById('infor').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrara(){
	document.getElementById('infoa').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrard(){
	document.getElementById('infod').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarf1(){
	document.getElementById('infof1').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarf2(){
	document.getElementById('infof2').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarf3(){
	document.getElementById('infof3').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarf4(){
	document.getElementById('infof4').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarf5(){
	document.getElementById('infof5').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarf6(){
	document.getElementById('infof6').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarf7(){
	document.getElementById('infof7').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarli(){
	document.getElementById('infoli').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostraris(){
	document.getElementById('infois').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarad(){
	document.getElementById('infoad').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarmx(){
	document.getElementById('infomx').style.display = 'block';
		ocultarcub();
	document.getElementById('pantalla').style.display = 'none';
}
function mostrarcub(){
document.getElementById('pantalla').style.display = 'block';
}
//Ocultar Info
function ocultarv(){
	document.getElementById('infov').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultare(){
	document.getElementById('infoe').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultar8b(){
	document.getElementById('info8b').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultar3d(){
	document.getElementById('info3d').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarns(){
	document.getElementById('infons').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultari(){
	document.getElementById('infoi').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarm(){
	document.getElementById('infom').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarr(){
	document.getElementById('infor').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultara(){
	document.getElementById('infoa').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultard(){
	document.getElementById('infod').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarf1(){
	document.getElementById('infof1').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarf2(){
	document.getElementById('infof2').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarf3(){
	document.getElementById('infof3').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarf4(){
	document.getElementById('infof4').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarf5(){
	document.getElementById('infof5').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarf6(){
	document.getElementById('infof6').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarf7(){
	document.getElementById('infof7').style.display = 'none';
	mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarli(){
	document.getElementById('infoli').style.display = 'none';
		mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultaris(){
	document.getElementById('infois').style.display = 'none';
		mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarad(){
	document.getElementById('infoad').style.display = 'none';
		mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarmx(){
	document.getElementById('infomx').style.display = 'none';
		mostrarcub();
	document.getElementById('pantalla').style.display = 'block';
}
function ocultarcub(){
document.getElementById('pantalla').style.display = 'none';
}