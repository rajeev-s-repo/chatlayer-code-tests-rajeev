const express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/views', express.static(__dirname + '/views'));
app.use('/public', express.static(__dirname + '/public'));


app.get('/', function (request, response) {
	response.sendFile(__dirname + '/views/ChatPage.html');
});

app.use(require('./routes'));
const port = process.env.PORT || 8485;
app.listen(port, () => console.log(`Echobot app is running on port ${port}`));
console.log(`Open browser and enter the url : http://localhost:${port} `);
