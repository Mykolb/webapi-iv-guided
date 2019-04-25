const envReader = require('dotenv');
envReader.config(); //reads .env & merges it into process.env
//require('dotenv).config(); same thing as above 
const server = require('./api/server.js');

//creating dynamic port in environment
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
