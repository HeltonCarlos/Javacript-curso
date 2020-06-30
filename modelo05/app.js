function envia(){

    var mail=document.querySelector('#email')
    var pass=document.querySelector('#password')
    var mens=[];
    var error=document.getElementById('resposta')
    error.style.color='red';
    error.style.fontWeight='900'

    if(mail.value===null || mail.value===''){
        mens.push('Coloque seu e-mail')
    }
    if(pass.value===null || pass.value===''){
        mens.push('Coloque sua senha')
    }

    error.innerHTML=mens.join(',')
    return false;
}