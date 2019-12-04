const helpers={};

helpers.isconected=(req,res,next)=>{
    if(req.isconected){
        return next();
    }
    else{
        req.flash('error_msg', 'No autorizado');
        res.redirect('/users/login');
    }
};
module.exports=helpers;