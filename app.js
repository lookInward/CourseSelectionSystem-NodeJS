var express = require("express");
var mongoose=require('mongoose');
var db=require("./models/db.js");
var app=express();
var router = require("./router/router.js");

app.use('/',express.static("./public"));

app.set("view engine","ejs");
app.get('/',router.showIndex);
app.get("/add",router.showadd);
app.get("/doadd",router.doadd);
app.get("/edit/:sid",router.edit);
app.get("/doedit/:sid",router.doedit);
app.get("/remove/:sid",router.remove);

app.use(function(req,res){
    res.render("err.ejs");
})

app.listen(3000);