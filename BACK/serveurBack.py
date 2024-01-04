# //!🪧 SERVER BACK PY

#! IMPORT
#!! BIBLIOTHEQUES
#? subprocess
# utilisée pour exécuter de nouveaux programmes ou commandes dans des processus séparés. Cela permet à votre script Python d'interagir avec d'autres programmes, d'exécuter des commandes dans le terminal ou le shell de votre système d'exploitation, et de gérer les entrées/sorties de ces processus.
import subprocess

#? flask
# framework web Python léger et minimaliste qui est principalement utilisé pour créer des applications web. Il offre une structure de base pour le développement web tout en laissant aux développeurs une grande flexibilité pour prendre des décisions architecturales et choisir les bibliothèques et les composants à utiliser en fonction de leurs besoins spécifiques.
import flask
from werkzeug.utils import secure_filename
import os
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from cachelib import SimpleCache

#? CORS
# CORS est une norme de sécurité qui régit la manière dont les navigateurs Web autorisent ou bloquent les requêtes HTTP entre différentes origines (domaines, protocoles ou ports). Il est utilisé pour empêcher les attaques de type Cross-Site Request Forgery (CSRF) et Cross-Site Scripting (XSS).
from flask_cors import CORS

#? mysql
# système de gestion de base de données relationnelle (SGBDR) qui est utilisé pour stocker, gérer et récupérer des données dans des bases de données relationnelles. Les bases de données relationnelles sont structurées en tables avec des relations définies entre elles. MySQL permet aux utilisateurs de créer, lire, mettre à jour et supprimer des données en utilisant le langage SQL (Structured Query Language).
import mysql.connector

#! FONCTIONS
#!! fIndexHTML()
# affiche le fichier la page d'accueil
def fIndexHTML():
    return (
        """
        <!-- 🪧 INDEX HTML -->
        <!doctype html>
        <html key="html" id="html" lang="fr">
            <!-- !HEAD -->
            <head key="head" id="head">
                <!-- on passe par le localhost:3000 pour charger les fichiers sur le serveur Backend -->
                <!-- *meta tags -->
                <meta key="metaUTF8" id="metaUTF8" charset="utf-8">
                <meta key="metaViewport" id="metaViewport" name="viewport" content="width=device-width, initial-scale=1.0" />
                <!-- *favicon -->
                <link key="favicon" id="favicon" rel="icon" type="image/x-icon" href="http://localhost:3000/www/00-images/back/favicon/favicon.ico">
                <!-- *styles -->
                <link key="resetCss" id="resetCss" rel="stylesheet" type="text/css" href="http://localhost:3000/www/00-accueil/css/reset.css">
                <link key="backCss" id="backCss" rel="stylesheet" type="text/css" href="http://localhost:3000/www/10-back/css/back.css">
                <!-- *fonts-->
                <!-- google apis -->
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <!-- google static -->
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <!-- google fuggles -->
                <link href="https://fonts.googleapis.com/css2?family=Fuggles&display=swap" rel="stylesheet">
                <!-- sedgwick ave display -->
                <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap" rel="stylesheet">
                <!-- google teko -->
                <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" rel="stylesheet">
                <!-- *titre du site -->
                <title key="title" id="title">🔻BACK🔻v0.0.1</title>
            </head>
            <!-- !BODY -->
            <body key="body" id="body" class="body">
                <!-- todo>> SERVER -->
                <section key="ServerBack" id="ServerBack" class="ServerBack">
                    <div key="ServerBackContent" id="ServerBackContent" class="ServerBackContent">
                        <div key="nomServerBack" id="nomServerBack" class="nomServerBack">
                            <h1>⁜ Server Back v0.0.1 ⁜</h1>
                        </div>
                        <!-- todo>> PixeWebCrea -->
                        <div key=titlePixewebcrea" id="titlePixewebcrea" class="titlePixewebcrea titleServerBack">
                            <h2>Pixewebcrea</h2>
                        </div>
                        <div key="pixewebcrea-sites" id="pixewebcrea-sites" class="pixewebcrea-sites servSql">
                            <div>
                            """+fTry('pixewebcrea_sites')+""" 
                            Sites Pixewebcrea
                                <a href="http://127.0.0.1:3001/pixewebcrea-sites">--»</a>
                            </div>
                        </div>
                        <div key="pixewebcrea-users" id="pixewebcrea-users" class="pixewebcrea-users servSql">
                            <div>
                            """+fTry('pixewebcrea_users')+""" 
                            Users Pixewebcrea
                                <a href="http://127.0.0.1:3001/pixewebcrea-users">--»</a>
                            </div>
                        </div>
                        <!-- todo>> RiskGard -->
                        <div key="titleRiskgard" id="titleRiskgard" class="titleRiskgard titleServerBack">
                            <h2>RiskGard</h2>
                        </div>
                        <div key="douleurThoraciqueRiskgard" id="douleurThoraciqueRiskgard" class="douleurThoraciqueRiskgard servSql">
                            <div>
                            """+fTry('riskgard_douleur_thoracique')+""" 
                            RiskGard Douleur Thoracique
                                <a href="http://127.0.0.1:3001/riskgard-douleur-thoracique">--»</a>
                            </div>
                        </div>
                        <div key="riskgardEffortAngine" id="riskgardEffortAngine" class="riskgardEffortAngine servSql">
                            <div>
                            """+fTry('riskgard_effort_angine')+""" 
                            RiskGard Effort Angine
                                <a href="http://127.0.0.1:3001/riskgard-effort-angine">--»</a>
                            </div>
                        </div>
                        <div key="riskgard-electrocardiographie" id="riskgard-electrocardiographie" class="riskgard-electrocardiographie servSql">
                            <div>
                            """+fTry('riskgard_electrocardiographie')+""" 
                            RiskGard Electrocardiographie
                                <a href="http://127.0.0.1:3001/riskgard-electrocardiographie">--»</a>
                            </div>
                        </div>
                        <div key="riskgard-glycemie" id="riskgard-glycemie" class="riskgard-glycemie servSql">
                            <div>
                            """+fTry('riskgard_glycemie')+""" 
                            RiskGard Glycemie
                                <a href="http://127.0.0.1:3001/riskgard-glycemie">--»</a>
                            </div>
                        </div>
                        <div key="riskgard-medecins" id="riskgard-medecins" class="riskgard-medecins servSql">
                            <div>
                            """+fTry('riskgard_medecins')+""" 
                            RiskGard Medecins
                                <a href="http://127.0.0.1:3001/riskgard-medecins">--»</a>
                            </div>
                        </div>
                        <div key="riskgard-patients" id="riskgard-patients" class="riskgard-patients servSql">
                            <div>
                            """+fTry('riskgard_patients')+""" 
                            RiskGard Patients
                                <a href="http://127.0.0.1:3001/riskgard-patients">--»</a>
                            </div>
                        </div>
                        <div key="riskgard-patients-dossier" id="riskgard-patients-dossier" class="riskgard-patients-dossier servSql">
                            <div>
                            """+fTry('riskgard_patients_dossier')+""" 
                            RiskGard Patients Dossier
                                <a href="http://127.0.0.1:3001/riskgard-patients-dossier">--»</a>
                            </div>
                        </div>
                        <div key="riskgard-patients-suivie" id="riskgard-patients-suivie" class="riskgard-patients-suivie servSql">
                            <div>
                            """+fTry('riskgard_patients_suivie')+""" 
                            RiskGard Patients Suivie
                                <a href="http://127.0.0.1:3001/riskgard-patients-suivie">--»</a>
                            </div>
                        </div>
                        <div key="riskgard-patients-suivie-ecg" id="riskgard-patients-suivie-ecg" class="riskgard-patients-suivie-ecg servSql">
                            <div>
                            """+fTry('riskgard_patients_suivie_ecg')+""" 
                            RiskGard Patients Suivie ECG
                                <a href="http://127.0.0.1:3001/riskgard-patients-suivie-ecg">--»</a>
                            </div>
                        </div>
                        <div key="riskgard-segment-st" id="riskgard-segment-st" class="riskgard-segment-st servSql">
                            <div>
                            """+fTry('riskgard_segment_st')+""" 
                            RiskGard Segment ST
                                <a href="http://127.0.0.1:3001/riskgard-segment-st">--»</a>
                            </div>
                        </div>
                        <div key="riskgard-sexe" id="riskgard-sexe" class="riskgard-sexe servSql">
                            <div>
                            """+fTry('riskgard_sexe')+""" 
                            RiskGard Sexe
                                <a href="http://127.0.0.1:3001/riskgard-sexe">--»</a>
                            </div>
                        </div>
                        <div key="riskgard-thalassemie" id="riskgard-thalassemie" class="riskgard-thalassemie servSql">
                            <div>
                            """+fTry('riskgard_thalassemie')+""" 
                            RiskGard Thalassemie
                                <a href="http://127.0.0.1:3001/riskgard-thalassemie">--»</a>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- todo>> NavBack -->
                <section key="NavBack" id="NavBack" class="NavBack">
                    <a href="http://localhost:3000/" title="Home"><img src="http://localhost:3000/www/00-images/back/favicon/favicon-32x32.png" /></a>
                </section>
            </body>
        </html>
        """
    )

#!! f404HTML()
# affiche la page 404
def f404HTML():
    return (
        """
        <!-- 🪧 404 HTML -->
        <!doctype html>
        <html key="html" id="html" lang="fr">
            <!-- !HEAD -->
            <head key="head" id="head">
                <!-- *favicon -->
                <link key="favicon" id="favicon" rel="icon" type="image/x-icon" href="http://localhost:3000/www/00-images/back/favicon/favicon.ico">
                <!-- *styles -->
                <link key="resetCss" id="resetCss" rel="stylesheet" type="text/css" href="http://localhost:3000/www/00-accueil/css/reset.css">
                <link key="backCss" id="backCss" rel="stylesheet" type="text/css" href="http://localhost:3000/www/10-back/css/back.css">
                <!-- *fonts-->
                <!-- google apis -->
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <!-- google static -->
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <!-- google fuggles -->
                <link href="https://fonts.googleapis.com/css2?family=Fuggles&display=swap" rel="stylesheet">
                <!-- sedgwick ave display -->
                <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap" rel="stylesheet">
                <!-- google teko -->
                <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" rel="stylesheet">
                <!-- *titre du site -->
                <title key="title" id="title">🔻BACK🔻PAGE 404 : Page non trouvée</title>
            </head>
            <!-- !BODY -->
            <body key="body" id="body" class="body">
                <!-- todo>> SERVER -->
                <section key="ServerBack" id="ServerBack" class="ServerBack">
                    <div key="ServerBackContent" id="ServerBackContent" class="ServerBackContent">
                        <div key="nomServerBack" id="nomServerBack" class="nomServerBack">
                            <h1>❗PAGE 404</h1>
                        </div>
                        <!-- todo>> PAGE404 -->
                        <div key="page404" id="page404" class="page404">
                            <div>
                                <h2>❌Page introuvable</h2>
                                <p>La page que vous recherchez n'existe pas.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- todo>> NavBack -->
                <section key="NavBack" id="NavBack" class="NavBack">
                    <a><img src="http://localhost:3000/www/00-images/back/favicon/favicon-32x32.png" /></a>
                </section>
            </body>
        </html>
        """
    )

#!! fErreursHTML()
# affiche les erreurs
def fErreurHTML(erreur):
    return (
        """
        <!-- 🪧 400 HTML -->
        <!doctype html>
        <html key="html" id="html" lang="fr">
            <!-- !HEAD -->
            <head key="head" id="head">
                <!-- *favicon -->
                <link key="favicon" id="favicon" rel="icon" type="image/x-icon" href="http://localhost:3000/www/00-images/back/favicon/favicon.ico">
                <!-- *styles -->
                <link key="resetCss" id="resetCss" rel="stylesheet" type="text/css" href="http://localhost:3000/www/00-accueil/css/reset.css">
                <link key="backCss" id="backCss" rel="stylesheet" type="text/css" href="http://localhost:3000/www/10-back/css/back.css">
                <!-- *fonts-->
                <!-- google apis -->
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <!-- google static -->
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <!-- google fuggles -->
                <link href="https://fonts.googleapis.com/css2?family=Fuggles&display=swap" rel="stylesheet">
                <!-- sedgwick ave display -->
                <link href="https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&display=swap" rel="stylesheet">
                <!-- google teko -->
                <link href="https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" rel="stylesheet">
                <!-- *titre du site -->
                <title key="title" id="title">🔻BACK🔻PAGE 400 : Erreurs</title>
            </head>
            <!-- !BODY -->
            <body key="body" id="body" class="body">
                <!-- todo>> SERVER -->
                <section key="ServerBack" id="ServerBack" class="ServerBack">
                    <div key="ServerBackContent" id="ServerBackContent" class="ServerBackContent">
                        <div key="nomServerBack" id="nomServerBack" class="nomServerBack">
                            <h1>❗PAGE 400 </h1>
                        </div>
                        <!-- todo>> ERREUR -->
                        <div key="erreurs" id="erreurs" class="erreurs">
                            <h2>❌Erreur </h2>
                            <p>"""+erreur+"""</p>
                        </div>
                    </div>
                </section>
                <!-- todo>> NavBack -->
                <section key="NavBack" id="NavBack" class="NavBack">
                    <a><img src="http://localhost:3000/www/00-images/back/favicon/favicon-32x32.png" /></a>
                </section>
            </body>
        </html>
        """
    )

def fErreurHTML2(erreur):
    return ("❌Erreur 404:"+erreur)

#!! fTry()
# essaye d'exécuter une requête sql
def fTry(sqlTxt):
    try:
        # connexion
        connexion = mysql.connector.connect(
            host='127.0.0.1',
            database='u189266988_pixewebcrea',
            user='root',
            password=''
        )

        # requete sql
        cursor = connexion.cursor()
        cursor.execute('SELECT * FROM `'+sqlTxt+'`')

        # affiche les resultats en json
        return """<span class="cyan">◈</span>"""

    except Exception as e:
        return """<span class="red">◈</span>"""

    data = cache.get(key)
    if not data:
        data = data_func
        cache.set(key, data, timeout)
    return data

#! VARIABLES
#!! GENERALES --»>>
# todo>> ◈
pointHTML = """<span>◈</span>"""

#! APP
#* CONNEXION BDD ---------------------------------------------->>
# todo>> serveur
app = flask.Flask(__name__)

# todo>> limiter le nombre de requetes par route
limiter = Limiter(app=app, key_func=get_remote_address)

# todo>> autoriser les requêtes depuis http://localhost:3000
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# todo>> enregistrer image
# dossier de destination pour enregistrer les images
UPLOAD_FOLDER = 'D:/Bureau/FRONT/www/01-DEV/RiskGard/00-ecg'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# autoriser uniquement les extensions d'images
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

# enregistrement
def saveImg(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# todo>> cache
# permet d'éviter le plantage d'un serveur en utilisant le cache pour y mettre des données
cache = SimpleCache()

#  mise en cache des doonées
def fCacheBack(key, data_func, timeout=300):
    data = cache.get(key)
    if not data:
        data = data_func
        cache.set(key, data, timeout)
    return data

# todo>> connexion
# connexion à la base de données
def fDataBack(sqlTxt):
    try:
        # connexion
        connexion = mysql.connector.connect(
            host='127.0.0.1',
            database='u189266988_pixewebcrea',
            user='root',
            password=''
        )

        # requete sql
        cursor = connexion.cursor()
        cursor.execute(sqlTxt)

        # recuperation des resultats
        result = cursor.fetchall()

        # affiche les resultats en json
        return result
    except Exception as e:
        return fErreurHTML(str(e))
    finally:
        cursor.close()
        connexion.close()

sqlConnect = mysql.connector.connect(
    host='127.0.0.1',
    database='u189266988_pixewebcrea',
    user='root',
    password=''
)

#! PixeWebCrea --»>>
# PixeWebCreaSites
PixeWebCreaSites = fDataBack('SELECT * FROM `pixewebcrea_sites`')
# PixeWebCreaUsers
PixeWebCreaUsers = fDataBack('SELECT * FROM `pixewebcrea_users`')

#! RISKGARD --»>>
# RiskgardMedecins
RiskgardMedecins = fDataBack('SELECT * FROM `riskgard_medecins`')
# RiskgardPatients
RiskgardPatients = fDataBack('SELECT * FROM `riskgard_patients`')
# RiskgardDossiersPatients
RiskgardDossiersPatients = fDataBack('SELECT * FROM `riskgard_patients_dossier`')
# RiskgardSuivieECGPatients
RiskgardSuivieECGPatients = fDataBack('SELECT * FROM `riskgard_patients_suivie_ecg`')
# RiskgardSuiviePatients
RiskgardSuiviePatients = fDataBack('SELECT * FROM `riskgard_patients_suivie`')

#* ROUTE REQUETES SQL LECTEUR DE DONNEES ---------------------->>
# todo>> route 404
@app.errorhandler(404)
def page_not_found(error):
    return f404HTML()

# todo>> route home
@app.route('/')
#@limiter.limit('200 per minute')
def home():
    # return '🔻BACK PIXEWEBCREA🔻V0.0.1'
    return fIndexHTML()

#! PixeWebCrea --»>>
# todo>> route pixewebcrea-sites
@app.route('/pixewebcrea-sites', methods=['GET'])
#@limiter.limit('200 per minute')
def pixeWebCreaSites():
    try:
        return fCacheBack('/pixewebcrea-sites', PixeWebCreaSites)
    except Exception as e:
        return fErreurHTML(str(e))

# todo>> route pixewebcrea-users
@app.route('/pixewebcrea-users', methods=['GET'])
#@limiter.limit('200 per minute')
def pixeWebCreaUsers():
    try:
        return fCacheBack('pixewebcrea-users', PixeWebCreaUsers)
    except Exception as e:
        return fErreurHTML(str(e))

#! RiskGard --»>>
# todo>> route riskgard-medecins
@app.route('/riskgard-medecins', methods=['GET'])
#@limiter.limit('200 per minute')
def riskgardMedecins():
    try:
        return fCacheBack('riskgard-medecins', RiskgardMedecins)
    except Exception as e:
        return fErreurHTML(str(e))

# todo>> route riskgard-patients
@app.route('/riskgard-patients', methods=['GET'])
#@limiter.limit('200 per minute')
def riskgardPatients():
    try:
        return fCacheBack('riskgard-patients', RiskgardPatients)
    except Exception as e:
        return fErreurHTML(str(e))

# todo>> route riskgard-dossiers-patients
@app.route('/riskgard-patients-dossier', methods=['GET'])
#@limiter.limit('200 per minute')
def riskgardDossiersPatients():
    try:
        return fCacheBack('riskgard-patients-dossier', RiskgardDossiersPatients)
    except Exception as e:
        return fErreurHTML(str(e))

# todo>> route riskgard-suivie-ecg-patients
@app.route('/riskgard-patients-suivie-ecg', methods=['GET'])
#@limiter.limit('200 per minute')
def riskgardSuivieECGPatients():
    try:
        return fCacheBack('riskgard-suivie-ecg-patients', RiskgardSuivieECGPatients)
    except Exception as e:
        return fErreurHTML(str(e))

# todo>> route riskgard-suivie-patients
@app.route('/riskgard-patients-suivie', methods=['GET'])
#@limiter.limit('200 per minute')
def riskgardSuiviePatients():
    try:
        return fCacheBack('riskgard-suivie-patients', RiskgardSuiviePatients)
    except Exception as e:
        return fErreurHTML(str(e))

#* ROUTE REQUETES SQL AJOUT DE DONNEES ------------------------>>
# todo>> route riskgard-ajouter-medecin
@app.route('/riskgard-ajouter-medecin', methods=['POST'])
def ajoutMedecin():
    try:
        # recuperation des données du formulaire en tant qu'objet JSON
        data = flask.request.get_json()

        # requette sql pour ajouter données
        query = "INSERT INTO riskgard_medecins (idMedecin, prenomMedecin, nomMedecin, dateNaissanceMedecin, sexeMedecin, numMedecin) VALUES (%s, %s, %s, %s, %s, %s)"
        values = (
            data['formDataMedecin']['idMedecin'],
            data['formDataMedecin']['prenomMedecin'],
            data['formDataMedecin']['nomMedecin'],
            data['formDataMedecin']['dateNaissanceMedecin'],
            data['formDataMedecin']['sexeMedecin'],
            data['formDataMedecin']['numMedecin']
        )

        # création d'un nouveau cursor
        connexion = sqlConnect
        cursor = connexion.cursor()

        # exécuter la requette
        cursor.execute(query, values)
        connexion.commit()

        # Supprimer la clé associée au cache
        cache.delete('riskgard-medecins')

        # Charger les nouvelles données depuis la base de données
        RiskgardMedecins = fDataBack('SELECT * FROM `riskgard_medecins`')

        # Mise en cache des nouvelles données
        cache.set('riskgard-medecins', RiskgardMedecins)

        # out
        p = f'▶️ Données envoyés avec succès: {data["formDataMedecin"]["nomMedecin"]} {data["formDataMedecin"]["prenomMedecin"]} {data["formDataMedecin"]["numMedecin"]}'
        print(p)
        return flask.jsonify({'message': p}), 200
    except Exception as e:
        p = f'❌ ERREUR : {fErreurHTML2(str(e))}'
        print(p)
        return flask.Response(p, status=500)
    finally:
        return flask.redirect('/serveur-reload')

# todo>> route riskgard-ajouter-patient
@app.route('/riskgard-ajouter-patient', methods=['POST'])
def ajoutPatient():
    try:
        # recuperation des données du formulaire en tant qu'objet JSON
        data = flask.request.get_json()

        # requette sql pour ajouter données
        query = "INSERT INTO riskgard_patients (idPatient, prenomPatient, nomPatient, dateNaissancePatient, sexePatient, registreNatPatient) VALUES (%s, %s, %s, %s, %s, %s)"
        values = (
            data['formDataPatient']['idPatient'],
            data['formDataPatient']['prenomPatient'],
            data['formDataPatient']['nomPatient'],
            data['formDataPatient']['dateNaissancePatient'],
            data['formDataPatient']['sexePatient'],
            data['formDataPatient']['registreNatPatient']
        )

        # création d'un nouveau cursor
        connexion = sqlConnect
        cursor = connexion.cursor()

        # exécuter la requette
        cursor.execute(query, values)
        connexion.commit()

        # Supprimer la clé associée au cache
        cache.delete('riskgard-patients')

        # Charger les nouvelles données depuis la base de données
        RiskgardPatients = fDataBack('SELECT * FROM `riskgard_patients`')

        # Mise en cache des nouvelles données
        cache.set('riskgard-patients', RiskgardPatients)

        # out
        p = f'▶️ Données envoyées avec succès : {data["formDataPatient"]["nomPatient"]} {data["formDataPatient"]["prenomPatient"]} {data["formDataPatient"]["registreNatPatient"]}'
        print(p)
        return flask.jsonify({'message': p}), 200
    except Exception as e:
        p = f'❌ ERREUR : {fErreurHTML2(str(e))}'
        print(p)
        return flask.Response(p, status=500)
    finally:
        return flask.redirect('/serveur-reload')

# todo>> route riskgard-ajouter-dossiers-patients
@app.route('/riskgard-ajouter-dossiers-patients', methods=['POST'])
def ajoutDossiersPatients():
    try:
        # recuperation des données du formulaire en tant qu'objet JSON
        data = flask.request.get_json()

        # requette sql pour ajouter données
        query = "INSERT INTO riskgard_patients_dossier (idDossierPatient, registreNatPatient, dossierPatient) VALUES (%s, %s, %s)"
        values = (
            data['formDataDossiersPatients']['idDossierPatient'],
            data['formDataDossiersPatients']['registreNatPatient'],
            data['formDataDossiersPatients']['dossierPatient']
        )

        # création d'un nouveau cursor
        connexion = sqlConnect
        cursor = connexion.cursor()

        # exécuter la requette
        cursor.execute(query, values)
        connexion.commit()

        # Supprimer la clé associée au cache
        cache.delete('riskgard-dossiers-patients')

        # Charger les nouvelles données depuis la base de données
        RiskgardDossiersPatients = fDataBack('SELECT * FROM `riskgard_patients_dossier`')

        # Mise en cache des nouvelles données
        cache.set('riskgard-patients-dossier', RiskgardDossiersPatients)

        # out
        p = f'▶️ Données envoyées avec succès : {data["formDataDossiersPatients"]["idDossierPatient"]} {data["formDataDossiersPatients"]["registreNatPatient"]} {data["formDataDossiersPatients"]["dossierPatient"]}'
        print(p)
        return flask.jsonify({'message': p}), 200
    except Exception as e:
        p = f'❌ ERREUR : {fErreurHTML2(str(e))}'
        print(p)
        return flask.Response(p, status=500)
    finally:
        return flask.redirect('/serveur-reload')

# todo>> route riskgard-ajouter-imagerie-ecg
@app.route('/riskgard-ajouter-suivie-ecg-patients', methods=['POST'])
def ajoutImagerieECG():
    try:
        # recuperation des données du formulaire en tant qu'objet JSON
        data = flask.request.get_json()

        # requette sql pour ajouter données
        query = "INSERT INTO riskgard_patients_suivie_ecg (idSuivieEcgPatient, numMedecinPatient, registreNatPatient, imageECGPatient) VALUES (%s, %s, %s, %s)"
        values = (
            data['formDataImagerieECG']['idSuivieEcgPatient'],
            data['formDataImagerieECG']['numMedecinPatient'],
            data['formDataImagerieECG']['registreNatPatient'],
            data['formDataImagerieECG']['imageECGPatient']
        )

        # création d'un nouveau cursor
        connexion = sqlConnect
        cursor = connexion.cursor()

        # exécuter la requette
        cursor.execute(query, values)
        connexion.commit()

        # Supprimer la clé associée au cache
        cache.delete('riskgard-suivie-ecg-patients')

        # Charger les nouvelles données depuis la base de données
        RiskgardSuivieECGPatients = fDataBack('SELECT * FROM `riskgard_patients_suivie_ecg`')

        # Mise en cache des nouvelles données
        cache.set('riskgard-suivie-ecg-patients', RiskgardSuivieECGPatients)

        # out
        p = f'▶️ Données envoyées avec succès : {data["formDataImagerieECG"]["idSuivieEcgPatient"]} {data["formDataImagerieECG"]["registreNatPatient"]} {data["formDataImagerieECG"]["imageECGPatient"]}'
        print(p)
        return flask.jsonify({'message': p}), 200
    except Exception as e:
        p = f'❌ ERREUR : {fErreurHTML2(str(e))}'
        print(p)
        return flask.Response(p, status=500)
    finally:
        return flask.redirect('/serveur-reload')

# todo>> route riskgard-ajouter-suivie-patient
@app.route('/riskgard-ajouter-suivie-patient', methods=['POST'])
def ajoutSuiviePatient():
    try:
        # recuperation des données du formulaire en tant qu'objet JSON
        data = flask.request.get_json()

        # requette sql pour ajouter données
        query = "INSERT INTO riskgard_patients_suivie (idSuiviePatient, numMedecinPatient, registreNatPatient, anginePatient, cholesterolPatient, depressionSTPatient, douleurThoraciquePatient, electrocardiographiePatient, frequenceCardiaquePatient, glycemiePatient, penteSTPatient, pressionArteriellePatient, vaisseauxFluoroscopiePatient, thalassemiePatient) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        values = (
            data['formSuiviePatient']['idSuiviePatient'],
            data['formSuiviePatient']['numMedecinPatient'],
            data['formSuiviePatient']['registreNatPatient'],
            data['formSuiviePatient']['anginePatient'],
            data['formSuiviePatient']['cholesterolPatient'],
            data['formSuiviePatient']['depressionSTPatient'],
            data['formSuiviePatient']['douleurThoraciquePatient'],
            data['formSuiviePatient']['electrocardiographiePatient'],
            data['formSuiviePatient']['frequenceCardiaquePatient'],
            data['formSuiviePatient']['glycemiePatient'],
            data['formSuiviePatient']['penteSTPatient'],
            data['formSuiviePatient']['pressionArteriellePatient'],
            data['formSuiviePatient']['vaisseauxFluoroscopiePatient'],
            data['formSuiviePatient']['thalassemiePatient']
        )

        # création d'un nouveau cursor
        connexion = sqlConnect
        cursor = connexion.cursor()

        # exécuter la requette
        cursor.execute(query, values)
        connexion.commit()

        # Supprimer la clé associée au cache
        cache.delete('riskgard-suivie-patients')

        # Charger les nouvelles données depuis la base de données
        RiskgardSuiviePatients = fDataBack('SELECT * FROM `riskgard_patients_suivie`')

        # Mise en cache des nouvelles données
        cache.set('riskgard-suivie-patients', RiskgardSuiviePatients)

        # out
        p = f'▶️ Données envoyées avec succès : {data["formSuiviePatient "]["idSuiviePatient"]} {data["formSuiviePatient "]["numMedecinPatient"]} {data["formSuiviePatient "]["registreNatPatient"]} {data["formSuiviePatient "]["anginePatient"]} {data["formSuiviePatient "]["cholesterolPatient"]} {data["formSuiviePatient "]["depressionSTPatient"]} {data["formSuiviePatient "]["douleurThoraciquePatient"]} {data["formSuiviePatient "]["electrocardiographiePatient"]} {data["formSuiviePatient "]["frequenceCardiaquePatient"]} {data["formSuiviePatient "]["glycemiePatient"]} {data["formSuiviePatient "]["penteSTPatient"]} {data["formSuiviePatient"]["pressionArteriellePatient"]} {data["formSuiviePatient "]["vaisseauxFluoroscopiePatient"]} {data["formSuiviePatient "]["thalassemiePatient"]}'
        print(p)
        return flask.jsonify({'message': p}), 200
    except Exception as e:
        p = f'❌ ERREUR : {fErreurHTML2(str(e))}'
        print(p)
        return flask.Response(p, status=500)
    finally:
        return flask.redirect('/serveur-reload')

#* LANCEMENT SERVEUR ------------------------------------------>>
# todo>> serveur port 3001
if __name__ == '__main__':
    app.run(port=3001, debug=True)

    # todo>> relancer le serveur
@app.route('/serveur-reload', methods=['GET'])
def serveurReload():
    try:
        # commande pour redémarrer le serveur
        subprocess.Popen(["python", "serverBack.py"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

        # out
        p = '▶️ Le serveur a été redémarré avec succès.'
        print(p)
        return flask.redirect('/')
    except Exception as e:
        p = f'❌ ERREUR : {str(e)}'
        print(p)
        return flask.Response(p, status=500)