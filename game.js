var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x330033});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

PIXI.loader
  .add("assets.json")
  .load(ready);

function ready() {
  
  var frames = [];

  for (var i=1; i<4; i++) {
    frames.push(PIXI.Texture.fromFrame('sprite_frame' + i + '.png'));
  }

  character = new PIXI.extras.MovieClip(frames);
  character.scale.x = 4;
  character.scale.y = 4;
  character.position.x = 200;
  character.position.y = 200;
  character.animationSpeed = 0.1;
  character.play();
  stage.addChild(character);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
}
animate();



function keydownEventHandler(e) {

  if (e.keyCode == 87) { // W key
    character.position.y -= 10;
  }

  if (e.keyCode == 83) { // S key
    character.position.y += 10;
  }

  if (e.keyCode == 65) { // A key
    character.position.x -= 10;
  }

  if (e.keyCode == 68) { // D key
    character.position.x += 10;
  }
}
document.addEventListener('keydown', keydownEventHandler);
