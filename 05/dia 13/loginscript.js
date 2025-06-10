document.getElementById("id_formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("id_email").value;
  const senha = document.getElementById("id_senha").value;
  const mensagem = document.getElementById("mensagem");

  const emailCorreto = "Gabriel@gmail.com";
  const senhaCorreta = "08042008";

  mensagem.textContent =
    email === emailCorreto && senha === senhaCorreta
      ? (window.location.href = "CROUD/croud.html")
      : "Email ou senha incorretos.";
});
