const express = require('express');
const router = express.Router();

// improt the sql package
const sql = require('mysql');
const creds = require('../config/user');

// create a pool of potentioal connections and use the
// sql user credentials to connect to your instanste of mysql
// on your machine
const pool = sql.createPool(creds);


router.get('/', (req, res) => {
    res.json({message:'hit ums API root'});
})

// try to authenticate 
router.post("/login", (req, res) =>{
  console.log('hit the login router');
})

//retrieve all users from a database
router.get('/users', (req, res) => {
    // console.log(req.params.user);
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM users', function (error, results) {
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          // Don't use the connection here, it has been returned to the pool.
          //res.json({message:'hit ums users root'});
          res.json(results);
        });
      });
})

// retrieve one user from a database based on thet user's ID or another field
router.get('/users/:user', (req, res) => {
    // res.json({message:'hit single user route'});
    console.log(req.params.user);
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query(`SELECT * FROM users WHERE id=${req.params.user}`, function (error, results) {
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;

          // remove any sensitive info from the dataset(s)
          delete results.password;
          delete results.fname;
          delete results.lname;

          // add a temp avatar if there is'nt one
          if (!user.avatar) {
            user.avatar = "temp_avatar.jpg";
            }
       
          console.log(results);

          // Don't use the connection here, it has been returned to the pool.
          //res.json({message:'hit ums users root'});
          res.json(results);
        });
      });
})

module.exports = router;
