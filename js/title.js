class Title {
  constructor(screenWidth, screenHeight, filePos) {
    this.filePos = filePos;
    this.container = new PIXI.Container();
    this.container.x = 0;
    this.container.y = 0;
    let background = new PIXI.Sprite(
      PIXI.loader.resources[this.filePos + "titleImage.png"].texture
    );
    background.x = 0;
    background.y = 0;
    this.container.addChild(background);
  }
  get pixi() {
    return this.container;
  }
}

export { Title };
