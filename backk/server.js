const express = require('express');
const server = express();
const port = process.env.PORT || 5050;

//configure the back end to accept incomin datta
// either as a json payload or as a form (encoded url strings)

server.use(express.json());
server.use(express.urlencoded({ extended: false })); // url?key=value&&key=value

// this route manages user data
server.use('/ums', require('./routes/api'));

server.listen(port, () => {
    console.log(`server is running on ${port}`);
})