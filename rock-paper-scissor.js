 let score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0,
        ties: 0,
      };

      updateScore();

      function playGame(playerMove) {
        computerMove = pickComputerMove();
        result = "";
        if (playerMove === "scissors") {
          if (computerMove === "rock") {
            result = "You Lose.";
          } else if (computerMove === "paper") {
            result = "You Win.";
          } else if (computerMove === "scissors") {
            result = "Tie.";
          }
        } else if (playerMove === "paper") {
          if (computerMove === "rock") {
            result = "You Win.";
          } else if (computerMove === "paper") {
            result = "Tie.";
          } else if (computerMove === "scissors") {
            result = "You Lose.";
          }
        } else if (playerMove === "rock") {
          if (computerMove === "rock") {
            result = "Tie.";
          } else if (computerMove === "paper") {
            result = "You Lose.";
          } else if (computerMove === "scissors") {
            result = "You Win.";
          }
        }

        if (result === "You Win.") {
          score.wins += 1;
        } else if (result === "You Lose.") {
          score.losses += 1;
        } else if (result === "Tie.") {
          score.ties += 1;
        }

        localStorage.setItem("score", JSON.stringify(score));

        updateScore();

        document.querySelector(".js-result").innerHTML = result;
        document.querySelector(
          ".js-showMoves"
        ).innerHTML = `You
      <img class="move-icon" src="images/${playerMove}-emoji.png">
      <img class="move-icon" src="images/${computerMove}-emoji.png">
      Computer`;

      }

      function showResult() {}

      function updateScore() {
        document.querySelector(
          ".js-score"
        ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses} Tiea: ${score.ties}`;
      }
      function pickComputerMove() {
        const randonNumber = Math.random();
        let computerMove = "";

        if (randonNumber >= 0 && randonNumber < 1 / 3) {
          computerMove = "rock";
        } else if (randonNumber >= 1 / 3 && randonNumber < 2 / 3) {
          computerMove = "paper";
        } else if (randonNumber >= 2 / 3 && randonNumber < 1) {
          computerMove = "scissors";
        }
        return computerMove;
      }