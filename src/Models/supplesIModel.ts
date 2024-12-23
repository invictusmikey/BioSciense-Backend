import {Schema,model} from "mongoose";
import { suppliesI } from "../Interfaces/suppliesInterface";


 const schemasSupliesI = new Schema<suppliesI>(

    {
        Nombre:{
            type:String
        },
        Descripcion:{
            type:String
        },
        InventarioInicial:{
            type:Number
        },
        CantidadUtilizada:{
            type:Number
        },
        InventarioFina:{
            type:Number
        },
        Estado:{
            type:String
        },
        updatedAt:{
            type:Date,
            default:Date.now
        }

    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const suppliesIModel = model<suppliesI>("suppliesI",schemasSupliesI,"Infraestructura");
export default suppliesIModel