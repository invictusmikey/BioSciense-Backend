import 'dotenv/config';
import mongoose from 'mongoose';

async function dbConnect(): Promise<void> {
  try {
    const DB_URI = process.env.DB_URI;

    if (!DB_URI) {
      throw new Error("❌ No se encontró la variable de entorno DB_URI");
    }

    await mongoose.connect(DB_URI);

    console.log("✅ Conectado a MongoDB Atlas");
    console.log("🔄 Estado de conexión:", mongoose.connection.readyState);

  
    mongoose.connection.on("connected", () => console.log("🟢 MongoDB conectado"));
    mongoose.connection.on("error", (err) => console.error("❌ Error en MongoDB:", err));
    mongoose.connection.on("disconnected", () => console.log("⚠️ MongoDB desconectado"));
    if (mongoose.connection.db) {
      console.log("📂 Base de datos actual:", mongoose.connection.db.databaseName);
    } else {
      console.log("⚠️ No se pudo obtener el nombre de la base de datos");
    }

  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
    process.exit(1); 
  }
}

export default dbConnect;
