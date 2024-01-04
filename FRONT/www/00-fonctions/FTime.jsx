// #! 🪧 FTIME JSX
// fonctions pour afficher des elements

//! F()
//!! FTimeChrono()
// chrono démarage
export function FTimeChrono(texte) {
    // démarre le chrono
    console.time(texte);
}

//!! FTimeChronoEnd()
// chrono fin
export function FTimeChronoEnd(texte) {
    // coupe le chrono
    console.timeEnd(texte)
}