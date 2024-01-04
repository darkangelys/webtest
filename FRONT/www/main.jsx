// #! 🪧 MAIN JSX

//! IMPORT
//!! BIBLIOTHEQUES
/*
 ? React
 C'est la bibliothèque JavaScript open-source développée par Facebook (et maintenant maintenue par une communauté de développeurs) pour la création d'interfaces utilisateur interactives et réactives. React facilite la construction d'applications Web en morcelant l'interface utilisateur en composants réutilisables. Ces composants sont généralement écrits en utilisant le langage JSX (JavaScript XML), une extension de JavaScript qui permet de décrire la structure de l'interface utilisateur de manière déclarative.
*/
import React from 'react';

/*
 ? ReactDOM
 C'est un module de la bibliothèque React qui fournit des méthodes pour interagir avec le DOM (Document Object Model). Il est utilisé pour rendre des composants React dans le DOM, mettre à jour l'interface utilisateur en réponse aux changements d'état, gérer les événements, etc.
*/
import ReactDOM from 'react-dom/client';

//!! JSX
import App from './app.jsx';

//!! F()
import { FPrintConsole } from './00-fonctions/FPrint.jsx';

//! CONSOLE
const consoleTxt = '🪧 DARKLAND';
FPrintConsole(consoleTxt);

//! MAIN
ReactDOM.createRoot(document.getElementById('root')).render(
  <>  
    {/* 
     //? <React.StrictMode> 
     c'est un composant spécial fourni par React qui permet d'activer le "mode strict" pour une partie de votre application React. Le mode strict est une fonctionnalité de développement qui vous aide à détecter les problèmes potentiels dans votre code et à améliorer la qualité de votre application. Il est souvent utilisé pendant la phase de développement pour faciliter la détection précoce des erreurs et des avertissements.
    */}
    <React.StrictMode key="reactStrict" id="reactStrict">
        {/* composants de main */}
        <App key="app" id="app"/>
    </React.StrictMode>
  </>
);