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

app.get('/events/:id?', (req, res) => {
	fetch(`${process.env.MEETUP_BASE_URL}/${process.env.MEETUP_GROUP_NAME}${req.url}`)
		.then(resp => resp.json())
		.then(data => res.send(data))
		.catch(err => console.error(err));
});

app.get('/events/:id/comments', (req, res) => {
	fetch(`${process.env.MEETUP_BASE_URL}/${process.env.MEETUP_GROUP_NAME}${req.url}`)
		.then(resp => resp.json())
		.then(data => res.send(data))
		.catch(err => console.error(err));
});

app.get('/channels', (req, res) => {
	fetch(`${process.env.YOUTUBE_BASE_URL}${req.url}&id=${process.env.YOUTUBE_GDG_ID}&key=${process.env.YOUTUBE_API_KEY}`, {
		headers: {
			"Referer": "http://localhost:1337"
		}
	})
		.then(resp => resp.json())
		.then(data => {
			console.log('data: ', data);
			res.send(data)
		})
		.catch(err => console.error(err));
});

app.get('/playlistItems', (req, res) => {
	fetch(`${process.env.YOUTUBE_BASE_URL}${req.url}&key=${process.env.YOUTUBE_API_KEY}`, {
		headers: {
			"Referer": "http://localhost:1337"
		}
	})
		.then(resp => resp.json())
		.then(data => res.send(data))
		.catch(err => console.error(err));
});

app.post('/contact-form', (req, res) => {
	// const body = req;
	// console.log('req:', req);
	console.log('res:', res);

	fetch(`${process.env.CONTACT_FORM_LINK}`, {
		method: 'post',
		body: JSON.stringify(res),
		headers: { 'Content-Type': 'application/json' }
	})
		.then(resp => resp.json())
		// .then(data => res.send(data))
		.catch(err => console.error(err));
})

app.listen(port, () => console.log(`Listening on port ${port}!`));