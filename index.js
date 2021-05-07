//Import express and create the server
const express = require('express');
const morgan = require('morgan');
const app = express();

let topMovies = [
	{
		title: 'Love and Basketball'
	},
	{
		title: 'Star Wars: The Last Jedi'
	},
	{
		title: 'Avitar'
	},
	{
		title: 'He Got Game'
	},
	{
		title: 'Independence Day'
	},
	{
		title: 'Training Day'
	},
	{
		title: 'The Dark Night'
	},
	{
		title: 'Jurassic World'
	},
	{
		title: 'Fast and Furious'
	},
	{
		title: 'Toy Story'
	},
	{
		title: 'Black Panther'
	},
	{
		title: 'Men in Black'
	},
	{
		title: 'Home Alone'
	}

];




//get the top 10 movies
app.get('/movies', (req, res) => {
	res.json(topMovies.slice(0, 10));
});

//get the starting request
app.get('/', (req, res) => {
	res.send('Welcome to myFlix movies!');
});

//Get the documentation
app.use(express.static('public'));
app.get('/documentation', (req, res) => {
	        res.sendFile('public/documentation.html', {root: __dirname});
});

//logs into the Terminal
app.use(morgan('common'));

//Error-handling middleware
app.use((err, req, res, next) => {
	        console.log(err.stack);
	        res.status(500).send('Somthing broke!');
});

//Listen for requests 
app.listen(8080, () => {
	console.log('Your app is listening on port 8080.');
});