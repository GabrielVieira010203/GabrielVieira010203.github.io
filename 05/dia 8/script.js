let form = document.querySelector("#formulario");
form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  let nome = document.getElementById("id_nome").value;
  let matricula = document.getElementById("id_matricula").value;

  //Cadastrar chave e valor localmente no navegador
  localStorage.setItem("nome", nome);
  localStorage.setItem("matricula", matricula);

  //Consultar valor por índice
  let chave = localStorage.key(1);
  console.log("Chave: " + chave);

  //Consultar valor por chave
  let valor = localStorage.getItem(chave);
  console.log("Valor: " + valor);
});
