
function getUsers(req,res,next){
    res.render("../views/index",{
        title: "users chat application"
    })
   
}

module.exports ={
    getUsers,
}