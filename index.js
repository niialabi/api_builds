import express from 'express';
import appRouter from './routes/index.js';
import { config } from 'dotenv';
import { connectToDatabase } from './db/index.js';
config();

const app = express();

// middlewares
app.use(express.json());

app.use("/api/v1/products", appRouter);

const PORT = process.env.PORT || 3000;

connectToDatabase()
.then(() => {
  app.listen( PORT, () => {
    console.log("Server is running on port ", PORT );
  }
  );
}).catch((error) => {
  console.log("Database Connection Error", error);
  process.exit(0);
});
