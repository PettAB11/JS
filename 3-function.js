// Las funciones son procedimientos, un conjunto de sentencias o pasos que realizarán una tarea o cálculo con ciertos valores.

// Tenemos dos tipo de funciones en js, function Declaration y function Expression 

// el nombre reservado de function y parametros que recibira esa function 

function miFuncion() { // function declaration Declarativas expresión 
    return 3; 
}

miFuncion(); // mandamos llamar la funcion

var miFuncion = function(a,b) {  // function Expression (también conocidas como funciones anónimas)
    return a + b;
}

miFuncion(); // mandamos llamar la variable como funcion


/* ============================= */


function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);  // template strings (Plantillas de cadena de texto)
}


function suma(a,b) {  // está funcion recibe 2 parámetros, que se convierten en un placeholder de valores que se pueden utilizar dentro de la función.
    var resultado = a + b; 
}

// Return, cómo regresamos un valor con una function. 



function suma(a,b) {
    var resultado =  a + b; 
    return resultado;
}

function suma(a,b) {
    return a + b; 
}

suma(20, 30); 

/* ¡Hola, Platzinauta! Por favor ignora la palabra export que agregamos antes de la función solution, la necesitamos para ejecutar las pruebas de tu código. Por ahora no te preocupes por eso, más adelante en tu ruta de aprendizaje aprenderás a profundidad cómo funciona. ¡Mucha suerte en tu reto! */

export function solution(valor) {
    return typeof valor
}
