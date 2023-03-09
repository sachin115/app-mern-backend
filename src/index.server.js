const express = require("express");
const env = require("dotenv");
const  mongoose = require("mongoose");
const path = require('path');
const cors = require('cors');
const app = express();




//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
const initialDataRoutes = require("./routes/admin/initialData");

// const searchDataRoutes = require("./routes/searchData.js")

//environment
env.config();
// mongodb connection
//mongodb+srv://root:<password>@cluster0.mkhax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.mkhax.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Database connected')
});


app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api', authRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);
app.use('/api',cartRoutes);
app.use('/api',initialDataRoutes)
// app.use('/api',searchDataRoutes)



app.listen(process.env.PORT, ()=> {
    console.log(`server is running on port ${process.env.PORT}`);
})