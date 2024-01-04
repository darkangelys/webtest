// #! 🪧 IMAGERIE ECG RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//!! JSX
import { ImagerieECGListRiskgard } from './RiskgardImagerieECGList.jsx';

//! ImagerieECGRiskgard()
export function ImagerieECGRiskgard() {
    // todo>> console
    const consoleTxt = '.📑 ImagerieAccueilRiskgard';
    FPrintConsole(consoleTxt);
    
    // todo>> HTML
    return (
        <>
            <section key="ImagerieECGRiskgard" id="ImagerieECGRiskgard" className="ImagerieECGRiskgard">
                <div key="ImagerieECGRiskgardContent" id="ImagerieECGRiskgardContent" className="ImagerieECGRiskgardContent RiskgardContent">
                    <ImagerieECGListRiskgard/>
                </div>
            </section>
        </>
    )
}