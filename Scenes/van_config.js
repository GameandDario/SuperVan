const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: '',
    backgroundColor: '#4B35EF',
    scene: {
    create: create,
    upload: upload,
    update: update
    }
};

const game = new Phaser.Game(config);