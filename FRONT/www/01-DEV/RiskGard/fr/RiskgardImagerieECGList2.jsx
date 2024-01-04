// #! 🪧 DETECTEUR LIST RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! BIBLIOTHEQUE
import { useEffect, useState } from 'react'; 

//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//!! JSX
import { DetecteurFormulaireRiskgard }  from './RiskgardDetecteurForm.jsx';
import { AdminAjoutDossiersPatientsRiskgard } from './RiskgardAdminAjoutDossiersPatient.jsx';
import { AdminAjoutPatientRiskgard } from './RiskgardAdminAjoutPatient.jsx';
import { AdminAjoutMedecinRiskgard } from './RiskgardAdminAjoutMedecin.jsx';

//! DetecteurListRiskgard()
export function DetecteurListRiskgard() {
    // todo>> console
    const consoleTxt = '.📑 ImagerieECGListRiskgard';
    FPrintConsole(consoleTxt);

    // todo>> relancehr le serveurBack
    const reloadServer = () => {
        fetch('/serveur-reload', {
            method: 'GET'
        })
        .then(response => {
            if (response.status === 200) {
                console.log('Serveur redémarré avec succès.');
                // Vous pouvez effectuer des actions supplémentaires ici si nécessaire
            } else {
                console.error('Erreur lors du redémarrage du serveur.');
            }
        })
        .catch(error => {
            console.error('Erreur lors du redémarrage du serveur :', error);
        });
    };
    
    // todo>> gestionnaire tableaux
    //* tableau dossiers patients
    // connexion http dossiers patients
    const httpDossiersPatients = 'http://127.0.0.1:3001/riskgard-patients-dossier';

    // id dossier patient
    const [idDossierPatient, setIdDossierPatient] = useState(0);

    // tableau dossier patients
    const [
        tableauDossierPatient,
        setTableauDossierPatient
    ] = useState([]);

    //* tableau patients
    // connexion http patients
    const httpPatients = 'http://127.0.0.1:3001/riskgard-patients';

    // id patient
    const [idPatient, setIdPatient] = useState(0);

    // tableau patients
    const [
        tableauPatient,
        setTableauPatient
    ] = useState([]);

    //* tableau medecins
    // connexion http medecins
    const httpMedecins = 'http://127.0.0.1:3001/riskgard-medecins';

    // id medecin
    const [idMedecin, setIdMedecin] = useState(0);

    // tableau medecins
    const [
        tableauMedecin,
        setTableauMedecin
    ] = useState([]);

    //* tableau suivie ecg patients
    // connexion http suivie ecg patients
    const httpSuiviePatients = 'http://127.0.0.1:3001/riskgard-patients-suivie';

    // id suivie patient
    const [idSuiviePatient, setIdSuiviePatient] = useState(0);

    // tableau suivie patients
    const [
        tableauSuiviePatient,
        setTableauSuiviePatient
    ] = useState([]);

    // todo>> récupération des données
    useEffect(() => {
        // relancehr le serveurBack
        reloadServer();

        // récupération des données des médecins
        fetch(httpMedecins)
            .then(response => response.json())
            .then(data => setTableauMedecin(data))
            .then(setIdMedecin(tableauMedecin.length + 1))
            .catch(error => console.error('Erreur lors de la récupération des données des médecins:', error));

        // récupération des données des patients
        fetch(httpPatients)
            .then(response => response.json())
            .then(data => setTableauPatient(data))
            .then(setIdPatient(tableauPatient.length + 1))
            .catch(error => console.error('Erreur lors de la récupération des données des patients:', error));

        // récupération des données des dossiers patients
        fetch(httpDossiersPatients)
            .then(response => response.json())
            .then(data => setTableauDossierPatient(data))
            .then(setIdDossierPatient(tableauDossierPatient.length + 1))
            .catch(error => console.error('Erreur lors de la récupération des données des dossiers patients:', error));

        // récupération des données des suivie patients
        fetch(httpSuiviePatients)
            .then(response => response.json())
            .then(data => {
                setTableauSuiviePatient(data);
                setIdSuiviePatient(data.length + 1);
            })
            .catch(error => console.error('Erreur lors de la récupération des données des suivie ecg patients:', error));
    }, []);

    // todo>> vérifie si le tableau est vide
    const tableauVide = (tableau) => !tableau || tableau.length === 0;
    
    // todo>> gestionnaire affichage desformulaires
    //* formulaire ajout dossier patient
    // ouvre le formulaire d'ajout d'un dossier patient
    const [
        afficherFormulaireAjoutDossierPatient,
        setAfficherFormulaireAjoutDossierPatient
    ] = useState(false);
    const updateFormulaireAjoutDossierPatientTrue = () => {
        setAfficherFormulaireAjoutDossierPatient(true);
        FPrintConsole('▶️ afficher formulaire ajout dossier patient');
    }

    //* formulaire ajout patient
    // ouvre le formulaire d'ajout d'un patient
    const [
        afficherFormulaireAjoutPatient,
        setAfficherFormulaireAjoutPatient
    ] = useState(false);
    const updateFormulaireAjoutPatientTrue = () => {
        setAfficherFormulaireAjoutPatient(true);
        FPrintConsole('▶️ afficher formulaire ajout patient');
    }

    //* formulaire ajout medecin
    // ouvre le formulaire d'ajout d'un medecin
    const [
        afficherFormulaireAjoutMedecin,
        setAfficherFormulaireAjoutMedecin
    ] = useState(false);
    const updateFormulaireAjoutMedecinTrue = () => {
        setAfficherFormulaireAjoutMedecin(true);
        FPrintConsole('▶️ afficher formulaire ajout medecin');
    }

    // todo>> HTML
    return (
        <>
            {/* //todo>> contenu imagerie ecg liste riskgard */}
            <section key="ImagerieECGListRiskgard" id="ImagerieECGListRiskgard" className="ImagerieECGListRiskgard">
                <div key="ImagerieECGListRiskgardContent" id="ImagerieECGListRiskgardContent" className="ImagerieECGListRiskgardContent">
                    {/* tableau medecins vide */}
                    {tableauVide(tableauMedecin.length) === true && tableauVide(tableauPatient.length) === true && tableauVide(tableauDossierPatient.length) === true && (
                        <div className='NoDataTableRiskGard'>
                            <p>❌ Il n’y a aucun medecin enregistré.<br/>➡️ Veuilez ajouter un medecin</p>
                            <button onClick={updateFormulaireAjoutMedecinTrue}>Ajouter un medecin</button>
                        </div>
                    )}{afficherFormulaireAjoutMedecin === true && (
                        <AdminAjoutMedecinRiskgard
                        afficherFormulaireAjoutMedecin={afficherFormulaireAjoutMedecin}
                        setAfficherFormulaireAjoutMedecin={setAfficherFormulaireAjoutMedecin}
                        idMedecin={idMedecin}/>
                    )} 

                    {/* tableau patients vide */}
                    {tableauVide(tableauPatient) === true && tableauVide(tableauMedecin) !== true && tableauVide(tableauDossierPatient) === true && (
                        <div className='NoDataTableRiskGard'>
                        <p>❌ Il n’y a aucun patient enregistré.<br/>➡️ Veuilez ajouter un patient</p>
                        <button onClick={updateFormulaireAjoutPatientTrue}>Ajouter un patient</button>
                    </div>
                    )}{afficherFormulaireAjoutPatient === true && (
                        <AdminAjoutPatientRiskgard
                        afficherFormulaireAjoutPatient={afficherFormulaireAjoutPatient}
                        setAfficherFormulaireAjoutPatient={setAfficherFormulaireAjoutPatient}
                        idPatient={idPatient}/>
                    )}

                    {/* tableau dossier patients vide */}
                    {tableauVide(tableauPatient) !== true && tableauVide(tableauMedecin) !== true && tableauVide(tableauDossierPatient) === true && (
                        <div className='NoDataTableRiskGard'>
                            <p>❌ Il n’y a aucun dossier patient enregistré.<br/>➡️ Veuilez ajouter un dossier patient</p>
                            <button onClick={updateFormulaireAjoutDossierPatientTrue}>Ajouter un patient</button>
                        </div>
                    )}{afficherFormulaireAjoutDossierPatient === true && (
                        <AdminAjoutDossiersPatientsRiskgard
                        afficherFormulaireAjoutDossierPatient={afficherFormulaireAjoutDossierPatient}
                        setAfficherFormulaireAjoutDossierPatient={setAfficherFormulaireAjoutDossierPatient}
                        tableauPatient={tableauPatient}
                        idDossierPatient={idDossierPatient}/>
                    )}

                    {/* tableau imagerie ecg */}
                    {tableauVide(tableauPatient) !== true && tableauVide(tableauMedecin) !== true && tableauVide(tableauDossierPatient) !== true && (
                        <DetecteurFormulaireRiskgard
                        tableauPatient={tableauPatient}
                        tableauMedecin={tableauMedecin}
                        idSuiviePatient={idSuiviePatient}/>
                    )}
                </div>
            </section>
        </>
    )
}