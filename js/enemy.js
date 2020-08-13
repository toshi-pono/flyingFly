// ハエ
class Fly {
  constructor(texture) {
    const size = 100;
    this.x = 0;
    this.y = 0;
    this.animationCounter = 0;
    this.isDeath = false;
    this.animationType = 0;
    this.flyView = new FlyView(this.x, this.y, size);
  }
  get view() {
    return this.flyView.view;
  }
  update(state) {
    switch (state) {
      case 0:
        // 通常
        break;

      case 2:
        // 悲しみ
        break;
    }
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
    const size = 100;
    this.x = 0;
    this.y = 0;
    this.animationCounter = 0;
    this.isDeath = false;
    this.animationType = 0; // デフォルト
    this.tempuraView = new TempuraView(this.x, this.y, size, texture);
  }
  get view() {
    return this.tempuraView.view;
  }
  update(state) {
    switch (state) {
      case 0:
        // 通常
        break;

      case 1:
        // おいしく食べる
        break;

      case 2:
        // 悲しみ
        break;
    }
  }
}
class TempuraView {
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

export { Fly, Tempura };
