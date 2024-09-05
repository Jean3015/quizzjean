const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a sua abordagem ao planejar um treino na academia?",
        alternativas: [
        {
        texto: "Seguir um plano detalhado",
        afirmacao: [
        "Você é organizado e metódico. Prefere ter um roteiro claro e específico para alcançar seus objetivos, o que demonstra sua determinação e foco.",
    
        ],
        
        },
        {
        texto: "Improvisar com base no momento",
        afirmacao: [
        "Você é flexível e espontâneo. Gosta de adaptar seus treinos conforme seu humor e energia do dia, o que reflete uma abordagem mais relaxada e intuitiva",
        
        ],
       
        },
        ]
        },
        {
        enunciado: "Como você se sente em relação ao uso de equipamentos de academia?",
        alternativas: [
        {
        texto: "Prefere equipamentos e máquinas",
        
        afirmacao: [
        "Você gosta da estrutura e da precisão que os equipamentos oferecem. Isso mostra que você valoriza a técnica e a consistência em seus treinos",
        
        ],
        
        },
        {
        texto: "Prefere exercícios com o peso do corpo",
        
        afirmacao: [
        "Você é adaptável e criativo, preferindo usar seu próprio corpo como resistência. Isso indica uma abordagem mais natural e menos dependente de equipamentos.",
    
        
        ],
        
        },
        ]
        },
        {
        enunciado: "Qual é a sua atitude em relação a treinos em grupo?",
        alternativas: [
        {
        texto: "Amo treinar em grupo",
        
        afirmacao: [
        "Você é sociável e motivado pelo ambiente coletivo. A interação com outras pessoas e a energia do grupo te impulsionam a se esforçar mais.",
        
        ],
       
        },
        {
        
        texto: " Prefiro treinar sozinho",
        
        afirmacao: [
        "Você valoriza a independência e o foco individual. Treinar sozinho permite que você se concentre totalmente em suas próprias metas sem distrações.",
    
        
        ],
       
        },
        ]
        },
        {
        enunciado: "Como você lida com a definição de metas na academia?",
        alternativas: [
        {
        texto: "Defino metas específicas e mensuráveis",
        
        afirmacao: [
        "Você é orientado por objetivos e gosta de acompanhar seu progresso de forma clara. Isso demonstra uma mentalidade orientada a resultados.",
        
        
        ],
        
        },
        {
        texto: "Prefiro manter uma abordagem mais geral",
        
        afirmacao: [
        "Você é flexível e aberto a diferentes possibilidades. Em vez de metas rigorosas, você prefere um progresso mais natural e adaptável.",
        
        
        ],
        
        },
        ]
        },
        
        {
        enunciado: "Qual é o seu estilo de motivação para manter a regularidade nos treinos?",
        alternativas: [
        {
        texto: "Estabelecer desafios e recompensas",
        
        afirmacao: [
        "Você é competitivo e gosta de se desafiar com metas e recompensas, o que reflete um desejo de superação e conquista.",
    
        
        ],
        
        },
        {
        texto: "Buscar inspiração e variedade",
        
        afirmacao: [
        "Você é criativo e busca inspiração constante. Variar seus treinos e buscar novas fontes de motivação mantém você engajado e entusiasmado.",
        
        
        ],
       
        },
        ]
        },
        {
        enunciado: "Como você encara os dias em que não está tão motivado para treinar?",
        alternativas: [
        {
        texto: " Forçar um treino leve",
        
        afirmacao: [
        "Você é disciplinado e acredita que mesmo um treino leve é melhor do que nenhum. Isso demonstra sua determinação e compromisso com a rotina.",
    
        
        ],
        
        
        },
        {
        texto: "Dar uma pausa e relaxar",
        
        afirmacao: [
        "Você é sensível às suas necessidades e entende que descansar é essencial para o equilíbrio. Isso reflete uma abordagem equilibrada e atenta ao bem-estar.",
    
        
        ],
        
        },
        ]
        },
        {
        enunciado: "Qual é a sua opinião sobre a importância do aquecimento antes do treino?",
        alternativas: [
        {
        texto: "Aqueço sempre antes de treinar",
        
        afirmacao: [
        "Você é cuidadoso e meticuloso com sua preparação, o que mostra um compromisso com a prevenção de lesões e a eficácia do treino.",
        
        
        ],
        
        },
        {
        texto: "Aquecimento é opcional",
        
        afirmacao: [
        "Você é mais flexível e confia na sua capacidade de começar rapidamente. Isso reflete uma abordagem mais intuitiva e menos rigorosa com a preparação.",
        
        
        ],
        
        },
        ]
        },
        
        {
        enunciado: "Como você reage ao feedback de um instrutor na academia?",
        alternativas: [
        {
        texto: "Aprecio o feedback e aplico as sugestões",
        afirmacao: [
        "Você é receptivo e disposto a aprender com os outros, o que demonstra uma mentalidade aberta e uma busca constante por melhorias.",
        
        ],
        },
        {
        texto: "Prefiro confiar na minha própria experiência",
        
        afirmacao: [
        "Você é autossuficiente e acredita na sua própria experiência. Isso mostra que você valoriza a autonomia e a autoavaliação.",
        
        ],
        },
        ]
        }
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
    caixaPerguntas.textContent = "Obrigada por responder";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
