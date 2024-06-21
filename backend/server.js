import  express  from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import ConnectToDB from "./database/ConnectToDB.js";

import authRoute from "./routes/auth.route.js"
import examRoute from "./routes/exam.route.js"
import enquiryRoute from "./routes/enquiry.route.js";
import jobRoute from "./routes/job.route.js"

dotenv.config()
const app = express();

const __dirname = path.resolve();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get('/resume/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'backend' ,'uploads', 'resumes' ,filename));
});

app.get('/image/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'backend' ,'uploads', 'images' ,filename));
});

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoute)
app.use("/api/exam", examRoute);
app.use("/api/enquiry", enquiryRoute);
app.use("/api/job",jobRoute);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    ConnectToDB();
    console.log(`listening on port: ${PORT}`);
});