import { Schema, model } from "mongoose";
import { suppliesB } from "../Interfaces/suppliesbInterface";
import moment from "moment-timezone";

const schemaSuppliesB = new Schema<suppliesB>(

    {
        Nombre: {
            type: String
        },

        cantidad_utilizada: {
            type: Number
        },

        inventario_inicial: {
            type: Number
        },

        inventario_final: {
            type: Number
        },
        updatedAt: {
            type: Date,
            default: () => moment().tz('America/Bogota').toDate()
        },

    },
    {
        timestamps: true,
        versionKey: false
    }
)

const suppliesBModel = model<suppliesB>('suppliesB', schemaSuppliesB, 'InsuBiomedica')
export default suppliesBModel
