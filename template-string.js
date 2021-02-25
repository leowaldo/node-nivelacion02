const nombre = 'pepe';
const real='guillermo';
const salida=nombre+' '+real;/*como se concatenaba anteriormente  */
console.log(salida);
const salida2=`${nombre} ${real}`;/* ahora con template string queda concatenado*/
console.log(salida2);
console.log(salida===salida2);/*verifica si son iguales*/ 
console.log('template string');