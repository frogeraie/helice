const express = require('express');
const app = express();
var bodyParser = require("body-parser");
const fs = require('fs'); 
const gTTS = require('gtts');

let server;
const port = process.env.PORT || 7777;
  const http = require('http');
  server = http.createServer(app);
app.use(express.static(__dirname + '/public'));

server.listen(port, () => console.log(`Server is running on port ${port}`));

// respond to web GET requests with the index.html page:
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});

/*==============================
 envoyer le nom et les questions
 =================================*/
 app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
app.get('/video0', function (req, res) {
  res.sendFile(__dirname + '/public/video0.html')
})
app.post('/register', function (req, res) {
   var username = req.body.username;
   var html = 'Hello:' + username;
   res.redirect('/video0.html');
   console.log(req.body);

fs.writeFileSync('nom.txt', username + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
  
const text = fs.readFileSync('nom.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('nom.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file /nom.mp3 to hear result.');
});
});
  app.get('/public/video1', function (req, res) {
  res.sendFile(__dirname + '/public/video1.html')
})
  app.post('/register1',function(req,res){
   var question1 = req.body.question1;
   var html = 'Hello:' + question1;
   res.redirect('video1');
   console.log(html);

fs.writeFileSync('reponse1.txt', question1 + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
 
const text = fs.readFileSync('reponse1.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('reponse1.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file /reponse1.mp3 to hear result.');
});
});
   app.get('/public/video2', function (req, res) {
  res.sendFile(__dirname + '/public/video2.html')
})
  app.post('/register2',function(req,res){
   var question2 = req.body.question2;
   var html = 'Hello:' + question2;
   res.redirect('video2');
   console.log(html);

fs.writeFileSync('reponse2.txt', question2 + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
  
const text = fs.readFileSync('reponse2.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('reponse2.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file /reponse2.mp3 to hear result.');
});
});
   app.get('/public/video3', function (req, res) {
  res.sendFile(__dirname + '/public/video3.html',{acceptRanges: false})
})
  app.post('/register3',function(req,res){
   var question3 = req.body.question3;
   var html = 'Hello:' + question3;
   res.redirect('video3');
   console.log(html);
 
fs.writeFileSync('reponse3.txt', question3 + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

const text = fs.readFileSync('reponse3.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('reponse3.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file /reponse3.mp3 to hear result.');
});
});

   app.get('/public/video4', function (req, res) {
  res.sendFile(__dirname + '/public/video4.html')
})
  app.post('/register4',function(req,res){
   var question4 = req.body.question4;
   var html = 'Hello:' + question4;
   res.redirect('video4');
   console.log(html);

fs.writeFileSync('reponse4.txt', question4 + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
  const text = fs.readFileSync('reponse4.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('reponse4.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file /reponse4.mp3 to hear result.');
});
});

   app.get('/public/video5', function (req, res) {
  res.sendFile(__dirname + '/public/video5.html')
})
  app.post('/register5',function(req,res){
   var question5 = req.body.question5;
   var html = 'Hello:' + question5;
   res.redirect('video5');
   console.log(html);

fs.writeFileSync('reponse5.txt', question5 + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
  const text = fs.readFileSync('reponse5.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('reponse5.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file /reponse5.mp3 to hear result.');
});
});

   app.get('/public/video6', function (req, res) {
  res.sendFile(__dirname + '/public/video6.html')
})
  app.post('/register6',function(req,res){
   var question6 = req.body.question6;
   var html = 'Hello:' + question6;
   res.redirect('video6');
   console.log(html);

fs.writeFileSync('reponse6.txt', question6 + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
const text = fs.readFileSync('reponse6.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('reponse6.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file /reponse6.mp3 to hear result.');
});
});
  app.get('/public/videoftts', function (req, res) {
  res.sendFile(__dirname + '/public/videoftts.html')
})
  app.post('/registerf',function(req,res){
   var futur = req.body.futur;
   var html = 'Hello:' + futur;
   res.redirect('videoftts');
   console.log(html);

fs.writeFileSync('futur.txt', futur + '\n', {'flag':'w'}, function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});
  const text = fs.readFileSync('futur.txt', 'utf8');

var gtts = new gTTS(text, 'fr');
gtts.save('futur.mp3', function (err, result) {
  if(err) { throw new Error(err) }
  console.log('Success! Open file /reponse3.mp3 to hear result.');
});
});
