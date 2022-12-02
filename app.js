const { response } = require("express");
const express = require("express");
const { read } = require("fs");
const app = express();
const https = require("https");
const bodyParser = require("body-parser")

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");


    // res.send("YOU ARE ON PORT 3000")
});

app.post("/", (req, res) => {
    console.log("post request received");
})



// const query = "pune";
// const apiKey = "d1d225605aabf4289d727f5be4fc0008";
// const units = " metric ";


// const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + units + "&appid=" + apiKey + ""

// https.get(url, function(response) {
//     console.log(response.statusCode);


//     response.on("data", function(data) {
//         const weatherData = JSON.parse(data);
//         console.log(weatherData);
//         const temp = weatherData.main.temp;
//         console.log("temp " + temp);
//         const visiblity = weatherData.visibility;
//         console.log("visibility " + visiblity);
//         const discription = weatherData.weather[0].description;
//         console.log(discription);
//         const icon = weatherData.weather[0].icon;
//         const imgUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
//         res.write("<p>The weather is currently " + discription + "<P>");
//         res.write("<h1>The tempture in " + query + "  is " + temp + " fahranite</h1> ");
//         res.write("<img src=" + imgUrl + ">");
//         res.send();
//     });
// });





app.listen(3000, function() {
    console.log("server is running on 3000");
});