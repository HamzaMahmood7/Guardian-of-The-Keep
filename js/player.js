class Player {
  constructor(gameScreen, left, top, width, height) {
    // add the archer to the game screen
    this.gameScreen = gameScreen;
    // the 2 points of the archer that we use to know where we are starting
    this.left = left;
    this.top = top;
    // the width and height of the character
    this.width = width;
    this.height = height;
    // archer movement using axis. moves the player from point left and top
    this.directionX = 0;
    this.directionY = 0;
    // creating our archer image tag
    this.imageElement = document.createElement("img");
    this.imageElement.src = "assets/archer-right-facing.png";
    this.imageElement.style.position = "absolute";
    // sets the size of the plaåyer
    this.imageElement.style.height = `${this.height}px`;
    this.imageElement.style.width = `${this.width}px`;
    // sets the position of the archer when the game starts
    this.imageElement.style.top = `${this.top}px`;
    this.imageElement.style.left = `${this.left}px`;
    // visually adding the archer to the page
    this.gameScreen.appendChild(this.imageElement);
  }
  move() {
    this.left += this.directionX;
    this.top += this.directionY;
    // Keep the player on the screen
    if (this.left <= 50) {
      this.left = 50;
    }
    if (this.left + this.width >= 1600) {
      this.left = 1600 - this.width;
    }
    if (this.top <= 0) {
      this.top = 0;
    }
    if (this.top + this.height >= 900) {
      this.top = 900 - this.height;
    }

    this.updatePosition();
  }
  updatePosition() {
    this.imageElement.style.top = `${this.top}px`;
    this.imageElement.style.left = `${this.left}px`;
  }
  didCollide(enemy) {
    const playerRect = this.imageElement.getBoundingClientRect();
    const enemyRect = enemy.imageElement.getBoundingClientRect();

    if (
      playerRect.left < enemyRect.right &&
      playerRect.right > enemyRect.left &&
      playerRect.top < enemyRect.bottom &&
      playerRect.bottom > enemyRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
