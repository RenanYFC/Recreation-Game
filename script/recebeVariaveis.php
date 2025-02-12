<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    include('conectar.php');
    // Receber o método GET
    // Armazenando dados em variáveis
    $nome = $_GET['nome'];
    $cpf = $_GET['cpf'];
    $dataAtual = $_GET['dataAtual'];
    $dataNascimento  = $_GET['dataNascimento'];
    $email  = $_GET['email'];
    $senha  = $_GET['senha'];
    echo "<br>$nome <br>";
    echo "$cpf<br>";
    echo "$dataAtual<br>";
    echo "$dataNascimento<br>";
    echo "$email<br>";
    echo "$senha<br>";
    
    // Registrando no BD
    $sql = "INSERT INTO usuario(nome,cpf,data_nascimento,data_cadastro,email,senha) VALUES ('$nome',$cpf,'$dataNascimento','$dataAtual','$email','$senha')";
    $executar = mysqli_query($conexao,$sql);
    if ($executar) {
        echo "registrado";
    }
    else {
        $erro = mysqli_error($conexao);
        echo "$erro";
    }

    // Achar o id_cliente
    $sqlId = "SELECT * FROM usuario WHERE email='$email' and senha='$senha'";
    $resultado = mysqli_query($conexao,$sqlId);
    $retorno = mysqli_fetch_assoc($resultado);
    $idUsuario = $retorno['id_usuario'];

    session_start();
    $_SESSION['nome'] = $nome;
    $_SESSION['dataCadastro'] = $dataAtual;
    $_SESSION['estado'] = "ativo";
    $_SESSION['idUsuario'] = "$idUsuario";

    header("Location: ../meu-perfil.php");
    ?>
</body>
</html>