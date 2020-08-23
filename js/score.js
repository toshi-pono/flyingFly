class Score {
  constructor(screenWidth) {
    const BOX_WIDTH = 100;
    const MARGIN_TOP = 5;
    this.score = 0;
    this.view = new PIXI.Text("000", {
      //   fontFamily: 'Arial',   // フォント
      fontSize: 50,
      fill: 0x000000, // 文字色
      //   stroke: 0x000000,      // アウトラインの色
      //   strokeThickness: 3,    // アウトラインの太さ
      //   align: 'center',       // 文字揃え(複数行の場合に有効)
    });
    this.view.x = screenWidth - BOX_WIDTH;
    this.view.y = MARGIN_TOP;
    this.viewScore();
  }
  viewScore() {
    let scoreText = "" + this.score;
    if (this.score < 10) {
      scoreText = "0" + scoreText;
    }
    if (this.score < 100) {
      scoreText = "0" + scoreText;
    }
    this.view.text = scoreText;
  }
  get pixi() {
    return this.view;
  }
  update(state) {
    switch (state) {
      case 0:
        // 何もしない
        break;
      case 1:
        // 加点
        this.score++;
        break;
      case 2:
        // 減点
        this.score--;
        break;
      case -1:
        // 何もしない
        break;
    }
    if (this.score < 0) this.score = 0;
    this.viewScore();
  }
}
export { Score };
