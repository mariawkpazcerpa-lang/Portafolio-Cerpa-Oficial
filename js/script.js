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