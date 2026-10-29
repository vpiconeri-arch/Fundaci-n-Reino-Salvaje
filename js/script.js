// DATOS PARA FILTRAR //
// primer filtro: protección //

const dwvale =[

//protección//

{id: 1, name:" Un hogar para todos", image: "foto1.jpg", genero:"protección" ,description :"Nala representa a los leones que necesitan protección. Nuestra fundación busca crear conciencia sobre el cuidado de esta especie y la importancia de conservar su hábitat natural"}
{id: 2, name:" Nuevas generaciones", image: "foto2.jpg",genero:"protección", descripcion:"Queremos que los leones puedan vivir libres y seguros, Por eso, buscamos crear conciencia sobre la caza ilegal y la importancia de proteger esta especie"}



// habitat 
{id: 5, name:"Aprender de la naturaleza", image: "foto5.jpg", genero:"habitat" ,description :"Creemos que cada especie tiene un valor único. Por eso, buscamos inspirar a las personas a respetar la vida silvestre y apoyar acciones que ayuden a mantener viva la belleza del reino animal."}
{id: 6, name:"Un territorio que cuidar", image: "foto6.jpg", genero:"habitat" ,description :"Los cachorros aprenden de su entorno desde pequeños. Un ambiente seguro es fundamental para su desarrollo y para el futuro de la especie."}


];
// Obtener los contenedores y botones del DOM
const dwvaleContainer = document.getElementById("protección-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwvaleToRender = [];
    if (genero === "all") {
        dwvaleToRender = dwvale;
    } else {
        dwvaleToRender = dwvale.filter(Dwvale => Dwvale.genero === genero);
    }