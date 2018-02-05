var Student=require("../models/Student.js");
var Course=require("../models/Course.js");

exports.showIndex=function(req,res,next){
    Student.find({},function(err,result){
        if(err){
            next();
            return;
        }
        Course.find({},function(err,resultCourse){
            res.render("index",{
            'student':result,
            'course':resultCourse
        })
         
    })
    })
   
}
exports.showadd=function(req,res,next){
    Course.find({},function(err,result){
        if(err){
            next();
            return;
        }
         res.render('add',{
        "course":result
    });
    })
   
}
exports.doadd=function(req,res,next){
    Student.create(req.query,function(err,result){
        if(err){
            next();
            return;
        }     
       Course.addstudents(req.query.courses,req.query.sid);
       res.send("添加成功");  
    });     
}
exports.edit=function(req,res,next){
    var sid=parseInt(req.params["sid"]);
    Student.findOne({"sid":sid},function(err,result){
        if(err || !result){
            next();
            return;
        }else{
            Course.find({},function(err,resultCourse){
                res.render("edit",{
                "student":result,
                "course":resultCourse
            })
            })
            
        }
    })
}
exports.doedit=function(req,res,next){
    var sid=parseInt(req.params["sid"]);
    Student.updateOne({"sid":sid},req.query,function(err,result){
        if(err){
            next();
            return;
        }else{
            res.send("修改成功");
        }   
    });
}
exports.remove=function(req,res,next){
    var sid=parseInt(req.params["sid"]);
    Student.remove({"sid":sid},function(err,result){
        if(err){
            next();
            return;
        }else{
            res.send("删除成功");
        }
        
    })
}

