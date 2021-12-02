const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000

let data = [
    {
        "name": "orange Juice",
        "category": "Drinks",
        "price": 14.99
    },
    {
        "name": "Apples",
        "category": "fruits",
        "price": 4.99
    },
    {
        "name": "Tomatos",
        "category": "vegetables",
        "price": 6.39
    },
    {
        "name": "Coffee",
        "category": "Drinks",
        "price": 3.15
    },
    {
        "name": "Sweet Paper",
        "category": "Vegetables",
        "price": 12.15
    },
    {
        "name": "Grapes",
        "category": "FRUITS",
        "price": 20.49
    },
    {
        "name": "Pears",
        "category": "Fruits",
        "price": 1.35
    },
    {
        "name": "Team",
        "category": "Drinks",
        "price": 0.4
    }
]

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    next();
});
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
});
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    res.send(JSON.stringify(data));
})


app.use(express.urlencoded({extended: true}))


app.post('/purchase', function (req, res) {
    res.json(req.body);

    let q = req.body;
    console.log(q)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})