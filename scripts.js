const agenda = [
  { nome: 'Ana Silva', telefone: '(11) 91234‑5678' },
  { nome: 'Bruno Costa', telefone: '(21) 99876‑5432' },
  { nome: 'Carla Souza', telefone: '(31) 98765‑4321' },
  { nome: 'Diego Lima', telefone: '(41) 97654‑3210' }
];

function search() {
  const username = document.querySelector('.name').value.toLowerCase();
  const resultado = document.querySelector('.result');

  const contato = agenda.find(c => c.nome.toLowerCase().includes(username));

  if (contato) {
    resultado.innerText = `Nome: ${contato.nome} - Telefone: ${contato.telefone}`;
  } else {
    resultado.innerText = 'Contato não encontrado.';
  }
}
