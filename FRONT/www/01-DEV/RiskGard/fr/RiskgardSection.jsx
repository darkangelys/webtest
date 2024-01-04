// #! 🪧 DOCUMENTATION RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';
import { FTitrePageHelmet } from '../../../00-fonctions/FTitre.jsx';

//!! JSX
import { DocumentationRiskgard } from './RiskgardDocumentation.jsx';
import { DetecteurRiskgard } from './RiskgardDetecteur.jsx';
import { ImagerieECGRiskgard } from './RiskgardImagerieECG.jsx';

//! SectionRiskgard()
export function SectionRiskgard(title) {
    // todo>> console
    const consoleTxt = '.📑 SectionRiskgard';
    FPrintConsole(consoleTxt);

    // todo>> titre page
    const pageTitle = `🔻RiskGard🔻${title.title}`;

    // todo>> affichage section
    let section = '';
    switch (title.title) {
        case 'Documentation': {
            section = <DocumentationRiskgard/>;
            return section;
        }
        case 'Détecteur': {
            section = <DetecteurRiskgard/>;
            return section;
        }
        case 'Imagerie ECG': {
            section = <ImagerieECGRiskgard/>;
            return section;
        }
        case 'Infos': {break;}
        case 'Admin': {break;}
    }

    // todo>> HTML
    return (
        <>
            {/* //todo>> titre page */}
            <FTitrePageHelmet page={pageTitle} />

            {/* //todo>> contenu doc riskgard */}
            <section key="SectionRiskgard" id="SectionRiskgard" className="SectionRiskgard">
                <div key="SectionRiskgardContent" id="SectionRiskgardContent" className="SectionRiskgardContent">
                    {section}
                </div>
            </section>
        </>
    )
}