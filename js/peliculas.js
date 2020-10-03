const peliculas = [
    {
        numero: "1",
        titulo: "Mision de rescate",
        duracion: "99M",
        director: "Sam Hargrave",
        anio: "2020",
        imagen: "001.png"
    },
    {
        numero: "2",
        titulo: "A ciegas",
        duracion: "89M",
        director: "Susanne Bier",
        anio: "2018",
        imagen: "002.png"
    },
    {
        numero: "3",
        titulo: "Spenser Confidential",
        duracion: "85M",
        director: "Peter Berg",
        anio: "2020",
        imagen: "003.png"
    },
    {
        numero: "4",
        titulo: "Escuadrón 6",
        duracion: "83M",
        director: "Michael Bay",
        anio: "2019",
        imagen: "004.png"
    },
    {
        numero: "5",
        titulo: "Misterio a bordo",
        duracion: "73M",
        director: "Kyle Newacheck",
        anio: "2019",
        imagen: "005.png"
    },
    {
        numero: "6",
        titulo: "El irlandés",
        duracion: "64M",
        director: "Martin Scorsese",
        anio: "2019",
        imagen: "006.png"
    },
    {
        numero: "7",
        titulo: "Triple frontera",
        duracion: "63M",
        director: "J. C. Chandor",
        anio: "2019",
        imagen: "007.png"
    },
    {
        numero: "8",
        titulo: "La otra Missy",
        duracion: "59M",
        director: "Happy Madison",
        anio: "2020",
        imagen: "008.png"
    },
    {
        numero: "9",
        titulo: "El hoyo",
        duracion: "56M",
        director: "Galder Gaztelu-Urrutia",
        anio: "2019",
        imagen: "009.png"
    },
    {
        numero: "10",
        titulo: "La cita perfecta",
        duracion: "48M",
        director: "Chris Nelson",
        anio: "2019",
        imagen: "010.png"
    }
]


function listarPeliculas() {
    container = document.getElementById('contenedor');

    peliculas.forEach((elemento) => {
        const card = document.createElement('div');

        const content = `
            <img class="card-img-top" src="img/${elemento.imagen}" alt="${elemento.titulo}">
            <div class="card-body">
                <h5 class="card-title" >${elemento.numero} ${elemento.titulo} (${elemento.duracion})</h5>
                <p class="card-text ">Director: ${elemento.director} / Año: ${elemento.anio}</p>
            </div>
        </div>
        <br>
    `;
        container.innerHTML += content;
    });
    document.getElementById('hide').style.display = 'none';

}
