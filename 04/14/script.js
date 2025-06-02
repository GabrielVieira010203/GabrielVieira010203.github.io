document
  .getElementById("id_formulario")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const numero = parseFloat(document.getElementById("id_numero").value);
    const operacao = document.getElementById("operacao").value;
    const resultado1 = document.getElementById("resultado");

    resultado1.innerHTML = "";

    let resultadoHTML = "<h2>Resultado:</h2><ul>";

    for (let i = 1; i <= 10; i++) {
      let resultadoLinhas;

      switch (operacao) {
        case "+":
          resultadoLinhas = `${numero} + ${i} = ${numero + i}`;
          break;
        case "-":
          resultadoLinhas = `${numero} - ${i} = ${numero - i}`;
          break;
        case "*":
          resultadoLinhas = `${numero} × ${i} = ${numero * i}`;
          break;
        case "/":
          resultadoLinhas = `${numero} ÷ ${i} = ${(numero / i).toFixed(2)}`;
          break;
        default:
          resultadoLinhas = "Operação inválida.";
          break;
      }

      resultadoHTML += `<li>${resultadoLinhas}</li>`;
    }

    resultadoHTML += "</ul>";
    resultado1.innerHTML = resultadoHTML;
  });
asa;
