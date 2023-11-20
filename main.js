const express = require('express');
const app = express();
const path = require('path');
const port = 8088;

app.get('/', (req, res) => {
  res.send("hello world");
  //res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/.well-known/acme-challenge/1QIya6lToEZLNrMisJuYeSD3lyVlWru3_6xZ4FrYrTQ', (req, res) => {
  const filename = req.params.filename;
  const challengeData = "1QIya6lToEZLNrMisJuYeSD3lyVlWru3_6xZ4FrYrTQ.u1rzx11PwVTmbfCfTWevQtMY7a1Mzqw5-RyL98fPGEI";
  res.send(challengeData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
