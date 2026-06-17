
const checkbox = document.getElementById('theme-toggle'); 
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
    checkbox.checked = true;
    }
}

checkbox.addEventListener('change', (e) => {
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else{
        document.documentElement.setAttribute('data-theme' , 'light');
        localStorage.setItem('theme', 'light');
    }
});

let proyectos = [];
fetch('proyectos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
    }
        return response.json();
})
    .then(data => {
        proyectos = data;
        const contenedor = document.getElementById("PortfolioProyectos");

        if (!contenedor) {
            return;
        }

        data.forEach(proyecto => {
            const proyectoCard= `
            <div class = "swiper-slide">
                <div class = "proyecto-card">
                    <h3>${proyecto.nombre}</h3>
                    <h4>${proyecto.categoria}</h4>
                    <img src="${proyecto.imagen}" alt="${proyecto.nombre}">
                    <p>${proyecto.descripcion}</p>
                    <ul>
                        ${proyecto.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                    <button onclick="window.open('${proyecto.pagina}', '_blank')">Ver Proyecto</button>
                    <button onclick="window.open('${proyecto.repositorio}', '_blank')">Ver Código</button>
                </div>
            </div>
        `;
            contenedor.innerHTML += proyectoCard;
        });

        // Initialize carousel after all items are added to DOM
        const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: true,
        spaceBetween: 0,
        effect: 'coverflow',
        breakpoints: {
            
            1024: {
                slidesPerView: 3
            }
        },
        observer: true, 
        observeParents: true,

         coverflowEffect: {
            rotate: 2,
            scale: 1,  
            stretch: -40,
            depth: 150,        // Distancia 3D (Z-index/Perspectiva de alejamiento lateral)
            modifier: 1,       // Multiplicador del efecto
            slideShadows: false, // Desactiva sombras automáticas si no las quieres
            transitionDuration: 300, // Duración de la transición en ms
        },
        // Navigation arrows
        navigation: {
            nextEl: '.carousel-container .swiper-button-next',
            prevEl: '.carousel-container .swiper-button-prev',
        },
    });

       
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
