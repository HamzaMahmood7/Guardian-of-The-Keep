// Game class
class Game {
  constructor() {
    // accessing all of the screens
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end-screen");
    this.player = null;
    // empty array of enemies
    this.enemies = [];
    // score and lives values set
    this.score = 0;
    this.lives = 3;
    // set the game over to false at the start
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.floor(1000 / 60);
  }
  // start game method: displays the game screen and creates the game interval
  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  // game loop method: 
  gameLoop() {
    this.update()
    if(this.gameIsOver) {
        clearInterval(this.gameIntervalId);
        this.gameOver()
    }
  }
  update() {
  }
  gameOver() {
    console.log(`the game is over`)
  }
}
