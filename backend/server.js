import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js';

const app = express();
app.use(express.json());  // Für JSON-Anfragen
const PORT = 3000;

// MongoDB-Verbindung
mongoose.connect('mongodb://database_user_auth:27017/notes')
    .then(() => console.log('MongoDB verbunden'))
    .catch((err) => console.log('MongoDB Verbindungsfehler:', err));


app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
