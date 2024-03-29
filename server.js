const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(('./dist')));

app.get('*', (req, res) =>
  res.sendFile('index.html', { root: __dirname + '/dist' }),
);

app.listen(process.env.PORT || PORT, function () {
  console.log(`listening on: http://localhost:${PORT}`);
});
