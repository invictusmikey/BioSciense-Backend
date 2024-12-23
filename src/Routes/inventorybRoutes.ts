import { Router } from "express";
import { getInventorysb, createInventoryb, getInventoryb, deleteInventoryb, updateInventoryb  } from "../Controllers/InventorybControllers";




const router = Router()

router.get('/',getInventorysb)
router.get('/:id',getInventoryb)
router.post('/',createInventoryb)
router.delete('/:id',deleteInventoryb)
router.put('/:id',updateInventoryb)


export {router}