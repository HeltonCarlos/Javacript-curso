var lista = document.querySelector('#app ul');
var espaco = document.querySelector('#app input')
var btn= document.querySelector('#app button')

var todos = [
    'Tomar café',
    'Almoço',
   ' Jantar'
];

function renderTodos(){

    lista.innerHTML='';
    for(todo of todos){
       

        var todoEle =document.createElement('li');
        var todoText= document.createTextNode(todo);
        todoEle.appendChild(todoText);
        lista.appendChild(todoEle)
    }
}renderTodos();

function addTodo(){
    var todoText = espaco.value;

    todos.push(todoText);
    espaco.value='';
    renderTodos();
}

btn.onclick = addTodo;