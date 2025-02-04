import { inventoryI } from "../Interfaces/inventoryiInterface";
import inventoryIModel from "../Models/inventoryiModel";
import moment from 'moment-timezone';
const insertInventoryI = async (item: inventoryI) => {
    try {
        const responseInsert = await inventoryIModel.create(item)
        return responseInsert

    } catch (error) {
        throw new Error('No se puso crear la herramienta')
    }
}

const getInventoryis = async () => {
    try {
        const data = await inventoryIModel.find();

        const formattedData = data.map((item => ({
            ...item.toObject(),
            updatedAt: moment(item.updatedAt).tz('America/Bogota').format("DD/MM/YYYY HH:mm:ss")
        })))
        return formattedData
    } catch (error) {
        throw new Error('Error al obtener las herramientas')
    }

}

const getInventoryI = async (id: string) => {
    try {
        const getItem = await inventoryIModel.findById({ _id: id })
        return getItem
    } catch (error) {
        throw new Error('No se encontro la herramienta')
    }
}

const deleteInventoryI = async (id: string) => {
    try {
        const deleteInventoryI = await inventoryIModel.findByIdAndDelete({ _id: id })
        return deleteInventoryI
    } catch (error) {

        throw new Error('Error al eliminar la herramienta')

    }
}

const updateInventoryI = async (id: string, data: inventoryI) => {

    try {


        data.updatedAt = new Date();


        const responseId = await inventoryIModel.findOneAndUpdate({ _id: id }, data, { new: true });

        return responseId
    } catch (error) {

        throw new Error('error al actualizar el insumo ')
    }

}

export { insertInventoryI, getInventoryI, getInventoryis, deleteInventoryI, updateInventoryI }