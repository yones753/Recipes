
const express = require('express')
const request  = require('request')
const app = express()
const path = require('path')
const port = 8080


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


 

let recipes = []

app.get('/recipes/:ingredient', function (req, res) {
  let ingredient = req.params.ingredient
  request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`,function(error, response, body){
    recipes = JSON.parse(body).results.map(r => {
      return{
        title : r.title,
        thumbnail : r.thumbnail,
        href : r.href,
        ingredients : r.ingredients
       }})
       res.send(recipes)
  })
})

app.listen(port, function () {
  console.log(`Running  server on port ${port}`)
})
