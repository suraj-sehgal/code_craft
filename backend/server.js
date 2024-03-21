const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv');

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/submission",require('./routes/submissionRoutes'));
  

const server = http.createServer(app);


server.listen(port);
