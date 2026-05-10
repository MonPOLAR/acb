/* ============================================================
   ACB - Association du Counseling Biblique
   Fichier : script.js
   ============================================================ */


/* ────────────────────────────────────────────────────────────
   1. GESTION DES MENUS
   ──────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuCheck = document.getElementById('mobile-menu-check');
    const missionToggle   = document.getElementById('mission-toggle');
    const dropdownMenu    = document.querySelector('.dropdown-menu');


    /* ── 1. Fermeture du dropdown Mission au clic sur un sous-lien (desktop) ── */
    const dropdownLinks = document.querySelectorAll('.dropdown-item a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (missionToggle) {
                missionToggle.checked = false;
                /* Force le masquage immédiat sans attendre le repaint CSS */
                if (dropdownMenu) dropdownMenu.style.display = 'none';
                /* On retire le style inline après un court délai pour
                   laisser la checkbox reprendre le contrôle */
                setTimeout(() => {
                    if (dropdownMenu) dropdownMenu.style.display = '';
                }, 300);
            }
        });
    });


    /* ── 2. Fermeture du menu mobile au clic sur n'importe quel lien ────────── */
    const allNavLinks = document.querySelectorAll('.nav-links a');

    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuCheck) mobileMenuCheck.checked = false;
            if (missionToggle)   missionToggle.checked   = false;
        });
    });


    /* ── 3. Fermeture du dropdown si clic en dehors (desktop) ───────────────── */
    document.addEventListener('click', (e) => {
        if (missionToggle && !e.target.closest('.nav-item')) {
            missionToggle.checked = false;
        }
    });

});
