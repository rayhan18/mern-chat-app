
function getLogin(req,res,next){
    res.render("../views/index ", {
        title: "login chat application"
    }
    )
}

    module.exports={
         getLogin,
    }