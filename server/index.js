require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const port = 1337;

app.use(cors());

app.get('/photos', (req, res) => {
	fetch(`${process.env.MEETUP_BASE_URL}/${process.env.MEETUP_GROUP_NAME}/photos`)
		.then(resp => resp.json())
		.then(data => res.send(data))
		.catch(err => console.error(err));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));