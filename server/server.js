const config = require('config');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const adminRouter = require('./routes/admin.routes');
const itemRouter = require('./routes/item.routes');

const app = express();
const PORT = process.env.PORT || config.get('serverPort');

app.use(cors());
app.use(express.json({ limit: "40mb", extended: true }));
app.use('/api/admin', adminRouter);
app.use('/api/item', itemRouter);

const start = async () => {
    try {
        await mongoose.connect(config.get('dbUrl'));
        app.listen(PORT, () => {
            console.log('Server started on port:', PORT);
        })
    } catch (error) {
        console.log('Failed to connect to the server', error);
    }
};

start();