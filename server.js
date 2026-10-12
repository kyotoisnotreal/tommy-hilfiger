const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const dataFiles = {
    database: path.join(__dirname, 'database.json')
};

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    console.log(`[GET /] Request from ${req.ip}`);
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/api/advertisement', (req, res) => {
    console.log(`[GET /api/advertisement] Request from ${req.ip}`);
    const database = require(dataFiles.database);
    res.json(database.advertisement);
});

app.use(function(req, res, next) {
    console.log(`[404] Request from ${req.ip}`);
    res.status(404).json({
        status: 404,
        message: 'Not Found'
    })
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});