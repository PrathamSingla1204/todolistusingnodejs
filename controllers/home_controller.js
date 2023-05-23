const User = require('../models/user');


module.exports.home = async(req,res)=>{
    try {
        const taskList = await User.find({});
        return res.render('home', {
            title: "Home",
            TODO_list: taskList
        });
    } catch (err) {
        console.log("error in fetching tasks from db",err);
    }
    
}



module.exports.addtask = async function(req,res){
    try {
        await User.create(req.body);
        return res.redirect('back');
    }
    catch(err){
        console.log("Error in Adding task",err);
        return;
    }
}

module.exports.deletetask = async(req, res)=> {
    try {
        let id = req.query.task;
        console.log(id);
        await User.findOneAndDelete(id);
        return res.redirect('back');
    } catch (err) {
        console.log("Error in Deleting :", err);
    }
};
