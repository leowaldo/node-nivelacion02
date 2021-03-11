setTimeout(()=>{/*un callback es una funcion q se pasa como parametro a otra funcion */
  console.log('Hola Mundo');

},2000)/*va a ejecutar una funcion callback despues de un determinado tiempo, el primer parametro es la funcion callback y el segundo es el tiempo */ 
const saludar=()=>{
  console.log('Hola Mundo nuevo');
}
setTimeout(saludar,2000);

const getUsuarioByid=(id,callback)=>{/*callback el nombre de la funcion puede ser cualquier otro nombre */
  const user={ /*defino un objeto usuario*/
      id, /*ID del objeto usuario */
      nombre:'leowaldo'/*nombre del usuario */ 
  }
    setTimeout(()=>{
      callback(user);
    },1000);
}
getUsuarioByid(10,({nombre,id})=>{/*simulamos el ID 10 y nos debe indicar el nombre de ese usuario*/
  console.log(`nombre: ${nombre} Id: ${id}`);
});
