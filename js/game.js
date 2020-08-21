import { Fly, Tempura } from "./enemy.js";
import { Tool } from "./tool.js";

class Game {
  constructor(screenWidth, screenHeight, filePos) {
    this.level = 1; // ステージ状態のレベル
    this.animationCounter = 0; // ゲーム内部カウンター
    this.gameState = true; // true:ゲーム中 false:ゲーム終了
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

    // ゲームのキャラクター描画
    let generationCount = 1;
    this.flys = new Array();
    this.tempuras = new Array();

    for (let i = 0; i < generationCount; i++) {
      this.generateFly();
    }
    for (let i = 0; i < 0; i++) {
      this.generateTempura();
    }
    this.tool = new Tool();
    this.container.addChild(this.tool.pixi);
    // イベント有効
    this.onEventLisner();
  }
  get pixi() {
    // pixi描画のオブジェクトを返す
    return this.container;
  }
  get eventObj() {
    // クリック判定を付与するオブジェクトを返す
    return this.container;
  }
  onEventLisner() {
    // イベントを有効にする
    this.eventObj.interactive = true;
    this.eventObj
      .on("click", (event) => {
        this.checkHit(event.data.getLocalPosition(event.currentTarget));
      })
      .on("mousemove", (event) => {
        this.moveTool(event.data.getLocalPosition(event.currentTarget));
      })
      .on("touchstart", (event) => {
        this.checkHit(event.data.getLocalPosition(event.currentTarget));
      });
    addEventListener("keydown", () => {
      if (event.keyCode == 32) {
        //spaceKey
        this.tool.changeTool();
      }
    });
  }
  generateFly() {
    this.flys.push(
      // ハエオブジェクトを生成
      new Fly(PIXI.loader.resources[this.filePos + "fly.png"].texture)
    );
    // ***********
    this.container.addChild(this.flys[this.flys.length - 1].hitbox.view);
    // ***********
    this.container.addChild(this.flys[this.flys.length - 1].pixi);
  }
  generateTempura() {
    this.tempuras.push(
      // 天ぷらオブジェクトを生成
      new Tempura(PIXI.loader.resources[this.filePos + "buta.png"].texture)
    );
    this.container.addChild(this.tempuras[this.tempuras.length - 1].pixi);
  }
  checkHit(pos) {
    // enemyが捕まったかの処理を呼び出す
    for (let i = 0; i < this.flys.length; i++) {
      this.flys[i].checkHit(pos, this.tool.nowTool);
    }
    for (let i = 0; i < this.tempuras.length; i++) {
      this.tempuras[i].checkHit(pos, this.tool.nowTool);
    }
  }
  moveTool(pos) {
    this.tool.moveData(pos.x, pos.y);
  }
  changeTool(state) {
    this.tool.changeTool(state);
  }
  start() {
    // ゲーム開始！
    this.animate();
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
    // toolの位置更新

    this.tool.update();

    if (this.gameState) {
      window.requestAnimationFrame(this.animate.bind(this));
    } else {
      // ゲーム終了
      this.finish();
    }
  }
  finish() {
    // ゲーム終了の処理
  }
}

export { Game };
