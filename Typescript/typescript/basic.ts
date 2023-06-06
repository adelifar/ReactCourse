//primitve number,string,boolean
let age:number;
age=12;
// age='Tosinso'; error

let username:string;
username='MehdiAdeli';
// username=12;

let isOpen:boolean;
isOpen=false;


//complex array, object
let editors:string[];
editors=['vscode','notepad'];

let person:{
    name:string,
    age:number
};

person={
    name:'Mehdi',age:62
}

// person={
//     isEmployee=false;
// }        error

let people:{
    name:string,
    age:number
}[];

people=[{name:'Mehdi',age:62}]

//type inference
let url='tosinso.com';
// url=false;
// url=88;

let myNumber=18;
// myNumber='jjj';  //error

let unum:string |number | boolean;
unum='Mehdi Adeli';
unum=789;

let usernames:string | string[];

type Person={
    name:string,
    age:number
}

let p:Person;
let p2:Person[];

function mul(a:number,b:number)
 {
    return a*b;
}

function printValue(value) {
    console.log(value);
    
}


//generic
const insert=(arr:any[],value:any)=>{
    return [value,...arr];
}
const demoArray=[1,2,3,4];
const updated=insert(demoArray,0);      //[0,1,2,3,4]
updated[0].split(' ');

function insert2<T>(arr:T[],value:T) {
    return [value,...arr];
    
}
const demoArray2=[1,2,3,4];
const update2=insert2(demoArray2,5);
// update2[1].split(' ')

const secondArray=['r','d'];
const udpatedSecondArray=insert2(secondArray,'Mehdi'); //['Mehdi','r','d']