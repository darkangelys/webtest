// #! 🪧 ADMIN AJOUT PATIENT RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! BIBLIOTHEQUE
import { useState } from 'react';

//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//! AdminAjoutPatientRiskgard()
export function AdminAjoutPatientRiskgard({afficherFormulaireAjoutPatient, setAfficherFormulaireAjoutPatient, idPatient}) {
    // todo>> console
    const consoleTxt = '.📑 AdminAjoutPatientRiskgard';
    FPrintConsole(consoleTxt);

    // todo>> valeurs du formulaire patient
    let [formDataPatient, setFormDataPatient] = useState({
        idPatient: idPatient,
        prenomPatient: '',
        nomPatient: '',
        dateNaissancePatient: '',
        sexePatient: '',
        registreNatPatient: '',
      });

    // todo>> ferme le formulaire d'ajout patient
    const updateFormulaireAjoutPatientFalse = () => {
        setAfficherFormulaireAjoutPatient(false);
        FPrintConsole('▶️ ferme formulaire ajout patient');
    }

    // todo>> envoyer les données à la base de données
    const formPatientsRiskgard = async(e) => {
        e.preventDefault();

        // connexion serveurBack
        try{
            const reponse = await fetch('http://127.0.0.1:3001/riskgard-ajouter-patient', 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({formDataPatient})
            });

            // si pas erreur
            if (reponse.ok) {
                // gestion de la reponse du serveur
                FPrintConsole('✅ Données envoyées avec succès!');

                // Réinitialisation des champs du formulaire
                setFormDataPatient({
                    idPatient: idPatient,
                    prenomPatient: '',
                    nomPatient: '',
                    dateNaissancePatient: '',
                    sexePatient: '',
                    registreNatPatient: '',
                })

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
            {/* //todo>> contenu ajout patient riskgard */}
            <section key="AdminAjoutPatientRiskgard" id="AdminAjoutPatientRiskgard" className="AdminAjoutPatientRiskgard RiskgardContent">
                <div key="AdminAjoutPatientRiskgardContent" id="AdminAjoutPatientRiskgardContent" className="AdminAjoutPatientRiskgardContent">
                    <button className='fermer' onClick={updateFormulaireAjoutPatientFalse}>–</button>
                    <h1>Ajout Patient RiskGard</h1>
                    <form onSubmit={formPatientsRiskgard} className="ImagerieRiskgardForm">
                        <label>id Patient</label>
                        <input
                        readOnly
                        className='inputBlock'
                        value={idPatient}
                        placeholder="id du patient"
                        onChange={(e) => setFormDataPatient({ ...formDataPatient, idPatient: e.target.value })}/>

                        <label>prénom patient</label>
                        <input 
                        value={formDataPatient.prenomPatient}
                        placeholder="prénom du patient"
                        onChange={(e) => setFormDataPatient({ ...formDataPatient, prenomPatient: e.target.value })}/>

                        <label>nom patient</label>
                        <input 
                        value={formDataPatient.nomPatient}
                        placeholder="nom du patient"
                        onChange={(e) => setFormDataPatient({ ...formDataPatient, nomPatient: e.target.value })}/>

                        <label>date de naissance patient</label>
                        <input
                        type='date'
                        value={formDataPatient.dateNaissancePatient}
                        placeholder="date de naissance du patient"
                        onChange={(e) => setFormDataPatient({ ...formDataPatient, dateNaissancePatient: e.target.value })}/>
                        
                        <label>sexe patient</label>
                        <select 
                        value={formDataPatient.sexePatient}
                        placeholder="sexe du patient"
                        onChange={(e) => setFormDataPatient({ ...formDataPatient, sexePatient: e.target.value })}>
                            <option></option>
                            <option value="1">Homme</option>
                            <option value="2">Femme</option>
                        </select>

                        <label>numéro patient</label>
                        <input 
                        value={formDataPatient.registreNatPatient}
                        placeholder="numéro de registre nationale du patient"
                        onChange={(e) => setFormDataPatient({ ...formDataPatient, registreNatPatient: e.target.value })}/>

                        <button type="submit">Ajouter</button>
                    </form>
                </div>
            </section>
        </>
    )
}