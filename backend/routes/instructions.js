const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const config = require('../config');
router.get('/', async (req, res) => {
    var id = req.param('id')
    console.log("You are instructions");
    const url = new URL('https://api.spoonacular.com/recipes/' + id + '/analyzedInstructions')
    // res.send("Hello world, from express");
    const params = {
        id: req.query.instructions, 
        apiKey: config.spoonacular_api};

    url.search = new URLSearchParams(params).toString();

    let returnVal =  await fetch (url, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
      }).then (response => response.json())
      .then(json => json);

      await console.log( " RETURN VAL " + returnVal + "DONE")
      res.send(returnVal);
      console.log(returnVal);
});

module.exports = router;


