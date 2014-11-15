/// <reference path="../node_modules/phaser/build/phaser.d.ts"/>
var map, layer, layer2, pix, cursors, jumpKey, jumpTimer = 0;
var game = new Phaser.Game(640, 480, Phaser.CANVAS, '', {
    preload: function () {
        game.load.image('gerry', 'assets/gerry.png');
        game.load.spritesheet('pix', 'assets/pix.png', 16, 16);
        game.load.spritesheet('tiles', 'assets/tiles.png', 16, 16);
        game.load.tilemap('level', 'assets/level.json', null, Phaser.Tilemap.TILED_JSON);
    },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        pix = game.add.sprite(20, 20, 'pix');
        pix.animations.add('idle', [0]);
        pix.animations.add('run', [1, 2]);
        pix.animations.add('lookAt', [3]);
        pix.animations.play('run', 10, true);
        game.physics.enable(pix);
        pix.body.gravity.y = 250;
        pix.body.bounce.y = 0.1;
        pix.anchor.setTo(0.5, 0.5);
        map = game.add.tilemap('level');
        map.addTilesetImage('tiles');
        map.setCollisionBetween(1, 25);
        layer = map.createLayer('Tile Layer 1');
        layer.resizeWorld();
        layer2 = map.createLayer('Tile Layer 2');
        layer2.resizeWorld();
        cursors = game.input.keyboard.createCursorKeys();
        jumpKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        game.camera.follow(pix, Phaser.Camera.FOLLOW_PLATFORMER);
    },
    update: function () {
        game.physics.arcade.collide(pix, layer, function () {
            console.log(arguments);
        });
        pix.body.velocity.x = 0;
        if (cursors.left.isDown) {
            pix.body.velocity.x = -100;
            pix.scale.x = -1;
        }
        else if (cursors.right.isDown) {
            pix.body.velocity.x = 100;
            pix.scale.x = 1;
        }
        if (jumpKey.isDown && pix.body.onFloor() && game.time.now > jumpTimer) {
            pix.body.velocity.y = -200;
            jumpTimer = game.time.now + 650;
        }
        if (Math.abs(pix.body.velocity.x) >= 1 && Math.abs(pix.body.velocity.y) < 1) {
            pix.animations.play('run', 10, true);
        }
        if (Math.abs(pix.body.velocity.x) < 1 && Math.abs(pix.body.velocity.y) < 1) {
            pix.animations.play('idle', 1, false);
        }
    }
});
