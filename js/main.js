import { Game } from "./game.js";
import { Title } from "./title.js";

// グローバル定数
const screenWidth = 1400;
const screenHeight = 800;

// グローバル変数
let isLoading = false;
let game;
let title;
let eventList = new Array();
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
  title = new Title(screenWidth, screenHeight, filePos, eventList);
  app.stage.addChild(title.pixi);

  // ローディング完了→ゲーム開始
  isLoading = true;
  //game.start();
}

eventList.game = new CustomEvent("game", { state: 0 });
eventList.title = new CustomEvent("title", { state: 0 });

addEventListener("game", function (e) {
  if (title) title.pixi.visible = false;
  game = new Game(screenWidth, screenHeight, filePos);
  setTimeout(function () {
    app.stage.addChild(game.pixi); // HACK:これ不要？
    game.start();
  }, 20);
});
addEventListener("title", function (e) {
  title = new Title(screenWidth, screenHeight, filePos, eventList);
  app.stage.addChild(title.pixi); // HACK:これ不要？
});
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
