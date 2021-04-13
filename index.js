const express = require('express');
const app = express();
app.use(express.static('src'));
app.listen(3001, function() {
  console.log(`Server is listening on port 3001\nProxy available on 3002`);
});
