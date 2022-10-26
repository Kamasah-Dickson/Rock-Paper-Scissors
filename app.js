let preferedInput;
let computerDecision; //get decision from the function
let gameWinner;

const play = confirm("Do you want to play Rock,Paper or Scissors?");
if (!play) {
	later();
}

while (play) {
	let userData = prompt("Please enter Rock,paper or Scissors").trim().toLowerCase();
	if (userData) {
		userData.trim().toLowerCase();
		//check if user data is rock, papaper of scissors if true getComputerChoice;
		if (
			userData === "rock" ||
			userData === "paper" ||
			userData === "scissors"
		) {
			getComputerData();
			//afterComputersChoice, decide the winner/ gamelogics
			gamelogics(userData);
			//after gameLogic above, ask if want to play again;
			let playAgain = confirm("Lets play again?");
			if (playAgain) {
				//if you want to play again, will test userdata and logic once more;
				location.reload();
			} else {
				later();
			}
		} else {
			error();
			continue;
		}
	} else if (userData === "") {
		error();
		continue;
	} else {
		later();
	}
	break;
}

//gameDecisons
function gamelogics(userData) {
	userData.trim().toLowerCase();
	computerDecision === userData
		? (gameWinner = `it's a tire: computer:  ${computerDecision} PlayerOne: ${userData}`)
		: userData === "rock" && computerDecision === "paper"
		? (gameWinner = `computer Wins by: ${computerDecision} 
		PlayerOne: ${userData}`)
		: userData === "scissors" && computerDecision === "rock"
		? (gameWinner = `computer Wins: ${computerDecision} 
		playerOne: ${userData}`)
		: userData === "paper" && computerDecision === "scissors"
		? (gameWinner = ` computer Wins by: ${computerDecision} 
		playerOne: ${userData}`)
		: (gameWinner = `playerOne Wins: ${userData} 
		computer: ${computerDecision}`);
	alert(gameWinner);
	// return gameWinner;
}

//randomComputerChoices
function getComputerData() {
	const computerChoices = ["rock", "paper", "scissors"];
	computerDecision =
		computerChoices[Math.floor(Math.random() * computerChoices.length)];
	return computerDecision;
}

function error() {
	alert("Please enter Rock,Paper or Scissors");
}

function later() {
	alert("Maybe later");
}
