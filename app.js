const express = require('express');
const dotenv   = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser')
const ejs = require('ejs');
//internal imports
const {notFoundHandler,
    defaultErrorHandler ,} = require('./middlewares/common/errorHandler');
const loginRouter = require('./routers/loginRouter');
const inboxRouter = require('./routers/inboxRouter');
const usersRouter = require('./routers/usersRouter');




const app = express();
dotenv.config()

//database configuration
mongoose.connect(process.env.MONGOOSE_COLNECTION_STRING ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(()=>console.log('database connection successfully '))
.catch(err => console.error(err));


//request configuration
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// set the view engine to ejs
app.set('view engine', 'ejs');

//app.engine('ejs', require('ejs').__express);







//set static folder
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"views")));
//parse cookies
app.use(cookieParser(process.env.COOCIE_SECRET));

//routing setup
app.use('/', loginRouter)
app.use('/users', usersRouter)
app.use('/inbox', inboxRouter)

// 404 not found
 app.use(notFoundHandler)
//common error handler
app.use(defaultErrorHandler)

app.listen(process.env.PORT ,()=>{
    console.log(`server running this port 5000`)
})