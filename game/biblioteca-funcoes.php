<?php

include("conectar.php");

function  listarClubes($conexao,$id) {
    $sql = "SELECT * FROM clube WHERE id_usuario = $id or origem = 'classico'";
    $resultado = mysqli_query($conexao,$sql);
    $arrayClubes = array();
    while ($linha = mysqli_fetch_assoc($resultado)) {
        array_push($arrayClubes,$linha);
        // echo "<img src='$url' class='escolher-time-escudo'>";
    };
    return $arrayClubes;
}

function listarJogadores($conexao) {
        $sql = "SELECT * FROM jogador";
        $resultado = mysqli_query($conexao,$sql);
        $arrayJogadores = array();

        while ($linha = mysqli_fetch_assoc($resultado)) {
            array_push($arrayJogadores,$linha);
        }
        return $arrayJogadores;
}


?>