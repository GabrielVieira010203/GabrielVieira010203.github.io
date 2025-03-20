let CalculadoraIMC = () => {
  let peso1 = document.getElementById("id_NumeroPeso").value;
  peso1 = peso1.replace(",", ".");
  let altura2 = Number(document.getElementById("id_NumeroAltura").value);
  let resultadoIMC = document.getElementById("id_resultadoIMC");

  if (peso1 > 0 && altura2 > 0) {
    let resultado = peso1 / (altura2 * altura2);

    let classificacao;
    if (resultado >= 40) {
      classificacao = "Obesidade Grau 3";
    } else if (resultado >= 35) {
      classificacao = "Obesidade Grau 2";
    } else if (resultado >= 30) {
      classificacao = "Obesidade Grau 1";
    } else if (resultado >= 25) {
      classificacao = "Excesso de Peso";
    } else if (resultado >= 18.5) {
      classificacao = "Peso Normal";
    } else {
      classificacao = "Abaixo do Peso Normal";
    }

    resultadoIMC.innerHTML = `Seu IMC é: ${resultado.toFixed(
      2
    )} - ${classificacao}`;
  } else {
    resultadoIMC.innerHTML = "Por favor, insira valores válidos!";
  }
};
// let CalculadoraIMC = () => {
//   let peso1 = Number(document.getElementById("id_NumeroPeso").value);
//   let altura2 = Number(document.getElementById("id_NumeroAltura").value);
//   let resultadoIMC = document.getElementById("id_resultadoIMC");

//   if (peso1 > 0 && altura2 > 0) {
//     let resultado = peso1 / (altura2 * altura2);

//     let classificacao =
//       resultado >= 40
//         ? "Obesidade Grau 3"
//         : resultado >= 35
//         ? "Obesidade Grau 2"
//         : resultado >= 30
//         ? "Obesidade Grau 1"
//         : resultado >= 25
//         ? "Excesso de Peso"
//         : resultado >= 18.5
//         ? "Peso Normal"
//         : "Abaixo do Peso Normal"; // Caso contrário

//     resultadoIMC.innerHTML = `Seu IMC é: ${resultado.toFixed(
//       2
//     )} - ${classificacao}`;
//   } else {
//     resultadoIMC.innerHTML = "Por favor, insira valores válidos!";
//   }
// };
