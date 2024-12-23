import { Schema,model } from "mongoose";
import { suppliesB } from "../Interfaces/suppliesbInterface";

const schemaSuppliesB = new Schema<suppliesB>(

    {
        Nombre:{
            type:String
        },
        Cantidad_incial:{
            type:Number
        },
        Inventario_inicial:{
            type:Number
        },
        Inventario_final :{
            type:Number
        },
        updatedAt:{
            type:Date,
            default:Date.now
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
)

const suppliesBModel = model<suppliesB>('suppliesB',schemaSuppliesB,'insuBiomedica')
export default suppliesBModel
