const express = require('express')
const apicache = require('apicache')
const jsonForOpmlFile = require('./json-for-opml-file')

const app = express()
const cache = apicache.middleware

app.get('/outline/:id', cache('60 minutes'), async (req, res) => {
  const json = await jsonForOpmlFile(`./data/${req.params.id}.opml`)

  /*
  Matt – this is where you will take json and put it into a more sane format before sending it off.
  */

  res.json(json)
})

const port = 7878
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
