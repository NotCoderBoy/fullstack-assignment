import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import cardRoutes from './routes/cardRoutes.js';

const app = express();

connectDB();

app.use(cors());

app.use(bodyParser.json());

app.use('/', cardRoutes);

app.get('/ping', (req, res) => res.send('Server is running'));

app.get('/', (req, res) => {
    res.send('Server is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
