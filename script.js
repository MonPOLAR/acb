/* ============================================================
   ACB - Association du Counseling Biblique
   Fichier : script.js
   ============================================================ */


/* ────────────────────────────────────────────────────────────
   1. FERMETURE DU MENU MOBILE AU CLIC SUR UN LIEN
   ──────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuCheck = document.getElementById('mobile-menu-check');
    const missionToggle   = document.getElementById('mission-toggle');


    /* ── 1. Fermeture du dropdown Mission au clic sur un sous-lien (desktop) ── */
    const dropdownLinks = document.querySelectorAll('.dropdown-item a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (missionToggle) {
                missionToggle.checked = false;
            }
        });
    });


    /* ── 2. Fermeture du menu mobile au clic sur n'importe quel lien ────────── */
    const allNavLinks = document.querySelectorAll('.nav-links a');

    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuCheck) {
                mobileMenuCheck.checked = false;
            }
            if (missionToggle) {
                missionToggle.checked = false;
            }
        });
    });


    /* ── 3. Fermeture du dropdown si clic en dehors (desktop) ───────────────── */
    document.addEventListener('click', (e) => {
        if (missionToggle && !e.target.closest('.nav-item')) {
            missionToggle.checked = false;
        }
    });

});
