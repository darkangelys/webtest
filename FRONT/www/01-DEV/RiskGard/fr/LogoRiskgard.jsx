// #! 🪧 LOGO RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! BIBLIOTHEQUE
import { useEffect, useState } from 'react';

//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//! LogoRiskgard()
export function LogoRiskgard() {
    // todo>> console
    const consoleTxt = '.📑 LogoRiskGard';
    FPrintConsole(consoleTxt);

    // todo>> HTML
    return (
        <>
            {/* //todo>> logo riskgard */}
            <section key="LogoRiskgard" id="LogoRiskgard" className="LogoRiskgard">
                <div key="LogoImgRiskgard" id="LogoImgRiskgard" className="LogoImgRiskgard">
                    <a href="/riskgard" title="Page d’accueil">
                        {/* logo site */}
                        <img src="/www/00-images/riskgard/favicon/android-chrome-512x512.png" alt="Logo de Riskgard" />
                        
                        {/* nom site */}
                        <span>RiskGard</span>
                    </a>
                    {/* description site */}
                    <p id="LogoDescRiskgard" className="LogoDescRiskgard">
                        <span id="logoDescStartRiskgard" className="logoDescStartRiskgard"></span>
                        <span id="logoDescMiddleRiskgard" className="logoDescMiddleRiskgard">Détecteur de risques cardiaques</span>
                        <span id="logoDescEndRiskgard" className="logoDescEndRiskgard"></span>
                    </p>
                </div>
            </section>            
        </>
    )
}

//! LogoAnimationRiskgard()
export function LogoAnimationRiskgard() {
    // todo>> console
    const consoleTxt = '.📑 LogoAnimationRiskGard';
    FPrintConsole(consoleTxt);

    // todo>> animation desription application
    // affiche la description de l'application lettre par lettre
    const descApp = 'Détecteur de risques cardiaques';
    const [ texte, setTexte ] = useState('');
    const [id, setId] = useState(0);
    useEffect(() => {
        if(id < descApp.length) {
            setTimeout(() => {
                setTexte(texte + descApp[id]);
                setId(id + 1);
            }, 1500/descApp.length);
            // divise la durée de l'annimation en fonction du nombre de caractères
        }
    })

    // todo>> HTML
    return (
        <>
            {/* //todo>> logo riskgard */}
            <section key="LogoRiskgard" id="LogoRiskgard" className="LogoRiskgard">
                <div key="LogoImgRiskgard" id="LogoImgRiskgard" className="LogoImgRiskgard">
                    <a href="/riskgard" title="Page d’accueil">
                        {/* logo site */}
                        <img src="/www/00-images/riskgard/favicon/android-chrome-512x512.png" alt="Logo de Riskgard" />
                        
                        {/* nom site */}
                        <span>RiskGard</span>
                    </a>
                    {/* description site */}
                    <p id="LogoDescRiskgard" className="LogoDescRiskgard">
                        <span id="logoDescStartRiskgard" className="logoDescStartRiskgard"></span>
                        <span id="logoDescMiddleRiskgard" className="logoDescMiddleRiskgard">{texte}</span>
                        <span id="logoDescEndRiskgard" className="logoDescEndRiskgard"></span>
                    </p>
                </div>
            </section>            
        </>
    )
}