/*************************************
*
*             Ejercicios
*
**************************************/

console.log(`1. Crear un archivo .js con su nombre y dentro del mismo escribir un console.log con su nombre y otro con su apellido
2. Agregar otro console.log con su segundo nombre entre medio de los dos
`)
console.log(`Santiago Anrango`);
console.log('Santiago', 'Josué', 'Anrago');



/*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
1. Crear 5 variables cada una deberia tener un dato especifico (name, lastname, age, nationality, myPetName)
2. Escribir 4 console.log armando una frase con cada una de las variable.
3. Escribir 2 console.log armando una fase usando 2 o mas variables
`)
let name = 'Santiago', lastname = 'Anrango', age = 24, nationality = 'Ecuatoriano', myPetName = 'Rusia';
console.log(`Hola mi nombre es ${name}`)
console.log(`Mi apellido es ${lastname}`)
console.log(`Mi edad es ${age}`)
console.log(`Yo soy ${nationality}`)
console.log(`Que tal, yo soy ${name} tengo ${age}`)
console.log(`Soy ${nationality} tengo ${age} años y mi mascota se llama ${myPetName}`)


/*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
Strings:
1. Crear 3 variables cada una debe tener un dato especifico (name, age, nationality)
2. Escribir 1 console.log armando la siguiente frase "Hola me llamo ..., el doble de mi edad es ... y soy ..."
Boolean:
1. Crear 1 variable con el siguiente resultado, tu edad es mayor a 90 ?
Null and Undefined
1. Crear 2 variables cada una deberia tener un dato especifico (name, age)
2. Escribir un console.log con el siguiente resultado "Hola me llamo null y tengo undefined años"
`)
let nombre = 'Santiago', edad = 24 * 2, nacionalidad = 'Ecuatoriano';
console.log(`Hola me llamo ${nombre} el doble de mi edad es ${edad} y soy ${nacionalidad}`)

edad = 24;
edad >= 90 ? console.log('Tu edad es igual o mayor a', 90) : console.log('Tu edad es menor a', 90)

nombre = null, edad = undefined;
console.log(`Hola me llamo ${nombre} y tengo ${edad}`)


/*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
¿Cuál será el resultado de las siguientes expresiones?
1. 5 > 4 ==> true
2. "apple" > "pineapple" ==> false
3. "2" > "12" ==> false
4. undefined == null ==> true
5. undefined === null ==> false
`)
console.log(5 > 4)
console.log("apple" > "pineapple")
console.log("2" > "12")
console.log(undefined == null)
console.log(undefined === null)

/*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
Escribir la siguiente pregunta usando (if, else) y el operador ternario partiendo de la siguiente variable
let password = "myOldPassword"
Pregunta:
Esta contraseña es igual a "MyPassword1234" si es asi mostrar un console.log con el mensaje "Logged In" sino escribir
un console.log con el mensaje "Wrong Password"
2. Reescriba esta condición if usando el operador ternario '?':
`)
let password = "myOldPassword"
console.log(password)

if (password == "MyPassword1234") {
    console.log('Logged In')
} else {
    console.log('Wrong Password')
}

password == "MyPassword1234" ? console.log('Logged In') : console.log('Wrong Password')


/*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
¿Cuál es el resultado de OR?
console.log( null || 2 || undefined ) ==> 2
¿Cuál es el resultado de AND?
console.log( 1 && null && 2 ) ==> null
¿Cuál es el resultado de ! NOT?
console.log( !'Hola' ) ==> false
El resultado de OR AND OR
console.log( null || 2 && 3 || 4 ) ==> 4
`)

console.log(null || 2 || undefined)
console.log(1 && null && 2)
console.log(!'Hola')
console.log(null || 2 && 3 || 4)


/*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
Usa el bucle for para mostrar usando console.log números pares del 2 al 10 inclusive.
Remplazar este while por for (la salida debe ser la misma)
`)

console.log("Bucle For")
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
console.log(`
Bucle While
`)
let j = 2
while (j <= 10) {
    console.log(j)
    j += 2;
}


/*************************************
*
*             Ejercicios
*
**************************************/

console.log(`
1. Escribe el código utilizando if..else que corresponda al siguiente switch:
2. Reescribe el código utilizando solo un argumento switch:
`)
// 1
let navegador = 'Edge'
switch (navegador) {
    case 'Edge':
        console.log("¡Tienes Edge!");
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('Esta bien, soportamos estos navegadores también');
        break;

    default:
        console.log('¡Esperamos que esta página se vea bien!');
}

let navegador1
if (navegador1 == 'Edge') {
    console.log("¡Tienes Edge!");
} else if (navegador1 == 'Chrome') {
    console.log("¡Tienes Chrome!");
} else if (navegador1 == 'Firefox') {
    console.log("¡Tienes Firefox!");
} else if (navegador1 == 'Safari') {
    console.log("¡Tienes Safari!");
} else if (navegador1 == 'Opera') {
    console.log('Esta bien, soportamos estos navegadores también');
} else {
    console.log('¡Esperamos que esta página se vea bien!');
}

// 2
let a = 1

if (a == 0) {
    console.log(0);
}
if (a == 1) {
    console.log(1);
}

if (a == 2 || a == 3) {
    console.log('2,3');
}

let ab = 1;
switch (ab) {
    case 0:
        console.log(0)
        break;
    case 1:
        console.log(1);
        break;
    default:
        console.log('2,3');
        break;
}