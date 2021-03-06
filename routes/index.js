var express = require('express');
var router = express.Router();
var queries = require('../db/queries')
const knex = require('../db/knex')

router.get('/posts', function(req, res) {
  knex('post')
  .then(posts => {
    res.json(posts)
  })
})

module.exports = router;
