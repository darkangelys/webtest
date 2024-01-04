// #! 🪧 COEUR RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//! CoeurAccueilRiskgard()
export function CoeurRiskgard({click}) {
    // todo>> console
    const consoleTxt = '.📑 CoeurAccueilRiskgard';
    FPrintConsole(consoleTxt);

    // todo>> HTML
    return (
        <>
            {/* //todo>> coeur accueil riskgard */}
            <section key="CoeurRiskgard" id="CoeurRiskgard" className="CoeurRiskgard">
                <div key="ECGAnimationRisKgard" id="ECGAnimation" className="ECGAnimation">
                    <span key="ECGImgRisKgard" id="ECGImg" className="ECGImg"></span>
                </div>
                <div key="CoeurAnimationRisKgard" id="CoeurAnimation" className="CoeurAnimation"></div>
                <div key="CroixAnimationRisKgard" id="CroixAnimation" className="CroixAnimation" title="ouvrir le menu" onClick={click}>
                </div>
            </section>
        </>
    )
}