const express = require('express');
const app = express();
const port = 3000
const bodyParser = require('body-parser')

app.use(express.static('compiled'));

app.listen(port, () => `Server is listening on port ${port}`);

app.post('/checkout', (req, res) => {
  console.log(req);
  res.end();
})