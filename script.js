const senhaCorreta = "1709";
const dataInicioRelacionamento = new Date("2017-09-17");

function login() {
  const senhaDigitada = document.getElementById("password").value;
  if (senhaDigitada === senhaCorreta) {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("main-screen").classList.remove("hidden");

    // Mostrar inicialmente e atualizar a cada segundo
    mostrarTempoJuntos();
    setInterval(mostrarTempoJuntos, 1000);

    const audio = document.getElementById("audio");
    audio.play().catch(() => {
      console.log("Reprodução automática bloqueada.");
    });
  } else {
    alert("iiih, como tu errou?? Tenta!");
  }
}

function mostrarTempoJuntos() {
  const agora = new Date();
  const inicio = new Date(dataInicioRelacionamento);

  const pausaEmMilissegundos = 2 * 365.25 * 24 * 60 * 60 * 1000;
  const tempoReal = agora - inicio - pausaEmMilissegundos;

  const dataCorrigida = new Date(agora.getTime() - pausaEmMilissegundos);

  let anos = dataCorrigida.getFullYear() - inicio.getFullYear();
  let meses = dataCorrigida.getMonth() - inicio.getMonth();
  let diasMes = dataCorrigida.getDate() - inicio.getDate();

  if (diasMes < 0) meses -= 1;
  if (meses < 0) {
    anos -= 1;
    meses += 12;
  }

  const segundosTotais = Math.floor(tempoReal / 1000);
  const dias = Math.floor(segundosTotais / (60 * 60 * 24));
  const horas = Math.floor((segundosTotais % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
  const segundos = segundosTotais % 60;

  const texto = `${anos} anos e ${meses} meses juntas 🥹\n` +
    `Foram ${dias.toLocaleString('pt-BR')} dias, ` +
    `${horas} horas, ${minutos} minutos e ${segundos} segundos com a minha melhor escolha ❤️🎉\n` +
    `(Sim, desconsiderei os 2 anos 😅)`;

  document.getElementById("tempo-juntas").innerText = texto;
}

// Álbum com navegação
const fotos = [
  { src: "img/foto1.jpg", legenda: "You do me right." },
  { src: "img/foto2.jpg", legenda: "You stay by my side." },
  { src: "img/foto3.jpg", legenda: "Through thick and thin." }
];

let indexAtual = 0;

function atualizarFoto() {
  const img = document.getElementById("carouselImage");
  const legenda = document.getElementById("carouselCaption");

  img.src = fotos[indexAtual].src;
  img.alt = `Foto ${indexAtual + 1}`;
  legenda.textContent = fotos[indexAtual].legenda;
}

document.addEventListener("DOMContentLoaded", () => {
  const casalFoto = document.getElementById("casalFoto");
  const modal = document.getElementById("albumModal");
  const closeBtn = document.getElementById("closeAlbum");

  casalFoto.addEventListener("click", () => {
    modal.style.display = "flex";
    atualizarFoto();
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    indexAtual = (indexAtual - 1 + fotos.length) % fotos.length;
    atualizarFoto();
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    indexAtual = (indexAtual + 1) % fotos.length;
    atualizarFoto();
  });
});

// Easter Egg - Primeira Vez (tecla S)
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === 's') {
    document.getElementById("primeiraVezModal").classList.remove("hidden");
  }
});

function fecharPrimeiraVez() {
  document.getElementById("primeiraVezModal").classList.add("hidden");
}

// Easter Egg - Joguinho de Corações (tecla P)
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === 'p') {
    abrirJoguinho();
  }
});

function abrirJoguinho() {
  const container = document.getElementById("coroes-container");
  container.innerHTML = "";
  document.getElementById("mensagemFinal")?.remove();

  let total = 15;
  let clicados = 0;

  for (let i = 0; i < total; i++) {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");

    const top = Math.random() * 80 + 10;
    const left = Math.random() * 90;

    coracao.style.top = `${top}%`;
    coracao.style.left = `${left}%`;

    coracao.addEventListener("click", () => {
      coracao.remove();
      clicados++;
      if (clicados === total) {
        mostrarMensagemFinal();
      }
    });

    container.appendChild(coracao);
  }

  const mensagem = document.createElement("div");
  mensagem.id = "mensagemFinal";
  mensagem.textContent = "Muito gaymer minha mulher 💖🎮";
  mensagem.style.display = "none";
  document.querySelector("#joguinhoModal .modal-inner").appendChild(mensagem);

  document.getElementById("joguinhoModal").classList.remove("hidden");
}

function fecharJoguinho() {
  document.getElementById("joguinhoModal").classList.add("hidden");
}

function mostrarMensagemFinal() {
  const mensagem = document.getElementById("mensagemFinal");
  if (mensagem) {
    mensagem.style.display = "block";
  }
}

// Modal de Letras (tecla B)

// Easter Egg - Cartinha com imagens (tecla B)
// Easter Egg - Cartinha com imagens (tecla B)
document.addEventListener("DOMContentLoaded", () => {
  // Array com as imagens
  const imagensLetras = [
    "img/letra1.jpg",
    "img/letra2.jpg",
    "img/letra3.jpg",
    "img/letra4.jpg",
    "img/letra5.jpg",
    "img/letra6.jpg",
    "img/letra7.jpg",
    "img/letra8.jpg",
    "img/letra9.jpg",
    "img/letra10.jpg",
    "img/letra11.jpg"
  ];

  let indexLetra = 0;

  const modal = document.getElementById("letrasModal");
  const img = document.getElementById("letrasImage");
  const prevBtn = document.getElementById("letrasPrevBtn");
  const nextBtn = document.getElementById("letrasNextBtn");
  const closeBtn = document.querySelector("#letrasModal .modal-close");

  function atualizarImagemLetra() {
    img.src = imagensLetras[indexLetra];
    img.alt = `Letra ${indexLetra + 1}`;
  }

  // Mostrar o modal ao pressionar a tecla "B"
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === 'b') {
      modal.classList.remove("hidden");
      indexLetra = 0;
      atualizarImagemLetra();
    }
  });

  // Fechar modal
  function fecharLetras() {
    modal.classList.add("hidden");
  }

  closeBtn.addEventListener("click", fecharLetras);

  // Botão anterior
  prevBtn.addEventListener("click", () => {
    indexLetra = (indexLetra - 1 + imagensLetras.length) % imagensLetras.length;
    atualizarImagemLetra();
  });

  // Botão próximo
  nextBtn.addEventListener("click", () => {
    indexLetra = (indexLetra + 1) % imagensLetras.length;
    atualizarImagemLetra();
  });
});

