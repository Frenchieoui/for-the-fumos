

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = { "orderedKeys": ["dfe07918-af52-4af7-b47f-b867b172f058", "3f8536f3-25f2-4030-ae2f-ca5ac49beb53", "755b4fb7-9a29-43ed-9f10-5984752d63cd", "8a10a97d-9036-4fd7-a354-0b5a1713c4fe", "0e3fc02f-ef36-489d-b687-e9ebf1ad41e9", "6e248195-aace-489d-a2db-0b66c6ec6ae1", "cd59b1d4-9351-4020-b42b-e5818a976a7c", "a1c2a35c-11c1-4302-9b14-4018d8ac968c", "16eed792-4675-4369-bca3-136a6c47ef62", "7dd5f8e9-67a0-4a66-82fa-7cd7687ce2b2", "06bfa915-2062-4555-b765-d6565b9cea76", "137f4497-73b6-465b-8c08-654720ad8c16", "d9e6761f-2920-4b73-9c3e-c538cb88babd"], "propsByKey": { "dfe07918-af52-4af7-b47f-b867b172f058": { "name": "play button", "sourceUrl": null, "frameSize": { "x": 938, "y": 489 }, "frameCount": 2, "looping": true, "frameDelay": 12, "version": "59lfdE9uYrAOluCzGDPmwhp3gWA.gWI9", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 938, "y": 978 }, "rootRelativePath": "assets/dfe07918-af52-4af7-b47f-b867b172f058.png" }, "3f8536f3-25f2-4030-ae2f-ca5ac49beb53": { "name": "background", "sourceUrl": "assets/v3/animations/3-OvTQ4GSMmesSyJEAet98SeDcrCmgO-g8qImCbdT7k/3f8536f3-25f2-4030-ae2f-ca5ac49beb53.png", "frameSize": { "x": 600, "y": 600 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "5aMiZjWwzphL.zbAdObKFx1JkOwNTeEF", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 600, "y": 600 }, "rootRelativePath": "assets/v3/animations/3-OvTQ4GSMmesSyJEAet98SeDcrCmgO-g8qImCbdT7k/3f8536f3-25f2-4030-ae2f-ca5ac49beb53.png" }, "755b4fb7-9a29-43ed-9f10-5984752d63cd": { "name": "marisa fumo", "sourceUrl": "assets/v3/animations/3-OvTQ4GSMmesSyJEAet98SeDcrCmgO-g8qImCbdT7k/755b4fb7-9a29-43ed-9f10-5984752d63cd.png", "frameSize": { "x": 500, "y": 405 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "exC.FssKxPYFTl50aAIAYEzWAFkPkp3M", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 500, "y": 405 }, "rootRelativePath": "assets/v3/animations/3-OvTQ4GSMmesSyJEAet98SeDcrCmgO-g8qImCbdT7k/755b4fb7-9a29-43ed-9f10-5984752d63cd.png" }, "8a10a97d-9036-4fd7-a354-0b5a1713c4fe": { "name": "artifact 1", "sourceUrl": null, "frameSize": { "x": 512, "y": 512 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "A8i4ygkRoyBAjI5D51KN.l9tsrcMtNgN", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 512, "y": 512 }, "rootRelativePath": "assets/8a10a97d-9036-4fd7-a354-0b5a1713c4fe.png" }, "0e3fc02f-ef36-489d-b687-e9ebf1ad41e9": { "name": "artifact 2", "sourceUrl": null, "frameSize": { "x": 512, "y": 512 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "fBh3a2I0JYaguod0Rff5Q9FdOyYbuFu6", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 512, "y": 512 }, "rootRelativePath": "assets/0e3fc02f-ef36-489d-b687-e9ebf1ad41e9.png" }, "6e248195-aace-489d-a2db-0b66c6ec6ae1": { "name": "artifact 3", "sourceUrl": null, "frameSize": { "x": 512, "y": 512 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "pQunQLfSpEeBcIq4Wz6GhD6HBv1ipQyv", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 512, "y": 512 }, "rootRelativePath": "assets/6e248195-aace-489d-a2db-0b66c6ec6ae1.png" }, "cd59b1d4-9351-4020-b42b-e5818a976a7c": { "name": "artifact 4", "sourceUrl": null, "frameSize": { "x": 512, "y": 512 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "QtUL5xrMwwduY9MhDDOBzCIrzO42nxa2", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 512, "y": 512 }, "rootRelativePath": "assets/cd59b1d4-9351-4020-b42b-e5818a976a7c.png" }, "a1c2a35c-11c1-4302-9b14-4018d8ac968c": { "name": "artifact 5", "sourceUrl": null, "frameSize": { "x": 512, "y": 512 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "L5kUYK_wu0qwEkWsba3SvqxJY4fLsvV8", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 512, "y": 512 }, "rootRelativePath": "assets/a1c2a35c-11c1-4302-9b14-4018d8ac968c.png" }, "16eed792-4675-4369-bca3-136a6c47ef62": { "name": "artifact 6", "sourceUrl": null, "frameSize": { "x": 512, "y": 548 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "oJ0pa8hanWuuwBuPbreplpv7itpepseT", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 512, "y": 548 }, "rootRelativePath": "assets/16eed792-4675-4369-bca3-136a6c47ef62.png" }, "7dd5f8e9-67a0-4a66-82fa-7cd7687ce2b2": { "name": "artifact 7", "sourceUrl": null, "frameSize": { "x": 512, "y": 512 }, "frameCount": 1, "looping": true, "frameDelay": 12, "version": "VBxA35kfYwJhIfrbRPeKk3c4XmEBw8HM", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 512, "y": 512 }, "rootRelativePath": "assets/7dd5f8e9-67a0-4a66-82fa-7cd7687ce2b2.png" }, "06bfa915-2062-4555-b765-d6565b9cea76": { "name": "magic barrier", "sourceUrl": null, "frameSize": { "x": 255, "y": 420 }, "frameCount": 3, "looping": true, "frameDelay": 4, "version": "T7avxIPOGWLecQka2ZQwRb3I5DsLMOaW", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 510, "y": 840 }, "rootRelativePath": "assets/06bfa915-2062-4555-b765-d6565b9cea76.png" }, "137f4497-73b6-465b-8c08-654720ad8c16": { "name": "leader reimu fumo", "sourceUrl": null, "frameSize": { "x": 250, "y": 250 }, "frameCount": 30, "looping": true, "frameDelay": 1, "version": "zqIZOA8V4CJPEQ_2wOdqDA1vsHmMLOA5", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 1250, "y": 1500 }, "rootRelativePath": "assets/137f4497-73b6-465b-8c08-654720ad8c16.png" }, "d9e6761f-2920-4b73-9c3e-c538cb88babd": { "name": "title", "sourceUrl": "assets/v3/animations/3-OvTQ4GSMmesSyJEAet98SeDcrCmgO-g8qImCbdT7k/d9e6761f-2920-4b73-9c3e-c538cb88babd.png", "frameSize": { "x": 888, "y": 203 }, "frameCount": 1, "looping": true, "frameDelay": 4, "version": "HaWkeJ2q_5RH.hsAgC4DICL6waVWGaPy", "categories": [""], "loadedFromSource": true, "saved": true, "sourceSize": { "x": 888, "y": 203 }, "rootRelativePath": "assets/v3/animations/3-OvTQ4GSMmesSyJEAet98SeDcrCmgO-g8qImCbdT7k/d9e6761f-2920-4b73-9c3e-c538cb88babd.png" } } };
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
        image,
        props.frameSize.x,
        props.frameSize.y,
        frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
    // -----

    camera.on();

    playSound("2024_juni_11-216772-(1)-(1)-(1).mp3"); // Menu music

    // Variables
    var mode = "menu";
    var phase = 1;
    var phaseX = 425;
    var startFrame = null;
    var winFrame = null;
    var totalTimeY = -200;
    var magicIncrease = 20;


    // Background Sprites
    var backgroundSprite = createSprite(200, 200);
    backgroundSprite.setAnimation("background");

    // Menu Sprites
    var playButton = createSprite(200, 200);
    playButton.setAnimation("play button");
    playButton.scale = 0.15;
    playButton.pause();
    playButton.interactions = function () {
      // Hover 3d effect
      if (mouseIsOver(playButton) && mouseDown()) {
        playButton.setFrame(1);
      } else {
        playButton.setFrame(0);
      }
      // Hover tint
      if (mouseIsOver(playButton)) {
        playButton.tint = "#b3b3b3";
      } else {
        playButton.tint = "#ffffff";
      }

      // Play game
      if (mouseIsOver(playButton) && mouseWentUp()) {
        mode = "game";
        startFrame = World.frameCount;
        stopSound("2024_juni_11-216772-(1)-(1)-(1).mp3");
        playSound("assets/game-start-6104.mp3");
        playSound("to-the-death-159171-(1)-(1)-(1).mp3", true);
        playSpeech("Sack-oo-yah Foomo was a fool. Don't you be one too, Marisa Foomo.", "female", "English (UK)");
        function talk() {
          leaderReimuFumo.talking = !leaderReimuFumo.talking;
        }
        setTimeout(talk, 200);
        setTimeout(talk, 2000);
        setTimeout(talk, 3000);
        setTimeout(talk, 4000);
        setTimeout(talk, 4500);
        setTimeout(talk, 5250);

        playButton.visible = false;
        title.visible = false;

        marisaFumo.visible = true;
      }
    };

    var title = createSprite(205, 75);
    title.setAnimation("title");
    title.scale = 0.4;

    // Game Sprites
    var marisaFumo = createSprite(200, 200);
    marisaFumo.setAnimation("marisa fumo");
    marisaFumo.width *= 0.1;
    marisaFumo.height *= 0.1;
    marisaFumo.baseWidth = marisaFumo.width;
    marisaFumo.xInput = 1;
    marisaFumo.lastXInput = 1;
    marisaFumo.magic = 0;
    marisaFumo.magicWidth = 0;
    marisaFumo.visible = false;
    marisaFumo.mirrorX(-1);
    marisaFumo.setCollider("circle", 0, 0, 200);
    marisaFumo.updateMirror = function () {
      if (this.xInput > 0 && this.mirrorX() === 1) {
        this.mirrorX(-1);
      }
      if (this.xInput < 0 && this.mirrorX() === -1) {
        this.mirrorX(1);
      }
    };
    marisaFumo.updateMovement = function () {
      this.velocityY = lerp(this.velocityY, this.deltaY, 0.1); // Prevents gravity accumulation
      this.velocityX = lerp(this.velocityX, this.deltaX, 0.1); // Might as well do it for X

      if (keyWentDown("w") || keyWentDown("up")) {
        this.velocityY = -7;
      }

      var targetVX = (keyDown("d") || keyDown("right")) - (keyDown("a") || keyDown("left"));
      this.velocityX = lerp(this.velocityX, targetVX * 10, 0.1);

      this.velocityY += 0.5; // Gravity
    };
    marisaFumo.updateRotation = function () {
      var targetRotation = Math.atan2(this.velocityY, this.velocityX) * 180 / Math.PI - 180 * (this.mirrorX() === 1 ? -1 : 0);
      if (targetRotation > 180) {
        targetRotation -= 360;
      }
      if (targetRotation < -180) {
        targetRotation += 360;
      }
      this.rotation = lerp(this.rotation, targetRotation, 0.1);
    };
    marisaFumo.updateWidth = function () {
      if (keyDown("d") || keyDown("right")) {
        this.lastXInput = 1;
      }
      if (keyDown("a") || keyDown("left")) {
        this.lastXInput = -1;
      }
      this.xInput += this.lastXInput * 5;
      this.xInput = clamp(this.xInput, -this.baseWidth, this.baseWidth);
      this.width = abs(this.xInput);
    };
    marisaFumo.checkDeath = function () {
      if (this.x < -25 || this.x > 425 || this.y < -25 || this.y > 425) {
        mode = "death";
        playSound("assets/witch-laugh-28961.mp3", true);
        leaderReimuFumo.talking = true;
        this.visible = false;
      }
    };

    var leaderReimuFumo = createSprite(500, 200);
    leaderReimuFumo.setAnimation("leader reimu fumo");
    leaderReimuFumo.pause();
    leaderReimuFumo.setFrame(0);
    leaderReimuFumo.width *= 0.5;
    leaderReimuFumo.height *= 0.5;
    leaderReimuFumo.baseWidth = leaderReimuFumo.width;
    leaderReimuFumo.baseHeight = leaderReimuFumo.height;
    leaderReimuFumo.talking = false;
    leaderReimuFumo.setCollider("circle", 0, 0, 75);

    leaderReimuFumo.updatePosition = function () {
      var theta = (World.frameCount - startFrame) * 0.01;
      this.x = lerp(this.x, Math.cos(theta) * 150 + 200, 0.1);
      this.y = lerp(this.y, Math.sin(theta) * 150 + 200, 0.1);
    };
    leaderReimuFumo.updateTalking = function () {
      this.rotation = lerp(this.rotation, random(-30, 30) * this.talking, 0.25);
    };
    leaderReimuFumo.updateWinFrames = function () {
      leaderReimuFumo.x = lerp(leaderReimuFumo.x, 200, 0.2);
      leaderReimuFumo.y = lerp(leaderReimuFumo.y, 200, 0.2);
      leaderReimuFumo.width = lerp(leaderReimuFumo.width, 400, 0.2);
      leaderReimuFumo.height = lerp(leaderReimuFumo.height, 400, 0.2);
      if (World.frameCount % 2 === 0) {
        if (this.animation.getFrame() < 29) {
          this.nextFrame();
        }
      }
    };

    var magicBarriers = createGroup();
    magicBarriers.updateCreate = function () {
      if (mode !== "game") return;

      function sec(s) {
        return (World.frameCount - startFrame) % (30 * s) === 0;
      }
      function frame(f) {
        return (World.frameCount - startFrame) % f === 0;
      }
      function topWall() {
        for (var i = 0; i < 4; i++) {
          magicBarriers.create(i * 100 + 50, -50, 0, 7);
        }
      }
      function leftWall() {
        for (var i = 0; i < 4; i++) {
          magicBarriers.create(-50, i * 100 + 50, 7, 0);
        }
      }
      function bottomWall() {
        for (var i = 0; i < 4; i++) {
          magicBarriers.create(i * 100 + 50, 450, 0, -7);
        }
      }
      function rightWall() {
        for (var i = 0; i < 4; i++) {
          magicBarriers.create(450, i * 100 + 50, -7, 0);
        }
      }
      function diagWall() {
        for (var i = 0; i < 5; i++) {
          magicBarriers.create(-25 - i * 70, -300 + i * 70, 7, 7);
        }
      }

      if (phase === 1) {
        if (sec(5)) {
          topWall();
          bottomWall();
        }

        if (sec(6)) {
          leftWall();
          rightWall();
        }

        if (sec(7)) {
          bottomWall();
          rightWall();
        }

        if (sec(8)) {
          rightWall();
          topWall();
        }

        if (sec(13)) {
          diagWall();
          topWall();
          leftWall();
        }
        if (sec(15)) {
          diagWall();
          topWall();
          rightWall();
          bottomWall();
          leftWall();
        }
      } else if (phase === 2) {
        if (sec(5)) {
          var n = 15;
          for (var i = 0; i < n; i++) {
            var theta = i * Math.PI * 2 / n;
            var oppTheta = theta + Math.PI;
            var speed = random(2, 5);
            this.create(200 + Math.cos(theta) * 300, 200 + Math.sin(theta) * 300, Math.cos(oppTheta) * speed, Math.sin(oppTheta) * speed);
          }
        }
        if (sec(7)) {
          var n = 5;
          for (var i = 0; i < n; i++) {
            var theta = i * Math.PI * 2 / n;
            var oppTheta = theta + Math.PI;
            var speed = 10;
            this.create(200 + Math.cos(theta) * 300, 200 + Math.sin(theta) * 300, Math.cos(oppTheta) * speed, Math.sin(oppTheta) * speed);
          }
        }
      } else if (phase === 3) {
        if (sec(6)) {
          var y = random(100, 300) - 300;
          for (var i = 0; i < 11; i++) {
            if (i === 5) continue;
            this.create(450, y + i * 65, random(-4, -5), 0);
          }
        }
        if (sec(3)) {
          var y = random(100, 300) - 300;
          for (var i = 0; i < 11; i++) {
            if (i === 5) continue;
            this.create(-50, y + i * 65, random(5, 6), 0);
          }
        }
        if (frame(45)) {
          var theta = random(0, Math.PI * 2);
          var speed = 10;
          var x = Math.cos(theta) * 300 + 200;
          var y = Math.sin(theta) * 300 + 200;
          var thetaToMarisa = Math.atan2(marisaFumo.y - y, marisaFumo.x - x);
          this.create(x, y, Math.cos(thetaToMarisa) * speed, Math.sin(thetaToMarisa) * speed);
        }
      } else if (phase === 4) {
        if (sec(10)) {
          diagWall();
          var theta = random(0, Math.PI * 2);
          var speed = 5;
          var x = leaderReimuFumo.x;
          var y = leaderReimuFumo.y;
          var thetaToMarisa = Math.atan2(marisaFumo.y - y, marisaFumo.x - x);
          var thetaOffset = Math.PI / 4;
          this.create(x, y, Math.cos(thetaToMarisa) * speed, Math.sin(thetaToMarisa) * speed);
          this.create(x, y, Math.cos(thetaToMarisa + thetaOffset) * speed, Math.sin(thetaToMarisa + thetaOffset) * speed);
          this.create(x, y, Math.cos(thetaToMarisa - thetaOffset) * speed, Math.sin(thetaToMarisa - thetaOffset) * speed);
        }
        if (sec(6)) {
          diagWall();
          var theta = random(0, Math.PI * 2);
          var speed = 10;
          var x = Math.cos(theta) * 300 + 200;
          var y = Math.sin(theta) * 300 + 200;
          var thetaToMarisa = Math.atan2(marisaFumo.y - y, marisaFumo.x - x);
          this.create(x, y, Math.cos(thetaToMarisa) * speed, Math.sin(thetaToMarisa) * speed);
        }
        if (sec(9)) {
          var y = random(100, 300) - 300;
          for (var i = 0; i < 11; i++) {
            if (i === 5) continue;
            this.create(450, y + i * 65, random(-4, -5), 0);
          }
        }
        if (sec(7)) {
          // diagWall();
          var n = 8;
          for (var i = 0; i < n; i++) {
            var theta = i * Math.PI * 2 / n;
            var oppTheta = theta + Math.PI;
            var speed = random(5, 6);
            this.create(200 + Math.cos(theta) * 300, 200 + Math.sin(theta) * 300, Math.cos(oppTheta) * speed, Math.sin(oppTheta) * speed);
          }
        }
        if (sec(5)) {
          diagWall();
          // topWall();
          rightWall();
          bottomWall();
          // leftWall();
        }
      }
    };
    magicBarriers.create = function (x, y, vx, vy) {
      var mb = findInArray(this, function (value) {
        return !value.visible;
      });
      if (!mb) {
        mb = createSprite();
        this.add(mb);
      }
      mb.setAnimation("magic barrier");
      mb.visible = true;
      mb.scale = 0.2;
      mb.x = x;
      mb.y = y;
      mb.velocityX = vx;
      mb.velocityY = vy;
      mb.setCollider("rectangle", 50, 10, 50, 225);
      mb.rotateToDirection = true;
    };

    magicBarriers.resetOutside = function () {
      for (var i = 0; i < this.length; i++) {
        var mb = this[i];
        if (mb.x < -600 || mb.y < -600 || mb.x > 600 || mb.y > 600) {
          mb.visible = false;
        }
      }
    };

    magicBarriers.interactions = function () {
      for (var i = 0; i < this.length; i++) {
        var mb = this[i];
        if (mb.visible && mb.x > 0 && mb.x < 400 && mb.y > 0 && mb.y < 400) {
          mb.displace(marisaFumo);
        }
      }
    };

    var artifacts = createGroup();
    artifacts.interactions = function () {
      for (var i = 0; i < this.length; i++) {
        var a = this[i];
        if (a.visible && a.isTouching(marisaFumo)) {
          a.visible = false;
          marisaFumo.magic += magicIncrease;
          playSound("assets/shine-10-268906.mp3");
        }
      }
    };
    artifacts.updateCreate = function () {
      if (Math.random() < 0.005) {
        this.create();
      }
      if ((World.frameCount - startFrame) % (30 * 10) === 0) {
        this.create();
      }
    };
    artifacts.create = function () {
      var a = findInArray(this, function (value) {
        return !value.visible;
      });
      if (!a) {
        a = createSprite();
        this.add(a);
      }
      a.setAnimation("artifact " + randomNumber(1, 7));
      a.visible = true;
      a.scale = 0;
      a.x = random(50, 350);
      a.y = random(50, 350);
      a.setCollider("circle", 0, 0, 100);
    };
    artifacts.updateScale = function () {
      for (var i = 0; i < this.length; i++) {
        var a = this[i];
        if (!a.visible) continue;
        a.scale = lerp(a.scale, 0.07 * (mode === "game"), 0.1);
      }
    };

    // Functions
    function setCameraPosition() {
      // Camera moves with mouse a bit
      camera.x = lerp(camera.x, (World.mouseX - 200) / 20 + 200, 0.25);
      camera.y = lerp(camera.y, (World.mouseY - 200) / 20 + 200, 0.25);
    }
    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }
    function findInArray(array, check) {
      for (var i = 0; i < array.length; i++) {
        if (check(array[i])) return array[i];
      }
      return null;
    }
    function updatePhase() {
      marisaFumo.magic = clamp(marisaFumo.magic, 0, 100);
      if (marisaFumo.magic >= 100 && phase < 4) {
        phase++;
        phaseX = 425;
        marisaFumo.magic = 0;
        playSound("assets/in-game-level-uptype-2-230567.mp3");
      } else if (marisaFumo.magic >= 100 && phase === 4) {
        mode = "win";
        winFrame = World.frameCount;
        playSound("assets/pop.mp3");
      }
    }

    function draw() {
      if (mode === "menu") {
        setCameraPosition();
        playButton.interactions();
        drawSprites();
        drawInfo();
      } else if (mode === "game") {
        setCameraPosition();
        updatePhase();

        marisaFumo.updateWidth();
        marisaFumo.updateMirror();
        marisaFumo.updateMovement();
        marisaFumo.updateRotation();
        marisaFumo.checkDeath();

        leaderReimuFumo.updatePosition();
        leaderReimuFumo.updateTalking();
        leaderReimuFumo.displace(marisaFumo);

        magicBarriers.updateCreate();
        magicBarriers.resetOutside();
        magicBarriers.interactions();

        artifacts.updateScale();
        artifacts.updateCreate();
        artifacts.interactions();

        drawSprites();
        drawMagic();
      } else if (mode === "death") {
        leaderReimuFumo.updatePosition();
        leaderReimuFumo.updateTalking();

        artifacts.updateScale();

        drawSprites();
        drawMagic();
      } else if (mode === "win") {
        leaderReimuFumo.updateWinFrames();

        artifacts.updateScale();

        drawSprites();
        drawTotalTime();

        textSize(15);
        strokeWeight(0);
        text("1FijkHFFc9HSqM4d5crc7hBKDeS-8sUUJw3PFikR-lBY", 10, 20);
      }
    }

    function drawTotalTime() {
      totalTimeY = lerp(totalTimeY, 170, 0.1);
      fill("white");
      stroke("white");
      strokeWeight(2);
      textSize(30);
      text("Congrats. But, they always come back.                    Final Time: " + ((winFrame - startFrame) / 30).toFixed(2) + "s", 10, totalTimeY, 380);
    }

    function drawInfo() {
      fill("white");
      stroke("white");
      strokeWeight(1);
      textSize(15);
      text("W/A/D or UP/LEFT/RIGHT to move; Collect magic artifacts to defeat the Reimu Fumos! P.S. Run the game twice to fully enjoy!!!", 35, 350, 350);
    }

    function drawMagic() {
      var centerX = 200;
      var centerY = 35;
      var width = 350;
      var height = 15;
      var marginSpace = 2;
      var marginWidth = 3;
      var phaseWidth = 5;
      noStroke();
      fill("white");
      // Borders
      // Top
      rect(centerX - width / 2 - marginSpace - marginWidth, centerY - height / 2 - marginSpace - marginWidth, width + marginSpace * 2 + marginWidth * 2, marginWidth);
      // Bottom
      rect(centerX - width / 2 - marginSpace - marginWidth, centerY + height / 2 + marginSpace, width + marginSpace * 2 + marginWidth * 2, marginWidth);
      // Left
      rect(centerX - width / 2 - marginSpace - marginWidth, centerY - height / 2 - marginSpace - marginWidth, marginWidth, height + marginSpace * 2 + marginWidth * 2);
      // Right
      rect(centerX + width / 2 + marginSpace, centerY - height / 2 - marginSpace - marginWidth, marginWidth, height + marginSpace * 2 + marginWidth * 2);

      // Fill
      fill(rgb(252, 177, 3));
      marisaFumo.magicWidth = lerp(marisaFumo.magicWidth, width / 4 * (phase - 1) + width / 4 * marisaFumo.magic / 100, 0.1);
      rect(centerX - width / 2, centerY - height / 2, marisaFumo.magicWidth, height);

      // Phase Lines
      fill("white");
      rect(centerX - width / 2 + 1 * width / 4 - phaseWidth / 2, centerY - height / 2, phaseWidth, height);
      rect(centerX - width / 2 + 2 * width / 4 - phaseWidth / 2, centerY - height / 2, phaseWidth, height);
      rect(centerX - width / 2 + 3 * width / 4 - phaseWidth / 2, centerY - height / 2, phaseWidth, height);

      // Text
      fill("white");
      textAlign(LEFT, TOP);
      textSize(17);
      text("MAGIC", centerX - width / 2, centerY - height / 2);

      // Phase Change
      phaseX -= 2.5 + (abs(phaseX - 200) / 200) * 5;
      stroke("red");
      strokeWeight(2);
      textSize(30);
      text("Phase " + phase, phaseX, 75);
    }

    // -----
    try { window.draw = draw; } catch (e) { }
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
