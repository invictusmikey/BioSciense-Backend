import { Router } from "express";
import { createTool,getAllTools,getTool,deleteTool,updateTool } from "../Controllers/inventoryiControllers";

const router = Router()

router.post('/',createTool);
router.get('/',getAllTools);
router.get('/:id',getTool);
router.put('/:id',updateTool);
router.delete('/:id',deleteTool);

export {router}
