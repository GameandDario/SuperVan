

class startScene extends Phaser.Scene {
    constructor() {
        super( {key: 'startScene'})
    }
    create() {
      this.add.text(130, 120, 'Beginning');

      this.input.on('pointerdown', () => {
        this.scene.stop('startScene')
        this.scene.start('gameScene')
		})       
    }
}