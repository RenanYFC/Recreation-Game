<?php
session_start();
if ($_SESSION['estado']!='ativo') {
    header("Location: ../login.php");
}
else {
    include('conectar.php');

    // Cadastrar Clube
    $nomeClube = $_GET['nomeClube'];
    $escudo = $_GET['escudo'];
    $linkEscudo = "";
    $linkEscudo = "img/custom-shield-$escudo.png";
    $origem = $_GET['origem'];
    $idUsuario = $_SESSION['idUsuario'];
    echo "$nomeClube<br>$linkEscudo<br>$origem<br>$idUsuario";
    $sql = "INSERT INTO clube (id_usuario,nome,escudo,origem) VALUES ($idUsuario,'$nomeClube','$linkEscudo','$origem')";
    $executar = mysqli_query($conexao,$sql);
    if ($executar) {
        echo "foiii";
    }
    else {
        $erro = mysql_errno();
        echo "erro: $erro";
    }

    // Cadastrar Jogador
    $p1 = $_GET['p1'];
    $p2 = $_GET['p2'];
    $p3 = $_GET['p3'];
    $p4 = $_GET['p4'];
    $p5 = $_GET['p5'];

    // Achar clube registrado
    $sqlAcharClube = "SELECT * FROM clube WHERE id_usuario = $idUsuario and nome = '$nomeClube'";
    $executar2 = mysqli_query($conexao,$sqlAcharClube);
    $clube = mysqli_fetch_assoc($executar2);
    $idClube = $clube['id_clube'];
    echo "começouu <br>idClube = $idClube <br>escudo= $escudo<br>nome='$p1'";
    $sqlPlayer = "INSERT INTO jogador (id_clube,id_camisa,nome) VALUES ($idClube,$escudo,'$p1'),($idClube,$escudo,'$p2'),($idClube,$escudo,'$p3'),($idClube,$escudo,'$p4'),($idClube,$escudo,'$p5')";
    $executar3 = mysqli_query($conexao,$sqlPlayer);

    if ($executar3) {
        echo "JOGADORES";
    }
    else {
        echo "aa";
    }
    header("Location: ../meu-perfil.php");
}


?>