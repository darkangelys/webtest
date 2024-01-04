// #! 🪧 FTITRE JSX
// fonctions permettant de générer un titre

//! IMPORT
//!! BIBLIOTHEQUES
/*
 ? React-helmet
 C'est une bibliothèque React utilisée pour gérer les éléments <head> de votre application web. Elle permet de manipuler dynamiquement les balises <title>, <meta>, <link>, etc., en fonction de l'état de votre application ou de la route actuelle. Cela peut être particulièrement utile pour l'optimisation du référencement (SEO) et pour personnaliser les métadonnées de chaque page de votre application

 ? React-helmet-async
 C'est une alternative à la bibliothèque react-helmet qui permet également de gérer les éléments <head> de votre application React de manière asynchrone. La principale différence entre les deux réside dans la manière dont ils gèrent les rendus côté serveur (SSR - Server Side Rendering).
*/
import { Helmet, HelmetProvider } from 'react-helmet-async';
//!! F()
import { FPrintConsole } from './FPrint.jsx';

//! FTitrePageHTML()
// Change un titre de page avec HTML
export function FTitrePage({page}) {
  return (
    <>
      <title>{page}</title>
    </>
  )
}

//! FTitrePageUseEffet()
// Change un titre de page avec useEffect()
export function FTitrePageUseEffet({page}) {
  useEffect(() => {
    document.title = page;
  }, [page]);
  return null;
}

//! FTitrePageHelmet()
// Change un titre de page avec react-helmet
export function FTitrePageHelmet({page}) {  
  // todo>> HTML
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{page}</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
}