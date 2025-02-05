import { Response, Request } from "express";
import { createSuppliesb, getSupplieb, getSuppliesb, deleteSupplieb, updateSupplieb } from "../Services/suppliesbServices";


const createSupplieb = async (req: Request, res: Response) => {
    try {
        const suppliesB = req.body;
        if (!suppliesB || Object.keys(suppliesB).length === 0) {
            return res.status(400).json({ message: 'Los datos del insumo son requeridos' });
        }

        const response = await createSuppliesb(suppliesB)
        return res.status(201).json({ message: 'insumo creado con exito',response })

    } catch (error) {
        return res.status(400).json({ message: 'El insumo no fue creado' })
    }
}

const getAllsuppliesb = async (req: Request, res: Response) => {

    try {
        const response = await getSuppliesb();
        res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({ message: 'error al encontrar los insumos' })
    }


}

const getsupplieB = async (req: Request, res: Response) => {

    try {
        const { id } = req.params

        const response = await getSupplieb(id)
        
        res.status(200).json({message: 'insumo encontrado',response})


    } catch (error) {
        res.status(500).json({message: 'insumo no encontrado'})
    }

}

const UpdateSupplies = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updateD = req.body

        const response = await updateSupplieb(id, updateD)

        return res.status(200).json({ message: 'insumo actualizado' })
    } catch (error) {
        return res.status(500).json({ message: 'erro al actualizar el insumo' })
    }

}

const deleteSupplie = async (req: Request, res: Response) => {

    try {

        const { id } = req.params;
        const deleteD = req.body;

        const response = await deleteSupplieb(id)

        return res.status(200).json({message: 'Insumo eliminado de la bd'})

    } catch (error) {

        return res.status(500).json({ message : 'Error al elimininar el insumo'})

    }



}

export { createSupplieb,getAllsuppliesb,getsupplieB,UpdateSupplies,deleteSupplie}