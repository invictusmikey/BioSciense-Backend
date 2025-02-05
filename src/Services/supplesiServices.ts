import moment from "moment-timezone";
import { suppliesI } from "../Interfaces/suppliesInterface";
import suppliesIModel from "../Models/supplesIModel";

const insertSupplies = async (data: suppliesI) => {
    try {

        if (!data || Object.keys(data).length === 0) {
            throw new Error('Los datos del insumo son requeridos');
        }
        console.log('Datos a insertar:', data);
        const responseInsert = await suppliesIModel.create(data);


        return {
            message: 'Insumo insertado exitosamente',
            data: responseInsert,
        };
    } catch (error) {

        console.error(error);
        throw new Error(`Error al insertar el insumo`);
    }
}


const getSupplies = async () => {
    const data = await suppliesIModel.find();


    const formattedData = data.map(item => ({
        ...item.toObject(),
        updatedAt: moment(item.updatedAt).tz("America/Bogota").format("DD/MM/YYYY HH:mm:ss"),
    }));

    return formattedData;
};

const getSupplie = async (id: string) => {
    try {
        const responseId = await suppliesIModel.findById(id);
        return responseId;
    } catch (error) {
        throw new Error(`Error al obtener el insumo`);
    }
}

const deleteSupplie = async (id: string) => {
    try {
        const responseId = await suppliesIModel.deleteOne({ _id: id });
        return responseId.deletedCount > 0;
    } catch (error) {
        throw new Error(`Error al eliminar el insumo`);
    }
}

const updateSupplie = async (id: string, data: suppliesI) => {
    try {
        data.updatedAt = new Date();

        const responseId = await suppliesIModel.findOneAndUpdate({ _id: id }, data, { new: true });

        if (!responseId) {
            throw new Error('No se encontró el insumo para actualizar');
        }

        return responseId;
    } catch (error) {
        console.error(error);
        throw new Error(`Error al actualizar el insumo`);
    }
}

export { insertSupplies, getSupplies, getSupplie, deleteSupplie, updateSupplie };