import { Response, Request } from 'express';
import fs from 'fs/promises';
import path from 'path';
import 'dotenv'


const createDirectory = async (req: Request, res: Response) => {
    try {
        const {nameDir} = req.body
        const basePath = 'src/Controllers/CarpetasBackups' 
        
        const dirPath = path.join(basePath, nameDir);
        if (!nameDir) {
            return res.status(400).json({ message: 'El nombre de la carpeta es obligatorio' });
        }
        await fs.mkdir(dirPath, { recursive: true });
        res.status(200).json({ message: `Directorio ${nameDir} creado correctamente`, directory: dirPath });
    } catch (error) {
        res.status(500).json({ message: 'No se pudo crear el directorio', error: error});
    }
};

const readFiles = async (req:Request,res:Response) => {
    try {
        const lista = await fs.readdir("../../IMAGENOLOGIA")
        res.status(200).json({message:'📂los archivos del directorio son : ',directory:lista})

    } catch (error) {   
        res.status(500).json({message:'los archivos nos fueron leidos'})
    }
}

export default {
    createDirectory,
    readFiles
};
