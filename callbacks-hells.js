const empleados= [
  {
    id:1,
    nombre:'Leo'
  },
  {
    id:2,
    nombre:'Marta'
  },
  {
    id:3,
    nombre:'Manuel'
  },
]
const sueldos=[
  {
    id:1,
    sueldo:1500
  },
  {
    id:2,
    sueldo:2000
  },
]
const getEmpleadoById=(id,callback)=>{
  const empleado=empleados.find((e)=>e.id===id);/*la funcion find en Js sirve para encontrar algo en el array */
  if (empleado){
    callback(empleado);
  }
}
const id=1;
getUsuarioByid(id,({nombre})=>{
  console.log(`El emleado:${nombre}.....`);
});