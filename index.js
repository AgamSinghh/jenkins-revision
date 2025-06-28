const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Ab ek bari github hook se bhi try krke dekhlete haiii");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
