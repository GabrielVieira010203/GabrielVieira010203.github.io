export default class Aluno {
  #nome;
  #matricula;

  getNome() {
    return this.#nome;
  }

  setNome(nome) {
    this.#nome = nome;
  }

  getMatricula() {
    return this.#matricula;
  }

  setMatricula(matricula) {
    this.#matricula = matricula;
  }

  constructor(nome, matricula) {
    this.#nome = nome;
    this.#matricula = matricula;
  }
}
