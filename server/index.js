import express from "express";

const app = express();

app.get('/', (req,res) => {
    res.json({
        message: "full stack message board!"
    })
})

const port = 8080;
app.listen(port,() => {
    console.log(`listening on ${port}`);
})