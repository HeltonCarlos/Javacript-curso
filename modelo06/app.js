function enviar(){
    var num=document.querySelector('#numero')
    var vl=document.getElementById('valor')
    var total= Number(num.value)

    if(total.value==null){
        vl.innerHTML+=`Digite um numero`
    }
    
}