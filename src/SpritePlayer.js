import Sprite from './Sprite'
import Rect from './Rect'
import config from './config'

class SpritePlayer extends Sprite {
  constructor(player) {
    super();
    this.player = player;
    this.bitmap = new Rect(config.colors.player, config.player_w, config.player_h);
  }

  update() {
    this.player.update();
    this.x = this.player.x;
    this.y = this.player.y;
    this.draw(this.x, this.y);
  }
}

export default SpritePlayer