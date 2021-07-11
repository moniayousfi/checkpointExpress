const express=require('express');
const path=require('path');
const validateTime = require("./middleware/timer");
//initialisation

const app = express();

//middleware requestedTime

var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };
  
app.use(requestTime);
/*
//middleware ValidateTime
app.use(validateTime);
*/
app.use(express.static(path.join(__dirname, 'views')));

//Home

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'views','Home.html'))
var responseText = 'Requested at:';
responseText +=  req.requestTime + 'ms';
console.log(responseText)
})

//Contact

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','Contact.html'))
    var responseText = 'Requested at:';
    responseText +=  req.requestTime + 'ms';
    console.log(responseText)


})

//Service

app.get('/service',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','Service.html'))
    var responseText = 'Requested at:';
    responseText +=  req.requestTime + 'ms';
    console.log(responseText)

})

/*
when we use the middleware express.static
app.use(express.static('views'));
*/



app.listen(5100,(err)=>
{
    err?console.log(err):
    console.log('server is running')
})