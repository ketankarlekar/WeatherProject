const express = require("express");
const app = express();
const https = require("https");

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=pune&units=matric&appid=d1d225605aabf4289d727f5be4fc0008"

    https.get(url, function(response) {
        console.log(response.statusCode);
    })


    res.send("YOU ARE ON PORT 3000")
})




app.listen(3000, function() {
    console.log("server is running on 3000");
})