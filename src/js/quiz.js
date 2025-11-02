alert("Saibam mais sobre o Quiz - SpaceStore: Teste seus conhecimentos reais!");

const perguntas = [
  {
    pergunta: "Pergunta 1: Qual é o satélite natural da Terra?\n Opcao A) Phobos\n Opcao B) Lua\n Opcao C) Vênus\n",
    resposta: "B"
  },
  {
    pergunta: "Pergunta 2: O que é 'Ano-Luz'?\n Opcao A) Uma medida de tempo\n Opcao B) Uma medida de temperatura\n Opcao C) Uma medida de distância\n",
    resposta: "C"
  },
  {
    pergunta: "Pergunta 3: Qual é o planeta mais conhecido por seus anéis?\n Opcao A) Júpiter\n Opcao B) Marte\n Opcao C) Saturno\n",
    resposta: "C"
  },
];

// declarando a variavel de acertos que recebe 0
let acertos = 0;

// criar um laço de repetição para verificar as perguntas

for(let i = 0; i < perguntas.length; i++){
    const respostaUsuario = prompt(perguntas[i].pergunta);

    // verifica se o que o usuario digitou for minusculo e se não for converte para ser
    // A verificação 'respostaUsuario' garante que o usuário não clicou em 'Cancelar'
    if(respostaUsuario && respostaUsuario.toLowerCase() === perguntas[i].resposta.toLowerCase()){
        acertos++;
    }
}

// Verifica se o elemento msg existe antes de tentar exibi-lo
const elementoMsg = document.getElementById("msg");

if (elementoMsg) {
    elementoMsg.innerHTML = (`Você aceretou ${acertos} de ${perguntas.length} perguntas.`);
} else {
    // Para fins de teste, mostra no console se o elemento HTML estiver ausente
    console.log(`Resultado do Quiz: Você aceretou ${acertos} de ${perguntas.length} perguntas.`);
}