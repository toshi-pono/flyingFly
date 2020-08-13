function generateRandom(Maxnum, Minnum = 0) {
  return Math.floor(Math.random() * (Maxnum - Minnum + 1)) + Minnum;
}
const locusType = [
  { angleRatioX: 1, angleRatioY: 1, phaseDiff: 1 },
  { angleRatioX: 1, angleRatioY: 1, phaseDiff: 2 },
  { angleRatioX: 1, angleRatioY: 1, phaseDiff: 3 },
  { angleRatioX: 1, angleRatioY: 2, phaseDiff: 1 },
  { angleRatioX: 1, angleRatioY: 2, phaseDiff: 2 },
  { angleRatioX: 1, angleRatioY: 2, phaseDiff: 3 },
  { angleRatioX: 1, angleRatioY: 3, phaseDiff: 1 },
  { angleRatioX: 1, angleRatioY: 3, phaseDiff: 2 },
  { angleRatioX: 1, angleRatioY: 3, phaseDiff: 3 },
  { angleRatioX: 2, angleRatioY: 3, phaseDiff: 1 },
  { angleRatioX: 2, angleRatioY: 3, phaseDiff: 3 },
];
// ハエ
class Fly {
  constructor(texture) {
    const size = 100;
    this.baseX = generateRandom(1400);
    this.baseY = generateRandom(800);
    this.x = this.baseX;
    this.y = this.baseY;
    this.animCounter = 0;
    this.animCycle = generateRandom(500, 50);
    this.animType = generateRandom(10);
    this.animAmpX = generateRandom(900, 100);
    this.animAmpY = generateRandom(500, 100);
    this.animDirection = generateRandom(1);
    this.isDeath = false;
    this.flyView = new FlyView(this.x, this.y, size, texture);
  }
  get pixi() {
    return this.flyView.view;
  }
  update(state) {
    switch (state) {
      case 0:
        // 通常
        const angle =
          (this.animCounter / this.animCycle) *
          Math.PI *
          2 *
          (this.animDirection * 2 - 1);
        this.x =
          this.baseX +
          this.animAmpX *
            Math.cos(locusType[this.animType].angleRatioX * angle);
        this.y =
          this.baseY +
          this.animAmpY *
            Math.cos(
              locusType[this.animType].angleRatioY * angle +
                locusType[this.animType].phaseDiff
            );
        break;

      case 2:
        // 悲しみ
        break;
    }
    this.animCounter++;
    this.animCounter %= this.animCycle;
    // オブジェクト描画位置更新
    this.flyView.animate(this.x, this.y);
  }
}

class FlyView {
  constructor(x, y, size, texture) {
    this.view = new PIXI.Sprite(texture);
    this.view.anchor.set(0.5);
    this.view.x = x;
    this.view.y = y;
  }
  animate(x, y) {
    this.view.x = x;
    this.view.y = y;
  }
}

// 揚げ物
class Tempura {
  constructor(texture) {
    this.size = 100;
    this.x = generateRandom(1400 - this.size / 2 - 1, this.size / 2 + 1);
    this.y = generateRandom(800 - this.size / 2 - 1, this.size / 2 + 1);

    const directionAngle = (generateRandom(360) / 180) * Math.PI;
    this.dx = Math.ceil(2 * Math.cos(directionAngle));
    this.dy = Math.ceil(2 * Math.sin(directionAngle));
    this.animCounter = 0;

    this.isDeath = false;
    this.tempuraView = new TempuraView(this.x, this.y, this.size, texture);
  }
  get pixi() {
    return this.tempuraView.view;
  }
  update(state) {
    switch (state) {
      case 0:
        // 通常
        this.x += this.dx;
        this.y += this.dy;
        if (this.x - this.size / 2 < 0 || this.x + this.size / 2 > 1400) {
          this.dx *= -1;
        }
        if (this.y - this.size / 2 < 0 || this.y + this.size / 2 > 800) {
          this.dy *= -1;
        }
        break;

      case 1:
        // おいしく食べる
        break;

      case 2:
        // 悲しみ
        break;
    }
    this.animCounter++;
    this.animCounter %= this.animCycle;
    // オブジェクト描画位置更新
    this.tempuraView.animate(this.x, this.y);
  }
}
class TempuraView {
  constructor(x, y, size, texture) {
    this.view = new PIXI.Sprite(texture);
    this.view.anchor.set(0.5);
    this.view.scale.x = 2;
    this.view.scale.y = 2;
    this.view.x = x;
    this.view.y = y;
  }
  animate(x, y) {
    this.view.x = x;
    this.view.y = y;
  }
}

export { Fly, Tempura };
