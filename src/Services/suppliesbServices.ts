import moment from 'moment-timezone'
import { suppliesB } from '../Interfaces/suppliesbInterface'
import suppliesBModel from '../Models/suppliesbModel'
import { inventoryB } from '../Interfaces/inventorybInterface'

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
        const data = await suppliesBModel.find()

         const formattedData = data.map(item => ({
              ...item.toObject(),
              updatedAt: moment(item.updatedAt).tz("America/Bogota").format("DD/MM/YYYY HH:mm:ss"),
            }));
        
            return formattedData
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

