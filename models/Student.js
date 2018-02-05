// 设计模型
var db=require('./db.js');
var mongoose=require('mongoose');

// 先设计模式
var studentSchema=new mongoose.Schema({
    "sid":Number,
    "name":String,
    "age":Number,
    "sex":String,
    "courses":[Number]  //存放课程的kid
});
// 设置索引
studentSchema.index({"sid":1});
// 转化为模型
var Student=mongoose.model('Student',studentSchema);
module.exports=Student;