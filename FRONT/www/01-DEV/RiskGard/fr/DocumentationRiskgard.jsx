// #! 🪧 DOCUMENTATION RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//!! JSX
import { TabDocsRiskgardInsuffisanceCardiaque } from '../../../00-tableaux/TabDocsRiskgard-insuffisanceCardiaque.jsx';

//! DocumentationRiskgard()
export function DocumentationRiskgard() {
    // todo>> console
    const consoleTxt = '.📑 DocumentationRiskgard';
    FPrintConsole(consoleTxt);

    // todo>> data TabDocsRiskgardInsuffisanceCardiaque
    const data = TabDocsRiskgardInsuffisanceCardiaque.map((article, id)=>{
        if(id>=1){
            return (
            <div key={`Doc${id}Riskgard`} id={`Doc${id}Riskgard`} className={`Doc${id}Riskgard DocRiskgard`}>
                <img src={`/www/00-images/riskgard/docs/${article.img}`} alt={`image article riskgard ${article.titre}`} />
                <h1>{article.title}</h1>
                <p className='texteCle'>{article.texteCle}</p>
                <p>{article.texte}</p>
            </div>
        )
        }
    });

    // todo>> HTML
    return (
        <>
            {/* //todo>> documentation riskgard */}
            <section key="DocumentationRiskgard" id="DocumentationRiskgard" className="DocumentationRiskgard">
                <div key="DocumentationRiskgardContent" id="DocumentationRiskgardContent" className="DocumentationRiskgardContent">
                    {data}
                </div>
            </section>
        </>
    )
}