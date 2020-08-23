class Timer {
  constructor(limit) {
    this.timeCounter = 0;
    this.limitTime = limit;
    this.isFin = false;
    this.view = new PIXI.Text("00", {
      //   fontFamily: 'Arial',   // フォント
      fontSize: 50,
      fill: 0x000000, // 文字色
      //   stroke: 0x000000,      // アウトラインの色
      //   strokeThickness: 3,    // アウトラインの太さ
      //   align: 'center',       // 文字揃え(複数行の場合に有効)
    });
    this.view.x = 5;
    this.view.y = 5;
    this.viewTime();
  }
  get pixi() {
    return this.view;
  }
  viewTime() {
    let timeText = "" + this.limitTime;
    if (this.limitTime < 10) {
      timeText = "0" + timeText;
    }
    this.view.text = timeText;
  }
  update() {
    this.timeCounter++;
    if (this.timeCounter % 60 == 0) {
      this.limitTime--;
      this.timeCounter = 0;
      this.viewTime();
    }
    if (this.limitTime == 0) {
      // ゲーム終了
      this.isFin = true;
    }
  }
}

export { Timer };
