export class KeyDirection {
  constructor() {
    this.up = undefined;
    this.down = undefined;
    this.left = undefined;
    this.rigth = undefined;
  }
}

export class KeyMap {
  static getNavigationDirection(keyCode) {
    let direction = new KeyDirection();
    if (keyCode === 38) {
      direction.up = true;
    }

    if (keyCode === 40) {
      direction.down = true;
    }

    if (keyCode === 39) {
      direction.right = true;
    }

    if (keyCode === 9) {
      direction.tab = true;
    }

    if (keyCode === 37) {
      direction.left = true;
    }

    return direction;
  }
}
