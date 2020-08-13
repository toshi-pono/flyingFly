import { Fly, Tempura } from "Game.js";

class Game {
  constructor(screenWidth, screenHeight, textureMap) {
    this.level = 1; // ステージ状態のレベル
    this.animationCounter = 0; // ゲーム内部カウンター

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
  }
  get view() {
    return this.container;
  }
  animate() {}
}

export { Game };
