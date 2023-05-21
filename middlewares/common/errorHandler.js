const createError = require('http-errors');

//404 not found

function notFoundHandler(req, res,next){
    next(createError(404 , 'your requested content was not found'))
}

//default error handler
function defaultErrorHandler(err, req,res,next){
  //  res.loacls.title =' Err page'
  //   res.render('error',{
  //       title:"error page"
  //   })
 res.locals.error =  process.env.NODE.ENV === 'development'?err:{message:err.message}
 res.status(err.status || 500);
  if(res.locals.html){ res.render('error',{
    title:"Error page"
  })
}else{
    res.json(res.locals.error)
}
}

module.exports = {
    notFoundHandler,
    defaultErrorHandler
}