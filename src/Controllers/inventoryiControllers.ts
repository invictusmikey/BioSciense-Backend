import { Response, Request } from 'express'
import { insertInventoryI, getInventoryI, getInventoryis, deleteInventoryI, updateInventoryI } from '../Services/inventoryiServices'

const createTool = async (req: Request, res: Response) => {

    try {
        const inventoryI = req.body
        const response =await  insertInventoryI(inventoryI)
        return res.status(200).json({ message: 'Se añadio correcatame la herramienta', data: response })

    } catch (error) {
        return res.status(500).json({ message: 'No se puedo añadir la herramienta' })
    }
}

const getAllTools = async (req: Request, res: Response) => {
    try {

        const response = await getInventoryis()
        if (!response) {
            return res.status(404).json({ message: 'Error' })    
        }
        res.send(response)

    } catch (error) {

        return res.status(500).json({ message: 'Error al encontrar las herramientas' })

    }
}
const getTool = async (req: Request, res: Response) => {
    try {

        const { id } = req.params
        const response =await getInventoryI(id)
        if (!response) {
            return res.status(404).json({ message: 'herramienta no encontrada' });
        }

        res.send(response);
    } catch (error) {
        return res.status(500).json({ message: 'Herramienta no encontrada ' })
    }

}

const updateTool = async (req:Request,res:Response) => {
    
    try {
        const { id } = req.params;  
        const updateData = req.body; 

        const response =await updateInventoryI(id,updateData)
        if (!response) {
            
            return res.status(404).json({ message: 'Insumo no encontrado' });
        }
        return res.status(200).json({ message: 'Insumo actualizado', data: response });
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar el insumo'});
    }

}

const deleteTool = async (req:Request,res:Response) => {
    try {
        const { id } = req.params;
        const response = await deleteInventoryI(id);

        if (!response) {
            return res.status(404).json({ message: 'Insumo no encontrado' });
        }

        return res.status(200).json({ message: 'Insumo eliminado', data: response });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el insumo' });
    }
} 

export {createTool,getAllTools,getTool,deleteTool,updateTool}