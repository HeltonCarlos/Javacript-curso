function envia(){
    var vel=document.querySelector('#velocidade')
    var tex=document.querySelector('#texto')
    var val=Number(vel.value)

    if(val==''){
        tex.innerHTML+=`<strong>Digite sua velocidade!</strong>`
    }else if(val>=60){
        tex.innerHTML+=`<strong>Vocês está bastante rápido,<br> sua velocidade é de ${val}Km/h!</strong>`
    }else{
        tex.innerHTML+=`<strong>Vocês está a baixo de 60, Parabéns!<br> Sua velocidade é de ${val}Km/h!</strong>`
    }
}