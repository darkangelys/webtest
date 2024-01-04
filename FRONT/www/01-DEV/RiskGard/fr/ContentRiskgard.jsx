// #! 🪧 CONSTENT RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! BIBLIOTHEQUE
import { useState } from 'react';

//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//!! JSX
import { NavContentRiskgard } from './NavContentRiskGard.jsx';
import { SectionRiskgard } from './SectionRiskgard.jsx';

//! ContentRiskGard()
export function ContentRiskgard({title}) {
    // todo>> console
    const consoleTxt = '.📑 ContentRiskGard';
    FPrintConsole(consoleTxt);

    // todo>> mise a jour titre
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