

//Dependencies
const express = require('express');
const PORT = process.env.PORT || 8080;


//Instantiate app
const app = express();

//router
app.get('/', (req, res, next) => {
    res.send({hi: 'hello'});
})


//listen server
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})