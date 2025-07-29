const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [ 
    {
        enunciado:"a primeira perguntas",
        alternativas: [
            { 
            texto:"isso é assustador!",
            afirmação:"afirmação"
            },
            { 
            texto:"isso é assustador!",
            afirmação:"afirmação"
            },
        ]
    },

    {
        enunciado:"a primeira perguntas",
        alternativas: [
            { 
            texto:"isso é assustador!",
            afirmação:"afirmação"
            },
            { 
            texto:"isso é assustador!",
            afirmação:"afirmação"
            },
        ]
    },

    {
        enunciado:"a primeira perguntas",
        alternativas: [
            { 
            texto:"isso é assustador!",
            afirmação:"afirmação"
            },
            { 
            texto:"isso é assustador!",
            afirmação:"afirmação"
            },
        ]
    },

    {
        enunciado:"a primeira perguntas",
        alternativas: [
            { 
            texto:"isso é assustador!",
            afirmação:"afirmação"
            },
            { 
            texto:"isso é assustador!",
            afirmação:"afirmação"
            },
        ]
    },

    {
        enunciado:"a primeira perguntas",
        alternativas: [
            { 
            texto:"isso é assustador!",
            afirmação:"afirmação"
            },
            { 
            texto:"isso é assustador!",
            afirmação:"afirmação"
            },
        ]
    },

    {
        enunciado:"a primeira perguntas",
        alternativas: [
            { 
            texto:"isso é assustador!",
            afirmação:"afirmação"
            },
            { 
            texto:"isso é assustador!",
            afirmação:"afirmação"
            },
        ]
    },

    

let atual =0;
let perguntaAtual;

function mostraPergunta (){
   perguntaAtual = perguntas [atual];
   caixaPerguntas.textContent = perguntas.enunciado;

}

mostraPergunta ();