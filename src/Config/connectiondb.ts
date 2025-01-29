import 'dotenv/config'
import { connect } from 'mongoose'



async function dbConnect(): Promise<void> {
    const DB_URI = process.env.DB_URI as string
    await connect(DB_URI);
    connectTimeoutMS: 6000
    socketTimeoutMS: 60000

}

  
  export { dbConnect};

export default dbConnect