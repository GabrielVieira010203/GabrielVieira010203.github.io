import express from "express";
import { resolve } from "path";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import methodOverride from "method-override";

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");


import homeRoutes from "./src/routes/homeRoutes.js";
import alunoRoutes from "./src/routes/alunoRoutes.js";
import livroRoutes from "./src/routes/livroRoutes.js";
import editoraRoutes from "./src/routes/editoraRoutes.js";
import emprestimoRoutes from "./src/routes/emprestimoRoutes.js";

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
   
    this.app.engine("handlebars", engine({
      helpers: {
        eq: (a, b) => a == b
      }
    }));
    this.app.set("view engine", "handlebars");
    this.app.set("views", resolve(__dirname, "src", "views"));

   
    this.app.use(express.static(resolve(__dirname, "public")));

   
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

   
    this.app.use(methodOverride("_method"));
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/alunos", alunoRoutes);
    this.app.use("/livros", livroRoutes);
    this.app.use("/editoras", editoraRoutes);
    this.app.use("/emprestimos", emprestimoRoutes);
  }
}

export default new App().app;