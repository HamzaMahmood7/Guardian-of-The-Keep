window.onload = function () {
  let myGame;
  const startButtonElement = document.getElementById("start-game-button");
  const restartButtonElement = document.getElementById("restart-game-button");

  startButtonElement.addEventListener("click", () => {
    startGame();
  });

  restartButtonElement.addEventListener("click", () => {
    window.location.reload();
  });

  // keyboard event listeners
  window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      myGame.player.directionX = -4;
      myGame.archerWalking.play();
    }
    if (event.code === "ArrowRight") {
      myGame.player.directionX = 4;
      myGame.archerWalking.play();
    }
    if (event.code === "ArrowUp") {
      myGame.player.directionY = -4;
      myGame.archerWalking.play();
    }
    if (event.code === "ArrowDown") {
      myGame.player.directionY = 4;
      myGame.archerWalking.play();
    }
    // Shooting the arrow
    if (event.code === "Space") {
      // dynamically getting the position of the player
      myGame.arrows.push(
        new Arrow(
          myGame.gameScreen,
          // plus the width of the player
          myGame.player.left + 80,
          // the top of the player plus the player width minus half of the height of the arrow
          myGame.player.top + 75 - 10
        )
      );
      // calling the bow Release sound from the game class
      myGame.bowRelease.play();
    }
  });
  window.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft") {
      myGame.player.directionX = 0;
    }
    if (event.code === "ArrowRight") {
      myGame.player.directionX = 0;
    }
    if (event.code === "ArrowUp") {
      myGame.player.directionY = 0;
    }
    if (event.code === "ArrowDown") {
      myGame.player.directionY = 0;
    }
  });

  function startGame() {
    console.log(`start game!`);
    myGame = new Game();
    myGame.start();
  }
};
