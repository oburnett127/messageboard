import express from 'express';

const app = express();
const port = process.env.port || 5000;

app.get('/api/test', (req, res) => {
    res.json({message: "Hello World!"});
});

app.listen(port, () => {
    console.log("server on port " + port + " running....");
})


