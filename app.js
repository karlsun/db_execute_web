/**
 * Created by Lei on 2015/2/3.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :false }));
app.use(session({
    secret : "DB Execute",
    cookie: {
        maxAge: 8 * 60 * 60 * 1000
    },
    resave: true,
    saveUninitialized:true
}))
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// 初始化路由
var fs = require('fs'),
    routeFiles = fs.readdirSync("./routes");

routeFiles.forEach(function(fileName){
    if(fileName === "index.js"){
        app.use("/", require("./routes/"+ fileName));
    }else{
        app.use("/" + fileName.replace(".js", ""), require("./routes/"+ fileName));
    }
});

process.on('uncaughtException', function(err){
    console.log(err);
});

module.exports = app;
