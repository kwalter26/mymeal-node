import express from 'express';

import config from './config';

const server = express();

server.get('/',(req,res)=>{
  res.send('Hello World');
})

server.listen(config.express.port,config.express.host, () => {
  console.log(`Mymeal server listening on ${config.expressUrl}`);
});
