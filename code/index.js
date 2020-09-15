const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

//public static file as /img
app.use(express.static(path.join(__dirname,'src\\public')));

//sử dụng morgan
app.use(morgan('tiny'));

//set handlebars (template engine) và rút gọn đuôi
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');

//fix lại đường dẫn của hbs đến views
app.set('views', path.join(__dirname, 'src\\views'));


//route
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Demo-app đang lắng nghe tại http://localhost:${port}`);
})
