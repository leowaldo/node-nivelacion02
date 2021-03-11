/*const personaje ={ creo el objeto personaje
  nombre: 'pepe',  atributos del objeto personaje
  apellido: 'Argento',
  profesion: 'zapatero',
  getDescripcion(){  metodo para obtener los atributos del personaje
    return `${nombre}${apellido} es${profesion}` devuelve los atritubos
  }

}
/*const nombre=personaje.nombre;
const apellido=personaje.apellido; con la destructuracion me ahorro estas lineas
const profesion=personaje.profesion; 
console.log(nombre,apellido,profesion); imprimo los atributos del objeto personaje

/*const {nombre,apellido,profesion, edad=50}=personaje;/*destructuracion agrego un atributo edad, y le agrego valor
console.log(nombre,apellido,profesion,edad);

/*const imprimrpersonaje=({nombre,apellido,profesion})=>{ funcion imprimir personaje
 console.log(nombre,apellido,profesion);
}

imprimrpersonaje(personaje); llamo a la funcion imprimir personaje*/
const personajes =['harry','germione','ron']; /*array personajes destructurar un array */
/*const p1=personajes[0];
const p2=personajes[1];
const p3=personajes[2];
console.log(p1,p2,p3);
 Destructurado queda asi*/
const[p3,p2,p1]=personajes;
console.log(p1,p2,p3);
console.log('destructuracion');