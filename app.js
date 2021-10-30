import express from 'express'
// import dotenv from 'dotenv';

import orderRoomBookedApi from './src/orderRoomBooked/orderRoomBookedApi.js';
import roomDetailAPI from "./src/roomDetail/roomDetailAPI.js";
// configs
import connectDatabase from "./src/configs/dbConfigs.js";
import userAPI from "./src/user/userAPI.js";
import amenitiesAPI from "./src/roomAmenities/amenitiesAPI.js";
//dotenv.config()
connectDatabase();
const app = express();
app.use(express())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));




app.get("/home", async(req, res) => {
    res.json("Trang chủ dự án tốt nghiệp ")

})

//Route
app.use('/orderRoomBooked', orderRoomBookedApi)
app.use('/roomDetailAPI', roomDetailAPI)
app.use('/userAPI', userAPI)
app.use('/roomAmenitiesAPI', amenitiesAPI)
    //Server
app.listen(process.env.PORT, async() => {
    console.log(`Server chạy bằng con port ${process.env.port}`);
})
export default app;