// #! 🪧 ACCUEIL MENU JSX
// #! 🔣 FR

//! IMPORT
//!! F()
import { FPrintConsole } from '../../00-fonctions/FPrint.jsx';
import { FLienHTML } from '../../00-fonctions/FLien.jsx';

//!! TABLEAUX
import { TabLiensHome, TabLiensHomeProjets } from '../../00-tableaux/TabLiensHome.jsx';

//! AccueilMenu()
export function AccueilMenu() {
    // todo>> console
    const consoleTxt = '.📑 AccueilMenu';
    FPrintConsole(consoleTxt);

    // todo>> HTML
    return (
        <>
            {/* //todo>> menu accueil*/}
            <section key="AccueilMenu" id="AccueilMenu" className="AccueilMenu">
                <div key="AccueilMenuContent" id="AccueilMenuContent" className="AccueilMenuContent">
                    {/* liens */}
                    {TabLiensHome.map((lien) => (
                        <div id={lien.id} key={lien.key}>
                            <FLienHTML
                            href={lien.href}
                            alt={lien.alt}
                            idName={lien.idName}
                            className={lien.className}
                            nom={lien.nom}
                            texte={lien.texte}
                            urlImage={lien.urlImage}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}