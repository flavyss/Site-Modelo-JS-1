const mudaCor = () => {
    let campo = document.querySelector('.changeColor')
    let body = document.querySelector('body ')
    let icone = document.querySelectorAll('.menuMobile h2')[0]

    campo.addEventListener('click', () => {
        
        if(body.classList.contains('color1')){
            body.classList.remove('color1')
            body.style.color = 'black'
            icone.style.color = 'black'
        }
        else{
            icone.style.color = 'white'
            body.style.transition = '1s'
            body.style.color = 'white'
            body.classList.add('color1')
        }

    })
} 

mudaCor()

const menuMobile = () => {

    let icone = document.querySelectorAll('.menuMobile h2')[0]
    let icone2 = document.querySelector('.menuMobile ul h2')
    let corpo = document.querySelector('.menuMobile ul')
    
    icone.addEventListener('click', () => {
        if(corpo.classList.contains('aparece')){
            corpo.classList.remove('aparece')

        } 
        else{
            corpo.classList.add('aparece')

            icone2.addEventListener('click', () => {
                corpo.classList.remove('aparece')
            })
        }
    })
}

menuMobile()

const carrinho = () => {
    const section = document.querySelectorAll('.service-content')
    let data = []
    let conter = 0
    section.forEach((item, index) => {
        const botao = document.querySelectorAll('.service-content button')[index]

        botao.addEventListener('click', () => {
            let carrinho = document.querySelector('.carrinho')
            let number = document.querySelector('.number')
            let painel = document.querySelector('.content-car')
            let soma = 0
            conter += 1
            let campo = document.querySelector('.campo')
            
            data.push({
                valor: botao.value
            })
            data.map((val) => {
                soma += parseFloat(val.valor)
                number.classList.add('aparece3')
                number.innerHTML = conter

                carrinho.classList.add('aparece3')

                carrinho.addEventListener('click', () => {
                    if(painel.classList.contains('aparece4')){
                        painel.classList.remove('aparece4')
                    }
                    else{
                        painel.classList.add('aparece4')
                    }
                })
                campo.innerHTML = `O resultado total das compras é de: R$`+soma

            })
        })

    })

}

carrinho()