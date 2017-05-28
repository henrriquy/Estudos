$(function () {

    var KEY = {
        UP: 38,
        DOWN: 40,
        W: 87,
        S: 83
    }

    var vitoria = 10;

    var pingpong = {
        scoreA: 0,
        scoreB: 0
    }

    pingpong.pressedKeys = [];

    pingpong.ball = {
        speed: 5,
        x: 150,
        y: 100,
        directionX: 1,
        directionY: 1
    }

    pingpong.timer = setInterval(gameloop, 30);

    $(document).keydown(function (e) {
        pingpong.pressedKeys[e.which] = true;
    })

    $(document).keyup(function (e) {
        pingpong.pressedKeys[e.which] = false;
    })

    function resetA() {
        $("#scoreA").html(pingpong.scoreA);
        pingpong.ball.x = 150; ball.y = 100;
        $("#ball").css({ "left": pingpong.ball.x, "top": pingpong.ball.y });
        pingpong.ball.directionX = -1;
    }

    function resetB() {
        $("#scoreB").html(pingpong.scoreB);
        pingpong.ball.x = 150; pingpong.ball.y = 100;
        $("#ball").css({ "left": pingpong.ball.x, "top": pingpong.ball.y });
        pingpong.ball.directionX = 1;
    }

    function moveBall() {
        var playgroundHeight = parseInt($("#playground").height());
        var playgroundWidth = parseInt($("#playground").width());
        var ball = pingpong.ball;

        var paddleAX = parseInt($("#paddleA").css("left")) + parseInt($("#paddleA").css("width"));
        var paddleAYBottom = parseInt($("#paddleA").css("top")) + parseInt($("#paddleA").css("height"));
        var paddleAYTop = parseInt($("#paddleA").css("top"));
        var paddleBX = parseInt($("#paddleB").css("left"));
        var paddleBYBottom = parseInt($("#paddleB").css("top")) + parseInt($("#paddleB").css("height"));
        var paddleBYTop = parseInt($("#paddleB").css("top"));



        if (ball.y + ball.speed * ball.directionY > playgroundHeight) {
            ball.directionY = -1;
        }
        if (ball.y + ball.speed * ball.directionY < 0) {
            ball.directionY = 1;
        }

        if (ball.x + ball.speed * ball.directionX > playgroundWidth) {
            pingpong.scoreA++;
            resetA();
        }

        if (ball.x + ball.speed * ball.directionX < 0) {
            pingpong.scoreB++;
            resetB();
        }

        if (ball.x + ball.speed * ball.directionX < paddleAX) {
            if (ball.y + ball.speed * ball.directionY <= paddleAYBottom && ball.y + ball.speed * ball.directionY >= paddleAYTop) {
                ball.directionX = 1;


            }
        }
        if (ball.x + ball.speed * ball.directionX >= paddleBX) {
            if (ball.y + ball.speed * ball.directionY <= paddleBYBottom && ball.y + ball.speed * ball.directionY >= paddleBYTop) {
                ball.directionX = -1;

            }
        }


        ball.x += ball.speed * ball.directionX;
        ball.y += ball.speed * ball.directionY;

        $("#ball").css({
            "left": ball.x,
            "top": ball.y
        });

        if (pingpong.scoreA == vitoria) {

            alert("Player1 wins");
            pingpong.scoreA = 0;
            pingpong.scoreB = 0;
            resetB();
            resetA();
        } else if (pingpong.scoreB == vitoria) {

            alert("Player2 wins");
            pingpong.scoreA = 0;
            pingpong.scoreB = 0;
            resetA();
            resetB();
        }


    }

    function movePaddles() {
        if (pingpong.pressedKeys[KEY.UP]) {
            socket.emit('keyPress', { inputId: 'Up', state: true });
        } else {
            socket.emit('keyPress', { inputId: 'Up', state: false });
        }

        if (pingpong.pressedKeys[KEY.DOWN]) {
            socket.emit('keyPress', { inputId: 'Down', state: true });
        } else {
            socket.emit('keyPress', { inputId: 'Down', state: false });
        }


    }

    function gameloop() {
        movePaddles();
        moveBall();
    }

    socket.on("movePaddle", function (data) {
        //para cada elemento do array de pacotes
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].id);
            var id = data[i].id;
            var topA = data[i].topA;
            var topB = data[i].topB;
            var control = data[i].player;
            if (control === 2) {
                $("#paddleB").css("top", topB);
            }
            else {
                $("#paddleA").css("top", topA);
            }

        }
    });

});