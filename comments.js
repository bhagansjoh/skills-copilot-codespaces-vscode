// Create web server
// 1. Create a web server that listens to incoming requests
// 2. When a request comes in, read the comments.json file
// 3. Respond with the contents of the comments.json file

// 1. Create a web server that listens to incoming requests
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // 2. When a request comes in, read the comments.json file
  fs.readFile(path.join(__dirname, 'comments.json
  