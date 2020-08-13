import { Game } from "./game.js";

// グローバル定数
const screenWidth = 1400;
const screenHeight = 800;

// グローバル変数
let isLoading = false;
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
  let game = new Game(screenWidth, screenHeight, filePos);
  app.stage.addChild(game.pixi);
  isLoading = true;
  game.animate();
}

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
