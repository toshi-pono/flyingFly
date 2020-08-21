import { Game } from "./game.js";

// グローバル定数
const screenWidth = 1400;
const screenHeight = 800;

// グローバル変数
let isLoading = false;
let game;
// ********************************************* //
// *************   素材の読み込み   ************** //
// ********************************************* //
const filePos = "../assets/";
PIXI.loader
  .add(filePos + "buta.png")
  .add(filePos + "fly.png")
  .load(setup);

function setup() {
  // スプライトの作成
  // PIXI.loader.resources[filePos + "buta.png"].texture
  game = new Game(screenWidth, screenHeight, filePos);
  app.stage.addChild(game.pixi);
  // ゲーム用にクリック判定処理の追加
  // game.eventObj.interactive = true;
  // game.eventObj
  //   .on("click", onClick)
  //   .on("touchstart", onClick)
  //   .on("mousemove", toolMove);
  // ローディング完了→ゲーム開始
  isLoading = true;
  game.start();
}

// イベント用関数
// function onClick(event) {
//   game.checkHit(event.data.getLocalPosition(event.currentTarget), tool);
// }
// function toolMove(event) {
//   game.moveTool(event.data.getLocalPosition(event.currentTarget), tool);
// }

// ********************************************* //
// *************    ゲームの描画    ************** //
// ********************************************* //
let app = new PIXI.Application({
  width: screenWidth,
  height: screenHeight,
  backgroundColor: 0x1099bb,
});
let el = document.getElementById("app");
el.appendChild(app.view);
