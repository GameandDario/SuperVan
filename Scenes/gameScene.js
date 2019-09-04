class gameScene extends Phaser.Scene {
    constructor() {
        super( { key: 'gameScene'})
    }
    preload() {
        gameState.van = this.load.image('van', 'Visuals/Van.png');
        gameState.road1 = this.load.image('road1', 'Visuals/Road1.png');
        gameState.sky1 = this.load.image('sky1', './Visuals/Sky1.png');
        gameState.cloud1 = this.load.image('cloud1', './Visuals/Cloud1.png');
        gameState.cloud2 = this.load.image('cloud2', './Visuals/Cloud2.png');
        gameState.pyramid = this.load.image('pyramid', 'Visuals/Pyramid.png');
        gameState.palm = this.load.image('palm', 'Visuals/Palms.png');
        gameState.palm2 = this.load.image('palm2', 'Visuals/Palms2.png');
        gameState.palm3 = this.load.image('palm3', 'Visuals/Palms3.png');
    };

    create() {

        gameState.active = true;

        // this.createParallaxBackgrounds();

        // this.cameras.main.setBounds(0, 0, 2000, 600);
        // this.cameras.main.startFollow(gameState.van, true, .5, .5);
        // this.physics.world.setBounds(0, 0, 2000, 600);


        gameState.sky1 = this.add.image(400, 300, 'sky1');
        
        
        gameState.van = this.physics.add.sprite(0, 0, 'van');

        gameState.van.setCollideWorldBounds(true); /*empêche le sprite de quitter la zone*/
        gameState.van.setBounce(0.2); /*rebond*/

        gameState.cursors = this.input.keyboard.createCursorKeys();
       


    
        
    };

    update() {
        if (gameState.cursors.left.isDown) {
            gameState.van.x-=2;
        }
        else if (gameState.cursors.right.isDown) {
            gameState.van.setVelocityX(260);
        }else if (gameState.cursors.space.isDown) {
            gameState.van.setVelocityX(60),
            gameState.van.setVelocityY(-200);
        }
        else {
            gameState.van.setVelocityX(0);
        }
    
    };
    // createParallaxBackgrounds() {
    //     // Add in the three background images here and set their origin
    //     gameState.cloud1 = this.add.image(0, 0, 'cloud1');
    //     gameState.cloud2 = this.add.image(0, 0, 'cloud2');
    //     gameState.pyramid = this.add.image(0, 0, 'pyramid');
    //     gameState.road1 = this.add.image(0, 410, 'road1');
    //     gameState.cloud1.setOrigin(0,0);
    //     gameState.cloud2.setOrigin(0,0);
    //     gameState.pyramid.setOrigin(0,0);
    //     gameState.road1.setOrigin(0,0);
        
    //     // const windowWidth = config.width;
    //     // const gameWidth = 2000; // the size of the largest background
    //     // const someBackgroundWidth = gameState.someBackground.getBounds().width

    //     // const someBackgroundScrollFactor = (someBackgroundWidth - windowWidth) / (gameWidth - windowWidth)
    //     // gameState.someBackground.setScrollFactor(someBackgroundScrollFactor)

    //     const windowWidth = config.width;
    //     const gameWidth = 3053;
    //     const cloud1Width = gameState.cloud1.getBounds().width;
    //     const cloud2Width = gameState.cloud2.getBounds().width;
    //     const pyramidWidth = gameState.pyramid.getBounds().width;
    //     const road1Width = gameState.road1.getBounds().width;

    //     const cloud1ScrollFactor = (cloud1Width - windowWidth) / (gameWidth - windowWidth);
    //     const cloud2ScrollFactor = (cloud2Width - windowWidth) / (gameWidth - windowWidth);
    //     const pyramidScrollFactor = (pyramidWidth - windowWidth) / (gameWidth - windowWidth);
    //     const road1ScrollFactor = (road1Width - windowWidth) / (gameWidth - windowWidth);

    //     gameState.cloud1.setScrollFactor(cloud1ScrollFactor);
    //     gameState.cloud2.setScrollFactor(cloud2ScrollFactor);
    //     gameState.pyramid.setScrollFactor(pyramidScrollFactor);
    //     gameState.road1.setScrollFactor(road1ScrollFactor)




    // };

    
}
