// #! 🪧 ADMIN AJOUT MEDECIN RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! BIBLIOTHEQUE
import { useState } from 'react';

//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//! AdminAjoutMedecinRiskgard()
export function AdminAjoutMedecinRiskgard({afficherFormulaireAjoutMedecin, setAfficherFormulaireAjoutMedecin, idMedecin}) {
    // todo>> console
    const consoleTxt = '.📑 AdminAjoutMedecinRiskgard';
    FPrintConsole(consoleTxt);

    // todo>> valeurs formulaire medecin
    let [
        formDataMedecin, 
        setFormDataMedecin
    ] = useState({
        idMedecin: idMedecin,
        prenomMedecin: '',
        nomMedecin: '',
        dateNaissanceMedecin: '',
        sexeMedecin: '',
        numMedecin: ''
      });

    // todo>> ferme le formulaire d'ajout medecin
    const updateFormulaireAjoutMedecinFalse = () => {
        setAfficherFormulaireAjoutMedecin(false);
        FPrintConsole('▶️ ferme formulaire ajout medecin');
    }

    // todo>> envoyer les données à la base de données
    const formMedecinsRiskgard = async(e) => {
        e.preventDefault();

        // connexion serveurBack
        try{
            // ajout medecin
            const reponse = await fetch('http://127.0.0.1:3001/riskgard-ajouter-medecin', 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({formDataMedecin})
            });

            // si pas erreur
            if(reponse.ok){
                // gestion de la reponse du serveur
                FPrintConsole('✅ Données envoyées avec succès!');

                // Réinitialisation des champs du formulaire
                setFormDataMedecin({
                    idMedecin: idMedecin,
                    prenomMedecin: '',
                    nomMedecin: '',
                    dateNaissanceMedecin: '',
                    sexeMedecin: '',
                    numMedecin: '',
                });

                // relancer la page
                window.location.reload();
            } else {
                FPrintConsole('❌ Échec de l\'envoi des données.');
            }
        } catch (error) {
            console.error('❌ Erreur lors de l\'envoi des données:', error);
        }
    };

    // todo>> HTML
    return (
        <>
            {/* //todo>> contenu ajout medecin riskgard */}
            <section key="AdminAjoutMedecinRiskgard" id="AdminAjoutMedecinRiskgard" className="AdminAjoutMedecinRiskgard RiskgardContent">
                <div key="AdminAjoutMedecinRiskgardContent" id="AdminAjoutMedecinRiskgardContent" className="AdminAjoutMedecinRiskgardContent">
                    <button className='fermer' onClick={updateFormulaireAjoutMedecinFalse}>–</button>
                    <h1>Ajout Médecin RiskGard</h1>
                    <form onSubmit={formMedecinsRiskgard} className="ImagerieRiskgardForm">
                        <label>id médecin</label>
                        <input 
                        readOnly
                        className='inputBlock'
                        value={formDataMedecin.idMedecin} 
                        placeholder='id du medecin'
                        onChange={(e) => setFormDataMedecin({ ...formDataMedecin, idMedecin: e.target.value })}/>

                        <label>prénom medecin</label>
                        <input 
                        value={formDataMedecin.prenomMedecin} 
                        placeholder='prénom du medecin'
                        onChange={(e) => setFormDataMedecin({ ...formDataMedecin, prenomMedecin: e.target.value })}/>

                        <label>nom medecin</label>
                        <input 
                        value={formDataMedecin.nomMedecin} 
                        placeholder='nom du medecin'
                        onChange={(e) => setFormDataMedecin({ ...formDataMedecin, nomMedecin: e.target.value })}/>

                        <label>date de naissance medecin</label>
                        <input
                        type="date" 
                        value={formDataMedecin.dateNaissanceMedecin} 
                        placeholder='date de naissance du medecin'
                        onChange={(e) => setFormDataMedecin({ ...formDataMedecin, dateNaissanceMedecin: e.target.value })}/>

                        <label>sexe medecin</label>
                        <select 
                        value={formDataMedecin.sexeMedecin} 
                        placeholder='sexe du medecin'
                        onChange={(e) => setFormDataMedecin({ ...formDataMedecin, sexeMedecin: e.target.value })}>
                            <option></option>
                            <option value="1">Homme</option>
                            <option value="2">Femme</option>
                        </select>

                        <label>numéro medecin</label>
                        <input 
                        value={formDataMedecin.numMedecin} 
                        placeholder='numéro d’ordre du medecin'
                        onChange={(e) => setFormDataMedecin({ ...formDataMedecin, numMedecin: e.target.value })}/>

                        <button type="submit">Ajouter</button>
                    </form>
                </div>
            </section>
        </>
    )
}