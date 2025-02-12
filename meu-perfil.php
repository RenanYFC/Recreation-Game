<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Perfil</title>
    <link rel="stylesheet" href="style/register-team.css">
    <link rel="stylesheet" href="style/menu-perfil.css">
</head>
<body>
    <?php 
        session_start();
        if ($_SESSION['estado'] != "ativo") {
            header("Location: login.php");
        }
        $nome = $_SESSION['nome'];
        $dataSQL = $_SESSION['dataCadastro'];
        $dataSQLArray = explode("-",$dataSQL);
        $ano = $dataSQLArray[0];
        $mes = $dataSQLArray[1];
        $dia = $dataSQLArray[2];
        $dataPHP = "$dia/$mes/$ano";
    ?>
     <!-- Menu -->
     <header id="topo">
        <!-- <img logo> -->
        <img src="img/logo-dark.png" alt="" class="logo">
        <ul id="menu-lista">
            <li class="menu-link"><img src="img/perfil.png" alt=""></li>
            <li class="menu-link"><img src="img/escudo.png" alt=""></li>
        </ul>
    </header>
    <!-- Card -->
    <div id="content-profile">
        <div id="card-container">
            <!-- Ícone Usuário -->
            <div id="icon-user-container">
                <img src="img/icon-user.png" alt="" class="icon-user icon-campo-vazio">
            </div>
            <!-- Container - Informações Digitadas -->
            <p id="nome"><?php echo "$nome"?></p>
            <p>Jogando desde</p>
            <p id="date"> <?php echo "$dataPHP"; ?> </p>
            <p><a href="script/sair.php">Sair</a></p>
        </div>
    </div>
</div>
    <script src="script/navbar.js"></script>
</body>
</html>