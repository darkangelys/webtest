// #! 🪧 DOCUMENTATION RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! BIBLIOTHEQUE
import { useState } from 'react';

//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//!! JSX
import { TabRiskgardDocsInsuffisanceCardiaque } from '../../../00-tableaux/TabRiskgardDocs-insuffisanceCardiaque.jsx';

//! DocumentationRiskgard()
export function DocumentationRiskgard() {
    // todo>> console
    const consoleTxt = '.📑 DocumentationRiskgard';
    FPrintConsole(consoleTxt);

    // todo>> TabDocsRiskgardInsuffisanceCardiaque
    // data : données de TabDocsRiskgardInsuffisanceCardiaque
    const data = TabRiskgardDocsInsuffisanceCardiaque.map((article, id)=>{
        if(id>=1){
            return (
                <>
                    {/* //todo>> articles */}
                    <section key={`Doc${id}Riskgard`} id={`Doc${id}Riskgard`} className={`Doc${id}Riskgard DocRiskgard`}>
                        <img src={`/www/00-images/riskgard/docs/${article.img}`} alt={`image article riskgard ${article.title}`} />
                        <h1>{article.title}</h1>
                        <p className='texteCle'>{article.texteCle}</p>
                        <p>{article.texte}</p>
                        <p className='lien' title={`lire l'article`}>◢</p>
                        <p className='puce'>◈</p>
                    </section>
                </>
            )
        }
    });
    let articles = data;

    // todo>> recherche
    // todo>>si la recherche est vide
    // gestionnaire valeur search de la barre de recherche
    let [search, setSearch] = useState('');

    // affiche tous les articles
    if(search===''){
        articles;
    }
    
    // todo>> si la recherche n'est pas vide
    // gestionnaire de la barre de recherche
    const searchChange = (e) => {
        setSearch(e.target.value);
    }

    // filtre les articles en fonction de la barre de recherche
    const filteredArticles = TabRiskgardDocsInsuffisanceCardiaque.filter((article, id) => {
        if(id>=1){
            return article.title.toLowerCase().includes(search.toLowerCase());
        }
    });

    // affiche les articles filtrés
    articles = filteredArticles.map((article, id)=>{
        return (
            <>
                {/* //todo>> articles */}
                <section key={`Doc${id}Riskgard`} id={`Doc${id}Riskgard`} className={`Doc${id}Riskgard DocRiskgard`}>
                    <img src={`/www/00-images/riskgard/docs/${article.img}`} alt={`image article riskgard ${article.title}`} />
                    <h1>{article.title}</h1>
                    <p className='texteCle'>{article.texteCle}</p>
                    <p>{article.texte}</p>
                    <p className='lien' title={`lire l'article`}>◢</p>
                    <p className='puce'>◈</p>
                </section>
            </>
        )
    })

    
    // todo>> HTML
    return (
        <>
            {/* //todo>> contenu documentation riskgard */}
            <section key="DocumentationRiskgard" id="DocumentationRiskgard" className="DocumentationRiskgard RiskgardContent">
                {/* //todo>> recherche */}
                <div key="RechercheRiskgard" id="RechercheRiskgard" className="RechercheRiskgard">
                    <input 
                    type="search" 
                    placeholder="Rechercher : titre de l'article"
                    
                    // ? onChange 
                    // permet de mettre a jour des données. Cet événement est déclenché lorsqu'une valeur change dans un élément HTML, comme un champ de texte (<input>), un menu déroulant (<select>), ou un groupe d'options (<radio>, <checkbox>).
                    onChange={searchChange}
                    />
                </div>

                {/* //todo>> articles */}
                <div key="DocumentationRiskgardContent" id="DocumentationRiskgardContent" className="DocumentationRiskgardContent">
                    {articles}
                </div>
            </section>
        </>
    )
}