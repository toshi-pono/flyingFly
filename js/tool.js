class Tool {
  constructor() {
    this.size = 200;
    this.state = 1; //0:はし 1:はえたたき
    this.view = new PIXI.Graphics()
      .beginFill(0x777777)
      .drawRect(0, 0, this.size, this.size)
      .endFill();
    this.view.x = 0;
    this.view.y = 0;
    this.x = 0;
    this.y = 0;
  }
  get pixi() {
    return this.view;
  }
  moveData(x, y) {
    this.x = x - this.size / 2;
    this.y = y - this.size / 2;
  }
  update() {
    this.view.x = this.x;
    this.view.y = this.y;
  }
}

export { Tool };
