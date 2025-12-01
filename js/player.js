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
        this.imageElement = document.createElement('img');
        this.imageElement.src = './assets/archer.png'
        this.imageElement.style.position = 'absolute';
        // sets the size of the player
        this.imageElement.style.height = `${this.height}px`;
        this.imageElement.style.width = `${this.width}px`
        // sets the position of the archer when the game starts
         this.imageElement.style.top = `${this.top}px`
         this.imageElement.style.left = `${this.left}px`
         // visually adding the archer to the page
         this.gameScreen.appendChild(this.imageElement);
    }
}