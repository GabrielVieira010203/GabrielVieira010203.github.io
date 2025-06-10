// let verificarIMC = () => {
//   let numeroPeso = Number(document.getElementById(id_numeroPeso));
//   let numeroAltura = Number;
// };
// alert.confirm(`Deseja continuar?`);

// // let numero = 12;

// console.log(numero);

//Operadores Aritméticos
// +, -, *, /, %, **
let a = 5 + 5; // Adição
let s = 4 - 4; // Subtração
let m = 5 * 5; // Multiplicação
let d = 5 / 2; // Divisão
let e = 2 ** 3; // Exponenciação é uma operação que consiste em multiplicar um número por ele mesmo várias vezes.
let r = 4 % 2; // Calcula o resto de uma divisão, também conhecido como operação módulo.

//Operadores de atribuição
let x = 0;
x += 1; // x = x + 1;
x -= 1; // x = x - 1;
x *= 1; // x = x * 1;
x /= 1; // x = x / 1;
x **= 2; // x = x ** 2;
x %= 1; // || x = x % 1;

// Precendências: (), **, * / %, + -
let precedencia = (3 + 3) * 2 - (4 / 2 + 5);
// console.log(precedencia);

// OPERADORES BOOLEANOS

// TENÁRIO é um  tipo de operador condicional ternário
// condicao ? verdadeiro : falso
// console.log(0 ? "verdadeiro": "falso")

/*FALSE
Quando um valor é considerado false em contextos onde um booleano é
obrigatório (condicionais e loops)
false, 0, -0, """, null, undefined e NaN
todos retornaram falso
*/

// console.log(false == 0 ? "IGUAL" : "NÃO IGUAL")

// if (false == 0){
//     console.log("Igual");
// }else{
//     console.log("Não")
// }

/*TRUE
Quando um valor é considerado true em contextos onde um booleano é obrigatório
condicionais e loops
true, {}, [], 1, 3.23, "false"
*/

// console.log(true == "false" ? "IGUAL" : "NÃO IGUAL");

//Operadores logicos
//valores booleanos, que quando verificado resulta em true ou false
let pao = true;
let bolo = false;

//AND &&
// console.log(pao && bolo) //se um dos dois forem falsos, assim o valor será falso
//OR ||
// console.log(pao || bolo) //quando os dois for falso
//NOT !
// console.log(!pao) //nega e troca o valor
// console.log(!bolo) //nega e troca o valor

// let bolo2 = !bolo;
// console.log(bolo2)

const padaria = {
  pao: 1,
  bolo: 20 / "nick",
};

// console.log(padaria.bolo)

// if (padaria.pao && padaria.bolo){
//     console.log("O menino voltou para casa!")
// } else {
//     console.log("O menino NÃO voltou para casa!")
// }

// console.log(
//     padaria.pao || padaria.bolo ?
//     "O menino voltou para casa!" :
//     "O menino voltou para casa!"
// );

//incremeento
// let i = 0;
// console.log(i++)                           //aqui vai ser zero, porque ele somente incrementa após
// console.log(i)                               //aqui vai ser 1
// console.log(++i)                           //aqui vai ser 2, pois incrementa e depois faz a impressão

//decremento
// let dec = 2
// console.log(--dec) //pré decremento

let i = 1;
let j = 2;
// j = j + i
// j += --i //pré incremento
// console.log(`j:${j} | i:${i}<br/>`)
// j = j + i
j += i++; //pós incremento
console.log(`j:${j} | i:${i}<br/>`);

// let mao = 3;
// mao -= 2;
// console.log(mao)
