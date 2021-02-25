/*const personaje ={
  nombre: 'pepe',
  apellido: 'Argento',
  profesion: 'zapatero',
  getDescripcion(){
    return `${nombre}${apellido} es${profesion}`
  }

}
/*const nombre=personaje.nombre;
const apellido=personaje.apellido; con la destructuracion me ahorro estas lineas
const profesion=personaje.profesion; */

/*const {nombre,apellido,profesion}=personaje;/*destructuracion */

/*const imprimrpersonaje=({nombre,apellido,profesion})=>{
 console.log(nombre,apellido,profesion);
}

imprimrpersonaje(personaje);*/
const personajes =['harry','germione','ron'];
/*const p1=personajes[0];
const p2=personajes[1];
const p3=personajes[2];
console.log(p1,p2,p3);
 Destructurado queda asi*/
const[p3,p2,p1]=personajes;
console.log(p1,p2,p3);