function enviar(){
    var n1 = document.querySelector('#numero1').value;
    var n2 = document.getElementById('numero2').value;
    var res= document.getElementById("resultado");
    var valor =(n1*n2);

    if(!n1 && !n2){
        res.innerHTML=`Digite os numero`;
    }else if (valor){
        res.innerHTML=`${valor} M²`;
    }
}