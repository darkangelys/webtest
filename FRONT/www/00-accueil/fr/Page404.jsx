// #! 🪧 PAGE 404 JSX
// #! 🔣 FR

//! IMPORT
//!! CSS
import '../../00-accueil/css/Page404.css';

//!! F()
import { FPrintConsole } from '../../00-fonctions/FPrint.jsx';
import { FTitrePageHelmet } from '../../00-fonctions/FTitre.jsx';

//! Page404()
export default function Page404() {
    // todo>> console
    const consoleTxt = '.📑 Page404';
    FPrintConsole(consoleTxt);

    // todo>> titre page
    const pageTitle = '🔻PIXEWEBCREA🔻404 - Page no found';

    // todo>> HTML
    return (
        <>
            {/* //todo>> changement titre */}
            <FTitrePageHelmet page={pageTitle}/>

            {/* //todo>> contenu page 404 */}
            <section key="Page404" id="Page404" className="Page404">
                <div key="Page404Content" id="Page404Content" className="Page404Content">
                    <h1 key="Page404ContentH1" id="Page404ContentH1" className="Page404ContentH1">404</h1>
                    <h2 key="Page404ContentH2" id="Page404ContentH2" className="Page404ContentH2">Page introuvable</h2>
                    <p key="Page404ContentP" id="Page404ContentP" className="Page404ContentP">La page que vous recherchez n’existe pas.</p>
                </div>
            </section>
        </>
    )
}