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

fetch('proyectos.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
    }
        return response.json();
})
    .then(data => {
        proyectos = data;
        const contenedor = document.getElementById("PortafolioProyectos");

        if (contenedor) {
            data.forEach(proyecto => {
                const proyectoCard= `
                <li>
                <div class = "item">
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
                </li>
            `;
                contenedor.innerHTML += proyectoCard;
                requestAnimationFrame(() => {
                    const items = document.querySelectorAll('.item');
                    renderCarousel(items);
                });
            });
                const items = document.querySelectorAll('.item');
                const total = items.length; //6
        let currentIndex = 0;

        function getIndex(index) {
            return(index + total) % total;
        }

        function renderCarousel() {
            items.forEach(item => {
                item.classList.remove('left', 'center', 'right');
            });


            const center = getIndex(currentIndex);
            const left = getIndex(currentIndex -1);
            const right = getIndex(currentIndex +1);
            
            
            items[center].classList.add('center');
            items[left].classList.add('left');
            items[right].classList.add('right');
            
        }
        console.log('items:', items);
        console.log('items.length:', items.length);
        renderCarousel();

        document.getElementById('next').addEventListener('click',()=> {
            currentIndex++;
            renderCarousel();
        });

        document.getElementById('prev').addEventListener('click',()=> {
            currentIndex--;
            renderCarousel();
        });
    }
    if (!contenedor) {
    return;
    }
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
