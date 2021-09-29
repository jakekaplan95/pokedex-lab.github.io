//EXPRESS
const express = require('express');
const app = express();

//POKEMON.JS
const pokemon = require("./models/pokemon");

//Import Method-Override
const methodOverride = require('method-override');

////////////////////////
// Middleware
/////////////////////////
// Parse Request Bodies if Content-Type Header is: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// serve files statically from the public folder
app.use(express.static("public"))
// register the method-override middleware
app.use(methodOverride('_method'))


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
    const newpkmn = {
        name: req.body.name,
        id: req.body.id,
        type: req.body.type,
        stats: {
            hp: req.body.hp,
            attack: req.body.attack,
            defense:req.body.defense
        },
    }
    pokemon.push(newpkmn);
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

app.put("/pokemon/:id", (req, res) => {
    console.log(req.body)
    pokemon[req.params.id].type = req.body.type
    pokemon[req.params.id].stats.hp = req.body.hp
    pokemon[req.params.id].stats.attack = req.body.attack
    pokemon[req.params.id].stats.defense = req.body.defense

    res.redirect("/pokemon/" + req.params.id)
})


//SHOW
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {pokemon: pokemon[req.params.id]})
})

//LISTENER
app.listen(3000, () => {
    console.log('app is running');
})