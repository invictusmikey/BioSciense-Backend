import { Schema, model } from "mongoose";
import { inventoryI } from "../Interfaces/inventoryiInterface";
import moment from "moment-timezone";

const schemainventoryiModel = new Schema<inventoryI>(

    {
        cantidad: {
            type: Number
        },
        herramienta: {
            type: String
        },
        updatedAt: {
            type: Date,
            default: () => moment().tz('America/Bogota').toDate()
        }

    },
    {
        timestamps: true,
        versionKey: false,
    }

)

const inventoryIModel = model<inventoryI>("inventoryI", schemainventoryiModel, "InvenInfraestructura");
export default inventoryIModel