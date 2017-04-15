const express = require ('express');
//you have to name the thing in the requore the same thing you install. the variable you can name what you want
const app = express();
//when you call that function you callonto everything that does, determine what pages you are able to visit
//goal is to recreate what we did in module one in a backend
app.set('view engine', 'ejs');
//app.set sets configuration values, this is built into express and tells how to use
//tells the engine that we want to use 'views'
app.use(express.static('public'));
//another express method and you put the folder where you have all your stuff
//(here is public- public accessable files)




app.get('/',(request, response, next)=>{
  console.log('HOME PAGE(root of domain)');
//response is an object that represents the thing youre sending ot the browser
//first page
//http://localhost:3000
  response.render('home.ejs');
//looking for the folder of home.ejs that we put in views folder
  //configuring a page that you are able to visit on our application
});
//second page
//http://localhost:3000/about
app.get('/bio', (req,res,next)=>{
  res.render('bio.ejs');
 //render displays the about.ejs to the browser
 //it knows to look in the views folder
 //views/about.ejs

  // res.send(`
  //old way
  //   <h1> About Colby </h1><p> I love pancakes</p>`);

});
//determine which pages you are able to visit
//received two arguments/
//first: web adress of page you want to visit and configure in your application (usually hompage)
//second: callback of the code to run when the user visits this page
//the slash is referring to the web address' slash
//when we run this aplication, the usuer is able to visit the root ( web adress), and the callback will run
// 1st and 2nd arg: request and response -- if u want to send and get a response

app.get('/pictures', (req,res,next)=>{
  res.render('pictures.ejs');
});


app.get('/music', (req,res,next)=>{
  res.render('music.ejs');
});



  app.listen(3000);
//listen method is what keeps the app running / keeps the app waiting for request
//1st arg: number of ports
//http://localhost:3000

//when i make a getr request,
//this function is going to run and pascally what i do with the response object is what ill se eon the page
