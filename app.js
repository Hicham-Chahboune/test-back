
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(cors());
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/shops', shopRoutes);

mongoose.set("strictQuery", false);

mongoose
  .connect('mongodb://localhost/shopdatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
  )
.then(app.listen(1234)).catch(e=>console.log(e))
