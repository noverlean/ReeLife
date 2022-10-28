<?php
    $name = $_POST["name"];
    $type = $_POST["type"];
    $code = $_POST["code"];

    $DataBase = mysqli_connect("sql102.hostingem.ru", "gnioo_32769310", "13579qwe", "gnioo_32769310_orders");

    if ($DataBase == false)
        echo "Error: failed connection to database.";

    $sql = 'INSERT INTO `orders`(`name`, `code`, `type`) VALUES ( "' . $name . '", "' . $code . '", "' . $type . '")';

    $request = mysqli_query($DataBase, $sql);

    if ($request)
        echo '{"state":"200"}';
    else
        echo '{"state":"300"}';

    mysqli_close($DataBase);
?>