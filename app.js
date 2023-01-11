const showRouter = require('./routes/shows');

const express = require('express');
const app = express();
// const path = require('path');

const mongoose = require('mongoose');

// routers
app.use('/', showRouter);


function startServer() {
    app.listen(8000, "127.0.0.1", () => {
        console.info(`Server running on 127.0.0.1:8000`);
    });
}

mongoose.connect("mongodb://127.0.0.1:27017/video_streaming_db", {useNewUrlParser: true, useUnifiedTopology: true}).then(startServer);
