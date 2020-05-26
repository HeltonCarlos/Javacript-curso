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
  //adecionar o link

  var linkjow = document.createElement('a')
  linkjow.setAttribute('href','https://www.globo.com/')

  var text= document.createTextNode('Globo')
  linkjow.appendChild(text)

  var container=document.querySelector('#alocar')
  container.appendChild(linkjow);

//stylo

var modelo= document.querySelector('.modelar')
modelo.style.color ='red';

