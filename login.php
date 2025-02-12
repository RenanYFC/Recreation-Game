<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="shortcut icon" href="img/recreation-icon.ico" type="image/x-icon">
    <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

        input:focus ~ label {
        position: absolute;
        top: -45%;
        color: #000000;
        font-size: 2vh;
    }

    input:valid ~ label {
        top: -45%;
        color: #000000;
        font-size: 2vh;
    }

    /* == */
    form {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap:  4.5vh;
        
    }

    form p, form a {
        width: 100%;
    }


    .form-group {
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        position: relative;
        gap: 6vh;
        width: 100%;
    }

    .form-group input {
        width: 100%;
        
        height: 5vh;
        border: 0;
        border-bottom: 1px solid #1F1F1F;
        font-size: 1vw;
    }

    .form-group label {
        cursor: text;
        width: 100%;
        color: #1F1F1F;
        background-color: #ffffff;
        /*
        position: absolute;
        top: -25%;
        left: 5%;
        */
        transition: 270ms linear;
        position: absolute;
        top: 0;
        font-size: 2vh;
    }

    .form-group input:focus {
        border: 0;
        outline: 0;
        border-bottom: 1px solid black;
    }

    html,body {
        height: 100%;
    }

    body {
        overflow: hidden;
    }

    main {
        display: flex;
        width: 100%;
        height: 100%;
    }

    #left {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5vw;
        position: absolute;
        z-index: 2;
    }

    #right {
        margin-left: 50%;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #1F1F1F;
        overflow: hidden;
        position: relative;
    }

    #right h1 {
        color: #fff;
    }

    h1 {
        font-size: 4em;
    }

    input[value="Entrar"], button {
        margin-top: 5vw;
        padding: 3% 40%;
        border: 0;
        outline: 0;
        background-color: #1F1F1F;
        font-size: 1.2em;
        color: #ffffff;
        border-radius: 2vw;
        cursor: pointer;
        transition: 200ms linear;
    }

    button {
        background-color: #fff;
        color: #1F1F1F;
        padding: 3% 20%;
        transition: 200ms linear;
    }

    button:hover, input[type="submit"]:hover {
        letter-spacing: 0.04vw;
    }

    h2 {
        position: absolute;
        z-index: 5;
    }

    .background-circle {
        width: 30vw;
        height: 30vw;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 0%;
        left: 50%;
        opacity: 0.3;
        transform: translate(-50%,-50%);
    }

    #bg-circle-2 {
        top: 100%;
        left: 100%;
    }

    error {
    color: #ff4e4e;
    font-size: 1em;
    gap: 0.5vw;
    display: flex;
    justify-content: left;
    align-items: center;
}

#error-container {
    display: flex;
    justify-content: left;
    align-items: center;
}


    </style>
</head>
<body>
<?php
    include("script/conectar.php");
    ob_start();
    session_start();
?>
    <h2>

</h2>
    <main>
        <!-- Esquerda: formulário -->
        <section id="left">
            <h1>Entre com a sua conta</h1>
            <!-- Formulário -->
            <form action="" method="post" id="form-dadosPessoais" class="form">
                <!-- Email -->
                <div class="form-group">
                    <input type="text" name="email" id="email" class="input-send2" required>
                    <label for="email">Email</label>
                </div>

                <!-- Senha -->
                    <div class="form-group">
                        <input type="password" name="senha" id="senha" class="input-send2" required>
                        <label for="senha">Senha</label>
                    </div>
                </div>

                <?php
                    if ($_POST) {
                        $email = $_POST['email'];
                        $senha = $_POST['senha'];
                        $sql = "SELECT * FROM usuario WHERE email = '$email' and senha = '$senha'";
                        $resultado = mysqli_query($conexao,$sql);
                        $array = mysqli_fetch_assoc($resultado);
                        if ($array > 0) {
                            $nome = $array['nome'];
                            $data = $array['data_cadastro'];
                            $idUsuario = $array['id_usuario'];
                            $_SESSION['nome'] = "$nome";
                            $_SESSION['dataCadastro'] = "$data";
                            $_SESSION['estado'] = "ativo";
                            $_SESSION['idUsuario'] = "$idUsuario";
                            header('Location: meu-perfil.php');
                            ob_end_flush();
                        }
                        else {
                           session_destroy();
                            // Aviso de erro
                            echo '
                            <div id="error-container">
                                <error>
                                    <img src="img/info-alert.svg" alt="">
                                    <p>Usuário não encontrado</p>
                                </error>
                            </div>';
                        }
                    }
                ?>
                <input type="submit" value="Entrar">
            </form>
        </section>
        <!-- Direita: 'Novo Aqui?' -->
        <section id="right">
            <h1>Novo Aqui?</h1>
            <button>Crie uma conta agora!</button>
        </section>

        <div class="background-circle" id="bg-circle-1"></div>
        <div class="background-circle" id="bg-circle-2"></div>
    </main>
    <script>
        document.querySelector('button').addEventListener('click',()=>{
            window.location.href="index.html"
        })
    </script>
</body>
</html>