var settings = {
	// link url
	"linkUrl" : "http://spaces.ru",
	// how much seconds to show 
	"secondsToShow" : 5,
	// time customization
	"time" : {
		"0" : 24,
		"1" : 24,
		"2" : 24,
		"3" : 24,
		"4" : 24,
		"5" : 24,
		"6" : 24,
		"7" : 24,
		"8" : 24,
		"9" : 24,
		"10" : 24,
		"11" : 24,
		"12" : 323,
		"13" : 24,
		"14" : 24,
		"15" : 24,
		"16" : 24,
		"17" : 1000,
		"18" : 200,
		"19" : 400,
		"20" : 24,
		"21" : 24,
		"22" : 24,
		"23" : 24,
	}
};

$(document).ready(function(){
	var currentHour = getHours();
	var linksPerCurrentHour = settings["time"][currentHour.toString()];

	var secondsInHour = 3600;
	var secondsForInterval = 3600 - (settings["secondsToShow"] * linksPerCurrentHour);
	var averageSecondsInterval = parseInt(secondsForInterval/linksPerCurrentHour);
	
	
	var randomMin = parseInt(averageSecondsInterval/3);
	var randomMax = parseInt(averageSecondsInterval*3);
	
	if(randomMin < 0)
	{
		randomMin = 1;
	}
	
	var currentInterval = randomInteger(randomMin, randomMax);
	console.log("Links per current hour: " + linksPerCurrentHour);
	console.log("Average seconds interval: " + averageSecondsInterval);
	console.log("Random min: " + randomMin);
	console.log("Random max: " + randomMax);
	console.log(currentInterval);
	
	setTimeout(processLink, currentInterval * 1000);
});

function processLink()
{
	var currentHour = getHours();
	var linksPerCurrentHour = settings["time"][currentHour.toString()];

	var secondsInHour = 3600;
	var secondsForInterval = 3600 - (settings["secondsToShow"] * linksPerCurrentHour);
	var averageSecondsInterval = parseInt(secondsForInterval/linksPerCurrentHour);
	
	
	var randomMin = parseInt(averageSecondsInterval/3);
	var randomMax = parseInt(averageSecondsInterval*3);
	
	if(randomMin < 0)
	{
		randomMin = 1;
	}
		
	var currentInterval = randomInteger(randomMin, randomMax);
	
	console.log("Links per current hour: " + linksPerCurrentHour);
	console.log("Average seconds interval: " + averageSecondsInterval);
	console.log("Random min: " + randomMin);
	console.log("Random max: " + randomMax);
	console.log(currentInterval);
	
	showLink();
	setTimeout(removeLink, settings["secondsToShow"] * 1000);
	setTimeout(processLink, currentInterval * 1000);
}

function showLink()
{
	$("div#randomLinkBlock").html('<a href="' + settings["linkUrl"] + '">Ссылка</a>');
}

function removeLink()
{
	$("div#randomLinkBlock").html("");
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function getHours()
{
	var d = new Date();
    var n = d.getHours();

    return parseInt(n);
}