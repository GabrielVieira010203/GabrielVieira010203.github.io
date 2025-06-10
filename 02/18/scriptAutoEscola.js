let verificarIdade = () => {
  let numeroIdade = Number(document.querySelector("#id_number").value);
  let resultadoIdade = document.querySelector("#id_resultadoIdade");

  if (numeroIdade < 18 || numeroIdade >= 100) {
    resultadoIdade.innerHTML =
      "Você está <strong>Inapto para o início</strong>";
  } else if (numeroIdade < 50) {
    resultadoIdade.innerHTML =
      "Você está apto <br> <strong>Terá que renovar em 10 anos</strong>";
  } else if (numeroIdade >= 50 && numeroIdade <= 69) {
    resultadoIdade.innerHTML =
      "Você está apto <br> <strong>Terá que renovar em 5 anos</strong>";
  } else if (numeroIdade >= 70) {
    resultadoIdade.innerHTML =
      "Você está apto <br> <strong>Terá que renovar em 3 anos</strong>";
  }
};
