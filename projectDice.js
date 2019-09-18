"use strict";

function rollDie(numberOfSides){
	let result = Math.floor((Math.random() * numberOfSides) + 1);
	return result;
}


//player1
function runRound1(){
	let d1 = rollDie(4);
	let d2 = rollDie(6);
	let d3 = rollDie(8);
	let d4 = rollDie(10);
	let d5 = rollDie(12);
	let d6 = rollDie(20);
	let rollResults1 = d1 + d2 + d3 + d4 + d5 + d6;
	console.log("You rolled" + " " + rollResults1 + " " + "their first round");
	return rollResults1;
}

function runRound2(rollResults1){
	let d1 = rollDie(4);
	let d2 = rollDie(6);
	let d3 = rollDie(8);
	let d4 = rollDie(10);
	let d5 = rollDie(12);
	let d6 = rollDie(20);
	let rollResults2 = d1 + d2 + d3 + d4 + d5 + d6;
	let combinedResults = rollResults2 + rollResults1;
		if(combinedResults < 75){
			console.log("You rolled" + " " + combinedResults + " " + "their second round")
		}
		else if(combinedResults > 75){
			combinedResults = 25;
			console.log("Bust, your score drops down to 25.");
		}
	return combinedResults;
}

function runRound3(combinedResultOfRoundTwo){
	let d1 = rollDie(4);
	let d2 = rollDie(6);
	let d3 = rollDie(8);
	let d4 = rollDie(10);
	let d5 = rollDie(12);
	let d6 = rollDie(20);
	let rollResults3 = d1 + d2 + d3 + d4 + d5 + d6;
	let allResults = rollResults3 + combinedResultOfRoundTwo;
		if(allResults <= 75){
			console.log("You rolled" + " " + allResults + " " + "their third round");
		}
		else if (allResults > 75){
			allResults = 25;
			console.log("Bust, your score drops down to 25.");
		}
	return allResults;
}

function calculateResults (round1Result, round2Result, round3Result){
	let grandTotal = round1Result + round2Result + round3Result;
		return grandTotal;
}

function RunGame(){
	let player1Score = 0;
	let player2Score = 0;
	let curPlayer = "Player1";
	for (let i = 0; i < 2; i++){
		let round1 = runRound1();
		let combinedResultsOfFirstTwoRounds = runRound2(round1);
		let allRoundResultsAdded = runRound3(combinedResultsOfFirstTwoRounds);
	if (i % 2 == 0){
		curPlayer = "Player1";
		player1Score += allRoundResultsAdded;
	}
	else {
		curPlayer = "Player2";
		player2Score += allRoundResultsAdded;
	}
	console.log(curPlayer + " " + allRoundResultsAdded);
	}
	if (player1Score > player2Score){
		console.log("Player1 wins the game")
	}
	else if (player2Score > player1Score){
		console.log("Player2 wins the game")
	}
	else {
		console.log("Players tied, roll again!")
	}

}


RunGame();