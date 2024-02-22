/*let nombreVzriable = 'valor variable'; 
var nombreVzriable2 = 10; 

let object = {
    propiedad1: 10,
    propiedad2: 'valor 2',
    propiedadobjeto: {
        propiedad4: ['valor', 'valor2', 'valor3'],
        propiedad5: 'valor propiedad 5'
    }

}; 

///console.log(object); 
//console.log(object.propiedad1); 
//console.log(object.propiedadobjeto.propiedad5); */

/*
function nombreFuncion(){
    console.log('ejecutando funcion "nombreFuncion"'); 
}

nombreFuncion(); 

function nombreConParametros(nombre, apellido, edad){
    let text = "nombre: " + nombre + ", apellido: " + apellido + "edad: " + edad; 
    console.log(text); 


    nombreFuncion(); 

    nombreConParametros('mauricio', 'flores', 26)
}

/**
 * retoma el cuadrado el numero dado 
 * @param {*} number 
 * @returns 
 */

/*
function square (number){
    return number * number; 
}


/**
 * retorna al cubo del numero dado 
 * @param {*} number 
 * @returns 
 */
/*function cube (number){
    return number * number * number;
}

let square8 = square(8); 
console.log(cube(8)); 
*/

//for 
/*for (let index = 0; index <11; index ++ ){
    let number = 10 * index; 
    console.log(number); 
}
*/

//function 
function taFor (tabla, limite){
    for (let index = 0; index< limite; index++){
        let number = tabla * index; 
        console.log(number); 
    }
}



//while
/*let indexWhile = 0; 
while (indexWhile < 11){
    let number = indexWhile * 10;
    console.log(number); 
    indexWhile++; 
}
*/

//function 

function taWhile (tabla, limite){
    let indexWhile = 0; 
    while (indexWhile<11){
        let number= indexWhile * 10; 
        console.log(number); 
        indexWhile++;
    } 
}

//do-while 
/*let indexDoWhile = 0; 
do{
    let number = indexDoWhile * 10; 
    console.log(number); 
    indexDoWhile++; 

} while (indexDoWhile < 10);  
*/

//fuction 
function taDoWhile (tabla, limite){
    let indexDoWhile = 0; 
    do{
        let number = indexDoWhile * tabla; 
        console.log(number);
        indexDoWhile++; 
    } while (indexDoWhile<limite); 
}