<?php 
    // $conn = new mysqli('localhost', 'root', '', 'sklepzoologiczny');

    // if ($conn->connect_error) {
    //     die("Brak polaczenia z baza danych: " . $conn->connect_error);
    // }

    // $SQL = "SELECT * FROM artykuly";
    // $result = $conn->query($SQL);

    // $produkty = array();
    // if ($result->num_rows > 0) {
    //     while ($row = $result->fetch_assoc()) {
    //         $produkty[] = $row;
    //     }
    // }

    // $conn->close();

    // header('Content-Type: application/json');
    // echo json_encode($produkty);


    $conn = new mysqli('localhost', 'root', '', 'sklepzoologiczny');

    if ($conn->connect_error) {
        die("Brak polaczenia z baza danych: " . $conn->connect_error);
    }

    $SQL = "SELECT * FROM artykuly";
    $result = $conn->query($SQL);

    $products = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
    }

    $conn->close();

    header('Content-Type: application/json');
    echo json_encode($products);
?> 

