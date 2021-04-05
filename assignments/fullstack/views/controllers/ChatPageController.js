$(document).on('keypress', function (e) {
	if (e.which == 13) {
		sendMessage();
		return false;
	}
});

function sendMessage() {
	var userInput = $("#inputmsg").val();

	if (userInput.trim() != '') {
		printSentMessage(userInput);
		GetEchoMessage(userInput);
		adjustScrollBarPosition();
	}
	$('#inputmsg').val('');
}
function GetEchoMessage(_inputmessage) {
	var MessageData = {
		"MessageBody": _inputmessage
	};
	$.ajax({
		type: 'POST',
		async: false,
		url: "/api/Messages/EchoMessage",
		data: JSON.stringify(MessageData),
		contentType: "application/json",
		success: function (resultData) {
			printReceivedMessage(resultData);
		},
		error: function () {
			alert("Something went wrong");
		}
	});
}

function printSentMessage(_sentMessage) {
	var $outerdiv = $("<div>", { "class": "d-flex justify-content-end mb-4" });
	var $innerdiv = $("<div>", { "class": "msg_cotainer_send" });
	var $imgdiv = $("<div>", { "class": "img_cont_msg" });
	var $img = $("<img>", { "class": "rounded-circle user_img_msg", "src": "/public/images/customer.png" });
	$imgdiv.append($img);
	$innerdiv.html(_sentMessage);
	$("#msgContainer").append($outerdiv.append($innerdiv, $imgdiv));
}
function printReceivedMessage(_receivedMessage) {
	var $outerdiv = $("<div>", { "class": "d-flex justify-content-start mb-4" });
	var $innerdiv = $("<div>", { "class": "msg_cotainer" });
	var $imgdiv = $("<div>", { "class": "img_cont_msg" });
	var $img = $("<img>", { "class": "rounded-circle user_img_msg", "src": "/public/images/chatboticon.jpg" });
	$imgdiv.append($img);
	$innerdiv.html(_receivedMessage);
	$("#msgContainer").append($outerdiv.append($imgdiv, $innerdiv));
}
function adjustScrollBarPosition() {
	$('#msgContainer').stop().animate({
		scrollTop: $('#msgContainer')[0].scrollHeight
	});
}