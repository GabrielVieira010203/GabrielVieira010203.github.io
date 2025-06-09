import { Router } from "express";
import EmprestimoController from "../controllers/EmprestimoController.js";

const router = Router();

router.get("/", EmprestimoController.listarEmprestimos);
router.post("/", EmprestimoController.cadastrarEmprestimo);
router.post("/:id/devolver", EmprestimoController.devolverEmprestimo);


router.post("/:id/excluir", EmprestimoController.excluirEmprestimo);


router.post("/resetar", EmprestimoController.resetarEmprestimos);

export default router;