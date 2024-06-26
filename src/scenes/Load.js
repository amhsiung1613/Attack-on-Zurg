class Load extends Phaser.Scene {
    constructor() {
        super('Load');
    }

    preload() {

        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, centerY, w * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        
        //implement credits later
        
        this.load.path = './assets/';

        //background
        this.load.image('background', 'img/background.png');
        this.load.image('stars', 'img/stars.png');
        this.load.image('wallTexture', 'img/wallTexture.png');
        this.load.image('gameover', 'img/gameover.png');
        this.load.image('victory', 'img/victory.png');
        
        //special effects/animations
        this.load.spritesheet('buzz_walk', 'img/buzz_walk.png', {frameWidth: 54, frameHeight: 100})

        this.load.spritesheet('buzz-crouch', 'img/buzz-crouch.png', {frameWidth: 72, frameHeight: 90})

        this.load.spritesheet('buzz-jump', 'img/buzz-jump.png', {frameWidth: 72, frameHeight: 90})

        this.load.image('teleport', 'img/teleport.png')

        //character graphics
        this.load.image('buzz', 'img/buzz.png');
        this.load.image('buzz_headshot', 'img/buzz_headshot.png');
        this.load.image('zurg_headshot', 'img/zurg_headshot.png');
        this.load.image('zurg', 'img/zurg.png');
        this.load.image('enemy', 'img/enemy.png');
        this.load.image('refresh', 'img/refresh.png');

        //other assets
        this.load.image('platform', 'img/platform.png');
        this.load.spritesheet('plasma', 'img/plasma.png', {frameWidth: 59, frameHeight: 13});
        this.load.spritesheet('laserbeam', 'img/laserbeam.png', {frameWidth: 40, frameHeight: 3});
        this.load.image('instructions', 'img/instruct.png');

        //audio
        this.load.audio('jump', 'audio/jump.wav');
        this.load.audio('zurgAttack', 'audio/zurgAttack.mp3');
        this.load.audio('buzzAttack', 'audio/buzzAttack.wav');
        this.load.audio('buzzHit', 'audio/buzzHit.wav');
        this.load.audio('zurgHit', 'audio/zurgHit.wav');

        //font by Ænigma
        this.load.bitmapFont('edit', 'fonts/edit.png', 'fonts/edit.xml');

        //json
        this.load.json('dialog', 'json/dialog.json');

    }

    create() {

        this.anims.create({
            key: 'walk',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('buzz_walk', {start: 0, end: 3}), 
        })


        this.anims.create({
            key: 'crouch',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('buzz-crouch', {start: 0, end: 2}),
        })

        this.anims.create({
            key: 'jump',
            frameRate: 8,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('buzz-jump', {start: 0, end: 2}),
        })

        //checks for local storage
        if(window.localStorage) {
            console.log('Local storage supported');
        } else {
            console.log('Local storage not supported');
        }
        //go to title
        this.scene.start('Title');
    }
}