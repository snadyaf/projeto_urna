const welcome =
document.getElementById("welcome");

const voting =
document.getElementById("voting");

const result =
document.getElementById("result");

const candidateCard =
document.getElementById("candidateCard");

const winnerName =
document.getElementById("winnerName");

const winnerEmoji =
document.getElementById("winnerEmoji");

let votoAtual = null;
let votosLaranjinha = 0;
let votosMeiaNoite = 0;


const candidatos = {

  1: {
    nome: "Sir Meia-Noite",
    emoji: "🐈‍⬛",
    descricao:
    "Especialista em observar paredes às 3h da manhã."
  },

  2: {
    nome: "Laranjinha do Caos",
    emoji: "🐈",
    descricao:
    "Derruba objetos desde filhote."
  }

};

document.getElementById("btnStart").addEventListener("click", () => {

  welcome.classList.add("hidden");
  voting.classList.remove("hidden");

});

document.querySelectorAll(".vote-btn").forEach(botao => {

  botao.addEventListener("click", () => {

    const numero =
    botao.dataset.vote;

    if(!numero) return;

    votoAtual =
    candidatos[numero];

    candidateCard.innerHTML = `
      <div class="emoji">
        ${votoAtual.emoji}
      </div>

      <h2>
        ${votoAtual.nome}
      </h2>

      <p>
        ${votoAtual.descricao}
      </p>
    `;

  });

});

document.getElementById("btnCorrige").addEventListener("click", () => {

  votoAtual = null;

  candidateCard.innerHTML = `
    <div class="emoji">🐾</div>
    <h2>Escolha um candidato</h2>
    <p>Clique em 1 ou 2.</p>
  `;

});

document.getElementById("btnConfirma").addEventListener("click", () => {

  if(!votoAtual){

    alert("Escolha um candidato primeiro!");
    return;
  }

  if(votoAtual.nome === "Laranjinha do Caos"){
    votosLaranjinha++;
  }

  if(votoAtual.nome === "Sir Meia-Noite"){
    votosMeiaNoite++;
  }

  document.getElementById("votesCat1").textContent =
  votosLaranjinha;

  document.getElementById("votesCat2").textContent =
  votosMeiaNoite;

  document.getElementById("votesTotal").textContent =
  votosLaranjinha + votosMeiaNoite;

  winnerName.textContent =
  votoAtual.nome;

  winnerEmoji.textContent =
  votoAtual.emoji;

  voting.classList.add("hidden");
  result.classList.remove("hidden");

});
