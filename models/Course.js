var mongoose=require('mongoose');

var courseSchema=new mongoose.Schema({
    "kid":Number,
    "name":String,
    "students":[Number] //这个数组存放的是学生的sid
});
// 设置索引
courseSchema.index({"kid":1});
// 添加静态方法
// courseSchema.statics.addstudents = function(kidarray,sid){
//     for(var i = 0 ; i < kidarray.length ; i++){
//         this.update({"kid":kidarray[i]},{$push :{"students":sid}},function(err,result){
//             console.log("课程添加报名学生成功");
//         })
//     }
// }
courseSchema.statics.addstudents=function(kidarray,sid,callback){
    (function iterator(i){
        if(i==kidarray.length){
            return ;
        }
        Course.update({"kid":kidarray[i]},{$push:{"students":sid}},function(err,result){
            iterator(i+1);
        })
    })(0);
}
// model
var Course=mongoose.model("Course",courseSchema);

module.exports=Course;