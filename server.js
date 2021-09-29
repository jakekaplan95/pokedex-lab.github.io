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

//DELETE
app.delete("/pokemon/:id", (req, res) => {
    pokemon.splice(req.params.id, 1) 
    res.redirect('/pokemon')
})


//CREATE
app.post("/pokemon", (req, res) => {
    pokemon.push(req.body);
    res.redirect("/pokemon");

})

//EDIT
app.get("/pokemon/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        pokemon: pokemon[req.params.id],
        index: req.params.id,
        title: "Pokemon Edit Page"
    })
})


//SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {pokemon: pokemon[req.params.id]})
})

//LISTENER
app.listen(3000, () => {
    console.log('app is running');
})