// #! 🪧 CONSTENT RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! BIBLIOTHEQUE
import { useState } from 'react';

//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//!! JSX
import { NavContentRiskgard } from './RiskGardNavContent.jsx';
import { SectionRiskgard } from './RiskgardSection.jsx';

//! ContentRiskGard()
export function ContentRiskgard({title}) {
    // todo>> console
    const consoleTxt = '.📑 ContentRiskGard';
    FPrintConsole(consoleTxt);

    // todo>> mise a jour titre
    // gestionnaire valeur titre pour l'affichage du titre du contenu
    const [titleSection, setTitleSection] = useState(title);

    // todo>> HTML
    return (
        <>
            {/* //todo>> contenu content riskgard */}
            <section key="ContentRiskgard" id="ContentRiskgard" className="ContentRiskgard">
                <NavContentRiskgard title={titleSection} setTitle={setTitleSection}/>
                <SectionRiskgard title={titleSection}/>
            </section>
        </>
    )
}