<?php
    $conn = NULL;
        try{
            /*
                En estas lineas lo que hacemos es crear la conexión
                    mysql: -> le estamos diciendo que vamos a utilizar mysql
                    host=localhost -> que el host (o el equipo) al que nos vamos a conectar es localhost (nuestro propio equipo)
                    dbname=marvel -> le decimos cual es la base de datos 
                    charset=utf8 -> le decimos que tiene un codificado utf8
                    root -> le decimos que el usuario es root
                    '' -> le decimos que no tiene contraseña
            */
            $con = new PDO("mysql:host=localhost; dbname=marvel; charset=utf8", 'root', '');

            //ahora preguntamos si existe $_GET['id'], o sea, preguntamos si le estamos enviando un ID
            if(isset($_GET['id'])){
                // Si es cierto, creamos una variable ID (se crean con $<nombre>) y guardamos el ID que le estamos enviando
                $id = $_GET['id'];
                // y ahora buscamos en la base de datos toda la info relacionada con esa ID
                $sql = "SELECT * FROM characters WHERE id=$id";
            }else{
                $sql = "SELECT * FROM characters";
            }
            //preparo la consulta
            $stm=$con->prepare($sql);
            //ejecuto la consulta
            $stm->execute();
            // guardo todos los resultados en un array asociativo
            $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);
            // convierto el array en formato json para que JavaScript lo pueda entender
            echo json_encode($resultSet);
            
        }catch (PDOException $e){
            //esto es en el caso de que haya algún error (para que lo imprima por pantalla)
            echo "Error ".$e->getMessage();
        }
