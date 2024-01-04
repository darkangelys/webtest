// #! 🪧 DETECTEUR RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//!! JSX
import { DetecteurListRiskgard } from './RiskgardImagerieECGList2.jsx';

//! DetecteurRiskgard()
export function DetecteurRiskgard() {
    // todo>> console
    const consoleTxt = '.📑 DetecteurRiskgard';
    FPrintConsole(consoleTxt);

    // todo>> HTML
    return (
        <>
            <section key="ImagerieECGRiskgard" id="ImagerieECGRiskgard" className="ImagerieECGRiskgard">
                <div key="ImagerieECGRiskgardContent" id="ImagerieECGRiskgardContent" className="ImagerieECGRiskgardContent RiskgardContent">
                    <DetecteurListRiskgard/>
                </div>
            </section>
        </>
    )
}