const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("This is my revision node app for the AWS Devops course by Agam singh ");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
