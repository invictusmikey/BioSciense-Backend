import { Router } from "express";
import directoryBControllers from "../Controllers/directoryBControllers";
const router =Router()

router.post('/',directoryBControllers.createDirectory)

export {router}