const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você prefere café ou chá?",
        alternativas: [
            {
                texto: "Resposta A: Cozinhar, porque gosto de experimentar receitas novas. ",
                afirmacao: "Comentário: Cozinhar pode ser uma forma criativa de relaxar e se expressar na cozinha!"
            },
            {
                texto: "Resposta B: Comer fora, pois é prático e posso experimentar diferentes culinárias",
                afirmacao: "Comentário: Aproveitar as delícias de restaurantes é uma ótima maneira de descobrir novos sabores e relaxar!"
            }
        ]
    },
    {
        enunciado: "Resposta A: Ficção, porque adoro me perder em histórias imaginativas",
        alternativas: [
            {
                texto: "Resposta 1",
                afirmacao: "afirmação"
            },
            {
                texto: "resposta 2",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "Resposta 1",
                afirmacao: "afirmação"
            },
            {
                texto: "resposta 2",
                afirmacao: "afirmação"
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
    caixaPerguntas.textContent = "Você é uma pessoa que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
