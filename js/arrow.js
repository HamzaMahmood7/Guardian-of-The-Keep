class Arrow {
  constructor(gameScreen, posX, posY) {
    this.gameScreen = gameScreen;
    this.left = posX;
    this.top = posY;
    this.width = 80;
    this.height = 20;

    // creating our arrow image tag
    this.imageElement = document.createElement("img");
    this.imageElement.src = "assets/arrow.png";
    this.imageElement.style.position = "absolute";
    // sets the size of the plaåyer
    this.imageElement.style.height = `${this.height}px`;
    this.imageElement.style.width = `${this.width}px`;
    // sets the position of the arrow when the game starts
    this.imageElement.style.top = `${this.top}px`;
    this.imageElement.style.left = `${this.left}px`;
    // visually adding the arrow to the page
    this.gameScreen.appendChild(this.imageElement);
  }
  move() {
    this.left += 6;
    this.updatePosition();
  }
  updatePosition() {
    this.imageElement.style.top = `${this.top}px`;
    this.imageElement.style.left = `${this.left}px`;
  };

  didStrike(enemy) {
    const arrowRect = this.imageElement.getBoundingClientRect();
    const enemyRect = enemy.imageElement.getBoundingClientRect();

    if (
      arrowRect.left < enemyRect.right &&
      arrowRect.right > enemyRect.left &&
      arrowRect.top < enemyRect.bottom &&
      arrowRect.bottom > enemyRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
