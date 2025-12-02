window.onload = function () {
    let ourGame;
  const startButtonElement = document.getElementById("start-game-button");
  const restartButtonElement = document.getElementById("restart-game-button");

  startButtonElement.addEventListener("click", () => {
    startGame();
  });

  restartButtonElement.addEventListener('click', () => {
    window.location.reload()
  })

  // keyboard event listeners
  window.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowLeft') {
        ourGame.player.directionX = -4 
    }
    if(event.code === 'ArrowRight') {
        ourGame.player.directionX = 4
    }
    if(event.code === 'ArrowUp') {
        ourGame.player.directionY = -4 
    }
    if(event.code === 'ArrowDown') {
        ourGame.player.directionY = 4 
    }
    
  });
  window.addEventListener('keyup', (event) => {
    if(event.code === 'ArrowLeft') {
        ourGame.player.directionX = 0 
    }
    if(event.code === 'ArrowRight') {
        ourGame.player.directionX = 0
    }
    if(event.code === 'ArrowUp') {
        ourGame.player.directionY = 0 
    }
    if(event.code === 'ArrowDown') {
        ourGame.player.directionY = 0
    }
  })

  function startGame() {
    console.log(`start game!`);
    ourGame = new Game();
    ourGame.start();
  }
};
