// #! 🪧 ACCEUIL JSX
// #! 🔣 EN

//! IMPORT
//!! JSX
import { AccueilMenu } from './AccueilMenu.jsx';

//!! CSS
import '../../00-accueil/css/accueil.css';

//!! F()
import { FPrintConsole } from '../../00-fonctions/FPrint.jsx';
import { FTitrePageHelmet } from '../../00-fonctions/FTitre.jsx';

//! AccueilEN()
export default function Accueil() {
    // todo>> console
    const consoleTxt = '.📑 Accueil';
    FPrintConsole(consoleTxt);

    // todo>> page title
    const pageTitle = '🔻PIXEWEBCREA🔻Home';

    // todo>> HTML
    return (
        <>
            {/* //todo>> change title */}
            <FTitrePageHelmet page={pageTitle}/>

            {/* //todo>> content accueil */}
            <section key="Accueil" id="Accueil" className="Accueil">
                <AccueilMenu/>
            </section>
        </>
    )
}