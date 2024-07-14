document.addEventListener("DOMContentLoaded", function() {
    // Fetch
    const data = JSON.parse(localStorage.getItem('animalId'));
    if(data){
        document.getElementById("animalSize").innerHTML += `${data.status}`;   //TAMAÑO
        document.getElementById("animalSpecie").innerHTML += `${data.species}`; //RAZA
        document.getElementById("animalColor").innerHTML += `${data.species}`;  //COLOR
        document.getElementById("animalAge").innerHTML += `${data.species}`;    //EDAD
        document.getElementById("animalGender").innerHTML += `${data.gender}`;  //SEXO
        document.getElementById("animalId").innerHTML += `${data.id}`;          //ID
        document.getElementById("animalName").innerHTML += `${data.name}`;      //NAME
        document.getElementById("imagenGrande").src = `${data.image}`;          //IMAGEN GRANDE
        document.getElementById("imagenOne").src = `${data.image}`;             //IMAGEN ONE
        document.getElementById("imagenTwo").src = `${data.image}`;             //IMAGEN TWO
        document.getElementById("dueñoName").innerHTML += `${data.name}`;       //NOMBRE DUEÑO
        document.getElementById("dueñoAddress").innerHTML += `${data.status}`;    //DIRECCION DUEÑO
        document.getElementById("dueñoPhone").innerHTML += `${data.gender}`;      //TELEFONO DUEÑO
        document.getElementById("fechaCastrado").innerHTML += `${data.count}`;    //FECHA CASTRACION
        document.getElementById("informe").innerHTML += `${data.name}`;           //INFORME 

    } else {
        console.error('No se encontraron datos del personaje en localStorage.');
    }

    // Efecto en fecha de castrado
    const spanElement = document.getElementById("castrado");
    spanElement.addEventListener("mouseover", function() {
        this.textContent = `${data.status}`;                                //FECHA DE CASTRACIÓN
    });

    spanElement.addEventListener("mouseout", function() {
        this.textContent = "Castrado";
    });
});

function printReport() {
    const originalContent = document.body.innerHTML;
    const reportContent = document.getElementById("customReport").innerHTML;
    
    document.body.innerHTML = '<html><head><title>Historia clínica</title><link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet"></head><body>' + reportContent + '</body></html>';
    window.print();
    document.body.innerHTML = originalContent;
}