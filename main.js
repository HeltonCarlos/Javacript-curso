/*função*/
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