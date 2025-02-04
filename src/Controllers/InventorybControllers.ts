import { Response, Request } from 'express';
import fs from 'fs/promises';
import path from 'path';

import { insertInventory, getInventorys, getInventory, deleteInventory, updateInventory} from '../Services/inventorybServices';

const createInventoryb = async (req: Request, res: Response) => {
    try {
        const inventoryB = req.body;
        const response = await insertInventory(inventoryB);
        return res.status(201).json({ message: 'Insumo creado con éxito', data: response });
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el insumo' });
    }
};

const getInventorysb = async (req: Request, res: Response) => {
    try {
        const response = await getInventorys();
        
        res.status(200).json({message:'los datos son',response});
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los insumos' });
    }
};

const getInventoryb = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await getInventory(id);

        if (!response) {
            return res.status(404).json({ message: 'Insumo no encontrado' });
        }

        res.send(response);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el insumo' });
    }
};

const deleteInventoryb = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await deleteInventory(id);

        if (!response) {
            return res.status(404).json({ message: 'Insumo no encontrado' });
        }

        return res.status(200).json({ message: 'Insumo eliminado', data: response });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el insumo' });
    }
};

const updateInventoryb = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;  
        const updateData = req.body; 

        
        const response = await updateInventory(id, updateData);

        if (!response) {
            
            return res.status(404).json({ message: 'Insumo no encontrado' });
        }

        
        return res.status(200).json({ message: 'Insumo actualizado', data: response });
    } catch (error) {
        
        return res.status(500).json({ message: 'Error al actualizar el insumo'});
    }
};





export { getInventorysb, createInventoryb, getInventoryb, deleteInventoryb, updateInventoryb };
