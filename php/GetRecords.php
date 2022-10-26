<?php
    $DataBase = mysqli_connect("sql102.hostingem.ru", "gnioo_32769310", "13579qwe", "gnioo_32769310_orders");

    if ($DataBase == false)
        echo "Error: failed connection to database.";

    $sql = 'SELECT * FROM `users` WHERE 1';

    $request = mysqli_query($DataBase, $sql);

    if ($request)
        echo json_encode($request);
    else
        echo '{"state":"300"}';

    mysqli_close($DataBase);
?>