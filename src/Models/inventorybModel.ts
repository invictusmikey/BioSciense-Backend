import mongoose, { model, Schema } from "mongoose";
import { inventoryB } from "../Interfaces/inventorybInterface";
import moment from "moment-timezone";

const schemaInventoryB = new Schema<inventoryB>(
    {

        cod_inventario: {
            type: String,
            required: true,
        },
        equipo: {
            type: String,
            required: true,
        },
        marca: {
            type: String,
            required: true,
        },
        modelo: {
            type: String,
            required: true,
        },
        serial: {
            type: String,
            required: true,
        },
        ubicacion: {
            type: String,
            required: true,
        },
        reg_invima: {
            type: String,
            required: true,
        },
        updatedAt: {
            type: Date,
            default: () => moment().tz('America/Bogota').toDate()
        },
        archivos: {
            type: [String],
            required: false,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
const inventoryBModel = model<inventoryB>("inventoryB", schemaInventoryB, "Biomedica");

export default inventoryBModel;
