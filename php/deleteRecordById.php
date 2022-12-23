<?php
    $id = $_POST['id'];
    
    $DataBase = mysqli_connect("sql102.hostingem.ru", "gnioo_32769310", "13579qwe", "gnioo_32769310_orders");

    if ($DataBase == false)
        echo "Error: failed connection to database.";

    $sql = 'DELETE FROM `orders` WHERE `id` = "' . $id . '"';

    $request = mysqli_query($DataBase, $sql);

    if ($request){
        echo '{"status":200}';
    }
    else{
        echo '{"status":300}';
    }

    mysqli_close($DataBase);
?>