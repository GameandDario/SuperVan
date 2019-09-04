const gameState = {};

const config = {
	type: Phaser.CANVAS,
	width: 800,
	height: 600,
	backgroundColor: "#94fCDe",
	physics: {
		default: 'arcade',
		arcade: {
		  gravity: { y: 300 },
		  enableBody: true,
		}
	},
	scene: [titleScene, startScene, gameScene ]
}

const game = new Phaser.Game(config)

