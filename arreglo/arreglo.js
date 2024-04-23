const cantantes  = [
    {
        nombre: 'Michael Jackson',
        edad: 35,
        genero: 'Pop'
    },
    {
        nombre: 'Taylor Swift',
        edad: 20,
        genero: 'Pop'
    },
    {
        nombre: 'Michael Jackson',
        edad: 35,
        genero: 'Pop'
    },
    {
        nombre: 'Michael Jackson',
        edad: 35,
        genero: 'Pop'
    },
    {
        nombre: 'Michael Jackson',
        edad: 35,
        genero: 'Pop'
    },
    {
        nombre: 'Michael Jackson',
        edad: 35,
        genero: 'Pop'
    },
    {
        nombre: 'Michael Jackson',
        edad: 35,
        genero: 'Pop'
    },
    {
        nombre: 'Michael Jackson',
        edad: 35,
        genero: 'Pop'
    },
    {
        nombre: 'Michael Jackson',
        edad: 35,
        genero: 'Pop'
    },
    {
        nombre: 'Michael Jackson',
        edad: 35,
        genero: 'Pop'
    },
];

    const cargarTarjeta = document.getElementById('cartas')

    cantantes.forEach(carta => {
        const cartasHtml = `
        <div class="col-sm-12 col-md-4 py-4">
        <div class="container shadow text-center p-3 rounded-4">
            <div class="row d-flex align-items-center">
                <div class="col-auto text-center">
                    <img src="../img/micro.svg" width="40px">
                </div>
                <div class="col">
                    <h3 class="fw-semibold">${carta.nombre}</h3>
                    <p class="fw-light">Cantante</p>
                </div>
            </div>
            <hr>
            <p class="bg-success text-light rounded-4 p-2 fw-semibold">Genéro</p>
            <p>${carta.genero}</p>
            <p class="bg-success text-light rounded-4 p-2 fw-semibold">Edad</p>
            <p>${carta.edad} años</p>
        </div>
    </div>`;
    cargarTarjeta.innerHTML += cartasHtml;
    })

console.log(cantantes);