import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./loadEnvironment.js";
import "./cronDailyCleanup.js"

import travelDetailsCollection from "./routes/travelDetailsCollection.js";
import getDateTime from "./routes/getDateTime.js"
import userDetailsCollection from "./routes/userDetailsCollection.js"
import login from "./routes/login.js";
import dailyCleanup from "./routes/dailyCleanup.js";

import verifyJWT from "./verifyJWT.js";

const PORT = process.env.PORT || 3069;
const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/travelDetails", verifyJWT, travelDetailsCollection);
app.use("/getDateTime", verifyJWT, getDateTime);
app.use("/userDetails", verifyJWT, userDetailsCollection);

app.use("/login", login);
app.use("/dailyCleanup", dailyCleanup);

app.get('*',(req,res)=>{
    res.status(200).json({
      message: new Date().toISOString()
    })
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// module.exports = app;
// export default app;