// index.js

const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.type('text/html');
  res.status(200);
  res.send(
    '<html>' +
    '<head><h1>CircleCI App</h1></head>' +
    '<body>' +
    '<div><h3>Did you click the button?</h3></div>' +
    '<div id="answer">Not yet =(</div>' +
    '<br><br><div><input type="button" id="button" onclick="change()" value="Click me"/></div>' +
    '<script type="text/javascript">'+
    'function change(){var el = document.getElementById(\'answer\'); el.innerText="Now you\'ve done it!"}'+
    '</script>' +
    '</body>' +
    '</html>'
  );
});

module.exports.handler = serverless(app);
