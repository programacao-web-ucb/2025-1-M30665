const readline = require("readline");


function secondsToHour(seconds){
	let hours = Math.floor(seconds/3600);
	seconds = seconds%3600;

	let minutes = Math.floor(seconds/60);
	seconds = seconds%60;

	return `${hours}:${minutes}:${seconds}`;
}



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function(userInput) {
	console.log(secondsToHour(parseInt(userInput)));
    rl.close();
});
