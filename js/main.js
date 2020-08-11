// 本体

const screenWidth = 1400;
const screenHeight = 800;

let app = new PIXI.Application({
    width: 600,     // スクリーン(ビュー)横幅 
    height: 600,    // スクリーン(ビュー)縦幅  
    backgroundColor: 0x1099bb,
});

let el = document.getElementById('app');
el.appendChild(app.view);