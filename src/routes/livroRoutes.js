import { Router } from "express";
import LivroController from "../controllers/LivroController.js";

const router = Router();


router.get("/", LivroController.listarLivros);
router.post("/", LivroController.cadastrarLivro);
router.post("/:id/edit", LivroController.editarLivro);
router.post("/:id/excluir", LivroController.excluirLivro);

export default router;
