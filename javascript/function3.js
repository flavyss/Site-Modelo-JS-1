const mudaCor = () => {
    let campo = document.querySelector('.changeColor')
    let body = document.querySelector('body ')
    let icone = document.querySelectorAll('.menuMobile h2')[0]
    let color = document.querySelector('form h2')

    campo.addEventListener('click', () => {
        
        if(body.classList.contains('color1')){
            body.classList.remove('color1')
            color.classList.remove('color1')
            body.style.color = 'black'
            icone.style.color = 'black'
        }
        else{
            icone.style.color = 'white'
            body.style.transition = '1s'
            body.style.color = 'white'
            body.classList.add('color1')
            color.classList.add('color1')
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

const validaEmail = () => {
    let nome = document.querySelector('input[name=nome]')
    let email = document.querySelector('input[name=email]')
    let senha = document.querySelector('input[name=senha]')
    let form = document.querySelector('form')

    form.addEventListener('submit', (e) => {
        if (nome.value == '' || email.value == '' || senha.value == ''){
            alert('Ops, você fez algo errado')
            e.preventDefault()

            if(nome.value == ''){
                nome.style.border = '1px solid red'
                nome.placeholder = 'Insira seu Nome corretamente'

                nome.addEventListener('click',() => {
                    nome.style.border = '1px solid green'
                })
            }
            else if(email.value == '' ){
                email.style.border = '1px solid red'
                email.placeholder = 'Insira seu email corretamente'
                
                email.addEventListener('click',() => {
                    email.style.border = '1px solid green'
                })
            }
            else if(senha.value == ''){
                senha.style.border = '1px solid red'
                senha.placeholder = 'Insira sua Mensagem corretamente'
                
                senha.addEventListener('click',() => {
                    senha.style.border = '1px solid green'
                })
            }
        }
        else{
            alert('o login foi realizado com sucesso')
        }
    })


}

validaEmail()