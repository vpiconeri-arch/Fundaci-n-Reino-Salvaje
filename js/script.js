
// DATOS PARA FILTRAR //
// Primer filtro: protección //

const dwvale = [

    // PROTECCIÓN //

    {id: 1, name: "Un hogar para todos", image: "foto1.jpg", género: "protección", description: "Nala representa a los leones que necesitan protección. Nuestra fundación busca crear conciencia sobre el cuidado de esta especie y la importancia de conservar su hábitat natural."},

    {id: 2, name: "Nuevas generaciones", image: "foto2.jpg", género: "protección", description: "Queremos que los leones puedan vivir libres y seguros. Por eso, buscamos crear conciencia sobre la caza ilegal y la importancia de proteger esta especie."},

    {id: 3, name: "Cada especie cuenta", image: "foto3.jpg", género: "protección", description: "Los leones son una parte importante de la naturaleza. En Reino Salvaje buscamos protegerlos, cuidar el lugar donde viven y crear conciencia sobre los peligros que enfrentan."},

    {id: 4, name: "Huellas para el mañana", image: "foto4.jpg", género: "protección", description: "La sabana es el hogar de muchos animales. En Reino Salvaje queremos promover el cuidado del medio ambiente y proteger los espacios donde viven los leones."},

    // HÁBITAT //

    {id: 5, name: "Aprender de la naturaleza", image: "foto5.jpg", género: "habitat", description: "Creemos que cada especie tiene un valor único. Por eso, buscamos inspirar a las personas a respetar la vida silvestre y apoyar acciones que ayuden a mantener viva la belleza del reino animal."},

    {id: 6, name: "Un territorio que cuidar", image: "foto6.jpg", género: "habitat", description: "Los cachorros aprenden de su entorno desde pequeños. Un ambiente seguro es fundamental para su desarrollo y para el futuro de la especie."},

    {id: 7, name: "Leones descansando juntos", image: "foto9.jpg", género: "habitat", description: "Los leones cumplen una función importante en los ecosistemas. Su conservación contribuye al equilibrio natural y a la diversidad de la vida silvestre."},

    {id: 8, name: "Riqueza natural", image: "foto8.jpg", género: "habitat", description: "En Reino Salvaje queremos motivar a más personas a conocer y respetar a los animales. Pequeñas acciones pueden ayudar a crear un futuro mejor para la vida silvestre."}

];


// OBTENER LOS CONTENEDORES Y BOTONES DEL DOM //

const dwvaleContainer = document.getElementById("protección-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// FUNCIÓN PARA RENDERIZAR LAS TARJETAS //

function renderDw(genero) {

    let dwvaleToRender = [];

    if (genero === "all") {
        dwvaleToRender = dwvale;
    } else {
        dwvaleToRender = dwvale.filter(dw => dw["género"] === genero);
    }

    // LIMPIAR EL CONTENEDOR //

    dwvaleContainer.innerHTML = '';

    if (dwvaleToRender.length === 0) {
        dwvaleContainer.innerHTML = '<p class="text-center w-100">No hay disponibles para esta categoría.</p>';
        return;
    }

    // CREAR Y AGREGAR LAS TARJETAS //

    dwvaleToRender.forEach(dw => {

        const cardHtml = `
            <figure class="protección-card" data-gender="${dw["género"]}">
                <img src="${dw.image}" alt="${dw.name}">
                <figcaption>
                    ${dw.name}
                </figcaption>
                <div class="card-description">
                    <p>${dw.description}</p>
                </div>
            </figure>
        `;

        dwvaleContainer.innerHTML += cardHtml;

    });

}


// AGREGAR EVENTOS A LOS BOTONES DE FILTRO //

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const genero = button.dataset.category;

        // QUITAR LA CLASE ACTIVE DE TODOS LOS BOTONES //

        filterButtons.forEach(btn => btn.classList.remove("active"));

        // AGREGAR ACTIVE AL BOTÓN SELECCIONADO //

        button.classList.add("active");

        // MOSTRAR LAS TARJETAS DE LA CATEGORÍA //

        renderDw(genero);

    });

});


// MOSTRAR TODAS LAS TARJETAS AL CARGAR LA PÁGINA //

document.addEventListener("DOMContentLoaded", () => {

    renderDw("all");

});


// FUNCIÓN PARA VOLVER AL INICIO //

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

    


    
