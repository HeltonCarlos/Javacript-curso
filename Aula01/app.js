
var nome="Helton Brito";
var idade=29;
var peso=93.3;
var masculino=true;

console.log('meu nome é: '+nome+
' minha idade é:'+idade+
' meu peso é:'+peso+
' Sexo masculino: '+masculino)

var alunos=['Helton', 'Thiago','Gabriel'];
console.log(alunos[0]);

let moto={
Yamaha:'XTZ125',
HONDA:'BIZ110I',
BMW:'BMW'}

console.log(moto);

let valor=20;
valor2=30;

console.log(valor+valor2);
/*funções*/
function somar(v1,v2){
    let resultado= v1+v2;
    return resultado;}

let resultado= somar(1,2);
console.log(resultado);

/*Condição*/

function retornaSexo(sexo){
    if(sexo==='M'){
      return  'Masculino';
    }else
    {  
        return  'Feminino';
    }
}

var resultados=retornaSexo('M');
console.log(resultados);


/*repetição*/

for (var i = 1; i <=10; i++){
    console.log(i);
}