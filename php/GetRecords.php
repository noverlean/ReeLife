<?php
    $DataBase = mysqli_connect("sql102.hostingem.ru", "gnioo_32769310", "13579qwe", "gnioo_32769310_orders");

    if ($DataBase == false)
        echo "Error: failed connection to database.";

    $sql = 'SELECT * FROM `orders` WHERE 1';

    $request = mysqli_query($DataBase, $sql);

    while ($row = mysqli_fetch_array($request, MYSQLI_NUM)) {
        echo $row[0];
        //echo json_encode($row[0]);
        //echo '{"id":' . $row["id"] . ',"name":' . $row["name"] . ',"code":' . $row["code"] . ',"type":' . $row["type"] . '}';
        echo '{"id":'.$row[0].',"code":'.$row[2].'}';
    }

     //if ($request)
     //    
     //else
     //    echo '{"state":"300"}';

    mysqli_close($DataBase);
?>