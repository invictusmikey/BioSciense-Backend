import { Router } from "express";
import { createSuppliesi,getSuppliei,getSuppliesi,deleteSuppliei,updateSuppliei } from "../Controllers/suplliesiControllers";
const router = Router()

router.post('/',createSuppliesi)
router.get('/',getSuppliesi)
router.get('/:id',getSuppliei)
router.delete('/:id',deleteSuppliei)
router.put('/:id',updateSuppliei)

export {router}