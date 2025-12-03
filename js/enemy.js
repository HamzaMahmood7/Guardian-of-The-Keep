class Enemy {
  constructor(gameScreen) {
    // add the enemy to the game screen
    this.gameScreen = gameScreen;
    // the 2 points of the enemy that we use to know where we are starting
    // generating a random top value for the enemy: range from 100 - 700
    this.randomTopPositions = Math.floor(Math.random() * (750 - 150 + 1)) + 150;
    this.left = 2000;
    this.top = this.randomTopPositions;
    // the width and height of the character
    this.width = 50;
    this.height = 70;
    // enemy movement using axis. moves the player from point left and top
    // this.directionX = 0;
    // this.directionY = 0;
    // creating our enemy image tag
    this.imageElement = document.createElement("img");
    this.imageElement.src = "./assets/goblin-character.png";
    this.imageElement.style.position = "absolute";
    // sets the size of  the plaåyer
    this.imageElement.style.height = `${this.height}px`;
    this.imageElement.style.width = `${this.width}px`;
    // sets the position of the enemy when the game starts
    this.imageElement.style.top = `${this.top}px`;
    this.imageElement.style.left = `${this.left}px`;
    // visually adding the enemy to the page
    this.gameScreen.appendChild(this.imageElement);
  }
  move() {
    this.left += -2;
    this.updatePosition();
  }
  updatePosition() {
    this.imageElement.style.top = `${this.top}px`;
    this.imageElement.style.left = `${this.left}px`;
  }
}
