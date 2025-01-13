import moment from "moment-timezone";
import { inventoryB } from "../Interfaces/inventorybInterface";
import inventoryBModel from "../Models/inventorybModel";

const insertInventory = async (item: inventoryB) => {
    try {
        const responseInsert = await inventoryBModel.create(item);
        return responseInsert;
    } catch (error) {
        throw new Error(`Error al insertar la maquina`);
    }
}

const getInventorys = async () => {
    try {

        const data = await inventoryBModel.find();


        const formattedData = data.map(item => ({
            ...item.toObject(),
            updatedAt: moment(item.updatedAt).tz("America/Bogota").format("DD/MM/YYYY HH:mm:ss"),
            fechaMantenimiento: moment(item.updatedAt).tz("America/Bogota").format("DD/MM/YYYY HH:mm:ss"),
            fechaProximoM: moment(item.updatedAt).tz("America/Bogota").format("DD/MM/YYYY HH:mm:ss")
        }));

        return formattedData;

    } catch (error) {

        throw new Error('Error al encontrar las maquinas')
    }

}

const getInventory = async (id: string) => {
    try {
        const responseId = await inventoryBModel.findById(id);
        return responseId;
    } catch (error) {
        throw new Error(`Error al obtener el maquina`);
    }
}

const deleteInventory = async (id: string) => {
    try {
        const responseId = await inventoryBModel.deleteOne({ _id: id });
        return responseId.deletedCount > 0;
    } catch (error) {
        throw new Error(`Error al eliminar el maquina`);
    }
}

const updateInventory = async (id: string, data: inventoryB) => {
    try {

        data.updatedAt = new Date();


        const responseId = await inventoryBModel.findOneAndUpdate({ _id: id }, data, { new: true });

        return responseId;
    } catch (error) {
        throw new Error(`Error al actualizar el maquina`);
    }
}




export { insertInventory, getInventorys, getInventory, deleteInventory, updateInventory };
