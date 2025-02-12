import { Response, Request } from 'express';
import fs from 'fs/promises';
import path from 'path';

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

export default {
    createDirectory
};
