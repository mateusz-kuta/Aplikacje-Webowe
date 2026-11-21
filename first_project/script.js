
document.addEventListener('DOMContentLoaded', function () {
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });
    }

    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    }
    });

    var themeSwitch = document.getElementById('themeSwitch');
    var savedTheme = localStorage.getItem('caravaggio-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('theme-light');
    }
    if (themeSwitch) {
        updateThemeLabel();
        themeSwitch.addEventListener('click', function () {
            document.body.classList.toggle('theme-light');
            var isLight = document.body.classList.contains('theme-light');
            localStorage.setItem('caravaggio-theme', isLight ? 'light' : 'dark');
            updateThemeLabel();
        });
    }
    function updateThemeLabel() {
        if (!themeSwitch) return;
        var isLight = document.body.classList.contains('theme-light');
        themeSwitch.textContent = isLight ? '☀ Tryb jasny' : '☾ Tryb ciemny';
    }
});
