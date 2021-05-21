const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/CSCI5709-Group12-S21'));
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, '/dist/CSCI5709-Group12-S21/index.html'));
});
app.listen(process.env.PORT || 8080);
