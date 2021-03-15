/*************************************
*
*             Ejercicios
*
**************************************/

/* console.log(`
1. Reescriba la función utilizando Arrow Function y en el cuerpo re escribir el if por '?' o '||'
2. Escriba una función min(a,b) la cual devuelva el menor de dos números a y b.
    Por ejemplo min(2, 5) retorna 2
3. Escriba una función doble(a,b) la cual devuelva a duplicado por b.
    Por ejemplo doble(3, 2) retorna 6
4. Escribir las dos funciones del punto 2 y 3 usando funcion flecha.
`)

// 1.
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return console.log('No eres mayor de edad todavia');
    }
} */


/*************************************
*
*             Ejercicios
*
**************************************/

/* console.log(`
1. Escribe el código, una línea para cada acción:
    Crea un objeto user vacío.
    Agrega la propiedad name con el valor John.
    Agrega la propiedad surname con el valor Smith.
    Cambia el valor de name a Pete.
    Remueven la propiedad name del objeto.
2. Mostrar un console log con la suma de los salaries del objeto 2
3. Crea una función multiplyNumeric(obj) que multiplique todas las propiedades numéricas de obj por 2. (P.D. Usa typeof para verificar si hay un número aquí.)
`)

// 2.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

// 3
// Antes de la llamada
let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};

multiplyNumeric(menu);

//Después de la llamada console.log(menu) deberia devolver { width: 400, height: 600, title: 'Mi menú' } */


/*************************************
*
*             Ejercicios
*
**************************************/

/* console.log(`
1. Tenemos 5 operaciones de array.
    Crear un array con los items “Jazz” y “Blues”. // Jazz, Blues
    Agregar “Rock-n-Roll” al final. // Jazz, Blues, Rock-n-Roll
    Reemplazar el valor en el medio por “Classics”. // Jazz, Classics, Rock-n-Roll
    Colocar primero Rap y Reggae al array. // Rap, Reggae, Classics, Rock-n-Roll
2. Sumar los valores del siguiente Array 
    [12, 45, 32, 56, 190]
`) */


/*************************************
*
*             Ejercicios
*
**************************************/

/* console.log(`
1. A partir del Arreglo con users realizar las siguientes acciones
    - Remover los elementos en el indice 4, 3 y 1
    - Añadir 3 usuarios mas con las mismas propiedades (id, name, age)
    - Recorrer el nuevo array con usuarios y mostrar usando console.log el mensaje "Hola me llamo name y tengo age años"
    - Buscar un usuario que tenga 31 años y mostrar ese usuario por consola
    - Buscar todos los usuarios que se llamen Fran
    - Transformar la edad de todos los usuarios a 17 años
`)

// 1.
let users = [
    { id: 1, name: "Fran", age: 31 },
    { id: 2, name: "Katy", age: 18 },
    { id: 3, name: "Federico", age: 38 },
    { id: 4, name: "Maria", age: 24 },
    { id: 5, name: "John", age: 45 },
    { id: 6, name: "Fran", age: 7 },
]; */