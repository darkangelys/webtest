// #! 🪧 APP RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';
import { FTitrePageHelmet } from '../../../00-fonctions/FTitre.jsx';

//!! JSX
import { LogoRiskgard } from './LogoRiskgard.jsx';
import { NavSocialRiskgard } from './NavSocialRiskgard.jsx';
import { ContentRiskgard } from './ContentRiskgard.jsx';

//!! CSS
import '../css/AppRiskgard.css';

//! AppRiskgard()
export default function AppRiskgard({title}) {
    // todo>> console
    const consoleTxt = '.📑 AppRiskgard';
    FPrintConsole(consoleTxt);

    // todo>> titre page
    const pageTitle = '🔻RiskGard🔻Application';

    // todo>> HTML
    return (
        <>
            {/* //todo>> titre page */}
            <FTitrePageHelmet page={pageTitle} />

            {/* //todo>> contenu app riskgard */}
            <section key="AppRisKgard" id="AppRisKgard" className="AppRisKgard">
                <div key="AppRisKgardContent" id="AppRisKgardContent" className="AppRisKgardContent">
                    <LogoRiskgard />
                    <ContentRiskgard title={title} />
                    <NavSocialRiskgard />
                </div>
            </section>
        </>
    )
}