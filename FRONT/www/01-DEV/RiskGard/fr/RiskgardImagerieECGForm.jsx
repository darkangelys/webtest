// #! 🪧 IMAGERIE ECG FROMULAIRE RISKGARD JSX
// #! 🔣 FR

//! IMPORT
//!! BIBLIOTHEQUE
import { useState } from 'react';

//!! F()
import { FPrintConsole } from '../../../00-fonctions/FPrint.jsx';

//! ImagerieECGFormRiskgard()
export function ImagerieECGFormRiskgard({ tableauPatient, tableauMedecin, idSuivieEcgPatient }) {
    // todo>> console
    const consoleTxt = '.📑 ImagerieECGFormRiskgard';
    FPrintConsole(consoleTxt);
    FPrintConsole('id: '+idSuivieEcgPatient)

    // todo>> date courante
    // date actuelle
    const currentDate = new Date();
    // date format YYYYMMDD
    const formattedDate = `${currentDate.getFullYear()}${(currentDate.getMonth()+1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
    // time format HH.MM.SS
    const formattedTime = `${currentDate.getHours().toString().padStart(2, '0')}${currentDate.getMinutes().toString().padStart(2, '0')}${currentDate.getSeconds().toString().padStart(2, '0')}`; 

    // todo>> télécharger image ECG
    // gestionnaire valeur image pour l'enregistrement de l'image
    const [image, setImage] = useState(null);

    // onDragOver
    //? e.preventDefault();
    // pour annuler le comportement par défaut d'un événement. Elle empêche l'action par défaut qui se produit normalement lorsque l'événement se produit.
    const dragOver = (e) => {e.preventDefault();}

    // onDrop
    const drop = (e) => {
        e.preventDefault();
        
        // enregistrer l'image
        const file = e.dataTransfer.files[0];
        if(file){
            // verrifier si l'image est en jpg ou en png
            if(file.type === 'image/jpeg' || file.type === 'image/png'){
                // mettre à jour image
                setImage(URL.createObjectURL(file));
                
                // mettre à jour automatiquement l'élément input de type file avec le fichier déposé
                const fileInput = document.getElementById('ImagerieRiskgardDepotFile');
                if(fileInput){
                    fileInput.files = e.dataTransfer.files;
                }
            } else {   
                // afficher message d'erreur
                alert("❌Veuillez sélectionner une image au format JPEG ou PNG.");
            }

        }
    }

    // imageUplaod
    const imageUplaod = (e) => {
        // enregistrer l'image
        const file = e.target.files[0];
        if(file){
            // verrifier si l'image est en jpg ou en png
            if(file.type === 'image/jpeg' || file.type === 'image/png'){
                // mettre à jour image
                setImage(URL.createObjectURL(file));
            } else {   
                // afficher message d'erreur
                alert("❌Veuillez sélectionner une image au format JPEG ou PNG.");
            }
        }
    }

    // todo>> valeurs formulaire suivie ecg patients
    const [
        formDataSuivieECGPatient,
        setFormDataSuivieECGPatient
    ] = useState({
        idSuivieEcgPatient: idSuivieEcgPatient,
        numMedecinPatient: '',
        registreNatPatient: '',
        imageECGPatient: ''
    });

    // todo>> valeurs selecteurs
    // nom image ecg
    const [
        selectedPatient,
        setSelectedPatient
    ] = useState({
        nom: '',
        prenom: '',
        registreNatPatient: ''
    });

    // mise à jour des informations de l'image en fonction du patient et du medecin sélectionné
    const updateSelectImageECG = async(e) => {
        const selectValue = e.target.value;
        const selectedPatientInfo = tableauPatient.find((patient) => patient[7] === selectValue);

        if(selectedPatientInfo){
            const [nom, prenom, registreNatPatient] = [
                selectedPatientInfo[1],
                selectedPatientInfo[2],
                selectedPatientInfo[7],
            ];

            // mettre à jour selectedPatient
            setSelectedPatient({nom, prenom, registreNatPatient});

            // mettre à jour formDataSuivieECGPatient.registreNatPatient
            setFormDataSuivieECGPatient({
                ...formDataSuivieECGPatient,
                registreNatPatient: registreNatPatient
            });
        } else {
            // mettre à jour selectedPatient vide
            setSelectedPatient({nom: '', prenom: '', registreNatPatient: ''});

            // mettre à jour formDataSuivieECGPatient.registreNatPatient vide
            setFormDataSuivieECGPatient({
                ...formDataSuivieECGPatient,
                registreNatPatient: ''
            });
        }
    }

    // todo>> enregistrer l'image dans un autre chemin
    const enregistrerImage = async () => {
        // Vérifiez s'il y a une image à enregistrer
        if (image) {
        try {
            const formData = new FormData();
            formData.append('image', image);
    
            const response = await fetch('http://127.0.0.1:3001/riskgard-enregistrer-image', {
            method: 'POST',
            headers: {'Content-Type': 'multipart/form-data'},
            body: formData,
            });
    
            if (response.ok) {
            FPrintConsole('✅ Image enregistrée avec succès!');
            } else {
            FPrintConsole('❌ Échec de l\'enregistrement de l\'image.');
            }
        } catch (error) {
            console.error('❌ Erreur lors de l\'enregistrement de l\'image:', error);
        }
        }
    }

    // todo>> enregistrement de l'image
    // nom de l'image
    let imageFile = `IMGECGID${idSuivieEcgPatient}N${selectedPatient.registreNatPatient}${selectedPatient.nom[0]}${selectedPatient.prenom[0]}D${formattedDate}T${formattedTime}.png`;

    // todo>> envoyer les données à la base de données
    const formSuivieECGPatient = async(e) => {
        e.preventDefault();

        // nom de l'image
        formDataSuivieECGPatient.imageECGPatient = imageFile;

        // connexetion serveurBack
        try{
            const reponse = await fetch('http://127.0.0.1:3001/riskgard-ajouter-suivie-ecg-patients',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ formDataImagerieECG: formDataSuivieECGPatient })
            });

            // si pas erreur
            if (reponse.ok) {
                // gestion de la reponse du serveur
                FPrintConsole('✅ Données envoyées avec sucès!');
                
                // Réinitialisation des champs du formulaire
                setFormDataSuivieECGPatient({
                    idSuivieEcgPatient: idSuivieEcgPatient,
                    numMedecinPatient: '',
                    registreNatPatient: '',
                    imageECGPatient: ''
                });

                // réinitialiser l'image après l'envoi
                setImage(null);
            
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
            {/* //todo>> contenu formulaire imagerie ecg riskgard */}
            <section key="ImagerieECGFormRiskgard" id="ImagerieECGFormRiskgard" className="ImagerieECGFormRiskgard">
                {/* //todo>> image glisser-deposer */}
                <div key="ImagerieECGFormRiskgardContent" id="ImagerieECGFormRiskgardContent" className="ImagerieECGFormRiskgardContent">
                    {/* telechargement image : glisser-deposer*/}
                    <div
                    key="ImagerieRiskgardDepot"
                    id="ImagerieRiskgardDepot"
                    className="ImagerieRiskgardDepot"
                    >    
                        <div 
                        key="ImagerieRiskgardDepotGlisser" 
                        id="ImagerieRiskgardDepotGlisser" 
                        className="ImagerieRiskgardDepotGlisser"

                        //? onDragOver
                        //est utilisé pour gérer le comportement de survol lorsque l'utilisateur fait glisser un élément sur une zone de dépôt spécifique lors d'une opération de glisser-déposer. Cela permet de personnaliser la réaction de cette zone à l'opération de glisser-déposer.
                        onDragOver={dragOver}

                        //? onDrop
                        // est déclenché lorsqu'un élément est déposé (glissé et relâché) sur un autre élément, comme une zone de dépôt. Cet événement est couramment utilisé pour permettre aux utilisateurs de faire glisser des fichiers (par exemple, des images) depuis leur ordinateur et de les déposer dans une zone spécifique de votre interface utilisateur.
                        onDrop={drop}
                        >
                            <div>
                                {image && <img src={image} alt="Image sélectionnée" />}
                                <p className="texteCle">Glisser-deposer une image</p>
                            </div>
                        </div>
                        <input
                        id="ImagerieRiskgardDepotFile"
                        className='ImagerieRiskgardDepotFile' 
                        type="file" 
                        accept="image/jpeg, image/png"
                        placeholder="image" 
                        onChange={imageUplaod}/>
                    </div>
                    
                    {/* //todo>> image uploader formulaire */}
                    <div 
                    key="ImagerieRiskgardUpload" 
                    id="ImagerieRiskgardUpload" 
                    className="ImagerieRiskgardUpload">
                        {/* formulaire image ecg */}
                        <form onSubmit={formSuivieECGPatient} className='ImagerieRiskgardForm'>
                            <label>id</label>
                            <input
                            readOnly
                            className='inputBlock'
                            value={idSuivieEcgPatient}
                            placeholder='id suivie ECG patient'
                            onChange={() => setFormDataSuivieECGPatient({ ...formDataSuivieECGPatient, idSuivieEcgPatient: idSuivieEcgPatient })}/>

                            <label>numéro médecin</label>
                            <select
                            value={formDataSuivieECGPatient.numMedecinPatient}
                            placeholder="numéro d’ordre du médecin"
                            onChange={(e) => setFormDataSuivieECGPatient({ ...formDataSuivieECGPatient, numMedecinPatient: e.target.value })}>
                                <option></option>
                                {tableauMedecin.map((medecin, id) => (
                                    <option key={medecin.id}
                                    value={medecin[7]}>
                                        {`${medecin[1]} ${medecin[2]} - ${medecin[7]}`}
                                    </option>
                                ))}
                            </select>

                            <label>numéro patient</label>
                            <select
                            value={formDataSuivieECGPatient.registreNatPatient}
                            placeholder='numéro registre nationale du patient'
                            onChange={updateSelectImageECG}>
                                <option></option>
                                {tableauPatient.map((patient, id) => (
                                    <option key={patient.id} value={patient[7]}>
                                        {`${patient[1]} ${patient[2]} - ${patient[7]}`}
                                    </option>
                                ))}
                            </select>

                            <label>image ECG</label>
                            <input 
                            readOnly
                            className='inputBlockImg' 
                            value={imageFile} 
                            placeholder='image' 
                            onChange={(e) => setFormDataSuivieECGPatient({ ...formDataSuivieECGPatient, imageECGPatient: e.target.value })}/>
                            
                            <p className='detecteur'>Detecteur</p>
                            <button type="submit">Enregistrer</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}