/*
    IMPORTS
*/
const express = require("express");
const app = express();
const logger = require("morgan");

/*
    MIDDLEWARE
*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

/*
    ROUTES
*/
const musicRouter = require("./routers/musicRouter");
const actorsRouter = require("./routers/actorsRouter");

app.use("/api/music", musicRouter);
app.use("/api/actors", actorsRouter);


/*
    POWER
*/
const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
