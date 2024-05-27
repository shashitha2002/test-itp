import dotenv from "dotenv";
import express from "express";
import "./db/conn.js"; 
import cors from "cors";
import router from "./Routes/router.js"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6010;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("./uploads"));
app.use("/files", express.static("./public/files"));

app.use(router);

app.listen(PORT, () => {
    console.log(`Server start at port no ${PORT}`);
});
