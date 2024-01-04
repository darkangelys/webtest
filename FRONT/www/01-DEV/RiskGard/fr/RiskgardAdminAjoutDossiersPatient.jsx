// #! 🪧 ADMIN AJOUT DOSSIERS PATIENT RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! BIBLIOTHEQUE
import { useState } from 'react';

//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//! AdminAjoutDossiersPatientRiskgard()
export function AdminAjoutDossiersPatientsRiskgard({afficherFormulaireAjoutDossiersPatients, setAfficherFormulaireAjoutDossierPatient, tableauPatient, idDossierPatient}) {
    // todo>> console
    const consoleTxt = '.📑 AdminDossiersPatientsRiskgard';
    FPrintConsole(consoleTxt);
    FPrintConsole(tableauPatient);

    // todo>> valeurs formulaire dossiers patients
    let [
        formDataDossiersPatients, 
        setFormDataDossiersPatients
    ] = useState({
        idDossierPatient: idDossierPatient,
        registreNatPatient: '',
        dossierPatient: '',
    })

    // todo>> gestionnaire formulaire dossiers patients
    const updateFormDataDossiersPatients = () => {
        setAfficherFormulaireAjoutDossierPatient(false);
        FPrintConsole('▶️ ferme formulaire ajout patient');
    }

    // todo>> envoyer les données à la base de données
    const formDossiersPatientsRiskgard = async(e) => {
        e.preventDefault();

        // connexion serveurBack
        try{
            const reponse = await fetch('http://127.0.0.1:3001/riskgard-ajouter-dossiers-patients', 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({formDataDossiersPatients})
            });

            // si pas erreur
            if(reponse.ok){
                // gestion de la reponse du serveur
                FPrintConsole('✅ Données envoyées avec succès!');

                // Réinitialisation des champs du formulaire
                setFormDataDossiersPatients({
                    idDossierPatient: idDossierPatient,
                    registreNatPatient: '',
                    dossierPatient: '',
                })

                // relancer la page
                window.location.reload();
            } else {
                FPrintConsole('❌ Échec de l\'envoi des données.');
            }
        } catch(error) {
            console.error('❌ Erreur lors de l\'envoi des données:', error);
        }
    }

    // todo>> HTML
    return (
        <>
            {/* //todo>> contenu ajout dossiers patients riskgard */}
            <section key="AdminAjoutDossierPatientsRiskgard" id="AdminAjoutDossierPatientsRiskgard" className="AdminAjoutDossierPatientsRiskgard RiskgardContent">
                <div key="AdminAjoutDossierPatientsRiskgardContent" id="AdminAjoutDossierPatientsRiskgardContent" className="AdminAjoutDossierPatientsRiskgardContent">
                    <button className='fermer' onClick={updateFormDataDossiersPatients}>–</button>
                    <h1>Ajout Dossier Patient RiskGard</h1>
                    <form className='ImagerieRiskgardForm' onSubmit={formDossiersPatientsRiskgard}>
                        <label>id Dossier Patient</label>
                        <input
                        readOnly
                        className='inputBlock'
                        value={formDataDossiersPatients.idDossierPatient}
                        placeholder='id du dossier patient'/>
                        
                        <label>Registre National</label>
                        <select
                        value={formDataDossiersPatients.registreNatPatient}
                        placeholder='registre national'
                        onChange={(e) => setFormDataDossiersPatients({ ...formDataDossiersPatients, registreNatPatient: e.target.value })}>
                            <option></option>
                            {tableauPatient.map((patient, id) => (
                                <option key={patient.id} value={patient[7]}>
                                {`${patient[1]} ${patient[2]} - ${patient[7]}`}
                                </option>
                            ))}
                        </select>

                        <label>Dossier Patient</label>
                        <input
                        value={formDataDossiersPatients.dossierPatient}
                        placeholder='dossier patient'
                        onChange={(e) => setFormDataDossiersPatients({ ...formDataDossiersPatients, dossierPatient: e.target.value })}></input>

                        <button type='submit'>Envoyer</button>
                    </form>
                </div>
            </section>
        </>
    )
}