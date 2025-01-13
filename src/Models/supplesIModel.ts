import {Schema,model} from "mongoose";
import { suppliesI } from "../Interfaces/suppliesInterface";
import moment from "moment-timezone";

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
            default: () => moment().tz("America/Bogota").toDate()
            
        },
        fechaMantenimiento:{
            type:Date,
            default: () => moment().tz("America/Bogota").toDate()
            
        },
        fechaProximoM:{
            type:Date,
            default: () => moment().tz("America/Bogota").toDate()
            
        }

    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const suppliesIModel = model<suppliesI>("suppliesI",schemasSupliesI,"Infraestructura");
export default suppliesIModel