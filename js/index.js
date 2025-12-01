window.onload = function () {
  const startButtonElement = document.getElementById("start-game-button");
  const restartButtonElement = document.getElementById("restart-game-button");

  startButtonElement.addEventListener("click", () => {
    startGame();
  });

  function startGame() {
    console.log(`start game!`);
    const ourGame = new Game();
    ourGame.start();
  }
};
