// Gira la moneta (fronte <-> retro) quando la clicchi.
// Vale per ogni immagine con data-front e data-back, in tutte le pagine.
document.addEventListener('click', function (evento) {
    const img = evento.target.closest('img[data-front][data-back]');
    if (!img) return;

    const fronte = img.getAttribute('data-front');
    const retro = img.getAttribute('data-back');
    const mostraFronte = img.getAttribute('src') === fronte;

    img.setAttribute('src', mostraFronte ? retro : fronte);

    // Aggiorna anche la descrizione per chi usa un lettore di schermo
    img.alt = mostraFronte
        ? img.alt.replace('(fronte)', '(retro)')
        : img.alt.replace('(retro)', '(fronte)');
});
