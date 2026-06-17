# 🎨 Portafolio - María de la Paz Cerpa

Portafolio web profesional de **María de la Paz Cerpa**, Frontend Developer especializada en crear interfaces modernas, responsive e integradas con APIs y bases de datos.

## 🌟 Características

- **Diseño Moderno y Responsive**: Interfaz adaptable a todos los dispositivos (móvil, tablet, desktop)
- **Tema Claro/Oscuro**: Toggle de temas implementado con CSS variables para mejor experiencia de usuario
- **Integración con APIs**: Conexión a bases de datos mediante Supabase
- **Secciones Completas**: Inicio, Sobre mí, Portafolio de proyectos y Contacto
- **Arquitectura Limpia**: Código bien estructurado y mantenible
- **Performance Optimizado**: Carga rápida y eficiente en todos los dispositivos

## 📂 Estructura del Proyecto

```
📦 Portafolio-Cerpa-Oficial
├── 📄 index.html           # Página de inicio (hero)
├── 📄 about.html           # Sección "Sobre mí" con educación y tecnologías
├── 📄 portfolio.html       # Galería de proyectos dinámica
├── 📄 contact.html         # Formulario de contacto
├── 📄 proyectos.json       # Base de datos de proyectos
├── 📁 css/                 # Estilos compilados (CSS)
│   └── style.css
├── 📁 sass/                # Estilos fuente (SCSS)
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _components.scss
│   └── style.scss
├── 📁 js/                  # Scripts JavaScript
│   ├── theme.js           # Manejo de temas
│   ├── portfolio.js        # Lógica del portafolio
│   └── form.js            # Validación de formularios
├── 📁 img/                 # Imágenes y recursos
├── 📄 package.json         # Dependencias del proyecto
└── 📄 package-lock.json    # Lock file de npm
```

## 💻 Tecnologías Utilizadas

### Frontend
- **HTML5** (47.8%): Estructura semántica y accesible
- **SCSS** (37.3%): Estilos avanzados con preprocesador, variables y mixins
- **JavaScript** (14.9%): Interactividad, dinámicas y funcionalidades
- **Bootstrap (MDB)**: Framework de UI y componentes

### Backend & Base de Datos
- **Supabase**: Base de datos PostgreSQL con Row Level Security (RLS)
- **Supabase SSR**: Manejo de sesiones y autenticación

### Herramientas
- **Sass**: Compilador de SCSS a CSS
- **Git & GitHub**: Control de versiones y GitHub Pages
- **npm**: Gestor de dependencias

## 🚀 Instalación y Uso

### Requisitos previos
- Node.js (versión 14 o superior)
- npm (incluido con Node.js)
- Editor de código (VSCode recomendado)

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
   - Opción 1: Abre `index.html` en tu navegador
   - Opción 2: Usa un servidor local (ej: Live Server en VSCode)
   - Opción 3: Utiliza `http-server` o similar

## 📋 Secciones del Portafolio

### 🏠 Inicio (index.html)
- Presentación principal con efecto hero
- Descripción profesional destacada
- Call-to-action hacia otras secciones

### ℹ️ Sobre mí (about.html)
- Información personal y profesional
- Educación (Ingeniería en Informática - UBA)
- Certificaciones profesionales
- Stack tecnológico completo
- Experiencia laboral
- Habilidades técnicas y blandas

### 🎯 Portafolio (portfolio.html)
- Galería de proyectos dinámica
- Cargada desde `proyectos.json`
- Filtrado por tecnologías
- Detalles y enlaces a cada proyecto
- Responsive grid layout

### 📧 Contacto (contact.html)
- Formulario de contacto validado
- Información de contacto directo
- Enlaces a redes sociales
- Integración con correo electrónico

## 🎨 Personalización

### Cambiar colores y temas
Los colores se gestionan mediante CSS variables en `sass/_variables.scss`:

```scss
$primary-color: #6366f1;
$secondary-color: #ec4899;
$bg-color: #ffffff;
$text-color: #1f2937;
$border-color: #e5e7eb;
```

### Agregar nuevos proyectos
Edita `proyectos.json` y agrega nuevos objetos al array:

```json
{
  "id": 1,
  "nombre": "Mi Proyecto",
  "descripcion": "Descripción del proyecto",
  "tecnologias": ["HTML", "CSS", "JavaScript"],
  "enlace": "https://github.com/tu-usuario/tu-proyecto",
  "imagen": "img/proyecto.jpg",
  "fechaInicio": "2024-01",
  "estado": "completado"
}
```

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 **Móviles**: 320px en adelante
- 📱 **Tablets**: 768px en adelante
- 💻 **Laptops**: 1024px en adelante
- 🖥️ **Pantallas grandes**: 1440px en adelante

Utilizamos media queries y flexbox para garantizar adaptabilidad perfecta.

## ♿ Accesibilidad

- Semántica HTML correcta
- Atributos ARIA implementados
- Contraste de colores optimizado
- Navegación por teclado
- Soporte para lectores de pantalla

## 🔐 Seguridad

- **Row Level Security (RLS)** en Supabase para proteger datos sensibles
- **Validación de formularios** en cliente y servidor
- **Variables de entorno** para configuración sensible
- **Protección CSRF** en formularios
- **HTTPS** para conexiones seguras

## 🌐 Deploy

El portafolio está preparado para GitHub Pages:

```bash
# El sitio se despliega automáticamente en:
https://mariawkpazcerpa-lang.github.io/Portafolio-Cerpa-Oficial/
```

### Pasos para desplegar
1. Asegúrate que los cambios estén en `main`
2. GitHub Actions compilará automáticamente
3. La versión en vivo se actualiza en GitHub Pages

## 📚 Recursos Adicionales

- [Bootstrap (MDB) Documentation](https://mdbootstrap.com/docs/standard/)
- [Supabase Documentation](https://supabase.com/docs)
- [Sass Documentation](https://sass-lang.com/documentation)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/)

## 🛠️ Scripts Disponibles

| Comando | Descripción |
|---------|-----------|
| `npm run dev` | Inicia Sass en modo watch para compilar SCSS |
| `npm run build` | Compila SCSS en producción (minificado) |
| `npm test` | Ejecuta tests (por configurar) |
| `npm start` | Inicia el servidor local |

## 📊 Composición del Proyecto

- **HTML**: 47.8% - Estructura semántica
- **SCSS**: 37.3% - Estilos avanzados
- **JavaScript**: 14.9% - Interactividad

## 📝 Información de Contacto

- **Email**: [mariawkpazcerpa@gmail.com](mailto:mariawkpazcerpa@gmail.com)
- **LinkedIn**: [María de la Paz Cerpa](https://www.linkedin.com/in/mar%C3%ADa-de-la-paz-cerpa-1b875015b/)
- **GitHub**: [@mariawkpazcerpa-lang](https://github.com/mariawkpazcerpa-lang)
- **Portfolio**: [Ver en vivo](https://mariawkpazcerpa-lang.github.io/Portafolio-Cerpa-Oficial/)

## 📄 Licencia

Este proyecto está bajo la licencia especificada en `LICENSE.txt`.

## 👨‍💻 Autor

**María de la Paz Cerpa**
- 🎓 Estudiante de Ingeniería en Informática (UBA)
- 💼 Frontend Developer especializada en interfaces modernas y responsivas
- 🚀 Apasionada por crear experiencias de usuario excepcionales
- ⭐ Siempre en búsqueda de mejorar mis habilidades y crecer profesionalmente

---

## 🤝 Contribuciones

¿Tienes sugerencias o encontraste un bug? ¡Abre un issue o envía un pull request!

⭐ Si te gusta este portafolio, no olvides darle una estrella en GitHub.

---

Hecho con ❤️ por [Paz Cerpa](https://github.com/mariawkpazcerpa-lang)

**Última actualización**: Junio 2026
