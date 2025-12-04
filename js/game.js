// Game class
class Game {
  constructor() {
    // accessing all of the screens
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end-screen");
    // accessing player stats
    this.PlayerStatsElement = document.getElementById("player-stats");
    // the keep entrance container
    this.theKeepEntranceContainer = document.getElementById(
      "game-screen-the-keep"
    );
    // high scores container
    this.highScoreListElement = document.getElementById("high-scores");
    // Creating an instance of the player class:
    this.player = new Player(this.gameScreen, 100, 350, 120, 150);
    // this.height = 920;
    // this.width = 1780;
    this.enemies = [new Enemy(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.floor(1000 / 60);
    this.arrows = [];

    //the score and lives elements from HTML
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");

    // current players score to show at the end of the game
    this.currentPlayerScore = document.getElementById("current-player-score");

    // counter to keep track of the frames
    this.frames = 0;

    // adding sound to the game
    this.bowRelease = new Audio("assets/sounds/bow-release.wav");
    this.goblinDying = new Audio("assets/sounds/goblin-dying.wav");
    this.gameOverSound = new Audio("assets/sounds/game-over.wav");
    this.archerHurt = new Audio("assets/sounds/archer-hurt.wav");

    this.bowRelease.volume = ".2";
    this.goblinDying.volume = ".2";
    this.gameOverSound.volume = ".2";
    this.archerHurt.volume = ".3";
  }
  start() {
    // this.gameScreen.style.height = `${this.height}px`;
    // this.gameScreen.style.width = `${this.width}px`;
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.PlayerStatsElement.style.display = "block";
    this.theKeepEntranceContainer.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    // adds one to the frames
    this.frames++;
    // for every 3 seconds, push a new obstacle to this.enemies
    if (this.frames % 180 === 0) {
      this.enemies.push(new Enemy(this.gameScreen));
    }
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }
  }
  // runs 60 times per second
  update() {
    // calls the move method from the player class
    // allowing the player to move
    this.player.move();

    // loop over the enemies array and add the move method to the current enemy
    this.enemies.forEach((currentEnemy, currentEnemyIndex) => {
      currentEnemy.move();

      // player and enemy collision
      if (this.player.didCollide(currentEnemy)) {
        // playing the archer hurt sound
        this.archerHurt.play();
        // remove the enemy img from the DOM
        currentEnemy.imageElement.remove();
        // remove the enemy from the enemies array
        this.enemies.splice(currentEnemyIndex, 1);
        currentEnemyIndex--;

        //subtract a life
        this.lives--;
        this.livesElement.textContent = this.lives;
        // End the game is zero lives are remaining
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }

      // checking if the enemy has reached the keep
      if (currentEnemy.left <= 0) {
        // remove the enemy img from the DOM
        currentEnemy.imageElement.remove();
        // remove the enemy from the enemies array
        this.enemies.splice(currentEnemyIndex, 1);
        currentEnemyIndex--;

        // lives is zero
        this.lives = 0;
        this.livesElement.textContent = 0;
        // end the game
        this.gameIsOver = true;
      }

      // handles the movement and collision of the arrows
      this.arrows.forEach((currentArrow, currentArrowIndex) => {
        currentArrow.move();

        // if the arrow has hit an enemy
        if (currentArrow.didStrike(currentEnemy)) {
          // remove the enemy img from the DOM
          currentEnemy.imageElement.remove();
          // remove the enemy from the enemies array
          this.enemies.splice(currentEnemyIndex, 1);
          currentEnemyIndex--;

          // remove the arrow img from the DOM
          currentArrow.imageElement.remove();
          // remove the enemy from the enemies array
          this.arrows.splice(currentArrowIndex, 1);
          currentArrowIndex--;

          // goblin dying sound
          this.goblinDying.play();
          // increment the score by 1
          this.score++;
          this.scoreElement.textContent = this.score;
        }
      });
    });
  }
  gameOver() {
    console.log(`the game is over`);
    // hide the game screen and the player stats
    this.gameScreen.style.display = "none";
    this.PlayerStatsElement.style.display = "none";
    this.theKeepEntranceContainer.style.display = "none";

    // show the game end screen
    this.gameEndScreen.style.display = "flex";

    // this.gameOverSound.play();
    // show the current players score
    this.currentPlayerScore.textContent = this.score;
    // for the high scores stored in local storage
    const highScoresFromLocalStorage = JSON.parse(
      localStorage.getItem("high-scores")
    );
    if (!highScoresFromLocalStorage) {
      localStorage.setItem("high-scores", JSON.stringify([this.score]));
    } else {
      // adds the score from the last game
      highScoresFromLocalStorage.push(this.score);
      // sorts the high scores in descending order
      highScoresFromLocalStorage.sort((a, b) => {
        return b - a;
      });
      // splicing the top 3 scores from the array
      const topThreeScores = highScoresFromLocalStorage.splice(0, 3);
      // chages the value in the local storage to be the new array
      localStorage.setItem("high-scores", JSON.stringify(topThreeScores));

      // update the game over page to show the top 3 high scores
      topThreeScores.forEach((currentScore) => {
        const listElement = document.createElement("li");
        listElement.textContent = currentScore;
        this.highScoreListElement.appendChild(listElement);
      });
    }
  }
}
