let limpar = () => {
  // Capturar via ID
  // let jogador = document.getElementById("id_joao_ricardo");
  // console.log(jogador);

  // // CAPTURAR via QUERY INDIVIDUAL
  // let jogador = document.querySelector(".jogadores");
  // console.log(jogador);
  // jogador.innerHTML = "";

  // Capturar todos por QUERY / CLASSE
  // let jogadores = document.querySelectorAll(".jogadores");
  // console.log(jogadores.length);
  // console.log(jogadores);

  // for (let i = 0; i < jogadores.length; i++){
  //     jogadores[i].innerHTML = "<strong>Adria</strong>"
  // }

  // Capturar todos por QUERY / TAG
  // let jogadores = document.querySelectorAll("li");
  // console.log(jogadores.length);
  // console.log(jogadores);

  // for (let i = 0; i < jogadores.length; i++){
  //     jogadores[i].innerHTML = ""
  // }

  // Capturar todos os NAMES via QUERY
  let jogadores = document.getElementsByName("juan");
  console.log(jogadores.length);
  console.log(jogadores);

  for (let i = 0; i < jogadores.length; i++) {
    jogadores[i].innerHTML = "";
  }
};
