let pontos = {
  meninos: 0,
  meninas: 0
};

function alterarPontuacao(time, valor) {
  pontos[time] += valor;

  if (pontos[time] < 0) pontos[time] = 0;

  const span = document.getElementById(`pontuacao-${time}`);
  span.textContent = pontos[time];

  // Efeito visual: pulinho
  span.classList.remove('animado');
  void span.offsetWidth;
  span.classList.add('animado');

  // Efeito visual: confete
  explodirConfete(time);

  atualizarResultado();
}

function resetarPontuacoes() {
  pontos.meninos = 0;
  pontos.meninas = 0;

  document.getElementById('pontuacao-meninos').textContent = 0;
  document.getElementById('pontuacao-meninas').textContent = 0;

  atualizarResultado();
}

function atualizarResultado() {
  const msg = document.getElementById('mensagem-resultado');
  const coroaMeninos = document.getElementById('coroa-meninos');
  const coroaMeninas = document.getElementById('coroa-meninas');

  if (pontos.meninos > pontos.meninas) {
    msg.textContent = 'Meninos estão ganhando!';
    coroaMeninos.textContent = '👑';
    coroaMeninas.textContent = '';
  } else if (pontos.meninas > pontos.meninos) {
    msg.textContent = 'Meninas estão ganhando!';
    coroaMeninas.textContent = '👑';
    coroaMeninos.textContent = '';
  } else {
    msg.textContent = 'Empate!';
    coroaMeninos.textContent = '';
    coroaMeninas.textContent = '';
  }
}

function explodirConfete(time) {
  const cor = time === 'meninos' ? '#2196f3' : '#e91e63';

  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: [cor],
  });
}