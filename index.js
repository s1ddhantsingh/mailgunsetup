const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
	username: "api",
	key:
		process.env.MAILGUN_API_KEY ||
		"122beaf8702c9158b34d78081bfb7529-6d1c649a-0cad98d3",
});

mg.messages
	.create("sandboxe299c87609b3463eaf1f2cc2e20ccd03.mailgun.org", {
		from: "Siddhant Singh <siddhant@joinnova.xyz>",
		to: ["siddhant.akshat@gmail.com"],
		subject: "Testing 123...",
		text: "Testing some Mailgun awesomeness!",
		html: "<h1>Testing some Mailgun awesomeness!</h1>",
	})
	.then((msg) => console.log(msg)) // logs response data
	.catch((err) => console.log(err)); // logs any error
