class Editora {
  static id = 0;
  static incrementId() {
    return Editora.id++;
  }
  constructor(nome, cnpj) {
    this.nome = nome;
    this.cnpj = cnpj;
    this.ativo = true;
    this.id = Editora.incrementId();
  }
}

const editoras = [];

class EditoraController {
  listarEditoras(req, res) {
    const editorasAtivas = editoras.filter((editora) => editora.ativo);
    res.render("editora", { editorasAtivas });
  }

  cadastrarEditora(req, res) {
    const { nome, cnpj } = req.body;
    const novaEditora = new Editora(nome, cnpj);
    editoras.push(novaEditora);
    res.redirect("/editoras");
  }

  excluirEditora(req, res) {
    const { id } = req.params;
    const editora = editoras.find((editora) => editora.id == id);
    if (editora) {
      editora.ativo = false;
    }
    res.redirect("/editoras");
  }

  editarEditora(req, res) {
    const { id } = req.params;
    const { nome, cnpj } = req.body;
    const editora = editoras.find((editora) => editora.id == id);
    if (editora) {
      editora.nome = nome;
      editora.cnpj = cnpj;
    }
    res.redirect("/editoras");
  }
}

export default new EditoraController();
export { editoras };
