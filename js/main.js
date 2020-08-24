import { Game } from "./game.js";
import { Title } from "./title.js";

// グローバル定数
const screenWidth = 1400;
const screenHeight = 800;

// グローバル変数
let isLoading = false;
let game;
let title;
// ********************************************* //
// *************   素材の読み込み   ************** //
// ********************************************* //
const filePos = "../assets/";
PIXI.loader
  .add(filePos + "buta.png")
  .add(filePos + "fly.png")
  .add(filePos + "titleImage.png")
  .load(setup);

function setup() {
  // スプライトの作成
  title = new Title(screenWidth, screenHeight, filePos);
  app.stage.addChild(title.pixi);

  // ローディング完了→ゲーム開始
  isLoading = true;
  //game.start();
}

// イベント作成
const titleEvent = new Event("title");

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
