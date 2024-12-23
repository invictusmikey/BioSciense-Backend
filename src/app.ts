import express from "express";
import cors from "cors"
import "dotenv/config";
import db from './Config/connectiondb'
import router from "./Routes/index";

const app = express()

const PORT = process.env.PORT || 7000

app.use(cors())

app.use(express.json())

app.use(router)




db().then(() => console.log('connected with mongo'));

app.listen(PORT, () => console.log(`Running on port ${PORT}`))