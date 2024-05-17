const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const session = require('express-session') //session management
const MongoStore = require('connect-mongo') //store session data in MongoDB
const cors = require('cors') //accepts client requests if they are not on the same host
const productRoutes = require('./routes/productRoutes')

const app = express()

const PORT = process.env.PORT || 3000

//Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/missha', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err));

//Session configuration
app.use(session({
    secret: 'tainamaina',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/missha'
    }),
    cookie: {secure: false, maxAge: 3600000} //Secure is true in production
}))

app.use(cors())

// app.use(cors((req, callback) => {
//     const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];
//     const origin = req.header('Origin');
//     if (allowedOrigins.includes(origin)) {
//         callback(null, { origin: true });
//     } else {
//         callback(new Error('CORS policy violation'), { origin: false });
//     }
// }));

app.use(express.json())
app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});