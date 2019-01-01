const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('works');
    res.send('hello world');
});

app.listen(process.env.PORT || 3000);


module.exports = app;