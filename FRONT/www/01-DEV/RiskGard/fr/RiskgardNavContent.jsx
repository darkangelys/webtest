// #! 🪧 NAVIGATION CONTENT RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//! NavContentRiskGard()
export function NavContentRiskgard({title, setTitle}) {
    // todo>> console
    const consoleTxt = '.📑 NavContentRiskGard';
    FPrintConsole(consoleTxt);

    // todo>> affichage navigation
    setTimeout(() => {
        document.getElementById("NavContentRiskgard").classList.add("NavContentRiskgardAnimation");
        document.getElementById("NavContentRiskgard").classList.add("grid");
        document.getElementById("NavContentRiskgard").classList.remove("none")
    }, 1000);

    // todo>> mise a jour titre
    const updateTitleSection = (newTitle) => {
        setTitle(newTitle);
    };

    // todo>> HTML
    return (
        <>
            {/* //todo>> contenu nav content riskgard */}
            <section key="NavContentRiskgard" id="NavContentRiskgard" className="NavContentRiskgard none">
                <div key="NavRiskgard" id="NavRiskgard" className="NavRiskgard">
                    <div key="NavLien1Riskgard" id="NavLien1Riskgard" className="NavLien1Riskgard NavLienRiskgard">
                        <a title="Documentation" onClick={() => updateTitleSection("Documentation")}>
                            <img src="/www/00-images/riskgard/menu/book-black.png" alt="logo documentation" className="normal"/>
                            <img src="/www/00-images/riskgard/menu/book-blue.png" alt="logo documentation" className="hover"/>
                        </a>
                    </div>
                    <div key="NavLien2Riskgard" id="NavLien2Riskgard" className="NavLien2Riskgard NavLienRiskgard">
                    <a title="Détecteur" onClick={() => updateTitleSection("Détecteur")}>
                            <img src="/www/00-images/riskgard/menu/coeur-white.png" alt="logo détecteur" className="normal"/>
                            <img src="/www/00-images/riskgard/menu/coeur-blue.png" alt="logo détecteur" className="hover"/>
                        </a>
                    </div>
                    <div key="NavLien3Riskgard" id="NavLien3Riskgard" className="NavLien3Riskgard NavLienRiskgard">
                        <a title="Imagerie ECG" onClick={() => updateTitleSection("Imagerie ECG")}>
                            <img src="/www/00-images/riskgard/menu/ecg-white.png" alt="logo ECG" className="normal"/>
                            <img src="/www/00-images/riskgard/menu/ecg-blue.png" alt="logo ECG" className="hover"/>
                        </a>
                    </div>
                    <div key="NavLien4Riskgard" id="NavLien4Riskgard" className="NavLien4Riskgard NavLienRiskgard">
                        <a title="Infos" onClick={() => updateTitleSection("Infos")}>
                            <img src="/www/00-images/riskgard/menu/infos-white.png" alt="logo infos" className="normal"/>
                            <img src="/www/00-images/riskgard/menu/infos-blue.png" alt="logo infos" className="hover"/>
                        </a>
                    </div>
                    <div key="NavLien5Riskgard" id="NavLien5Riskgard" className="NavLien5Riskgard NavLienRiskgard">
                        <a title="Adminitration" onClick={() => updateTitleSection("Adminitration")}>
                            <img src="/www/00-images/riskgard/menu/cadenas-white.png" alt="logo connexion" className="normal"/>
                            <img src="/www/00-images/riskgard/menu/cadenas-open-blue.png" alt="logo connexion" className="hover"/>
                        </a>
                    </div>
                </div>
                <div key="NavTitleRiskgard" id="NavTitleRiskgard" className="NavTitleRiskgard">
                    <p>{title}</p>
                </div>
            </section>
        </>
    )
}