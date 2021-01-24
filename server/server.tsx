import express from 'express';
import http from 'http';
import ws from 'ws';

const app = express();
const server = http.createServer(app);
const wss = new ws.Server({ server, port: 2021, path: "/ws" });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    console.log(JSON.parse(message.toString()));
  });

  ws.send('testing 123');
});

app.use('/node_modules', express.static('node_modules'));
app.use('/', express.static('app'));
app.listen(1234, () => {
  console.log('Express server running at http://127.0.0.1:1234');
  console.log('WebSocket server running at ws://127.0.0.1:2021/ws');
});

