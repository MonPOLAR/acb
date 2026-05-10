/* ============================================================
   ACB - Association du Counseling Biblique
   Fichier : script.js
   ============================================================ */


/* ────────────────────────────────────────────────────────────
   1. FERMETURE DU MENU MOBILE AU CLIC SUR UN LIEN
   ──────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuCheck = document.getElementById('mobile-menu-check');
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuCheck) {
                mobileMenuCheck.checked = false;
            }
        });
    });

});
