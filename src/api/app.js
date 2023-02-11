require("dotenv").config()

const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const mediaroutes = require("./routes/media_route");
app.use('/medias',mediaroutes);
app.listen(port, () => {
    console.log("Server started... Listening on http://127.0.0.1:3000")
});

