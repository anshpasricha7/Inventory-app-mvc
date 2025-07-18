export const auth = function(req, res, next){
    if(req.session.userEmail){
        console.log("email id found:"+req.session.userEmail);
        next();
    } else {
        console.log(" email id not found");
        res.redirect('/login');
    }
}