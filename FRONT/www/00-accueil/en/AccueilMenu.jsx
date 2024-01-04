// #! 🪧 ACCUEIL MENU JSX
// #! 🔣 EN

//! IMPORT
//!! F()
import { FPrintConsole } from '../../00-fonctions/FPrint.jsx';
import { FLienHTML } from '../../00-fonctions/FLien.jsx';

//!! TABLEAUX
import { TabLiensHome } from '../../00-tableaux/TabLiensHome.jsx';

//! AccueilMenuEN()
export function AccueilMenu() {
    // todo>> console
    const consoleTxt = '.📑 AccueilMenu';
    FPrintConsole(consoleTxt);

    // todo>> HTML
    return (
        <>
            {/* //todo>> home menu */}
            <section key="AccueilMenu" id="AccueilMenu" className="AccueilMenu">
                <div key="AccueilMenuContent" id="AccueilMenuContent" className="AccueilMenuContent">  
                    {/* links */}
                    {TabLiensHome.map((lien) => (
                        <div id={lien.id} key={lien.key}>
                            <FLienHTML
                            href={lien.href}
                            alt={lien.alt}
                            idName={lien.idName}
                            className={lien.className}
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