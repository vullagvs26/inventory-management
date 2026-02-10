import "dotenv/config";
import express, {} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
// Routes import
import dashboardRoutes from "./routes/dashboardRoutes.js";
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Routes
app.get("/hello", (_req, res) => {
    res.send("Welcome to the Inventory Management API");
});
app.use("/dashboard", dashboardRoutes);
// Server 
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map