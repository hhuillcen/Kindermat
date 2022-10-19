<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>

    <link rel="stylesheet" href="../plug/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/css.css">
    <link rel="stylesheet" href="../css/figures.css">
    <link rel="stylesheet" href="../design/css/buttons.css">
    <link rel="stylesheet" href="../plug/fa/css/all.min.css">
    <link rel="stylesheet" href="../plug/animate.min.css">
    <link rel="stylesheet" href="../plug/dragula.min.css">
    <link rel="stylesheet" href="../css/efects.css">
    <link rel="stylesheet" href="../css/mediaquery.css">

    <script src="../plug/jquery-3.5.1.min.js"></script>
    <script src="../plug/bootstrap/js/bootstrap.min.js"></script>
    <script src="../plug/popper.min.js"></script>
    <script src="../plug/dragula.min.js"></script>
    <!--<script src="plug/popover.js"></script>
    <script src="plug/util.js"></script>-->
</head>
<body class="">
    <div id="bg" class="w-100 h-100" style="position: fixed;"></div>
    <div class="">
        <div style="position: absolute; top: 0;" class="d-flex w-100">
            <div class="d-flex w-100 justify-content-center align-items-center flex-column">
                <p class="p-2"></p>
                <label for="userInput" class="textTitle m-3">Bienvenido: <?=$_GET["userInput"]?></label>
                <div id="nivelAdd" class="d-flex w-100 justify-content-center align-items-center flex-column">
                    
                </div>
                <p class="p-2"></p>
                <div class="btn_home_principal">
                    <button class="game-button" type="button" onclick="nexLevel('#nivelAdd', $('#levelNumber').html(), '../')">Siguiente</button>
                    <button class="game-button red" type="button" onclick="window.location.href = '../'">Salir</button>
                    <button class="game-button orange" type="button" onclick='changeNivel("#nivelAdd", 0, "../");'><i class="fa fa-home"></i></button>
                </div>
                <p class="p-2"></p>
            </div>
        </div>
    </div>
    <div class="modal" id="modalFinish">
        <div class="modal-dialog">
            <div class="modal-content bgAdding">
                <div class="modal-body d-flex flex-column justify-content-center align-items-center" style="padding: 2rem !important;padding-bottom: 3rem !important;">
                    <h1 class="textTitle">MUY BIEN</h1>
                    <h6 class="textTitle">Niveles culminados</h6>
                    <div class="game-button" onclick='changeNivel("#nivelAdd", 0, "../");$("#modalFinish").modal("hide");' style="position: absolute;transform: translateY(80px);">Jugar de nuevo</div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="../js/js.js"></script>
<script src="../js/svg.js"></script>
<script src="../js/draw.js"></script>
<link rel="stylesheet" href="../design/css/style.css">

<script src='../design/js/TweenMax.min.js'></script> 

<script  src="../design/js/script.js"></script>
<script>
    loadBg("#bg", "../");
    changeNivel("#nivelAdd", 0, "../");

    var sound = new Audio("levels/audio.mp3");
    sound.play();
    sound.volume = .3;
    sound.loop = true;
    
    /*$(document).ready(function(){
        playSong("levels/audio/Hazclicencadafiguraparasaber1.mp3");
    });*/

    function saludo(){
        playSong("levels/audio/1.mp3");
    }
</script>
</html>