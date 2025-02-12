<?php
session_start();
header('Content-Type: text/html; charset=utf-8');
if ($_SESSION['estado'] != "ativo") {
    header("Location: login.php");
}
$idUsuario = $_SESSION['idUsuario']
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recreation</title>
    <link rel="shortcut icon" href="img/recreation-icon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles-resultados/ganhou.css">
    <link rel="stylesheet" href="styles-resultados/empatou.css">

    <style>
        * {
            margin: 0;
            padding: 0;
        }

        html,body {
            height: 100%;
        }

        @font-face {
            font-family: retro-game;
            src: url("RetroGaming.ttf");
        }

        #content-1 {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 2.5vw;
            background-image: url("img/background.png");
            background-repeat: no-repeat;
            background-size: cover;
        }

        #start-logo {
            width: 25%;
        }

        #btn-startMenu-container {
            width: 45%;
            display: flex;
            justify-content: center;
            gap: 1vw;
            flex-direction: column;
        }

        .btn {
            padding: 1em 15%;
            background-color: #fff;
            outline: 0;
            border: 2px solid #fff;
            border-radius: 0.4em;
            cursor: pointer;
            transition: 0.35s linear;
            font-family: retro-game;
        }

        .btn:hover {
            border: 2px solid yellow;
            background-color: yellow;
            box-shadow: 2px 2px 2px 2px rgba(255, 255, 0, 0.158);
        }

        .btn:active {
            transform: scale(1.05);
        }

        #content-2 {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: url("img/background.png");
            background-repeat: no-repeat;
            background-size: cover;
            top: 0;
            display: none;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 5vw;
        }

        .exit {
            position: absolute;
            z-index: 1;
            width: 4em;
            top: 6vw;
            left: 6vw;
            cursor: pointer;
        }

        .text-block {
            padding: 1em 25%;
            background-color: #fff;
            outline: 0;
            border: 2px solid #fff;
            border-radius: 0.4em;
            transition: 0.35s linear;
            font-family: retro-game;
            font-size: 2em;
        }

        #escolher-times-container {
            width: 80%;
            display: flex;
            justify-content: space-between;
        }

        .escolher-times-card {
            width: 30%;
        }

        .escolher-times-card-controles {
            width: 100%;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 2em;
            position: relative;
            padding: 5%;
        }

        .escolher-voltar, .escolher-proximo {
            width: 4vw;
            height: 4vw;
            cursor: pointer;
            padding-bottom: 3vw;
        }

        .escolher-voltar:active, .escolher-proximo:active {
            transform: scale(1.1)
        }

        .escolher-time-escudo {
            height: 15vw;
            width: auto;
            padding-bottom: 3vw;
            display: none;
        }

        .nome-time {
            position: absolute;
            bottom: 1.5vw;
            left: 50%;
            transform: translate(-50%,50%);
            font-family: retro-game;
            font-size: 1.5em;
            display: none;
        }
        
        .transition {
            display: none;
            position: absolute;
            top: 0;
            z-index: 2;
            width: 100%;
            height: 100%;
            background-color: rgba(220,171,0, 0.5);
            overflow: hidden;
        }

        .transition img {
            position: absolute;
            top: 50%;
            left: 150%;
            transform: translate(-50%,-43%);
            z-index: 3;
            animation: transition-start 2.5s ease-in-out;
        }

        @keyframes transition-start {
            0% {
                left: -90%;
            }
            50% {
                left: 50%;
            }

            100% {
                left: 150%;
            }
        }

        .identificador-player {
            position: absolute;
            top: 5%;
            left: 5%;
            background-color: #D9D9D9;
            border-radius: 1.3vw;
            width: 15vw;
            height: 15vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 2vw;
            font-family: retro-game;
            font-size: 1.5em;
            font-weight: bold;
        }
        .identificador-player img {
            width: 80%;
        }

        #identificador-player-2 {
            left: 80% !important;
            background-color: yellow;
        }

        #content-3 {
            width: 100%;
            height: 100%;
            background-image: url("img/stadium.png");
            background-repeat: no-repeat;
            background-size: 100vw 100%;
            image-rendering: pixelated;
            position: absolute;
            display: none;
            top: 0;
        }

        #placar-container {
            position: absolute;
            top: -0.5vw;
            transform: translateX(-50%);
            left: 50%;
        }

        #placar-container #placar-img{
            width: 30vw;
        }

        #placar {
            position: relative;
            font-family: retro-game;
            font-size: 0.9em;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            image-rendering: auto;
        }

        #placar-content {
            width: 90%;
            height: 2vw;
            position: absolute;
            top: 52%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1.5vw;
        }

        #placar-marker {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        .score {
            width: 3vw;
            height: 4vw;
            background-color: #104B6E;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
            color: #fff;
        }

        #placar-nome-2 {
            text-align: right;
        }

        .placar-team-group p {
            word-break: keep-all;
            width: 8vw;
           padding: 0 3%;
        }

        .score:nth-child(2) {
            font-size: 2em;
        }

        .placar-team-group img{
            width: 6vw;
            margin-right: 0.3vw;
        }
        
        .placar-team-group {
            width: auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .placar-team-group p {
            word-break: keep-all;
            width: 6vw;
        }

        #team-2 {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        #team-2 img {
            margin-left: 0.3vw;
        }

        .hidden {
            display: none;
        }

        jogador {
            display: none;
        }

        imp {
            position: absolute;
            z-index: 99;
        }

        #players-name {
            width: 30vw;
            height: 5vw;
            background-color: #fff;
            font-family: retro-game;
            font-size: 2em;
            border-radius: 0.5em;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: 5vw;
            bottom: 2vw;
        }

        #player {
            width: 12vw;
            overflow: visible;
            position: absolute;
            left: 42%;
            bottom: 0vw;
        }

        #indicador {
            width: 10vw;
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translate(-50%,-50%);
            
            animation: movimentar-indicador 2s ease-in-out infinite;
        }

        #pos {
            position: absolute;
            z-index: 99;
            background-color: rgb(255, 0, 0);
            width: 0.01vw;
            height: 10vw;
            top: 50%;
            left: 50%;
            transform: translateX(-50%);
        }

        @keyframes movimentar-indicador {
            0% {
                left: 20%;
            }

            50% {
                left: 80%;
            }

            100% {
                left: 20%;
            }
        }

        #ball {
            width: 7vw;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 2vw;
        }

        @keyframes girar-bola {
            0% {
                transform: rotate(0deg);
            }

    
            100% {
                transform: rotate(360deg);
            }
        }

        #goleiro {
            width: 15vw;
            position: absolute;
            left: 50%;
            top: 20vw;
            transform: translateX(-50%);
        }


    </style>
</head>
<body>
    <?php include("biblioteca-funcoes.php"); include("conectar.php"); ?>
    <!-- Tela de início -->
    <section id="content-1" class="content">
        <!-- Logo -->
        <img src="img/logo-light.png" alt="" id="start-logo">

        <!-- Botões -->
        <div id="btn-startMenu-container">
            <!-- Botão de começar -->
        <button class="btn">
            Nova Partida
        </button>
        <!-- Botão de acesso à dashboard -->
        <button class="btn">
            Minha Conta
        </button>
        </div>
    </section>

    <!-- Escolher Times -->

    <section id="content-2" class="content">
        <!-- Voltar para a tela inicial -->
        <img src="img/exit.png" alt="" class="exit">
        <!-- Título -->
        <h1 id="titulo" class="text-block">
            Selecione os Times
        </h1>
        <!-- Parte de escolher os times -->
        <div id="escolher-times-container">
            <!-- Código PHP -->
            <?php 
                $arrayClubes = listarClubes($conexao,$idUsuario);
                foreach ($arrayClubes as $clube) {
                    $nome = utf8_encode($clube['nome']);
                    $url = $clube['escudo'];
                }          
            ?>
            <!-- Seleção do 1º time -->
            <div class="escolher-times-card">
                <div class="escolher-times-card-controles">
                    <!-- Voltar time -->
                    <img src="img/voltar.png" alt="" class="escolher-voltar">
                    <!-- Escudo do time -->
                    <?php
                        foreach ($arrayClubes as $clube) {
                            $url = $clube['escudo'];
                            echo "<img src='$url' class='escolher-time-escudo escolher-time-escudo-1'>";
                        }
                    ?>
                    <!--<img src="img/escudo-personalizado-2.png" alt="" class="escolher-time-escudo">-->
                    <!-- Próximo time -->
                    <img src="img/proximo.png" alt="" class="escolher-proximo">
                    <!--<p class="nome-time">Palmeiras</p>-->
                    <?php
                        foreach ($arrayClubes as $clube) {
                            $nome = utf8_encode($clube['nome']);
                            $id = $clube['id_clube'];
                            echo "<p class='nome-time nome-time-1' idclube='$id'>$nome</p>";
                        }
                    ?>
                </div>
    
            </div>

            <!-- Seleção do 2º time -->
            <div class="escolher-times-card">
                <div class="escolher-times-card-controles">
                    <!-- Voltar time -->
                    <img src="img/voltar.png" alt="" class="escolher-voltar">
                    <!-- Escudo do time -->
                    <?php
                        foreach ($arrayClubes as $clube) {
                            $url = $clube['escudo'];
                            $id = $clube['id_clube'];
                            echo "<img src='$url' class='escolher-time-escudo escolher-time-escudo-2'>";
                        }
                    ?>
                    <!-- Próximo time -->
                    <img src="img/proximo.png" alt="" class="escolher-proximo">
                    <?php
                        foreach ($arrayClubes as $clube) {
                            $nome = utf8_encode($clube['nome']);
                            $id = $clube['id_clube'];
                            echo "<p class='nome-time nome-time-2' idclube='$id'>$nome</p>";
                        }
                    ?>
                    <p class="nome-time">Palmeiras</p>
                </div>
                <!-- Código PHP -->
            </div>
        </div>

        <!-- Botão para iniciar a partida -->
        <button class="btn">Vamos Lá!</button>
    </section>
    <?php
        $arrayJogadores = listarJogadores($conexao);

        foreach ($arrayJogadores as $jogador) {
            $idClube = $jogador['id_clube'];
            $nomeJogador = utf8_encode($jogador['nome']);
            echo "<jogador class='id-clube-$idClube'>$nomeJogador com id $idClube ----</jogador>";
        }
    ?>
    <section id="content-3" class="content">
        <!-- Indicador Player -->
        <!-- Player 1 -->
        <div class="identificador-player">
            <img src="img/joystick.png" alt="">
            <p>Player 1</p>
        </div>
        <!-- Player 2 -->
        <div class="identificador-player" id="identificador-player-2">
            <img src="img/joystick.png" alt="">
            <p>Player 2</p>
        </div>
        <!-- Placar -->
        <div id="placar-container">
            <div id="placar">
                <img src="img/placar.png" id="placar-img">

                <div id="placar-content">
                    <!-- Time 1 -->
                    <div class="placar-team-group">
                        <img src="img/sao-paulo.png" class="placar-escudo">
                        <p class="placar-nome">São Paulo</p>
                    </div>

                    <!-- Marcadores -->
                    <div id="placar-marker">
                        <div class="score">0</div>
                        <div class="score"><p>X</p></div>
                        <div class="score">0</div>
                    </div>

                    <!-- Time 2 -->
                    <div class="placar-team-group" id="team-2">
                        <p class="placar-nome" id="placar-nome-2">Palmeiras</p>
                        <img src="img/palmeiras.png" class="placar-escudo">
                    </div>

                </div>
            </div>
        </div>
        <img src="../img/sprites/animacao-goleiro.gif" alt="" id="goleiro">
        <img src="img/indicador-single.png" id="indicador">
        <img src="../img/sprites/ball.webp" alt="" id="ball">
        <img src="../img/sprites/player.gif" alt="" id="player">

        <!-- Nome dos jogadores -->
        <div id="players-name">
            <p>Rony</p>
        </div>
    </section>

    <!-- Transição entre a seleção de clubes e o início da partida -->
    <div id="transition" class="transition">
        <img src="img/transition-play.png" alt="">
    </div>
    <!-- Transição GOL -->
    <div id="transition-lose" class="transition">
        <img src="img/transition-goal.png" alt="">
    </div>
    <!-- Transição chance de gol perdida -->
    <div id="transition-goal" class="transition">
        <img src="img/transition-lose.png" alt="">
    </div>

    <!-- Tela: P1 ganhou -->
    <div id="tela-ganhou">
        <img src="ganhou-p1.png" alt="">
        <button class="voltarAconta">Voltar à Conta</button>
    </div>
    <!-- Tela: P2 ganhou -->
    <div id="tela-ganhou">
        <img src="ganhou-p2.png" alt="">
        <button class="voltarAconta">Voltar à Conta</button>
    </div>
    <!-- Tela: empate -->
    <div id="tela-ganhou" class="tela-empatou">
        <div id="circulo-empate">
            <img src="empate.png" alt="">
        </div>
        <button class="voltarAconta">Voltar à Conta</button>
    </div>

    <script src="script.js"></script>
</body>
</html>