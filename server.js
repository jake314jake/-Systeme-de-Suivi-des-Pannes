import express from "express";
import dotenv from "dotenv";
import userRoutes from './routes/UserRoute.js';
dotenv.config();

const app = express();
app.use(express.json()); 
const PORT = process.env.PORT ||8000;




app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNING ON  http://127.0.0.1:${PORT}`);
});
