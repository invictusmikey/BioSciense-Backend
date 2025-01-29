import multer from 'multer';
import inventoryBModel from '../Models/inventorybModel';
import { Request, Response } from 'express';
import { storage } from '../Config/multerConfig';

const upload = multer({ storage }).array('archivos');

const getArchives = async (req: Request, res: Response) => {
    try {
        const { id: inventarioId } = req.params;
       const inventario = await inventoryBModel.findById(inventarioId);

       if (!inventario) {
           return res.status(404).json({ message: 'Inventario no encontrado' });
        
       }

       const archivos = inventario.archivos || []

         res.status(200).json({ message: 'Archivos encontrados', data: archivos });
         console.log(archivos);
         

    } catch (error) {

        res.status(500).json({message: 'Error al obtener el archivo', error});
    }

}

const subirArchivo = async (req: Request, res: Response) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error al subir los archivos', error: err.message });
        }

        const { id: inventarioId } = req.params;
        const archivos = Array.isArray(req.files) ? req.files.map((file: Express.Multer.File) => file.path) : [];

        try {
            const inventario = await inventoryBModel.findById(inventarioId);

            if (!inventario) {
                return res.status(404).json({ message: 'Inventario no encontrado' });
            }

            inventario.archivos.push(...archivos);
            await inventario.save();

            res.status(200).json({ message: 'Archivos subidos y actualizados correctamente', data: inventario });
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el inventario con los archivos', error });
        }
    });
};



export default {
    subirArchivo,
    getArchives
};