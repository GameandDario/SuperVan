class titleScene extends Phaser.Scene {
    constructor() {
        super( {key: 'titleScene'});
    }

    preload ()
         {
            gameState.van = this.load.image('van', 'Visuals/Van.png');
            gameState.palm = this.load.image('palm', './Visuals/TitlePalm.png');
            gameState.bigSmoke = this.load.image('bigSmoke', './Visuals/bigSmoke.png');
            gameState.smallSmoke = this.load.image('smallSmoke', './Visuals/smallSmoke.png');
     }

    create() {
    
        this.add.text(50, 140, "short Van Trip", { font: "60px Verdana", fill: "#ffa0d0"});
        
        gameState.textProduct = this.add.text(180, 340, "a Game & Daio product", { font: "20px Times", fill: "#ffa0d0"}).setVisible(false);

        gameState.van = this.add.image(150, 60, 'van');

        gameState.palm = this.add.image(530, 260, 'palm').setScale(.7,.7).setVisible(false);

        gameState.bigSmoke = this.add.image(700, 100, 'bigSmoke').setScale(.7,.7).setVisible(false);

        gameState.smallSmoke = this.add.image(682, 105, 'smallSmoke').setScale(.5,.6).setVisible(false);

        this.time.addEvent({
            delay: 1200, callback: onEventSmoke, callbackScope: this                   
        })
        function onEventSmoke() {gameState.bigSmoke.setVisible(true), gameState.smallSmoke.setVisible(true), gameState.smallSmoke.alpha = 1};

        this.time.addEvent({
            delay: 1500, callback: onEventSmokeScale, callbackScope: this                   
        })
        function onEventSmokeScale() {gameState.bigSmoke.setScale(.8), gameState.smallSmoke.setScale(.8), gameState.bigSmoke.alpha = 1};

        this.time.addEvent({
            delay: 1800, callback: onEventSmokeScale, callbackScope: this                   
        })
        function onEventSmokeScale() {gameState.palm.setVisible(true), gameState.bigSmoke.setScale(.9, .8), gameState.smallSmoke.setScale(.9)};

        this.time.addEvent({
            delay: 3100, callback: onEventSmokeOff, callbackScope: this                   
        })
        function onEventSmokeOff() {gameState.bigSmoke.setVisible(false), gameState.smallSmoke.setVisible(false), gameState.palm.setScale(.85), gameState.textProduct.setVisible(true)};

        this.input.on('pointerdown', () => {
			this.scene.stop('titleScene')
			this.scene.start('startScene')
		})       
    }
    update() {
        gameState.van.x +=10 ;
        gameState.bigSmoke.x-=.5;
        gameState.bigSmoke.y-=.3;
        gameState.smallSmoke.x-=.3;
        gameState.smallSmoke.y-=.5
        gameState.bigSmoke.rotation += 0.001;
        gameState.bigSmoke.alpha-=.005;
        gameState.smallSmoke.alpha-=.006;
        gameState.palm.alpha+= .0005;
    }
}