const truecallerjs = require('truecallerjs');
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  var searchData = {
      number: req.query.number,
      countryCode: req.query.countryCode,
      installationId: "your id",
      output: "JSON"
  }

  var sn = truecallerjs.searchNumber(searchData);
  sn.then(function(response) {
    res.send(response);
  });
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
