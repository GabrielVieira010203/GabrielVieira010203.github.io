import Aluno from "./Aluno.js";
const form = document.querySelector("#id_formulario");
const consultar = document.querySelector("#id_consultar");
const listaUL = document.querySelector("#listaDeAlunos");

const dialog = document.getElementById("dialog_editar");
const inputNome = document.getElementById("editar_nome");
const inputMatricula = document.getElementById("editar_matricula");
const botaoSalvar = document.getElementById("salvar_edicao");
const botaoFechar = document.getElementById("fechar_edicao");

let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
let indiceEditando = null;
let listaVisivel = false;
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("id_nome").value.trim();
  const matricula = document.getElementById("id_matricula").value.trim();

  if (!nome || !matricula) return;

  const aluno = { nome, matricula };
  alunos.push(aluno);
  localStorage.setItem("alunos", JSON.stringify(alunos));

  form.reset();
  listaUL.innerHTML = "";
  listaVisivel = false;
});

consultar.addEventListener("click", (e) => {
  e.preventDefault();

  if (listaVisivel) {
    listaUL.innerHTML = "";
    listaVisivel = false;
  } else {
    exibirLista();
    listaVisivel = true;
  }
});

function exibirLista() {
  listaUL.innerHTML = "";

  const dados = JSON.parse(localStorage.getItem("alunos")) || [];

  if (!dados.length) {
    listaUL.innerHTML = "<li>Faça o cadastro por favor.</li>";
    return;
  }

  dados.forEach(({ nome, matricula }, index) => {
    const li = document.createElement("li");
    li.innerHTML = `Aluno: ${nome} — Matrícula: ${matricula} 
      <button data-editar="${index}">Editar</button> 
      <button data-excluir="${index}">Excluir</button>`;
    listaUL.appendChild(li);
  });

  document.querySelectorAll("[data-excluir]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = btn.getAttribute("data-excluir");
      alunos.splice(index, 1);
      localStorage.setItem("alunos", JSON.stringify(alunos));
      exibirLista();
    });
  });

  document.querySelectorAll("[data-editar]").forEach((btn) => {
    btn.addEventListener("click", () => {
      indiceEditando = btn.getAttribute("data-editar");
      inputNome.value = alunos[indiceEditando].nome;
      inputMatricula.value = alunos[indiceEditando].matricula;
      dialog.showModal();
    });
  });
}

botaoSalvar.addEventListener("click", (e) => {
  e.preventDefault();

  const nome = inputNome.value.trim();
  const matricula = inputMatricula.value.trim();

  if (nome && matricula && indiceEditando !== null) {
    alunos[indiceEditando] = { nome, matricula };
    localStorage.setItem("alunos", JSON.stringify(alunos));
    dialog.close();
    exibirLista();
    listaVisivel = true;
    indiceEditando = null;
  }
});

botaoFechar.addEventListener("click", () => {
  dialog.close();
});
