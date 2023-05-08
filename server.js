const express = require('express');

const app = express();
const port = 3000;

count = 99;


app.get('/', (req, res) => { 
  res.send(`<a href='/${count}'>${count} Bottles of water on the wall</a>`)
});

app.get('/:numberOffBottles', (req, res) => { 
  console.log(req.params)
  let bottles = req.params.numberOffBottles;
  let one_down = bottles - 1;
  if (one_down === -1) {
    res.send(`
    <a> ${bottles} Bottles of water on the wall <a href='/'>Start over</a>
    `);
  } else
  res.send(`
    <a> ${bottles} Bottles of water on the wall <a href='/${one_down}'> Take one down, pass it around</a>
    `);
});



app.listen(port,() => {
  console.log(`listening on port ${port}`);
});