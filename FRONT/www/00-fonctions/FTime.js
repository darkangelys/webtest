// #! 🪧 FTIME JS
// fonctions pour afficher des elements

//! F()
//!! fTimeChrono()
// chrono démarage
export function fTimeChrono(texte) {
    // démarre le chrono
    console.time(texte);
}

//!! fTimeChronoEnd()
// chrono fin
export function fTimeChronoEnd(texte) {
    // coupe le chrono
    console.timeEnd(texte)
}