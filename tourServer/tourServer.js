var express = require("express");
var app = express();
const session = require('express-session');
const bcrypt = require('bcryptjs');
const DataStore = require('nedb-promises');

const tours = require('./tourDBRef')
const users = DataStore.create(__dirname+'/UserServer',{autoload:true})


const netId = "bu4986";
app.use(session({
    secret: 'Welcome bu4986',
    resave: false,
    saveUninitialized: false,
    name: netId
}));
const setUpSessionMiddleware = function (req, res, next) {

    if (!req.session.user) {
        req.session.user = {role: "guest"};
    };
    next();
};
app.use(setUpSessionMiddleware);


app.get('/tours', function (req, res){
   tours.find({}).then(function(newDocs) {
   res.send(newDocs);
 });
});


const checkCustomerMiddleware = function (req, res, next) {
    if (req.session.user.role === "guest") {
        res.status(401).json({error: "Not permitted"});
        } else {

        next();
    }
};
var checkAdminMiddleware = function (req, res, next) {
    if (req.session.user.role !== "admin") {
        res.status(401).json({error: "Not permitted"});
    } else {
        next();
    }
};

 app.post('/tours/add', checkAdminMiddleware, express.json(), function(req, res) {
  var addTour=req.body;
   tours.insert(addTour).then((docs)=>{
     console.log(docs);
     res.status(200).json(docs);
   });

});

  app.delete('/tours/:id' ,checkAdminMiddleware, express.json(), function(req, res) {
    const id =req.params["id"];
    tours.remove({_id:id}).then((docs)=>{
    });
    res.status(200).send({"message":"Deleted Tours"});
});

app.post('/login',express.json(), function(req, res) {

    let email = req.body.email;
    let password = req.body.password;

  users.findOne({email:email}).then((result)=>{
    let verified = bcrypt.compareSync(password, result.password);
    if (verified) {

        let oldInfo = req.session.user;
        req.session.regenerate(function (err) {
            if (err) {console.log(err);}
            let newUserInfo = Object.assign(oldInfo, result);
            delete result.password;
            req.session.user = result;
            res.json(result);
        });
    }
     else
      {
        res.status(401).json({error: true, message: "User/Password error"});
    }
  });


})


app.get('/logout', function (req, res) {
    let options = req.session.cookie;
    req.session.destroy(function (err) {
        if (err)
         {
            console.log(err);
        }
        res.clearCookie(netId, options);
        res.json({message: "Goodbye"});
    })
});

app.get('/tourcount', function(req,res){
    tours.find({}).then(function(data){
    res.json(data.length);
  })
})

app.get('/tours/:id', function(req,res){
  const id = req.params["id"];
  tours.findOne({_id:id}).then(function(par){
    if(par===null){
      res.status(404).json({message:"Error"})
    }
    else{
      res.status(200).json(par)
    }
});
});

module.exports = app;
