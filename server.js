//EXPRESS
const express = require('express');
const app = express();

//POKEMON.JS
const pokemon = require("./models/pokemon");

////////////////////
//ROUTES
////////////////////

//INDEX
app.get('/pokemon/', (req, res) => {
    res.render('index.ejs', {pokemon, pokemon})
})

// NEW
app.get('/pokemon/new/', (req, res) => {
    res.render("new.ejs", {title: "Add New Pokemon"});
})


//CREATE
app.post("/pokemon", (req, res) => {
    pokemon.push(req.body);
    res.redirect("/pokemon");

})


//SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {pokemon: pokemon[req.params.id]})
})

//LISTENER
app.listen(3000, () => {
    console.log('app is running');
})