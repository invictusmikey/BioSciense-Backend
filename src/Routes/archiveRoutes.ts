import express, { Router } from 'express';
import archivesController from '../Controllers/archivesController';
const router = Router();



router.put('/subir-archivo/:id', archivesController.subirArchivo);
router.get('/traer-archivo/:id',archivesController.getArchives );

export { router };