import { connect, set } from 'mongoose';
import { validateEnv } from './env.config';


// connection to db
export const connectToDB = async () => {
    const env = validateEnv();
    const MONGO_DB_URI = env?.MONGO_DB_URI;
    if (!MONGO_DB_URI) {
        throw new Error('MONGO_DB_URI is undefined');
    }
    try {
        set('strictQuery', false);
        const db = await connect(MONGO_DB_URI);
        console.log('MongoDB connected to', db.connection.name);
        // Emit an event when the connection is successful
    } catch (error) {
        console.error(error);
        // Emit an event when there's an error
    }
};