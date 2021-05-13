const express = require('express');
morgan = require('morgan');
bodyParser = require('body-parser')
const app = express();


let movies = [
  {
    title: 'Star Wars: The Last Jedi',
    description: 'Star Wars: The Last Jedi is a 2017 American epic space opera film and is the second installment of the Star Wars sequel trilogy.',
    director: 'Rian Johnson',
    genre:'Action',
  }
]

//Middleware

app.use(bodyParser.json());

app.use(morgan('common'));

app.use(express.static('public'));
 //error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke! try again!!');
  });

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.get('/movies/:title', (req, res) => {
  res.json(movies.find((movie) => {
  return movie.title === req.params.title
  }));
});

app.get('/movies/genres/:genre', (req, res) => {
  res.send('Successful GET request returning a description of the genre')
});

app.get('/movies/directors/:name', (req, res) => {
  res.send('Successful GET request returning a description of the Director')
});

app.post('/users', (req, res) => {
  res.send('Registration succesful!')
});

app.put('/users/:username', (req, res) => {
 res.send('The user: ' + req.params.username + ' was successfully updated')
});

app.post('/users/:username/favourites', (req, res) => {
  res.send('Movie: ' + req.params.title + ' was added to favourites.');
  });

app.delete('/users/:username/favourites/:title', (req, res) => {
 res.send('Movie: ' + req.params.title + ' was removed from favourites.');
});

app.delete('/users/:username', (req, res) => {
  res.send('User ' + req.params.id + ' was deleted.');
  });


//Listen for requests
app.listen(8080,()=>{
    console.log("your app is listening");
});