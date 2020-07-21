function enviar(){
    var alt = document.getElementById('altura')
    var peso= document.querySelector('#peso')
    var resp =document.querySelector('#resposta')

    var rest1=Number(alt.value)
    var rest2=Number(peso.value)
    var rest3= rest1*rest1

    var total=rest2/rest3

    if(rest1==''&&rest2==''){
        resp.innerHTML+=`Digite sua altura e peso`
    }else{resp.innerHTML+=`${total}`}
  
}