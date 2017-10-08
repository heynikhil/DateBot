'use strict';
// create an API server
const Restify = require('restify');
const server = Restify.createServer({
	name: 'myBot'
});
const PORT = process.env.PORT || 3000;

server.use(Restify.jsonp());
server.use(Restify.bodyParser());

// Tokens
const config = require('./config');

// FBeamer
const FBeamer = require('./fbeamer');
const f = new FBeamer(config);

// Your Bot here

// Register the webhooks
server.get('/', (req, res, next) => {
	f.registerHook(req, res);
	return next();
});

// Receive all incoming messages
server.post('/', (req, res, next) => {
	f.incoming(req, res, msg => {
		// Process messages
		if(msg.message.text) {
			// If a text message is received

		}
	});
	return next();
});

// Subscribe
f.subscribe();

server.listen(PORT, () => console.log(`myBot running on port ${PORT}`));
