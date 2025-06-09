import { alunos } from "./AlunoController.js";
import { livros } from "./LivroController.js";

class Emprestimo {
  static id = 0;
  static incrementId() {
    return Emprestimo.id++;
  }
  constructor(idAluno, idLivro, dataEmprestimo) {
    this.id = Emprestimo.incrementId();
    this.idAluno = idAluno;
    this.idLivro = idLivro;
    this.dataEmprestimo = dataEmprestimo;
    this.dataDevolucao = null;
    this.status = "pendente";
  }
}

const emprestimos = [];

class EmprestimoController {
  listarEmprestimos(req, res) {
   
    const hojeISO = new Date().toISOString().split("T")[0];
    res.render("emprestimo", { emprestimos, alunos, livros, hojeISO });
  }

  cadastrarEmprestimo(req, res) {
    const { idAluno, idLivro, dataEmprestimo } = req.body;

    if (!idAluno || !idLivro || !dataEmprestimo) {
      return res.status(400).send("Todos os campos são obrigatórios.");
    }

  
    const aluno = alunos.find(a => a.id == idAluno && a.ativo);
    if (!aluno) {
      return res.status(400).send("Aluno inválido ou inativo.");
    }

   
    const livro = livros.find(l => l.id == idLivro && l.ativo);
    if (!livro) {
      return res.status(400).send("Livro inválido ou inativo.");
    }

  
    const livroEmprestado = emprestimos.find(e => e.idLivro == idLivro && e.status === "pendente");
    if (livroEmprestado) {
      return res.status(400).send("Livro já está emprestado.");
    }

    const novoEmprestimo = new Emprestimo(idAluno, idLivro, dataEmprestimo);
    emprestimos.push(novoEmprestimo);

    res.redirect("/emprestimos");
  }

  devolverEmprestimo(req, res) {
    const { id } = req.params;
    const { dataDevolucao } = req.body;

    if (!dataDevolucao) {
      return res.status(400).send("Data de devolução é obrigatória.");
    }

    const emprestimo = emprestimos.find(e => e.id == id);
    if (!emprestimo) {
      return res.status(404).send("Empréstimo não encontrado.");
    }

    if (emprestimo.status === "devolvido") {
      return res.status(400).send("Empréstimo já foi devolvido.");
    }

    emprestimo.dataDevolucao = dataDevolucao;
    emprestimo.status = "devolvido";

    res.redirect("/emprestimos");
  }

  excluirEmprestimo(req, res) {
    const { id } = req.params;
    const index = emprestimos.findIndex((e) => e.id == id);
    if (index === -1) return res.status(400).send("Empréstimo não encontrado.");
    emprestimos.splice(index, 1);
    res.redirect("/emprestimos");
  }

  resetarEmprestimos(req, res) {
    emprestimos.length = 0;
    Emprestimo.id = 0;
    res.redirect("/emprestimos");
  }
}

export default new EmprestimoController();
export { emprestimos };