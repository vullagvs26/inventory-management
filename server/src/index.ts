import "dotenv/config";
import express, { type Request, type Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

// Routes import
import dashboardRoutes from "./routes/dashboardRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";

// Configuration
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/dashboard", dashboardRoutes);
app.use("/product", productRoutes);
app.use("/users", userRoutes);
app.use("/expense", expenseRoutes);


// Root route for testing
app.get("/", (req: Request, res: Response) => {
  res.send("Inventory Management API is running!");
});


// Server 
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});