import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Request } from "express";
import cors from "cors";

const app = express()
app.use(cors<Request>());
app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).send();
});

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

app.use(bodyParser.text({ type: '*/*' }))
app.use(express.static('public'))

app.get('/api/legado', require('./api/legado'))
app.post('/api/ra', require('./api/ra'))
app.get('/api/azure', require('./api/azure'))
app.post('/api/azure', require('./api/azure'))
app.listen(port, () => {
  console.info(`应用正在监听 ${port} 端口`)
})
