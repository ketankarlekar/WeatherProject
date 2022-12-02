const { response } = require("express");
const express = require("express");
const { read } = require("fs");
const app = express();
const https = require("https");

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=matric&appid=d1d225605aabf4289d727f5be4fc0008"

    https.get(url, function(response) {
        console.log(response.statusCode);


        response.on("data", function(data) {
            const weatherData = JSON.parse(data)
            console.log(weatherData);
            const temp = weatherData.main.temp;
            console.log("temp " + temp);
            const visiblity = weatherData.visibility
            console.log("visibility " + visiblity);
            const discription = weatherData.weather[0].description
            console.log(discription);
            res.write("<p>The weather is currently " + discription + "<P>")
            res.write("<h1>The tempture in pune is " + temp + " fahranite</h1> ")

        })
    })


    // res.send("YOU ARE ON PORT 3000")
})




app.listen(3000, function() {
    console.log("server is running on 3000");
})