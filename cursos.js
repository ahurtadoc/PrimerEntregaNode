

const{cursos,mostrarCurso,inscribir,buscarCurso} = require('./datos')
 

const datos = {
	id: {
		demand: true,
		alias: 'i'
	},
	nombre: {
		demand: true,
		alias: 'n'
	},
	cedula: {
		demand: true,
		alias: 'c'
	}
}

const datoBuscar = {
		id: {
		demand: true,
		alias: 'i'
	}
}
const argv = require('yargs')
				.command('$0','Default command',(argv) => {
					for(let i = 0; i < cursos.length; i++){
						setTimeout(() =>{	
							console.log(mostrarCurso(i));
							}
						,i*2000)}
				})
				.command('inscribir','inscripcion cursos',datos,(argv)=>{
					inscribir(argv.id,argv.n,argv.cc)
				})
				.command('buscar','buscar un curso',datoBuscar,(argv)=>{
					buscarCurso(argv.id)
				})

				.argv


