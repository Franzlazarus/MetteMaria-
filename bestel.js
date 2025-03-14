// Eenvoudig script voor de bestelknop
document.addEventListener('DOMContentLoaded', function() {
    const bestelKnop = document.getElementById('bestel-mimosa');
    
    if (bestelKnop) {
        bestelKnop.addEventListener('click', function(e) {
            // De link gaat nu direct naar het formulier dankzij de href="#bestelformulier"
            // Dus hier hoeven we niets speciaals te doen
            // Het navigeren gebeurt automatisch door de browser
        });
    }
    
    // Optioneel: scroll naar formulier als de URL een hash heeft
    if (window.location.hash === '#bestelformulier') {
        const form = document.getElementById('bestelformulier');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
        }
    }
});