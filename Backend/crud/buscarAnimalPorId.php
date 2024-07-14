<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: POST'); // Allowing POST method
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

// Obtener el ID del animal enviado por AJAX
$id_animal = $_POST['id_animal'] ?? null;

if ($id_animal) {
    // Utilizar prepared statements para evitar inyecciones SQL
    $stmt = $conn->prepare("SELECT * FROM animal WHERE id_animal = ?");
    $stmt->bind_param("i", $id_animal);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Si se encuentra el animal, devolver sus datos en formato JSON
        $row = $result->fetch_assoc();
        echo json_encode($row);
    } else {
        // Si no se encuentra el animal, devolver un objeto vacío
        echo json_encode([]);
    }

    // Cerrar el statement
    $stmt->close();
} else {
    echo json_encode(["error" => "No se proporcionó el ID del animal"]);
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
