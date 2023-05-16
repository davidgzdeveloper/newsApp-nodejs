const app = require('./config/server');
const ejs = require('ejs');
require('./app/routes/news')(app);

//iniciar el servidor
app.listen(app.get('port'), ()=>{
    console.log('server is on port ', app.get('port'));
})
