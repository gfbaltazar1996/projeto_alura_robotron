const robotron = document.querySelector("#robotron");
const estatistica=  document.querySelectorAll("[data-estatistica]")
robotron.addEventListener("click", tocaSomInicial);  
const controle=document.querySelectorAll(".controle-ajuste")

controle.forEach( (elemento) => { 
    elemento.addEventListener('click', (event) => {
        manipulaDados(event.target.textContent,event.target.parentNode)
        atualizaEstatistica(event.target.dataset.peca,event.target.textContent);
    }) 
})


function tocaSomInicial (){
    document.querySelector('#som_robo').play();
}

function manipulaDados(operacao,element) {
    const peca=element.querySelector('.controle-contador')
    if(operacao === "-") {
        peca.value = parseInt(peca.value)-1
        if(peca.value<0){
            peca.value=00;
        }
    } else {
        peca.value = parseInt(peca.value)+1
    }
}

function atualizaEstatistica(peca, operacao){
     console.log(peca)
     estatistica.forEach( (elemento) =>{
        if(parseInt(document.getElementById(peca).value)>=0){
            if(operacao=="+"){
             elemento.textContent=parseInt(elemento.textContent)+pecas[peca][elemento.dataset.estatistica] 
            }else{
                elemento.textContent=parseInt(elemento.textContent)-pecas[peca][elemento.dataset.estatistica] 
            }
        }
     })
}


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}