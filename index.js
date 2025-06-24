const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("This is my revision node app for the AWS Devops course by Agam singh  and i am learning to integrate this app with Jenkins and Docker and yes i have done it scuccessgully integrated the jenkins with the github and docker with the jenkins and now i am going to learn AWS and deploy this app on AWS");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
