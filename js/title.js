class Title {
  constructor(screenWidth, screenHeight, filePos, eventList) {
    this.titleState = true;
    this.eventList = eventList;
    this.filePos = filePos;

    // コンテナ作成
    this.container = new PIXI.Container();
    this.container.x = 0;
    this.container.y = 0;
    let background = new PIXI.Sprite(
      PIXI.loader.resources[this.filePos + "titleImage.png"].texture
    );
    background.x = 0;
    background.y = 0;
    this.container.addChild(background);
    // playの文字作成
    this.playText = new PlayText(screenWidth);
    this.container.addChild(this.playText.pixi);

    // イベント登録
    this.onEventLisner();

    this.animate();
  }
  get pixi() {
    return this.container;
  }
  onEventLisner() {
    this.container.interactive = true;
    this.playText.pixi.interactive = true;
    this.container.on("click", (event) => {
      console.log("asf");
      this.titleState = false;
    });
    this.playText.pixi.on("click", (event) => {
      console.log("aa");
      this.titleState = false;
    });
  }
  animate() {
    if (this.titleState) {
      window.requestAnimationFrame(this.animate.bind(this));
    } else {
      // ゲーム終了
      this.finish();
    }
  }
  finish() {
    dispatchEvent(this.eventList.game);
  }
}

class PlayText {
  constructor(screenWidth) {
    const MARGIN_TOP_PC = 580;
    const B0XWIDTH_PC = 200;
    this.container = new PIXI.Container();
    this.container.x = 0;
    this.container.y = 0;
    let backgroundBox = new PIXI.Graphics()
      .beginFill(0x222222)
      .drawRect(0, 0, screenWidth, 100)
      .endFill();
    backgroundBox.pivot.x = 0.5;
    backgroundBox.pivot.y = 0.5;
    backgroundBox.x = 0;
    backgroundBox.y = MARGIN_TOP_PC - 10;
    backgroundBox.alpha = 0.8;
    this.container.addChild(backgroundBox);

    let view = new PIXI.Text("click to play", {
      //   fontFamily: 'Arial',   // フォント
      fontSize: 60,
      fill: 0xfdfdfd, // 文字色
      //   stroke: 0x000000,      // アウトラインの色
      //   strokeThickness: 3,    // アウトラインの太さ
      //   align: 'center',       // 文字揃え(複数行の場合に有効)
    });
    view.x = screenWidth / 2 - B0XWIDTH_PC;
    view.y = MARGIN_TOP_PC;
    this.container.addChild(view);
  }
  get pixi() {
    return this.container;
  }
}

export { Title };
