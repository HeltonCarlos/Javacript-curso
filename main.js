/*classe*/
class Matematica{
    static soma(a,b){
        return a+b;
    }
}
console.log(Matematica.soma(1,2));

/*função*/
function teste(x) {
    let y = 2;
    if(x>5){
        console.log(x,y)
  }
  }
teste(10);

/*percorrer array*/
const arr=[1,2,3,4,5,6];
const newArr = arr.map(function(item){
    return item *2;
})
console.log(newArr);

/*filtrar-buscar numeros pares*/
const filter = arr.filter(function(item){
    return item %2===0;
})
console.log(filter);

/*arrow e diminuição de codigo*/
const arr1=[1,2,3,4,5,6];

const newArr1 = arr1.map(item=> item*2);
console.log(newArr1);

/*desestruturação*/
const usuario={
    nome: 'Helton',
    idade: 29,
    endereco:{
        cidade:'Paulo Afonso',
        estado:'BA',
    }
}
const{nome,idade,endereco:{cidade}}=usuario

console.log(nome);
console.log(idade);
console.log(cidade);
//resto

let alunos={
    sobrenome:'BRITO',
    idade:29,
    cidade:'Maceio'
};
let {  sobrenome, ...resto} = alunos;
console.log(nome);
console.log(resto);

//SPREAD

const arr01=[1,2,3];
const arr02=[4,5,6];

const arr3=[...arr01,...arr02];
console.log(arr3);
//segundo modelo spread
const carros={
    fiat:'uno',
    ford:'fordka',
    honda:'honda',
}

const carros1={...carros, fiat:'siena'}
console.log(carros1);


//template literals
const cachorro='pluto';
const tempodevida=12;
console.log(`Meu cachorro é ${cachorro} e tenho ${tempodevida} anos !`);

//Object Short Syntax
const moto='xtz125';
const modelo=2016;

const motor={
    moto,
    modelo,
    cor:'azul'
};
console.log(motor);


