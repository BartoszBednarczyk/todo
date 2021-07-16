const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();


var corsOptions = {
    origin: "http://localost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

//app.use(express.json());

const db = require("./models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!")
    }).catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.get('/', (req, res) => {
    res.json({ message: "Hello world!"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

