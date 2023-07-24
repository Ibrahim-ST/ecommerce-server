const express = require("express");
const app = express();

app.get("/test", (req, res) => {
    res.status(200).send({
        message: 'API is working fine'
    })
})
 

app.listen(3001, () => {
    console.log(`server is running at http://localhost:3001`);
})

