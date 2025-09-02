const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Durante uma aula de informática, o professor apresenta uma IA capaz de criar imagens realistas a partir de descrições.",
        alternativas: [
            {
                texto: "Quis experimentar criando uma imagem criativa para testar a ferramenta.",
                afirmacao: "Descobriu como a IA pode ser usada para estimular a criatividade. "
            },
            {
                texto: "Preferiu não utilizar, achando que seria complicado demais.",
                afirmacao: "Perdeu a chance de conhecer uma aplicação prática da IA."
            }
        ]
    },
    {
        enunciado: "Ao fazer uma pesquisa para um trabalho, você encontra uma IA que responde perguntas em linguagem natural.",
        alternativas: [
            {
               texto: "Usou a IA para obter um resumo rápido do tema.",
                afirmacao: "Conseguiu entender melhor o assunto em pouco tempo."
            },
            {
                texto: "Decidiu não usar a IA, pesquisando apenas em livros.",
                afirmacao: "Teve mais trabalho, mas conseguiu informações mais detalhadas."
            }
        ]
    },
    {
        enunciado: "No futuro, muitas profissões poderão utilizar IA para automotizar tarefas repetitivas.",
        alternativas: [
            {
                texto: "Acredita que isso será bom, pois vai sobrar mais tempo para atividades criativas.",
                afirmacao: "Percebeu o lado positivo da IA na produtividade."
            },
            {
                texto: "Acha preocupante, pois algumas pessoas podem perder seus empregos.",
                afirmacao: "Ficou reflexivo sobre os desafios sociais da IA."
            }
        ]
    },
    {
        enunciado: "Um colega comenta que usou IA para revisar o texto da redaçâo dele.",
        alternativas: [
            {
                texto: "Apoiou a ideia, pois a IA pode ajudar a corrigir erros de gramática.",
                afirmacao:  "Reconheceu a IA como uma ferramenta de apoio no aprendizado."
            },
            {
                texto: "Criticou, dizendo que o colega deveria revisar sozinho.",
                afirmacao: "Defendeu a importância do esforço próprio no estudo."
            }
        ]
    },
    {
        enunciado: "Você descobre um aplicativo de tradução automática baseado em IA. ",
        alternativas: [
            {
                texto: "Achou interessante, pois pode ajudar a se comunicar com pessoas de outros países.",
                afirmacao: "Percebeu como a IA aproxima culturas diferente."
            },
            {
                texto: "Ficou desconfiado, achando que as traduções não seriam confiáveis.",
                afirmacao: "Manteve uma postura crítica em relação ao uso da IA. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();