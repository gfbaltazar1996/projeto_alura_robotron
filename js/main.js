const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", tocaSomInicial);  
const controle=document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => { 
    elemento.addEventListener('click', (event) => {
        manipulaDados(event.target.textContent,event.target.parentNode)
    }) 
})


function tocaSomInicial (){
    document.querySelector('#som_robo').play();
}

function manipulaDados(operacao,element) {
    const peca=element.querySelector('.controle-contador')
    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}