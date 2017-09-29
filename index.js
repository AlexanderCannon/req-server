const express = require('express');
const axios = require('axios');
const app = express();

const port = 3608;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  axios.get('http://www.mocky.io/v2/581335f71000004204abaf83')
  .then((data) => {
console.log(data);
  res.send(data.data);
  });
});
app.listen(port, () => {
  console.log(`running on port ${port}`)
})
