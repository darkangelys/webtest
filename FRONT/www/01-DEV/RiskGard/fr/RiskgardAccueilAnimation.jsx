// #! 🪧 ACCUEIL ANIMATION RISKGARD
// #! 🔣 FR

//! IMPORT
//!! BIBLIOTHEQUE
//? useState
// c'est un hook dans React qui permet de gérer l'état local dans des composants fonctionnels. Lorsqu'il est appelé, il retourne un tableau de deux éléments : la valeur actuelle de l'état et une fonction pour le mettre à jour. L'état initial est défini par le paramètre passé à useState(). Chaque fois que la fonction de mise à jour est appelée, React met à jour la valeur de l'état et re-rend le composant pour refléter le nouvel état, permettant ainsi de créer des interfaces interactives et réactives. Ce hook est essentiel pour manipuler des données comme des compteurs, des formulaires, ou pour contrôler l'affichage des composants.
import { useState } from 'react';

//!! JSX
import { CoeurRiskgard } from './RiskgardCoeur.jsx';
import { NavAccueilRiskgard } from './RiskgardNavAccueil.jsx';

//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//! AccueilAnimationRiskgard()
export function AccueilAnimationRiskgard() {
    // todo>> console
    const consoleTxt = '.📑 AccueilAnimationRiskgard';
    FPrintConsole(consoleTxt);

    // todo>> gestionnaire des états d'affichage
    // enregistre l'etat d'affichage du coeur et de l'ecg
    const [
        showCoeurRiskgard,
        setCoeurRiskgard
    ] = useState(true);

    // enregistre l'etat d'affichage du menu
    const [
        showNavAccueilRiskgard,
        setNavAccueilRiskgard
    ] = useState(false);

    
    // todo>> animation accueil risKgard
    // a
    const ClickCroixRiskgard = () => {
        // todo>> console
        const consoleTxt = '.📑 CroixClickRiskgard';
        FPrintConsole(consoleTxt);
    
        // todo>> navigation accueil riskGard
        // changer le style CoeurAccueilRiskgard
        document.getElementById('CoeurRiskgard').classList.add('CoeurRiskgardDesactivate');

        // desactivé apres 1s
        setTimeout(() => {
            // modifie l'etat pour afficher le coeur
            setCoeurRiskgard(false)
            // modifie l'etat pour afficher le menu
            setNavAccueilRiskgard(true)
            }, 1000);
    }

    // todo>> HTML
    return (
        <>
            {/* //todo>> animation accueil riskgard */}
            <section key="AccueilAnimationRiskgard" id="AccueilAnimationRiskgard" className="AccueilAnimationRiskgard">
                {/* //todo>> coeur accueil riskgard */}
                {showCoeurRiskgard && <CoeurRiskgard click={ClickCroixRiskgard}/>}

                {/* //todo>> navigation accueil riskgard */}
                {showNavAccueilRiskgard && <NavAccueilRiskgard/>}
            </section>
        </>
    )
}