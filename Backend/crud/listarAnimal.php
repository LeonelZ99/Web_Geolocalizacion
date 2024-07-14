<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: GET'); // Solo permitimos el método GET
header('Content-Type: application/json');

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "veterinaria_db";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("La conexión falló: " . $conn->connect_error);
}


$sql = "SELECT id_animal, nombre_animal, sexo, castrado, fecha_castracion  FROM animal ORDER BY id_animal";

// Ejecutar la consulta
$resultado = $conn->query($sql);

// Verificar si hay resultados
/*
if ($resultado->num_rows > 0) {
    // Iterar sobre los resultados y mostrar cada animal
    while ($row = $resultado->fetch_assoc()) {
        echo . $row["id_animal"] . $row["nombre_animal"] . $row["sexo"] . $row["castrado"] ." Fecha_castracion: " . $row["fecha_castracion"]. "";
    }
} else {
    echo "No se encontraron animales.";
}
*/
$animales = array();

while($row = $resultado -> fetch_assoc()){
    $animales[] = $row;
}


$conn->close();

echo json_encode($animales);

?>