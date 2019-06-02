const fs = require('fs')
const express = require('express')
const app = express()
 

let cursos = [
{	id: 1001,
	nombre: 'Python avanzado',
	duracion: '60 horas',
	costo: 250000
},
{
	id: 1002,
	nombre: 'Redes y telecomunicaciones',
	duracion: '75 horas',
	costo: 300000

},
{
	id: 1003,
	nombre: 'Investigacion de Operaciones',
	duracion: '50 horas',
	costo: 120000
},
{
	id: 1004,
	nombre: 'Inteligencia Artificial',
	duracion: '90 horas',
	costo: 450000
}


]


let mostrarCurso=(i)=>{	
		let mensaje = 'El curso es: ' + cursos[i].nombre + '\n' +
			'Con id: ' + cursos[i].id + '\n' +
			'Su duracion es de: ' + cursos[i].duracion + '\n' +
			'Y tiene un costo de: ' + cursos[i].costo  + '\n' ;
		return mensaje
}

let buscarCurso=(id)=>{
	let curso = cursos.find(cr => cr.id === id,)
	if(curso == undefined) {
		console.log('El id del curso no existe' + '\n'+
			'Los cursos disponibles son: ' +'\n' )
		for(let i = 0; i < cursos.length; i++){
			setTimeout(() =>{	
				console.log(mostrarCurso(i));
				}
			,i*2000)}
	}
	else {
		let mensaje = 'El curso es: ' + curso.nombre + '\n' +
			'Con id: ' + curso.id + '\n' +
			'Su duracion es de: ' + curso.duracion + '\n' +
			'Y tiene un costo de: ' + curso.costo  + '\n' ;
		console.log(mensaje)
		
	}

}

let inscribir = (id,n,cc) =>{
	let curso = cursos.find(cr => cr.id === id,)
	if(curso == undefined) {
		console.log('El id del curso no existe' + '\n'+
			'Los cursos disponibles son: ' +'\n' )
		for(let i = 0; i < cursos.length; i++){
			setTimeout(() =>{	
				console.log(mostrarCurso(i));
				}
			,i*2000)}
	}
	else {
		console.log('Inscripcion exitosa')
		let msj = 'Felicidades ' + n + ' con cedula '+ cc + '\n' +
		'Ha sido inscrito al curso ' + curso.nombre + '\n' +
		'el cual tiene un valor de '+ curso.costo + 
		' y una duracion de ' + curso.duracion;
		app.get('/', function (req, res) {
  				res.send(msj)
				})
	 
		app.listen(3000)

	}
}

module.exports = {
	cursos,
	inscribir,
	mostrarCurso,
	buscarCurso
	

};