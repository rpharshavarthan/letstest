const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => {
  res.send("hello world");
  //res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/.well-known/acme-challenge/', (req, res) => {
  const filename = req.params.filename;
  const challengeData = "4RnfWtLKaIc6EdhsOsr4fb6RFZuUoabZW5dPW36cmc";
  res.send(challengeData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
