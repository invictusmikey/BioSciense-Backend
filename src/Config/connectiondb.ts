import 'dotenv/config'
import mongoose from 'mongoose';



async function dbConnect(): Promise<void> {
    const DB_URI = process.env.DB_URI as string 
    mongoose.connect(DB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .then(() => console.log("Estado de conexión:", mongoose.connection.readyState))
  .catch(err => console.error('Error conectando a MongoDB:', err));

}

  

export default dbConnect