function envia(){
    var ida=document.getElementById('idade')
    var text=document.getElementById('texto')
    var busca=Number(ida.value);

    if(busca>=18){
        text.innerHTML+=`Você é de maior possue ${busca} anos `
    }else{  
        text.innerHTML+=`Você é de menor tem ${busca} anos`}
}
