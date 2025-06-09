import { Router } from "express";
import EditoraController from "../controllers/EditoraController.js";

const router = Router();

router.get("/", EditoraController.listarEditoras);
router.post("/", EditoraController.cadastrarEditora);
router.post("/:id/edit", EditoraController.editarEditora);
router.post("/:id/excluir", EditoraController.excluirEditora);

export default router;
