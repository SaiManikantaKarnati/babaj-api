const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const userId ="sai_manikanta_karnati_26122002";

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (data && Array.isArray(data) && data.length > 0) {
        const numbers = [];
        const alphabets = [];

        data.forEach(item => {
        if (typeof item === 'string' && item.length === 1 && item.match(/[a-zA-Z]/)) {
            alphabets.push(item);
        } else if (!isNaN(item)) {
            numbers.push(item.toString());
        }
        });

        const highestAlphabet = alphabets.length > 0 ? alphabets.reduce((max, current) =>
        current.localeCompare(max, undefined, { sensitivity: 'base' }) > 0 ? current : max
        ) : [];

        const response = {
        is_success: true,
        user_id: userId,
        email: "manikanta_karnatisai@srmap.edu.in",
        roll_number: "AP20110010476",
        numbers,
        alphabets,
        highest_alphabet: [highestAlphabet]
        };

        res.json(response);
    } 
    else {
        res.status(400).json({
        error: 'Invalid or empty input data array'
    });
}
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({
    operation_code: 1
    });
});

app.listen(port, () => {
    console.log(`http://localhost:3000/bfhl`);
});
