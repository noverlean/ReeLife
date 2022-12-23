<?php
    $DataBase = mysqli_connect("sql102.hostingem.ru", "gnioo_32769310", "13579qwe", "gnioo_32769310_orders");

    if ($DataBase == false)
        echo "Error: failed connection to database.";

    $sql = 'SELECT * FROM `orders`';

    $request = mysqli_query($DataBase, $sql);

    echo "{";

    while ($row = mysqli_fetch_array($request, MYSQLI_NUM)) {
       echo '"' . $row[0] . '":';
       echo json_encode($row);
       echo ",";
    }

    echo '"id":["id","name","code","type"]';

    echo "}";

    //echo json_encode(mysqli_fetch_assoc($request));

    mysqli_close($DataBase);
?>