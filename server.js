// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');


// dotenv.config();


// const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
// const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");

// const hotelRouter = require("./routes/hotel.router");
// const categoryRouter = require("./routes/category.router");
// const singleHotelRouter = require("./routes/singlehotel.router");

// const authRouter = require("./routes/auth.router");
// const wishlistRouter = require("./routes/wishlist.router");



// const connectDB = require("./config/dbconfig");

// const app = express();

// app.use(cors());
// app.use(express.json());
// connectDB();

// const PORT = 3500;


// app.get("/", (req, res) => {
//     res.send("Hello Visiter!")
// })   

// app.use("/api/hoteldata",hotelDataAddedToDBRouter);
// app.use("/api/categorydata", categoryDataAddedToDBRouter);
// app.use("/api/hotels", hotelRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/hotels", singleHotelRouter);
// app.use("/api/auth", authRouter);
// app.use("/api/wishlist", wishlistRouter);



// mongoose.connection.once("open", () => {
//     console.log("Connect to DB");
//     app.listen(process.env.PORT || PORT, () => {
//         console.log("Server is UP And Running ");
//     })
// })


// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();

// const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
// const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");

// const hotelRouter = require("./routes/hotel.router");
// const categoryRouter = require("./routes/category.router");
// const singleHotelRouter = require("./routes/singlehotel.router");

// const authRouter = require("./routes/auth.router");
// const wishlistRouter = require("./routes/wishlist.router");

// const connectDB = require("./config/dbconfig");

// const app = express();

// // ✅ allow frontend access
// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",              // local frontend
//       "https://travelss-booking.onrender.com/"  // deployed frontend
//     ],
//     credentials: true
//   })
// );

// app.use(express.json());
// connectDB();

// app.get("/", (req, res) => {
//   res.send("Hello Visitor! Backend is running ✅");
// });

// app.use("/api/hoteldata", hotelDataAddedToDBRouter);
// app.use("/api/categorydata", categoryDataAddedToDBRouter);
// app.use("/api/hotels", hotelRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/hotels", singleHotelRouter);
// app.use("/api/auth", authRouter);
// app.use("/api/wishlist", wishlistRouter);

// mongoose.connection.once("open", () => {
//   console.log("✅ Connected to MongoDB");
//   const PORT = process.env.PORT || 3500;
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//   });
// });


// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// dotenv.config();

// const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
// const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");

// const hotelRouter = require("./routes/hotel.router");
// const categoryRouter = require("./routes/category.router");
// const singleHotelRouter = require("./routes/singlehotel.router");

// const authRouter = require("./routes/auth.router");
// const wishlistRouter = require("./routes/wishlist.router");

// const connectDB = require("./config/dbconfig");

// const app = express();

// // ✅ allow frontend access (fixed trailing slash issue)
// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",                 // local frontend
//       "https://travelss-booking.onrender.com" // deployed frontend (no slash!)
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true
//   })
// );

// app.use(express.json());
// connectDB();

// app.get("/", (req, res) => {
//   res.send("Hello Visitor! Backend is running ✅");
// });

// app.use("/api/hoteldata", hotelDataAddedToDBRouter);
// app.use("/api/categorydata", categoryDataAddedToDBRouter);
// app.use("/api/hotels", hotelRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/hotels", singleHotelRouter);
// app.use("/api/auth", authRouter);
// app.use("/api/wishlist", wishlistRouter);

// mongoose.connection.once("open", () => {
//   console.log("✅ Connected to MongoDB");
//   const PORT = process.env.PORT || 3500;
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//   });
// });



// const allowedOrigins = [
//   "http://localhost:3000",
//   "https://travelss-booking.onrender.com" // ✅ no trailing slash
// ];

// app.use(
//   cors({
//     origin: allowedOrigins,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true
//   })
// );

// // ✅ Handle preflight requests
// app.options("*", cors());





// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');

// dotenv.config();

// const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
// const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");

// const hotelRouter = require("./routes/hotel.router");
// const categoryRouter = require("./routes/category.router");
// const singleHotelRouter = require("./routes/singlehotel.router");

// const authRouter = require("./routes/auth.router");
// const wishlistRouter = require("./routes/wishlist.router");

// const connectDB = require("./config/dbconfig");

// const app = express();

// // // ✅ Allow only your frontend origin
// // const allowedOrigins = [
// //     // "http://localhost:3000",                     // local development
// //     // "https://travels-frontend.onrender.com/api"      // replace with your actual frontend URL
    
// //   ];
  
//   // app.use(
//   //   cors({
//   //     origin: allowedOrigins,
//   //     credentials: true, // allow cookies/headers if you use auth
//   //   })
//   // );



  
// app.use(express.json());
// connectDB();

// const PORT = 3500;

// app.get("/", (req, res) => {
//   res.send("Hello Visitor!");
// });

// app.use("https://travelss-booking.onrender.com/api/hoteldata", hotelDataAddedToDBRouter);
// app.use("https://travelss-booking.onrender.com/api/categorydata", categoryDataAddedToDBRouter);
// app.use("https://travelss-booking.onrender.com/api/hotels", hotelRouter);
// app.use("https://travelss-booking.onrender.com/api/category", categoryRouter);
// app.use("https://travelss-booking.onrender.com/api/hotels", singleHotelRouter);
// app.use("https://travelss-booking.onrender.com/api/auth", authRouter);
// app.use("https://travelss-booking.onrender.com/api/wishlist", wishlistRouter);

// mongoose.connection.once("open", () => {
//   console.log("Connected to DB");
//   app.listen(process.env.PORT || PORT, () => {
//     console.log("Server is UP And Running");
//   });
// });



// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');

// dotenv.config();

// const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
// const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");

// const hotelRouter = require("./routes/hotel.router");
// const categoryRouter = require("./routes/category.router");
// const singleHotelRouter = require("./routes/singlehotel.router");

// const authRouter = require("./routes/auth.router");
// const wishlistRouter = require("./routes/wishlist.router");

// const connectDB = require("./config/dbconfig");

// const app = express();

// const allowedOrigins = [
//   "http://localhost:3000",       // React local dev
//   "http://192.168.1.4:3000",     // Your LAN IP React
//   "https://travel-app-vm2w.onrender.com", // Backend itself (optional)
//   "https://travels-frontend.onrender.com" // Your deployed frontend
// ];

// app.use(cors({
//   origin: allowedOrigins,
//   credentials: true,
// }));

// const API = axios.create({
//   baseURL: "https://travel-app-vm2w.onrender.com/api",
//   withCredentials: true,
// });

// // Example call
// API.get("/hotels")
//    .then(res => console.log(res.data))
//    .catch(err => console.error(err));

// app.use(express.json());
// connectDB();

// const PORT = 3500;

// app.get("/", (req, res) => {
//   res.send("Hello Visitor!");
// });

// // ✅ Use relative routes (not full URLs)
// app.use("/api/hoteldata", hotelDataAddedToDBRouter);
// app.use("/api/categorydata", categoryDataAddedToDBRouter);
// app.use("/api/hotels", hotelRouter);
// app.use("/api/category", categoryRouter);
// app.use("/api/hotel", singleHotelRouter);
// app.use("/api/auth", authRouter);
// app.use("/api/wishlist", wishlistRouter);

// mongoose.connection.once("open", () => {
//   console.log("Connected to DB");
//   app.listen(process.env.PORT || PORT, () => {
//     console.log(`Server is UP And Running on port ${process.env.PORT || PORT}`);
//   });
// });



const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");

const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const singleHotelRouter = require("./routes/singlehotel.router");
const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");

const connectDB = require("./config/dbconfig");

const app = express();

// ✅ CORS allowed origins
const allowedOrigins = [
  "http://localhost:3000",             // React local dev
  "http://192.168.1.4:3000",           // Your LAN IP React
  "https://travel-app-vm2w.onrender.com", // Backend itself (optional)
  "https://travelss-booking.onrender.com" // Your deployed frontend
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());

// ✅ DB connection
connectDB();

// ✅ Routes
app.get("/", (req, res) => {
  res.send("Hello Visitor!");
});

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/categorydata", categoryDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to DB");
  app.listen(process.env.PORT || 3500, () => {
    console.log(`✅ Server is running on port ${process.env.PORT || 3500}`);
  });
});
