
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

require('dotenv').config();
const dbconfig = require('./config/dbconfig');
app.use(express.json());

const userRoute = require('./routes/usersRoute')
const inventoryRoute = require('./routes/inventoryRoute')
const dashboardRoute = require('./routes/dashboardRoute')

app.use('/api/users',userRoute);
app.use('/api/inventory',inventoryRoute);
app.use('/api/dashboard',dashboardRoute);

app.listen(port,()=>console.log(`Node js is started at the ${port}`));
