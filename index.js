const request = require('request');

const BOT_ID = "b24a582ebb68734dc859b003b6";

if (!BOT_ID) {
	console.log("Missing BOT_ID environment variable.");
	process.exit(1);
}

const message = {
	bot_id: BOT_ID,
	text: "Vote for senior wizards!"
};

const options = {
	uri: 'https://api.groupme.com:443/v3/bots/post',
	method: 'POST',
	headers: {
		"Content-Type": "application/json",
	},
	json: message
};

function loop() {

    request(options, (error, res, body) => {});

    setTimeout(loop, 3000);
}

loop()

