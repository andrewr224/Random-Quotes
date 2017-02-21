var quoteContainer = document.getElementById("quote");
var btn = document.getElementById("btn");

var request = new XMLHttpRequest();
	
request.open('GET', 'https://gist.githubusercontent.com/b1nary/ea8fff806095bcedacce/raw/6e6de20d7514b93dd69b149289264997b49459dd/enterpreneur-quotes.json');
request.onload = function() {
var ourData = JSON.parse(request.responseText);
	rendHTML(ourData[num(325)]);
	}
request.send();

btn.addEventListener('click', function() {

	request.open('GET', 'https://gist.githubusercontent.com/b1nary/ea8fff806095bcedacce/raw/6e6de20d7514b93dd69b149289264997b49459dd/enterpreneur-quotes.json');
	request.onload = function() {
		var ourData = JSON.parse(request.responseText);
		rendHTML(ourData[num(325)]);
	}
	request.send();
});

function rendHTML(data) {
	var str = "";
	str = "<h2>" + data.text + "</h2><br><h4>" + data.from + "</h4>";
	quoteContainer.innerHTML = str;
};

function num(max) {
	return Math.floor(Math.random() * max);
}