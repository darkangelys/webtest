// #! 🪧 FLIEN JSX
// fonctions qui permettent de creer un lien

//! FLienHTML()
// creer un lien HTML <a></a>
export function FLienHTML({href, alt, idName, className, nom, texte, urlImage}) {
    return (
        <a 
        href={href} 
        alt={alt} 
        id={idName} 
        className={className}
        title={nom}
        >
          <p>{texte}</p>
          <img src={urlImage}/>
        </a>
      );
}