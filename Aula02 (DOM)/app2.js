var pegar= document.getElementById('nome');

console.log(pegar);

var pegarnome= document.getElementsByTagName('input')[1];
console.log(pegarnome);
// pegar elementos
var pg= document.querySelector('input[name=numero2]');

console.log(pg);

//botão
var elemento=document.querySelector('button.btn');

elemento.onclick= function () {
    alert ("geral");
  }