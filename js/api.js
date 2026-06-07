import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://xosdlltxlwwmwvxinfso.supabase.co';
const supabaseKey = 'sb_publishable_W0vg-vmzF-zHUeYD2SMxNg_8_4YZnM7';


const _supabase = createClient(supabaseUrl, supabaseKey);


// 3. Capturamos el formulario de Aprec
const formulario = document.getElementById('contactForm');

if (formulario) {
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evitamos que la página se recargue

        // Extraemos los datos de los inputs
        const datosConsulta = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            asunto: document.getElementById('asunto').value,
            message: document.getElementById('message').value,
        
        };
        alert("Enviando datos...");


        console.log("Enviando datos a la base de datos...", datosConsulta);
        
        // 4. Inserción en Supabase
        const { data, error } = await _supabase
            .from('consultas') // Nombre de tu tabla en Supabase
            .insert([datosConsulta]);

        // https://xosdlltxlwwmwvxinfso.supabase.co/rest/v1/Portafolio

        if (error) {
            console.error("Error de Supabase:", error.message);
            alert("Hubo un error al enviar su consulta. Intente nuevamente.");
        } else {
            alert("¡Consulta enviada con éxito a Cerpa Maria de la Paz!");
            formulario.reset();
        }
    });
}