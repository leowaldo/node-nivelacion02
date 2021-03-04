function sumar(a,b){/* funcion en javascript */
  return a+b;
} 
console.log(sumar(5,10));/*llamo la funcion y le paso los parametros ya no se usan ahora se usan las funciones flechas*/

const suma1=(x,y)=>{/*funcion flecha */
  return x+y;
}
console.log(suma1(20,10));/* llamado a la funcion flecha */

const suma2=(c,d)=> c+d;/*como es una funcion flecha q se puede resolver en una misma linea se puede hacer asi */
console.log(suma2(50,50));
console.log('Arrow Function');

function saludar(nombre){/*funcion saludar*/
  return `Hola ${nombre}`
}
console.log(saludar('Leowaldo'));

const saludar1=(nom)=>{
  return `hola${nom}`;
}
console.log(saludar('leo'));
const saludar2=(nome2)=> `Hola ${nome2} `;
console.log(saludar2('orochimaru'));
const saludar3 = nome3 => `otro saludo${nome3}`;/* funcion flecha mas directo en una linea  */
console.log(saludar3('Sasuke!'));
const saludar4=()=>'Hola Mundo!';/*sin parametros solo se colocan los parentesis */
console.log(saludar4());
