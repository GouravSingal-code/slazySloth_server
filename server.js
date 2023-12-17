const PORT = require('./constants.js');
const app = require('./app');


app.listen(PORT,()=>{
   console.log("server started on port:" + PORT);
})
