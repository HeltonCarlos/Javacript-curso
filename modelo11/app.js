const item = [
    {
        id:0,
        nome:'camisa',
        img:'image.jpg',
        quantidade:0
    },
    {
        id:1,
        nome:'short',
        img:'image.jpg',
        quantidade:1
    },   
    {
        id:2,
        nome:'calças',
        img:'image.jpg',
        quantidade:2
    },
] 

    iniciandoLoja=()=>{
        var containerProduto = document.getElementById('produtos')
        item.map((valor)=>{
            console.log(valor.nome)
        })
    }
    iniciandoLoja()