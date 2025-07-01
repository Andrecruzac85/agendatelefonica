const agenda = [
  { nome: 'Ana Silva', telefone: '(11) 91234‑5678' },
  { nome: 'Bruno Costa', telefone: '(21) 99876‑5432' },
  { nome: 'Carla Souza', telefone: '(31) 98765‑4321' },
  { nome: 'Diego Lima', telefone: '(41) 97654‑3210' }
];

function search() {
  
   for (let i = 0; i < agenda.length; i++) {
    
    

  if (input.value === agenda[i].name) {
    resultado.innerHTML = `Nome: ${contato.nome} - Telefone: ${contato.telefone}`;
  } else {
    resultado.innerHTML = 'Contato não encontrado.';
    break;
  }
}
}