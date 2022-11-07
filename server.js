// const mysql = require('mysql2')
// const express = require('express')
// const morgan = require('morgan')
// const cors = require('cors')
// const bodyparser = require('body-parser')

// require('dotenv').config();

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'secretSanta',
//     port: '3306'
// })

// db.connect((err) => {
//     if(err){
//         throw err;
//     }
//     console.log('MySql Connected...')
// })

// const app = express();
// const port = process.env.PORT || 5000

// app.use(bodyparser.json())
// app.use(morgan('tiny'));

// const corsOptions = {
//     origin: '*',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
// }

// app.use(cors(corsOptions))

// app.get("/", (req, res) => {
//     res.json({ message: "ok" });
// });

// app.listen(port, () => {
//     console.log(`Server started on ${port}`);
// });

// // create a GET route
// app.get('/express_backend', (req, res) => { //Line 9
//     res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
// }); //Line 11

// module.exports = db