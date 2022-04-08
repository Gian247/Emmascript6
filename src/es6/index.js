//-------------------Ultimos cambios realizado con la version 6-----------------

//**PARAMETROS POR DEFECTO


//ANTIGUA

function newFunction(name,age,country){
    var name=name || 'Gianfranco';
    var age =age || '32';
    var country=country || 'Perú';
    console.log(name,age,country);
}

//NUEVA FORMA

function newFunction2(name='Gian',age='12',country='Per'){
    console.log(name,age,country);
}

//Llamado a la funcion
//Si no se le pasan parametros toma los que estan por defecto definidos
newFunction2();
//Ahora le mandamos parametros distintos
newFunction2('Mati','35','veneco');


//** TEMPLATE LITERAL*/

//ANTIGUA

let hello="hello";
let world="Wordl";
let epicPhrase=hello+world;
console.log(epicPhrase);

//NUEVA FORMA

let epicPhrase2=`${hello} ${world} xd `; //comilla francesa es con alt gr +}
console.log(epicPhrase2);


//****MUltilinea */

//FORMA ANTIGUA
let lorem="fvfdvfevefv v verve rverve\n"+"Otra frase epica" ;

//NUEVA FORMA

let lorem2=`3er frase epica
ahora es una nueva frase epica
`;
console.log(lorem);
console.log(lorem2);


//*****ESTRUCTURACION DE ELEMENTOS */

let person={
    'name':'Oscar',
    'age':32,
    'country':"Peru"


}

//Forma antigua
console.log(person.name, person.age);

//NUeva  forma
let {name,age,country}=person;
console.log(name,age,country);


//**** UNir Arreglos*****/

let team1=['gian','maco','giu'];
let team2=['vale','jessica','cami'];

let education=['David',...team1,...team2]; //Permite unir los elementos de los arreglos
console.log(education);

//------let vs var  vs const------

//...Let: solo esta disponible en es Scope, el bloque de codigo donde es llamado

var hola='hola';//esta disponible de forma gobal

//Ejemplo

{
    var globalVar="global var";//GLobalVar si es accesible
}
{
    let globallet="global let";//NO es accesible porque esta definida en un bloque de codigo diferente
}
console.log(globalVar);
console.log(globallet);

const a='b';//constante que no cambia su valor




//****** PROPIEDAD DE OBJETOS MEJORADA*******/

//Forma antigua

let nombre='Oscar';
let edad=32;

Obj={nombre:nombre,edad:edad};

//NUeva forma

obj2={nombre,edad};//De esta forma automaticamnete a nombre le asigana el valor y a edad tambien el volor ingresado




/****FUNCIONES DE TIPO FLECHA *********/

const NAMES=[
    {nombre:'Gianfranco',edad:32},
    {nombre:'Giuliana',edad:15}
]

//FORMA ANTIGUA
//Recorremos el arreglo

let listOfNames=NAMES.map(function(item){
    console.log(item.nombre);
});

//NUEVA FORMA
//Recorremos el arreglo

let listOfNames2=NAMES.map(item=>console.log(item.nombre));

//OTRAS FORMA

const listOfNames3=(nombre,edad,pais)=>{
    //codigo que se necesita
}

const listOfNames4=name=>{
    //Bloque de codigo
}

const square=num=>num*num;


/*****  PROMESAS ******/

const helloPromise=()=>{//Asignamos una funcion
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hey!!');
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
 .then(response=>console.log(response))
 .then(()=>console.log('HOla'))
 .catch(error=>console.log(error));


/**********CLASES **********/

class calculator{
    //Metodo para inicializar la clase
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }
    //Creamos el metodo al cual se le pasan los valores que se quieren sumar 
    sum(valueA,valueB){
        this.valueA=valueA;
        this.valueB=valueB;
        return this.valueA+this.valueB;
    }

}

const calc=new calculator();
console.log(calc.sum(2,8));

//IMportando el valor desde el otro modulo secundario

import {hello} from './module';
hello();


//******Generator *******/

function* hello5(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}
const generatoHello=hello5();
//Recorre y recuerda el primer valor de la logica
console.log(generatoHello.next().value);
console.log(generatoHello.next().value);
console.log(generatoHello.next().value);