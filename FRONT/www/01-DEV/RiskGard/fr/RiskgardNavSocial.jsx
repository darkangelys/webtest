// #! 🪧 NAVIGATION SOCIAL RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//! NavSocialRiskgard()
export function NavSocialRiskgard() {
    // todo>> console
    const consoleTxt = '.📑 NavSocialRiskgard';
    FPrintConsole(consoleTxt);

    // todo>> HTML
    return (
        <>
            {/* //todo>> navigation social riskgard */}
            <section key="NavSocialRiskgard" id="NavSocialRiskgard" className="NavSocialRiskgard">
                <div key="NavSocialImgRiskgard" id="NavSocialImgRiskgard" className="NavSocialImgRiskgard">
                    <a href="#" title="Suivez-nous sur Youtube"><img src="/www/00-images/home/social/youtube-512x512.png" alt="logo youtube" /></a>
                    <a href="#" title="Suivez-nous sur Facebook"><img src="/www/00-images/home/social/fb-512x512.png" alt="logo facebook" /></a>
                    <a href="#" title="Suivez-nous sur Twitter"><img src="/www/00-images/home/social/twitter-512x512.png" alt="logo twitter" /></a>
                </div>
            </section>
        </>
    )
}