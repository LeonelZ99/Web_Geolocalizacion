document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('searchForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const animalId = document.getElementById('animalId').value;
        console.log(animalId);
        const url = `https://rickandmortyapi.com/api/character/${animalId}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();

            localStorage.setItem('animalId', JSON.stringify(data));
            window.location.href= 'descripcionAnimal.html';
        } catch (error) {
            alert('Hubo un error: ${error.message}');
        }
    });
});