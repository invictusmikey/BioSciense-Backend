import { Schema, model } from "mongoose";
import { suppliesB } from "../Interfaces/suppliesbInterface";
import moment from "moment-timezone";

const schemaSuppliesB = new Schema<suppliesB>(

    {
        Nombre: {
            type: String
        },
        Cantidad_utilizada: {
            type: Number
        },
        Inventario_inicial: {
            type: Number
        },
        Inventario_final: {
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

const suppliesBModel = model<suppliesB>('suppliesB', schemaSuppliesB, 'insuBiomedica')
export default suppliesBModel
