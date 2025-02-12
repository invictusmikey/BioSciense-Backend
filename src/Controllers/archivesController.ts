import multer from 'multer';
import fs from 'fs'; 
import inventoryBModel from '../Models/inventorybModel';
import { Request, Response } from 'express';
import { storage } from '../Config/multerConfig';
import path from 'path';


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

        if (!fs.existsSync("../uploadPath")) {
            fs.mkdirSync("../uploadPath", { recursive: true });
        }
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

const deleteArchives = async (req: Request, res: Response) => {
    const { id: inventarioId } = req.params;

    try {
        const inventario = await inventoryBModel.findById(inventarioId);
        if (!inventario) {
            return res.status(404).json({ message: "Inventario no encontrado" });
        }

        const archivos: string[] = inventario.archivos || [];
        
        for (const archivo of archivos) {
            const filePath = path.resolve(__dirname, "../../uploads", archivo); 
            try {
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            } catch (error) {
                console.error(`Error al eliminar el archivo ${archivo}:`, error);
            }
        }

        await inventoryBModel.findByIdAndDelete(inventarioId);

        res.status(200).json({ message: "Archivo(s) eliminado(s) con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el archivo", error });
    }
};


export default {
    subirArchivo,
    getArchives,
    deleteArchives
};