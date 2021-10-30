const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/', (req, res, next) => res.sendFile(__dirname + '/views/home.html'))
app.get('/', (req, res, next) => res.sendFile(__dirname + '/views/about.html'))
app.get('/', (req, res, next) => res.sendFile(__dirname + '/views/works.html'))
app.listen(3000, () => console.log('port 3000 and structure looks ok'))