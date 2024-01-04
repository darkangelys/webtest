// #! 🪧 APP JSX

//! IMPORT
//!! BIBLIOTHEQUES
/*
 ? React-router-dom 
 C'est une bibliothèque JavaScript très populaire utilisée pour gérer la navigation dans les applications web construites avec React. Elle vous permet de créer des applications à pages multiples en gérant la navigation entre différentes vues ou composants de manière très fluide.
 
 ? Routeurs
 La bibliothèque react-router-dom propose plusieurs types de routeurs, dont le plus courant est le BrowserRouter. Un routeur est un composant React qui fournit un contexte de navigation à l'ensemble de votre application. Il gère l'URL actuelle et décide quel composant doit être rendu en fonction de cette URL.
 
 ? Routes
 Une route est associée à une URL spécifique et correspond à un composant particulier que vous souhaitez rendre lorsque l'URL correspond à cette route. Les routes sont définies en utilisant le composant <Route>.

 ? Liens
 Les liens <Link> sont utilisés pour créer des liens entre différentes parties de votre application. Lorsqu'un utilisateur clique sur un lien, il est redirigé vers la route associée sans que la page ne se recharge.
 
 ? Paramètres de route
 Vous pouvez définir des paramètres dynamiques dans vos routes pour capturer des valeurs variables dans l'URL. Par exemple, /
 users/:id pourrait être une route pour afficher les détails d'un utilisateur avec un identifiant spécifique.

 ? Redirections
 Vous pouvez utiliser <Redirect> pour rediriger les utilisateurs d'une route à une autre. Par exemple, si un utilisateur accède à une page non autorisée, vous pouvez le rediriger vers une page de connexion.
 
 ? Navigation programmatique
 En plus de la navigation à l'aide de liens, vous pouvez également effectuer une navigation programmatique en utilisant l'objet history fourni par react-router-dom. Cela vous permet de naviguer en réponse à des événements ou à des actions utilisateur sans avoir besoin d'un lien.

 ? Gestion du 404
 Vous pouvez configurer une route spéciale pour gérer les cas où l'URL ne correspond à aucune route existante, généralement utilisée pour afficher une page d'erreur 404
*/
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//!! JSX
//* FR
import Accueil from './00-accueil/fr/Accueil.jsx';
import Page404 from './00-accueil/fr/Page404.jsx';
// riskgard
import AccueilRiskgard from './01-DEV/RiskGard/fr/RiskgardAccueil.jsx';
import AppRiskgard from './01-DEV/RiskGard/fr/RiskgardApp.jsx';

//* EN
import AccueilEN from './00-accueil/en/Accueil.jsx';
import Page404EN from './00-accueil/en/Page404.jsx';

//!! F()
import { FPrintConsole } from './00-fonctions/FPrint.jsx';

//! APP()
function App() {
  // todo>> console
  const consoleTxt = '.📑 APP';
  FPrintConsole(consoleTxt);

  // todo>> HTML
  return (
    <>
      {/* //todo>> routes application */}
      <Router key="router" id="router">
        <Routes key="routes" id="routes">
          {/* //todo>> page accueil */}
          <Route key="routeAcceuil" path="/" element={<Accueil/>}/>

          {/* //todo>> page riskgard */}
          <Route key='routeRiskGard' path='/riskgard' element={<AccueilRiskgard/>}>
          </Route>

          {/* //todo>> autres pages */}
          {/* //!FR */}
          <Route key='routeAcceuilFR' path='/fr/accueil' element={<Accueil/>}/>

          {/* //*RISKGARD */}
          <Route key='routeRiskgardFR' path='/fr/riskgard' element={<AccueilRiskgard/>}/>
          <Route key='routeAppRiskgardFR' path='/fr/riskgard/app' element={<AppRiskgard/>}></Route>
          <Route key='routeDocRiskgardFR' path='/fr/riskgard/app/documentation' element={<AppRiskgard title="Documentation"/>}/>
          <Route key='routeDetecteurRiskgardFR' path='/fr/riskgard/app/detecteur' element={<AppRiskgard title="Détecteur"/>}/>
          <Route key='routeECGRiskgardFR' path='/fr/riskgard/app/ecg' element={<AppRiskgard title="Imagerie ECG"/>}/>
          <Route key='routeInfosRiskgardFR' path='/fr/riskgard/app/infos' element={<AppRiskgard title="Infos"/>}/>
          <Route key='routeAdminRiskgardFR' path='/fr/riskgard/app/admin' element={<AppRiskgard title="Administration"/>}/>

          {/* //!EN */}
          <Route key='routeAcceuilEN' path='/en/accueil' element={<AccueilEN/>}/>

          {/* //todo>> page 404 */}
          <Route key="route404" path="/*" element={<Page404/>}/>
          <Route key="route404" path="/fr/*" element={<Page404/>}/>
          <Route key="route404" path="/en/*" element={<Page404EN/>}/>
        </Routes>
      </Router>
    </>
  )
}

//! EXPORT
export default App;