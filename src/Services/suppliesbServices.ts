import { suppliesB } from '../Interfaces/suppliesbInterface'
import suppliesBModel from '../Models/suppliesbModel'

const createSuppliesb = async (data: suppliesB) => {
    try {

        if (!data || Object.keys(data).length === 0) {
            throw new Error('Los datos del insumo son requeridos')
        }
        console.log('Datos a insertar',data);
        const responseCreate = await suppliesBModel.create(data)

        
        return {
            message: 'Insimo creado exitosamente',
            data: responseCreate
        }
        
    } catch (error) {
        throw new Error(`Error al crear el insumo`)
    }
}

const getSuppliesb = async () => {
    try {
        const responseGetSupplies = await suppliesBModel.find({})
        return responseGetSupplies
    } catch (error) {
        throw new Error(`Error al obtener insumos`)
    }
}

const getSupplieb = async (id: string) => {
    try {

        const responseGetSupplie = await suppliesBModel.findById(id)
        return responseGetSupplie
    } catch (error) {
        throw new Error(`Insumo no encontrado`)
    }
}

const updateSupplieb = async  (_id: string, updateData: suppliesB) =>{
    try {
        const responseUpdateSupplie = await suppliesBModel.findOneAndUpdate({ _id: _id }, updateData, { new: true })
        console.log('insumo acualizado');
        return responseUpdateSupplie
    }catch(error){
        throw new Error(`Error al actualizar el insumo`)
    }
}

const deleteSupplieb = async (_id: string) => {
        try {
            const responseDeleteSupplie = await suppliesBModel.deleteOne({ _id: _id })
            return responseDeleteSupplie;
        } catch (error) {
            throw new Error(`Error al borrar el insumo`)
        }
    }

    export { createSuppliesb, getSuppliesb, getSupplieb, deleteSupplieb,updateSupplieb }

