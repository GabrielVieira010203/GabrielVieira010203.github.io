document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  let nome = document.querySelector("#id_nome").value;
  let resultado = document.querySelector("#id_resultado");

  let altura = document.getElementById("id_altura").value;
  altura = parseFloat(altura.replace(",", "."));

  let peso = document.getElementById("id_peso").value;
  peso = parseFloat(peso.replace(",", "."));

  let calculosIMC = peso / altura ** 2;

  resultado.innerHTML = ` <br>
    Olá, <strong>${nome}</strong/>
    <br> Seu IMC é <strong>${calculosIMC.toFixed(1)}</strong>
    e <br> sua classificação é: `;

  resultado.innerHTML +=
    calculosIMC < 18.5
      ? "Abaixo do peso normal"
      : calculosIMC >= 18.5 && calculosIMC <= 24.9
      ? "Peso normal"
      : calculosIMC > 24.9 && calculosIMC <= 29.9
      ? "Excesso de peso"
      : calculosIMC > 29.9 && calculosIMC <= 34.9
      ? "Obesidade classe 1"
      : calculosIMC > 34.9 && calculosIMC <= 39.9
      ? "Obesidade classe 2"
      : calculosIMC > 39.9
      ? "Obesidade classe 3"
      : "ERRO";
});
