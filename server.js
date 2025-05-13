const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n---\n`;

  fs.appendFile('submissions.txt', data, (err) => {
    if (err) {
      console.error('Error writing to file', err);
      return res.status(500).send('Internal Server Error');
    }
    res.send('Form submitted successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});