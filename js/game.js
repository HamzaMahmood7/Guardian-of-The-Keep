// Game class
class Game {
  constructor() {
    // accessing all of the screens
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-end-screen");
    // Creating an instance of the player class: 
    this.player = new Player(this.gameScreen, 100, 350, 100, 130);
    this.height = 798;
    this.width = 1512;
    this.enemies = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.floor(1000 / 60);
  }
  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    this.update()
    if(this.gameIsOver) {
        clearInterval(this.gameIntervalId);
        this.gameOver()
    }
  }
  // runs 60 times per second
  update() {
    // calls the move method from the player class
    // allowing the player to move
    this.player.move()
  }
  gameOver() {
    console.log(`the game is over`)
  }
}
