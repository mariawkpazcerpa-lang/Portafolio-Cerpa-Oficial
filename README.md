# 🎨 Portafolio - María de la Paz Cerpa

Portafolio web profesional de **María de la Paz Cerpa**, Frontend Developer especializada en crear interfaces modernas, responsive e integradas con APIs y bases de datos.

## 🌟 Características

- **Diseño Moderno y Responsive**: Interfaz adaptable a todos los dispositivos (móvil, tablet, desktop)
- **Tema Claro/Oscuro**: Toggle de temas implementado con CSS variables para mejor experiencia de usuario
- **Integración con APIs**: Conexión a bases de datos mediante Supabase
- **Secciones Completas**: Inicio, Sobre mí, Portafolio de proyectos y Contacto
- **Tecnologías Modernas**: HTML5, SCSS, JavaScript vanilla y Material Design for Bootstrap

## 📂 Estructura del Proyecto

```
📦 Portafolio-Cerpa-Oficial
├── 📄 index.html           # Página de inicio (hero)
├── 📄 about.html           # Sección "Sobre mí" con educación y tecnologías
├── 📄 portfolio.html       # Galería de proyectos
├── 📄 contact.html         # Formulario de contacto
├── 📄 proyectos.json       # Base de datos de proyectos
├── 📁 css/                 # Estilos compilados (CSS)
├── 📁 sass/                # Estilos fuente (SCSS)
├── 📁 js/                  # Scripts JavaScript
├── 📁 img/                 # Imágenes y recursos
├── 📄 package.json         # Dependencias del proyecto
└── 📄 package-lock.json    # Lock file de npm
```

## 💻 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **SCSS (46.9%)**: Estilos avanzados con preprocesador
- **JavaScript (16.5%)**: Interactividad y dinámicas
- **Bootstrap (MDB)**: Framework de UI y componentes

### Backend & Base de Datos
- **Supabase**: Base de datos PostgreSQL con Row Level Security (RLS)
- **Supabase SSR**: Manejo de sesiones y autenticación

### Herramientas
- **Sass**: Compilador de SCSS a CSS
- **Git & GitHub**: Control de versiones y Pages

## 🚀 Instalación y Uso

### Requisitos previos
- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/mariawkpazcerpa-lang/Portafolio-Cerpa-Oficial.git
   cd Portafolio-Cerpa-Oficial
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Compilar SCSS a CSS (en modo observador)**
   ```bash
   npm run dev
   ```
   Este comando iniciará Sass en modo watch, compilando automáticamente los cambios en los archivos `.scss`.

4. **Servir localmente**
   - Abre `index.html` en tu navegador, o
   - Usa un servidor local (ej: Live Server en VSCode)

## 📋 Secciones del Portafolio

### 🏠 Inicio
- Presentación principal con efecto neon
- Descripción profesional

### ℹ️ Sobre mí
- Información académica (Ingeniería en Informática - UBA)
- Certificaciones profesionales
- Stack tecnológico completo
- Experiencia laboral

### 🎯 Portafolio
- Galería de proyectos dinámica
- Cargada desde `proyectos.json`
- Detalles de cada proyecto

### 📧 Contacto
- Formulario de contacto
- Información de contacto directo

## 🎨 Personalización

### Cambiar colores y temas
Los colores se gestionan mediante CSS variables en `css/style.css`:

```css
:root {
  --primary-color: #your-color;
  --bg-color: #your-bg;
  --text-color: #your-text;
  /* más variables... */
}
```

### Agregar nuevos proyectos
Edita `proyectos.json` y agrega nuevos objetos al array:

```json
{
  "id": 1,
  "nombre": "Mi Proyecto",
  "descripcion": "Descripción del proyecto",
  "tecnologias": ["HTML", "CSS", "JavaScript"],
  "enlace": "https://...",
  "imagen": "img/proyecto.jpg"
}
```

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 Dispositivos móviles (320px en adelante)
- 📱 Tablets (768px en adelante)
- 💻 Laptops (1024px en adelante)
- 🖥️ Pantallas grandes (1440px en adelante)

## 🔐 Seguridad

- **Row Level Security (RLS)** en Supabase para proteger datos sensibles
- **Validación de formularios** en cliente y servidor
- **Variables de entorno** para configuración sensible

## 🌐 Deploy

El portafolio está preparado para GitHub Pages:

```bash
# El sitio se despliega automáticamente en:
https://mariawkpazcerpa-lang.github.io/Portafolio-Cerpa-Oficial/
```

## 📚 Recursos Adicionales

- [Bootstrap (MDB) Documentation](https://mdbootstrap.com/docs/standard/)
- [Supabase Documentation](https://supabase.com/docs)
- [Sass Documentation](https://sass-lang.com/documentation)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🛠️ Scripts Disponibles

| Comando | Descripción |
|---------|-----------|
| `npm run dev` | Inicia Sass en modo watch para compilar SCSS |
| `npm test` | Ejecuta tests (por configurar) |

## 📝 Información de Contacto

- **Correo**: mariawkpazcerpa@gmail.com
- **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/mar%C3%ADa-de-la-paz-cerpa-1b875015b/)
- **GitHub**: [GitHub Profile](https://github.com/mariawkpazcerpa-lang)

## 📄 Licencia

Este proyecto está bajo la licencia especificada en `License.txt`.

## 👨‍💻 Autor

**María de la Paz Cerpa**
- Estudiante de Ingeniería en Informática (UBA)
- Frontend Developer especializada en interfaces modernas y responsivas
- Apasionada por crear experiencias de usuario excepcionales

---

⭐ Si te gusta este portafolio, no olvides darle una estrella en GitHub.

Hecho con ❤️ por [Paz Cerpa](https://github.com/mariawkpazcerpa-lang)
