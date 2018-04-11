$(document).ready(function() {
	$("html, body").fadeIn(1500); //Just for Style
	// Create a new array to store the json files ahead instead of
	// getting json file everytime button is clicked
	var quotesObj = [];
	$.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/", function(json) {
		json.forEach(function(val) {
			if (val !== {}) {
				quotesObj.push(val);
			}
		});
		// Load a random quote once page is loaded
		$("blockquote").html(randomQuoteGenerator()).fadeIn();
	});
	// Load a new random quote when button is clicked
	$("#button").on("click", function() {
		//hide it first to give it a fadeIn effect
		$("blockquote").hide().html(randomQuoteGenerator()).fadeIn(600);
	});
	// function to abstract a new quote from our created arrayObject
	function randomQuoteGenerator() {
		var html = "";
		var randQuoteNum = Math.floor(Math.random() * quotesObj.length);
		html += "<p>" + quotesObj[randQuoteNum].quote + "</p>";
		html += "<div class='author'>-" + quotesObj[randQuoteNum].author + "</div>";
		html += "<br>";
		return html;
	}

	$(".tweet").on("click", function() {
		var quote = $("p").text();
		var author = $(".author").text();
		window.open('https://twitter.com/intent/tweet?text=' + quote + ' ' + author + '&url='+encodeURIComponent(location.href),'','width=650, height=350, toolbar=no, status=no');
		return false;
	});
 
});

