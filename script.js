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
        enunciado: "Um colega comenta que ",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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