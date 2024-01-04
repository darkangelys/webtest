// #! 🪧 DETECTEUR FORMULAIRE RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! BIBLIOTHEQUE
import { useEffect, useState } from 'react';

//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//! DetecteurFormulaireRiskgard()
export function DetecteurFormulaireRiskgard({tableauPatient, tableauMedecin, idSuiviePatient}) {
    // todo>> console
    const consoleTxt = '.📑 DetecteurFormulaireRiskgard';
    FPrintConsole(consoleTxt);

    FPrintConsole('tableauPatient :'+ tableauPatient);
    FPrintConsole('tableauMedecin :'+ tableauMedecin);
    FPrintConsole('idSuiviePatient :'+idSuiviePatient);

    // todo>> valeurs formulaire suivie patients
    // formulaire
    const [formSuiviePatient, setFormSuiviePatient] = useState({
        idSuiviePatient: idSuiviePatient,
        numMedecinPatient: '',
        registreNatPatient: '',
        anginePatient: '',
        cholesterolPatient: '',
        depressionSTPatient: '',
        douleurThoraciquePatient: '',
        electrocardiographiePatient: '',
        frequenceCardiaquePatient: '',
        glycemiePatient: '',
        penteSTPatient: '',
        pressionArteriellePatient: '',
        vaisseauxFluoroscopiePatient: '',
        thalassemiePatient: ''
    });

    

    // todo>> valeurs selecteurs
    const [
        selectedPatient,
        setSelectedPatient
    ] = useState({
        nom: '',
        prenom: '',
        age: '',
        sexe: '',
        registreNatPatient: ''
    })

    // todo>> envoyer les données à la base de données
    const formSuiviePatientsRiskgard = async(e) => {
        e.preventDefault();

        // connexion serveurBack
        try{
            const reponse = await fetch('http://127.0.0.1:3001/riskgard-ajouter-suivie-patient', 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({formSuiviePatient})
            });

            // si pas erreur
            if (reponse.ok) {
                // gestion de la reponse du serveur
                FPrintConsole('✅ Données envoyées avec sucès!');

                // Réinitialisation des champs du formulaire
                setFormSuiviePatient({
                    idSuiviePatient: idSuiviePatient,
                    numMedecinPatient: '',
                    registreNatPatient: '',
                    anginePatient: '',
                    cholesterolPatient: '',
                    depressionSTPatient: '',
                    douleurThoraciquePatient: '',
                    electrocardiographiePatient: '',
                    frequenceCardiaquePatient: '',
                    glycemiePatient: '',
                    penteSTPatient: '',
                    pressionArteriellePatient: '',
                    vaisseauxFluoroscopiePatient: '',
                    thalassemiePatient: ''
                });

                // relancer la page
                window.location.reload();
            } else {
                FPrintConsole('❌ Erreur lors de l\'envoi des données!');
            }
        } catch(error) {
            console.error('❌ Erreur lors de l\'envoi des données:', error);
        }
    }

    // todo>> valeurs formulaire infos patients
    // mise à jour des informations patients
    const updateSelectedPatient = (e) => {
        const selectValue = e.target.value;
        const selectPatientInfo = tableauPatient.find((patient) => patient[7] === selectValue);

        if(selectPatientInfo){
            let [nom, prenom, age, sexe, registreNat] = [
                selectPatientInfo[1],
                selectPatientInfo[2],
                selectPatientInfo[3],
                selectPatientInfo[4],
                selectPatientInfo[7],
            ]

            // age en annee
            age = new Date().getFullYear() - new Date(age).getFullYear();

            // homme ou femme
            if (sexe === 1) {
                sexe = 'Homme';
            } else {
                sexe = 'Femme';
            }
            
            
            // mettre a jour selectedPatient
            setSelectedPatient({nom, prenom, age, sexe, registreNat});

            // mettre a jour formSuiviePatient
            setFormSuiviePatient({...formSuiviePatient, registreNatPatient: registreNat});
        } else {
            // mettre a jour selectedPatient
            setSelectedPatient({nom: '', prenom: '', dateNaissance: '', sexe: '', registreNat: ''});

            // mettre a jour formSuiviePatient vide
            setFormSuiviePatient({...formSuiviePatient, registreNatPatient: ''});
        }
    }

    // todo>> simulateur
    // gestionnaire d'affichage du simulateur
    let resultat = 0;
    const [showSimulateur, setShowSimulateur] = useState(false);

    // simulateur
    const simulateur = () => {
        if(showSimulateur===true){
            // angine
            if(formSuiviePatient.anginePatient==='0'){
                resultat = resultat;
            } else {
                resultat = resultat + 1;
            }

            // depression ST ❌

            // douleur thoracique
            if(formSuiviePatient.douleurThoraciquePatient==='4' || formSuiviePatient.douleurThoraciquePatient==='3'){
                resultat = resultat;
            } else {
                resultat = resultat + 1;
            }
            

            // electrocardiographie ❌

            // frequence cardiaque
            let fCardi = 220;
            const age = new Date().getFullYear() - new Date(tableauPatient[0][3]).getFullYear();
            fCardi = fCardi - age;
            if(formSuiviePatient.frequenceCardiaquePatient>=fCardi){
                resultat = resultat;
            } else {
                resultat = resultat + 1;
            }

            // glycémie
            if(formSuiviePatient.glycemiePatient<=120){
                resultat = resultat;
            } else {
                resultat = resultat + 1;
            }

            // pente ST
            if(formSuiviePatient.penteSTPatient==='1'){
                resultat = resultat;
            } else {
                resultat = resultat + 1;
            }

            // pression artérielle ❌

            // Nombre de vaisseaux Fluo
            if(formSuiviePatient.vaisseauxFluoroscopiePatient==='0'){
                resultat = resultat;
            } else {
                resultat = resultat + 1;
            }

            // thalassemie
            if(formSuiviePatient.thalassemiePatient==='3'){
                resultat = resultat;
            } else {
                resultat = resultat + 1;
            }

            // resultat
            if(resultat === 0){ return 'Pas de risque' } 
            else {return (<span>A risque</span>);}
        }
    }


    // todo>> HTML
    return (
        <>
            {/* //todo>> contenu formulaire detecteur */}
            <section key="DetecteurFormulaireRiskgard" id="DetecteurFormulaireRiskgard" className="DetecteurFormulaireRiskgard">
                <div key="DetecteurFormulaireRiskgardContent" id="DetecteurFormulaireRiskgardContent" className="DetecteurFormulaireRiskgardContent">
                    <div key='AnimationDetecteur' id='AnimationDetecteur' className={`AnimationDetecteur ${resultat > 0 ? 'red' : ''}`}>
                        <div></div>
                    </div>
                    <div key="DetecteurForm" id="DetecteurForm" className="DetecteurForm">
                        <div key='ImagerieRiskgardInfos' id='ImagerieRiskgardInfos' className={`ImagerieRiskgardInfos ${resultat > 0 ? 'red' : ''}`}>
                            <div>
                            <label>prénom</label>
                            <input readOnly value={selectedPatient.prenom}/>

                            <label>nom</label>
                            <input readOnly value={selectedPatient.nom}/>

                            <label>age</label>
                            <input readOnly value={selectedPatient.age}/>

                            <label>sexe</label>
                            <input readOnly value={selectedPatient.sexe}/>

                            <label>numero patient</label>
                            <input readOnly value={selectedPatient.registreNat}/>
                            </div>

                            <div className={`resultat ${resultat > 0 ? 'red' : ''}`}>
                            <label>resultat</label>
                            <p>{simulateur()}</p>
                            </div>
                        </div>
                        
                        <form onSubmit={formSuiviePatientsRiskgard} className="ImagerieRiskgardForm">
                            <label>id</label>
                            <input readOnly className='inputBlock' 
                            value={idSuiviePatient}
                            placeholder='is suivie patient'
                            onChange={() => setFormSuiviePatient({...formSuiviePatient, idSuiviePatient: idSuiviePatient})}/>

                            <label>Numéro medecin</label>
                            <select
                            value={formSuiviePatient.numMedecinPatient}
                            placeholder='numero d’ordre du médecin'
                            onChange={(e) => setFormSuiviePatient({...formSuiviePatient, numMedecinPatient: e.target.value})}>
                                <option></option>
                                {tableauMedecin.map((patient, id) => (
                                <option key={patient.id} value={patient[7]}>
                                {`${patient[1]} ${patient[2]} - ${patient[7]}`}
                                </option>
                            ))}
                            </select>

                            <label>registre nat patient</label>
                            <select
                            value={formSuiviePatient.registreNatPatient}
                            placeholder='numero d’ordre du médecin'
                            onChange={updateSelectedPatient}>
                                <option></option>
                                {tableauPatient.map((patient, id) => (
                                <option key={patient.id} value={patient[7]}>
                                {`${patient[1]} ${patient[2]} - ${patient[7]}`}
                                </option>
                            ))}
                            </select>
                            
                            <label>Antécédent angine</label>
                            <select
                            value={formSuiviePatient.anginePatient}
                            placeholder='angine induite par l’exercice oui/non'
                            onChange={(e) => setFormSuiviePatient({...formSuiviePatient, anginePatient: e.target.value})}>
                                <option></option>
                                <option value="0">non</option>
                                <option value="1">oui</option>
                            </select>

                            <label>Taux cholestérol (0-300)</label>
                            <input
                            type='number'
                            inputMode='numeric'
                            min='0'
                            max='300'
                            value={formSuiviePatient.cholesterolPatient}
                            placeholder='taux de cholestérol'
                            onChange={(e) => setFormSuiviePatient({...formSuiviePatient, cholesterolPatient: e.target.value})}/>

                            <label>Taux dépression ST (0 -20)</label>
                            <input
                            type='number'
                            inputMode='numeric'
                            min='0'
                            max='20'
                            value={formSuiviePatient.depressionSTPatient}
                            placeholder='taux de la dépression du segment ST'
                            onChange={(e) => setFormSuiviePatient({...formSuiviePatient, depressionSTPatient: e.target.value})}/>

                            <label>Douleur thoracique</label>
                            <select
                            value={formSuiviePatient.douleurThoraciquePatient}
                            placeholder='type de la douleur thoracique'
                            onChange={(e) => setFormSuiviePatient({...formSuiviePatient, douleurThoraciquePatient: e.target.value})}>
                                <option></option>
                                <option value="1">angine typique</option>
                                <option value="2">angine atypique</option>
                                <option value="3">douleur non-angineuse</option>
                                <option value="4">asymptomatique</option>
                            </select>

                            <label>Electrocardiographie</label>
                            <select
                            value={formSuiviePatient.electrocardiographiePatient}
                            placeholder='résultat de l’électrocardiographique'
                            onChange={(e) => setFormSuiviePatient({...formSuiviePatient, electrocardiographiePatient: e.target.value})}>
                                <option></option>
                                <option value="0">normal</option>
                                <option value="1">anormale</option>
                                <option value="2">hypertrophie</option>
                            </select>

                            <label>Taux frequence cardiaque (0-220)</label>
                            <input
                            type='number'
                            inputMode='numeric'
                            min='0'
                            max='220'
                            value={formSuiviePatient.frequenceCardiaquePatient}
                            placeholder='taux de la frequence cardiaque'
                            onChange={(e) => setFormSuiviePatient({...formSuiviePatient, frequenceCardiaquePatient: e.target.value})}/>

                            <label>Taux glycemique (0-300)</label>
                            <input
                            type='number'
                            inputMode='numeric'
                            min='0'
                            max='300'
                            value={formSuiviePatient.glycemiePatient}
                            placeholder='taux de glycemie'
                            onChange={(e) => setFormSuiviePatient({...formSuiviePatient, glycemiePatient: e.target.value})}/>

                            <label>Taux pente ST</label>
                            <select
                            value={formSuiviePatient.penteSTPatient}
                            placeholder='taux de la pente du segment ST'
                            onChange={(e) => setFormSuiviePatient({...formSuiviePatient, penteSTPatient: e.target.value})}>
                                <option></option>
                                <option value="1">Pente Ascendante</option>
                                <option value="2">Plat</option>
                                <option value="3">Pente Descendante</option>
                            </select>

                            <label>Taux pression arterielle (0-200)</label>
                            <input
                            type='number'
                            inputMode='numeric'
                            min='0'
                            max='200'
                            value={formSuiviePatient.pressionArteriellePatient}
                            placeholder='taux de la pression arterielle au repos'
                            onChange={(e) => setFormSuiviePatient({...formSuiviePatient, pressionArteriellePatient: e.target.value})}/>

                            <label>Nombre de vaisseaux Fluo (0-4)</label>
                            <input
                            type='number'
                            inputMode='numeric'
                            min='0'
                            max='4'
                            value={formSuiviePatient.vaisseauxFluoroscopiePatient}
                            placeholder='nombre de vaisseaux nombre de gros vaisseaux colorés par fluoroscopie'
                            onChange={(e) => setFormSuiviePatient({...formSuiviePatient, vaisseauxFluoroscopiePatient: e.target.value})}/>
                            
                            <label>Thalassemie</label>
                            <select
                            value={formSuiviePatient.thalassemiePatient}
                            placeholder='type de thalassemie'
                            onChange={(e) => setFormSuiviePatient({...formSuiviePatient, thalassemiePatient: e.target.value})}>
                                <option></option>
                                <option value="3">flux sanguin normal</option>
                                <option value="6">défaut fixe</option>
                                <option value="7">défaut réversible</option>
                            </select>
                            
                            <p className='detecteur' onClick={() => setShowSimulateur(true)}>Detecteur</p>
                            <button type='submit'>Enregistrer</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}