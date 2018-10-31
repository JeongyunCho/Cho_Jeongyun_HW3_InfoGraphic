<?php
$user = "root";
$password = "";
$host = "localhost";
$db = "db_youtube";

$conn = mysqli_connect($host, $user, $password, $db);
mysqli_set_charset($conn, 'utf8');

if (!$conn) {
    echo "connection didn't work...";
    exit;
}


//get all the data
$myQuery = "SELECT * FROM tbl_infographic";
// make the query, get the result
$result = mysqli_query($conn, $myQuery);

$rows = array();
while($row = mysqli_fetch_assoc($result)) {
   $rows[] = $row;
}



// send the entire result set as a json encoded array
echo json_encode($rows);

?>