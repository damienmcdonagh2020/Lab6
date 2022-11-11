const express = require('express')
const app = express()
//listening on port 4000
const port = 4000

const bodyParser = require('body-parser');
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//npm i cors
//server sharing 
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//listening to update books
app.post('/api/books', (req,res) => {
  console.log(req.body);
  res.send('Data received')
})

app.get('/api/books', (req, res) => {
    //return following json data
    const books = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ]
        //response sending back json
    res.json({
        myBooks:books,
        message:'Hello from the server'
    })
  })
//app listening on 4000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})