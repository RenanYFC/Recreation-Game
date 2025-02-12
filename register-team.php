<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Time</title>
    <link rel="shortcut icon" href="img/recreation-icon.ico" type="image/x-icon">
    <link rel="stylesheet" href="style/register-team.css">
</head>
<body>
    <?php
        session_start();
        if ($_SESSION['estado'] != 'ativo') {
            header('Location: login.php');
        }
        else {
            $idUsuario = $_SESSION['idUsuario'];
        }
    ?>
    <div id="overlay"></div>
    <!-- Menu -->
    <header id="topo">
        <!-- <img logo> -->
        <img src="img/logo-dark.png" alt="" class="logo">
        <ul id="menu-lista">
            <li><img src="img/perfil.png" alt="" class="navbar-icon"></li>
            <li><img src="img/escudo.png" alt="" class="navbar-icon"></li>
        </ul>
    </header>
    <!-- Content 1 -->
    <section id="content-1" class="content">
        <!-- Conteúdo Lateral Esquerdo -->
        <div class="column-group">
            <texto1>Crie seu próprio time!</texto1>
            <p>Você deseja tornar seu time dos sonhos realidade?</p>
            <figure id="aside-image-vertical">
                <img src="img/Soccer-match-vector.svg" alt="">
            </figure>
            <button class="btn">Quero!</button>
        </div>
        <figure id="aside-image">
            <img src="img/Soccer-match-vector.svg" alt="">
        </figure>
    </section>

    <!-- Content 2 -->
    <section id="content-2" class="content">
        <!-- Back Buttom -->
        <div class="back-button-container">
            <img src="img/back-button.png" alt="" class="back-button">
        </div>
        <texto1>Detalhes do Clube</texto1>

        <!-- Input Nome do time -->
        <div id="inputNomeClubeContainer">
            <form>
                <input type="text" name="nomeClube" id="nomeClube" class="input-send2" required>
                <label for="nomeClube">Nome do time</label>
            </form>
        </div>
        <button class="btn">Continuar</button>
    </section>

    <!-- Content 3 -->
    <section id="content-3" class="content">
        <!-- Back Buttom -->
        <div class="back-button-container">
            <img src="img/back-button.png" alt="" class="back-button">
        </div>
        <texto1>Detalhes do Clube</texto1>

        <!-- Escolher escudo -->
        <div class="escolherEscudoContainer">
            <texto2>Escudo</texto2>
            <!-- Vetor do escudo para o usuário clicar -->
            <figure class="upload-icon">
                <img src="img/shield-soccer.png" alt="" class="upload-icon-preview">
                <div class="upload-icon-container">
                    <!--Flecha para cima -->
                    <img src="img/arrow.png" alt="">
                    <!-- Base -->
                    <div class="upload-icon-base-container">
                        <div class="upload-icon-base-container-aside">
                            <div class="base-aside"></div>
                            <div class="base-aside"></div>
                        </div>
                        <div class="base-bottom"></div>
                    </div>
                </div>
            </figure>
        </div>
        <button class="btn">Continuar</button>
    </section>

    <!-- Content 5 -->
    <section id="content-5" class="content">
        <texto1>Jogadores</texto1>
        <ul id="players-list">
            <!-- Player 1 -->
            <li class="player-list-item">
                <!-- Adicionar -->
                <div class="add-button">
                  <p>+</p>
                </div>

                <!-- Player já adicionado -->
                <div class="selected-player">
                    <p class="name-player">Nome</p>
                    <!-- Opção de alterar o player ao acionar o hover -->
                    <div class="alter-player-container">
                        <p>Alterar</p>
                        <img src="img/edit-icon.png" alt="">
                    </div>
                </div>
            </li>

            <!-- Player 2 -->
            <li class="player-list-item">
                <!-- Adicionar -->
                <div class="add-button">
                    <p>+</p>
                  </div>
  
                  <!-- Player já adicionado -->
                  <div class="selected-player">
                      <p class="name-player">Nome</p>
                      <!-- Opção de alterar o player ao acionar o hover -->
                      <div class="alter-player-container">
                          <p>Alterar</p>
                          <img src="img/edit-icon.png" alt="">
                      </div>
                  </div>
            </li>

            <!-- Player 3 -->
            <li class="player-list-item">
                <!-- Adicionar -->
                <div class="add-button">
                    <p>+</p>
                  </div>
  
                  <!-- Player já adicionado -->
                  <div class="selected-player">
                      <p class="name-player">Nome</p>
                      <!-- Opção de alterar o player ao acionar o hover -->
                      <div class="alter-player-container">
                          <p>Alterar</p>
                          <img src="img/edit-icon.png" alt="">
                      </div>
                  </div>
            </li>

            <!-- Player 4 -->
            <li class="player-list-item">
                <!-- Adicionar -->
                <div class="add-button">
                    <p>+</p>
                  </div>
  
                  <!-- Player já adicionado -->
                  <div class="selected-player">
                      <p class="name-player">Nome</p>
                      <!-- Opção de alterar o player ao acionar o hover -->
                      <div class="alter-player-container">
                          <p>Alterar</p>
                          <img src="img/edit-icon.png" alt="">
                      </div>
                  </div>
            </li>

            <!-- Player 5 -->
            <li class="player-list-item">
                <!-- Adicionar -->
                <div class="add-button">
                    <p>+</p>
                  </div>
  
                  <!-- Player já adicionado -->
                  <div class="selected-player">
                      <p class="name-player">Nome</p>
                      <!-- Opção de alterar o player ao acionar o hover -->
                      <div class="alter-player-container">
                          <p>Alterar</p>
                          <img src="img/edit-icon.png" alt="">
                      </div>
                  </div>
            </li>
        </ul>

        <button class="btn" id="send">Continuar</button>
    </section>

    <section id="choose">
        <div class="exit-container exit-container-choose">
            <img src="img/exit-button.png" alt="" id="exit-button-choose">
        </div>
        <texto1 id="choose-title">A</texto1>
        <div class="option-container">
            <img class="choose-option"></img>
            <img class="choose-option"></img>
            <img class="choose-option"></img>
        </div>
    </section>

    <div id="addPlayer">
        <div class="exit-container" id="exit-container-add">
            <img src="img/exit-button.png" alt="" id="exit-button-add">
        </div>
        <texto1>Detalhes do Jogador</texto1>
            <div id="addPlayer-form" class="content">
                <!-- Input Nome do time -->
                <div id="inputNomeClubeContainer">
                    <form>
                        <input type="text" name="nomeJogador" id="nomeJogador" required>
                        <label for="nomeJogador">Nome do jogador</label>
                    </form>
                </div>
            </div>
            <button class="btn" id="adicionarJogador">Salvar</button>
    </div>
    <script src="script/register-team.js"></script>
</body>
</html>