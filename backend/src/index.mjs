import express from 'express';
import routes from './routes/index.js';
import mongoose from 'mongoose'
import cors from "cors";

mongoose.connect('mongodb://127.0.0.1:27017/messageboard').then(
    () => { console.log("Connected to MongoDB"); },
    err => { console.log(err); }
  );

const app = express();
const port = process.env.port || 5000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
app.use(routes);

app.get('/api/test', (req, res) => {
    res.json({message: "Hello World!"});
});

app.listen(port, () => {
    console.log("server on port " + port + " running....");
})
