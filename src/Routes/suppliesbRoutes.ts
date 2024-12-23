import { Router } from "express";
import {createSupplieb,getAllsuppliesb,getsupplieB,UpdateSupplies,deleteSupplie} from "../Controllers/suppliesbControllers";


const router = Router()


router.post('/',createSupplieb);
router.get('/',getAllsuppliesb);
router.get('/:id',getsupplieB)
router.put('/:id',UpdateSupplies)
router.delete('/:id',deleteSupplie)


export {router}