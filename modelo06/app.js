function enviar(){
    var num=document.querySelector('#numero')
    var vl=document.getElementById('valor')
    var total= Number(num.value)

    if(total==''){
        vl.innerHTML+=`Digite um numero`
    }else {
        vl.innerHTML+=`A Multiplicação de ${total} é de:
        <br>${total}x1=${total}
        <br>${total}x2=${total*2}
        <br>${total}x3=${total*3}
        <br>${total}x4=${total*4}
        <br>${total}x5=${total*5}
        <br>${total}x6=${total*6}
        <br>${total}x7=${total*7}
        <br>${total}x8=${total*8}
        <br>${total}x9=${total*9}
        <br>${total}x10=${total*10}
        <br>`
    }
    
}