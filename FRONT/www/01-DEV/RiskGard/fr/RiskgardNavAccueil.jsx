// #! 🪧 NAVIGATION ACCUEIL RISKGARD
// #! 🔣 FR

//! IMPORT
//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//! NavAccueilRiskgard()
export function NavAccueilRiskgard() {
    // todo>> console
    const consoleTxt = '.📑 NavAccueilRiskgard';
    FPrintConsole(consoleTxt);

    // todo>> HTML
    return (
        <>
            {/* //todo>> navigation accueil riskgard */}
            <section key="NavAccueilRiskgard" id="NavAccueilRiskgard" className="NavAccueilRiskgard">
                <div key="NavAccueilRiskgardForme1" id="NavAccueilRiskgardForme1" className='NavAccueilRiskgardForme1 NavAccueilRiskgardForme'></div>
                <div key="NavAccueilRiskgardForme2" id="NavAccueilRiskgardForme2" className='NavAccueilRiskgardForme2 NavAccueilRiskgardForme'></div>
                <div key="NavAccueilRiskgardForme3" id="NavAccueilRiskgardForme3" className='NavAccueilRiskgardForme3 NavAccueilRiskgardForme'></div>
                <div key="NavAccueilRiskgardForme4" id="NavAccueilRiskgardForme4" className='NavAccueilRiskgardForme4 NavAccueilRiskgardForme'></div>
            </section>

            {/* //todo>> liens riskgard */}
            <section key="NavAccueilRiskgardLiens" id="NavAccueilRiskgardLiens" className="NavAccueilRiskgardLiens">
                <div key="lien1RiskgardAccueil" id="lien1RiskgardAccueil" className="lien1RiskgardAccueil lienRiskgardAccueil">
                    <a href="/fr/riskgard/app/documentation" title="Documentation">
                        <img src="/www/00-images/riskgard/menu/book-black.png" className="normal"/>
                        <img src="/www/00-images/riskgard/menu/book-blue.png" className="hover"/>
                    </a>
                </div>
                <div key="lien2RiskgardAccueil" id="lien2RiskgardAccueil" className="lien2RiskgardAccueil lienRiskgardAccueil">
                    <a href="/fr/riskgard/app/detecteur" title="Détecteur">
                        <img src="/www/00-images/riskgard/menu/coeur-black.png" className="normal"/>
                        <img src="/www/00-images/riskgard/menu/coeur-white.png" className="hover"/>
                    </a>
                </div>
                <div key="lien3RiskgardAccueil" id="lien3RiskgardAccueil" className="lien3RiskgardAccueil lienRiskgardAccueil">
                    <a href="/fr/riskgard/app/ecg" title="Imagerie ECG">
                        <img src="/www/00-images/riskgard/menu/ecg-black.png" className="normal"/>
                        <img src="/www/00-images/riskgard/menu/ecg-white.png" className="hover"/>
                    </a>
                </div>
                <div key="lien4RiskgardAccueil" id="lien4RiskgardAccueil" className="lien4RiskgardAccueil lienRiskgardAccueil">
                    <a href="/fr/riskgard/app/infos" title="infos">
                        <img src="/www/00-images/riskgard/menu/infos-black.png" className="normal"/>
                        <img src="/www/00-images/riskgard/menu/infos-white.png" className="hover"/>
                    </a>
                </div>
                <div key="lien5RiskgardAccueil" id="lien5RiskgardAccueil" className="lien5RiskgardAccueil lienRiskgardAccueil">
                    <a href="/fr/riskgard/app/admin" title="Administration">
                        <img src="/www/00-images/riskgard/menu/cadenas-black.png" className="normal"/>
                        <img src="/www/00-images/riskgard/menu/cadenas-open-white.png" className="hover"/>
                    </a>
                </div>
            </section>
        </>
    )
}