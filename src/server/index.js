const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors(), express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(path.dirname(require.main.filename), 'dist/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
  console.log('\nYou can view the app by visiting: \nhttp://localhost:8080');
});

app.get('/analyze', (req, res) => {
  res.send({key: process.env.API_KEY});
});
