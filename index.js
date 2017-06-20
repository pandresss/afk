const express = require('express');
const app = express();

const PORT = process.env.port || 8080;

app.use(express.static('build'));

app.use(require('./router'));

app.listen(PORT,()=>{
  console.log(`alive on port ${PORT}`);
})
