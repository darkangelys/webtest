// #! 🪧 ACCUEIL RISKGARD
// #! 🔣 FR

//! IMPORT
//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';
import { FTitrePageHelmet } from '../../../00-fonctions/FTitre.jsx';

//!! JSX
import { AccueilAnimationRiskgard } from './AccueilAnimationRiskgard.jsx';
import { LogoAnimationRiskgard } from './LogoRiskgard.jsx';
import { NavSocialRiskgard } from './NavSocialRiskgard.jsx';

//!! CSS
import '../css/AccueilRiskgard.css';

//! AccueilRisKgard()
export default function AccueilRiskgard() {
    // todo>> console
    const consoleTxt = '.📑 AccueilRiskgard';
    FPrintConsole(consoleTxt);

    // todo>> titre page
    const pageTitle = '🔻RiskGard🔻Page d’acceuil';

    // todo>> HTML
    return (
        <>
            {/* //todo>> titre page */}
            <FTitrePageHelmet page={pageTitle}/>

            {/* //todo>> contenu accueil riskgard */}
            <section key="AccueilRisKgard" id="AccueilRisKgard" className="AccueilRisKgard">
                <div key="AccueilRisKgardContent" id="AccueilRisKgardContent" className="AccueilRisKgardContent">
                    <LogoAnimationRiskgard/>
                    <AccueilAnimationRiskgard/>
                    <NavSocialRiskgard/>
                </div>
            </section>
        </>
    );
}
