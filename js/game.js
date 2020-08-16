import { Fly, Tempura } from "./enemy.js";

class Game {
  constructor(screenWidth, screenHeight, filePos) {
    this.level = 1; // ステージ状態のレベル
    this.animationCounter = 0; // ゲーム内部カウンター

    this.filePos = filePos;
    // ゲームのコンテナ作成
    this.container = new PIXI.Container();
    this.container.x = 0;
    this.container.y = 0;

    let background = new PIXI.Graphics()
      .beginFill(0xffff00)
      .drawRect(0, 0, screenWidth, screenHeight)
      .endFill();
    this.container.addChild(background);
    background.interactive = true;
    function cli(e) {
      checkHit(e);
    }
    background.on("click", cli);

    // ゲームのキャラクター描画
    let generationCount = 10;
    this.flys = new Array();
    this.tempuras = new Array();

    for (let i = 0; i < generationCount; i++) {
      this.generateFly();
    }
    for (let i = 0; i < 5; i++) {
      this.generateTempura();
    }
  }
  get pixi() {
    // pixi描画のオブジェクトを返す
    return this.container;
  }
  generateFly() {
    this.flys.push(
      // ハエオブジェクトを生成
      new Fly(PIXI.loader.resources[this.filePos + "fly.png"].texture)
    );
    this.container.addChild(this.flys[this.flys.length - 1].pixi);
  }
  generateTempura() {
    this.tempuras.push(
      // 天ぷらオブジェクトを生成
      new Tempura(PIXI.loader.resources[this.filePos + "buta.png"].texture)
    );
    this.container.addChild(this.tempuras[this.tempuras.length - 1].pixi);
  }
  checkHit(e) {
    // enemyが捕まったかを判定
    console.log(e);
  }
  animate() {
    // ハエの位置更新
    for (let i = 0; i < this.flys.length; i++) {
      this.flys[i].update(0);
    }
    // 天ぷらの位置更新
    for (let i = 0; i < this.tempuras.length; i++) {
      this.tempuras[i].update(0);
    }
    window.requestAnimationFrame(this.animate.bind(this));
  }
}

export { Game };
