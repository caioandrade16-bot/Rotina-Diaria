const hora = 10;
let mensagem = "Hora de descansar e dormir! "

if (hora >= 6 && hora < 8) {
  mensagem = "Acordar e tomar um café bem gostoso! "
} else if (hora >= 8 && hora < 12) {
  mensagem = "Hora de prestar atenção na aula! "
} else if (hora >= 12 && hora < 14) {
  mensagem = "Hora do almoço em família"
} else if (hora >= 14 && hora < 18) {
  mensagem = "Hora de fazer o dever de casa e estudar"
} else if (hora >= 18 && hora < 21) {
  mensagem = "Hora de tomar banho e jantar! "
}

console.log(mensagem);