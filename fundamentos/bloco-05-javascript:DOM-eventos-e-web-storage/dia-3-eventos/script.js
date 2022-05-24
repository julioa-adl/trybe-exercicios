function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// adicionando Dias ao Calendário
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ulDays = document.querySelector('#days');

for (dias of dezDaysList) {
  let lisDeUl = document.createElement('li');
  ulDays.appendChild(lisDeUl);
  lisDeUl.innerText = dias;
  lisDeUl.className = 'day';
  if (dias === 24 || dias === 25 || dias === 31) {
    lisDeUl.classList += ' holiday';
  }
  if (dias === 4 || dias === 11 || dias === 18 || dias === 25) {
    lisDeUl.classList += ' friday';
  }
}

// Criar Botões
function criarBotoesEmButtonsContainer(Text,Class) {
  const btn = document.createElement('button');
  document.querySelector('.buttons-container').appendChild(btn);
  btn.innerText = Text;
  btn.className = Class;
}

// Botão Feriados
criarBotoesEmButtonsContainer('Feriados','btn-holiday');

const buttonFeriados = document.querySelector('.btn-holiday');
buttonFeriados.addEventListener('click', mudarCorFeriados);

function mudarCorFeriados() {
  let feriadosCalendar = document.querySelectorAll('.holiday');
  for (dias of feriadosCalendar) {
    if (dias.style.backgroundColor === 'yellow') {
      dias.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      dias.style.backgroundColor = 'yellow';
    }
  }
}

// Botão Sexta
criarBotoesEmButtonsContainer('Sexta-feira','btn-friday')

const buttonSexta = document.querySelector('.btn-friday');
buttonSexta.addEventListener('click', mudarTextoSexta);

let salvarDias = [];

function mudarTextoSexta() {
  let sextasCalendar = document.querySelectorAll('.friday');
  
  for (let i = 0; i < sextasCalendar.length; i += 1) {
    if (sextasCalendar[i].innerText === 'sexta') {
      sextasCalendar[i].innerText = salvarDias[i];
    } else {
      if (salvarDias.length < sextasCalendar.length) {
        salvarDias.push(sextasCalendar[i].innerText);
      }
      sextasCalendar[i].innerText = 'sexta';
    }
  }
}

// Funções Zoom Texto
function darZoom(evento) {
  let elemento = evento.target;
  elemento.style.fontSize = '25px';
}
function tirarZoom(evento) {
  let elemento = evento.target;
  elemento.style.fontSize = '20px'
}

const diaUm = document.querySelectorAll('.day');
for ( let i = 0; i < diaUm.length; i += 1) {
  diaUm[i].addEventListener('mouseenter',darZoom);
  diaUm[i].addEventListener('mouseleave', tirarZoom);
}

// Criar Tarefas
function criarTarefas(tarefa) {
  let novaTarefa = document.createElement('span');
  document.querySelector('.my-tasks').appendChild(novaTarefa);
  novaTarefa.innerText = tarefa;
}
criarTarefas('cozinhar');

// Legenda Tarefas
function legendaTarefas(cor) {
  let legendaTarefa = document.createElement('div');
  document.querySelector('.my-tasks').appendChild(legendaTarefa);
  legendaTarefa.style.background = cor;
  legendaTarefa.className = 'task';
}
legendaTarefas('yellow');

let legendas = document.querySelector('.my-tasks');
legendas.addEventListener('click', clickarLegenda);
function clickarLegenda(evento) {
  let clickLegenda = evento.target;
  if (clickLegenda.className === 'task selected') {
    clickLegenda.className = 'task';
  } else {
    clickLegenda.className += ' selected';
  }
}

// Cor tarefas no calendário
function corDiasTarefa(evento) { 
  let clickDia = evento.target;
  let corTarefa = document.querySelector('.task').style.background;
  if (clickDia.style.background === corTarefa) {
    clickDia.style.background = 'rgb(238,238,238)'
  } else {
    clickDia.style.background = corTarefa;
  }
}
for ( let i = 0; i < diaUm.length; i += 1) {
  diaUm[i].addEventListener('click',corDiasTarefa);
}
// Bonus - Compromissos
function addCompromissos() { 
  let inputComp = document.querySelector('#task-input').value;
  if (inputComp === '') {
    alert('ADICIONAR');
  } else {
    let newComp = document.createElement('span');
    document.querySelector('.input-container').appendChild(newComp);
    newComp.className = 'selected';
    newComp.innerText = inputComp;
  }
}

document.querySelector('#btn-add').addEventListener('click', addCompromissos);
