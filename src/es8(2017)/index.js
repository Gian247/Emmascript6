/******ENTRIES ******/

//Crea un arreglo a partir de un objeto
const data={
    fronted:'Gianfranco',
    backend:'Mati',
    desing:'Ani',
};

const entries=Object.entries(data);
console.log(entries);
//Tambien se usa para saber cuantos elemntos hay
console.log(entries.length);



/*******OBJET VALUES **********/

//Crea un arreglo con los valores del objeto

const data2={
    fronted:'Gianfranco',
    backend:'Mati',
    desing:'Ani',
};

const values=Object.values(data2);
console.log(values);



//******** padStart*******/


//Se le indica cuantos espacion tiene que tneer el arreglo y si falta los rellena con lo que le indiquemos en el parametro

const string='hello';
console.log(string.padStart(20,'xdxdx'));
console.log(string.padEnd(20,'xdxdx'));



/******************Asin aweit **********/



const helloWorld=()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=> resolve('Hello Wolrd'),3000)
        :reject(new Error('Test error'))
    })
}

const helloAsync=async ()=>{
    const hello=await helloWorld();
    console.log(hello);
}

helloAsync();

