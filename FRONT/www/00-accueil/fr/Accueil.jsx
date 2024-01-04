// #! 🪧 ACCEUIL JSX
// #! 🔣 FR

//! IMPORT
//!! JSX
import { AccueilMenu } from './AccueilMenu.jsx';

//!! CSS
import '../../00-accueil/css/accueil.css';

//!! F()
import { FPrintConsole } from '../../00-fonctions/FPrint.jsx';
import { FTitrePageHelmet } from '../../00-fonctions/FTitre.jsx';

//! Accueil()
export default function Accueil() {
    // todo>> console
    const consoleTxt = '.📑 Accueil';
    FPrintConsole(consoleTxt);

    // todo>> titre page
    const pageTitle = '🔻PIXEWEBCREA🔻Home';


    // todo>> HTML
    return (
        <>
            {/* //todo>> changement titre */}
            {/* permet de changer le titre de la page avec react-helmet */}
            <FTitrePageHelmet page={pageTitle}/>

            {/* //todo>> contenu accueil */}
            <section key="Accueil" id="Accueil" className="Accueil">
                <AccueilMenu/>
            </section>
        </>
    )
}