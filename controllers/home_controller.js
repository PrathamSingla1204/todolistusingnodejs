const User = require('../models/user');


module.exports.home = (req,res)=>{
    return res.render('home',{
        title:"Home"
    });
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