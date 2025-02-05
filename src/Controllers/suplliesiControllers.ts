import { Response,Request } from "express";


import { getSupplies, insertSupplies, getSupplie, deleteSupplie, updateSupplie } from '../Services/supplesiServices';


const createSuppliesi = async (req: Request, res: Response) => {
    try {
        const suppliesI = req.body;

        if (!suppliesI || Object.keys(suppliesI).length === 0) {
            return res.status(400).json({ message: 'Los datos del insumo son requeridos' });
        }

        const response = await insertSupplies(suppliesI);
        return res.status(201).json({ message: 'Insumo creado con éxito', data: response });
    } catch (error) {
        console.error(error); 
        return res.status(500).json({ message: `Error al crear el insumo` });
    }
};


const getSuppliesi = async (req: Request, res: Response) => {
    try {
        const response = await getSupplies();
        res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los insumos' });
    }
};

const getSuppliei = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await getSupplie(id);

        if (!response) {
            return res.status(404).json({ message: 'Insumo no encontrado' });
        }

        res.send(response);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el insumo' });
    }
};

const deleteSuppliei = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await deleteSupplie(id);

        if (!response) {
            return res.status(404).json({ message: 'Insumo no encontrado' });
        }

        return res.status(200).json({ message: 'Insumo eliminado', data: response });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el insumo' });
    }
};

const updateSuppliei = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateData = req.body; 

        const response = await updateSupplie(id, updateData); 

        return res.status(200).json({ message: 'Insumo actualizado', data: response });
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar el insumo' });
    }
};

export { createSuppliesi,getSuppliei,getSuppliesi,deleteSuppliei,updateSuppliei};
