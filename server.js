const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.use(function(req, res, next) {
    res.status(404).send("Page not found.")
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});