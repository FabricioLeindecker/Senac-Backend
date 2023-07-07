const express = require("express");
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
    res.send("Rua de lágrimas")   
});

app.listen(port, () => {
    console.log(`app está ouvindo a porta ${port}`)
});