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

const slider = () => {
    let imagens = document.querySelectorAll('section.banner .img')
    var ultimo = 0

    imagens.forEach((item, index) => {
        let botao = document.querySelectorAll('.bullet')[index]

        botao.addEventListener('click', () => {

            var ultima = document.querySelectorAll('section.banner .img')[ultimo]
            var primeira = document.querySelectorAll('section.banner .img')[index]

            document.querySelectorAll('.bullet')[ultimo].classList.remove('select')
            document.querySelectorAll('.bullet')[index].classList.add('select')

            ultimo = index

            ultima.style.opacity = 0
            primeira.style.opacity = 1

        })
    })
}
slider()

const noticia = () => {
    let text = document.querySelectorAll('.noticia-txt p')

    text.forEach((item, index) => {
        let acao = document.querySelectorAll('.noticia-txt span')[index]

        acao.addEventListener('click', () => {
            
            var prim = document.querySelectorAll('.noticia-txt p')[index]

            if(prim.classList.contains('aparece2')){
                prim.classList.remove('aparece2')
                acao.innerHTML = 'Ver Mais'
            }
            else{
                prim.classList.add('aparece2')
                acao.innerHTML = 'Ocultar'
            }

        })
    })

}

noticia()

const validaForm = () => {
    const nome = document.querySelector('input[name=nome]')
    const form = document.querySelector('form')
    const email = document.querySelector('input[name=email]')

    form.addEventListener('submit', (e) => {

        const limpa = () => {
            nome.value = ''
            email.value= ''
        }

        if(nome.value == '' || email.value == ''){
            nome.style.border = '1px solid red'
            email.style.border = '1px solid red'
            alert('operação invalida Preencha corretamente os campos: ')
            e.preventDefault()
        }

        else{
            nome.style.border = '1px solid rgb(0, 125, 228)'
            email.style.border = '1px solid rgb(0, 125, 228)'
            alert('Olá ' + nome.value + '! Apartir de agora você está cadastrado na nossa newsletter, novas informação serão enviadas todos os dias ao email: '+ email.value)
            limpa()
            e.preventDefault()
        }  
    })
}
validaForm()