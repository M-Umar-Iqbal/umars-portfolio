// server.js
const express = require('express');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.get('/blogs', (req, res) => {
    const jsonDirectory = path.join(__dirname, 'db');
    const fileContents = fs.readFileSync(jsonDirectory + '/blogs.json', 'utf8');
    const data = JSON.parse(fileContents);
    res.json(data.blogs);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
