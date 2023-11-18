emailjs.init("nKyezAY8dl7ulg8t1");
emailjs.sendform("contact_service", "contact_form", this);

let subButton = document.getElementById("submit_button");
var gmailInput = document.getElementById("gmail_input");
var comments = document.getElementById("comments_input");

/*-------------------------*/

var templateParams = {
	to_name: document.getElementById("gmail_input"),
	message: document.getElementById("comments_input"),
};

subButton.addEventListener("click", function () {
	emailjs.send("service_5udvc6o", "template_zwqib4e", templateParams).then(
		function (response) {
			console.log("SUCCESS!", response.status, response.text);
		},
		function (error) {
			console.log("FAILED...", error);
		}
	);
});
