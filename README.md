                                                                   DriveUp
                              Système Intégré pour la Détection des Panneaux Routiers et Gestion des Utilisateurs
        
        
        Réalisé par :                                                                
             Idriss OTMANI
             Oussama ELKIHEL                                                                   
             Aya KHAI


   
   
    


  **Introduction Générale:**
              
    Ce projet consiste en un système ADAS qui utilise un modèle de machine learning pour détecter et lire les panneaux routiers. Le modèle est intégré à une application web développée avec la pile MERN (MongoDB, Express.js, React, Node.js). Cette application permet de visualiser les informations des panneaux routiers       
  détectés et de gérer l'authentification des utilisateurs.

  **Fonctionnalités:**
              
  Détection des Panneaux Routiers : Utilisation d'un modèle de machine learning pour identifier et lire les panneaux routiers.
  Affichage des Informations : Présentation des informations des panneaux détectés en temps réel via l'application web.
  Authentification des Utilisateurs : Inscription, connexion et gestion des profils des utilisateurs.
  Gestion des Données : Stockage et récupération des données des utilisateurs et des panneaux routiers dans MongoDB.

  **Technologies Utilisées:**

  MongoDB: Base de données NoSQL pour stocker les informations des utilisateurs et des panneaux routiers.
  Express.js: Framework web pour Node.js, utilisé pour créer le serveur backend.
  React: Bibliothèque JavaScript pour construire l'interface utilisateur.
  Node.js: Environnement d'exécution JavaScript côté serveur.

  **Prérequis:**

  Node.js installé
  MongoDB installé ou accès à une instance MongoDB.

  **Installation:**

1.Clonez le dépôt :

      git clone (url of the repository)
      cd 

2.Installez les dépendances pour le backend :
      
      cd backend
      npm install

3.Installez les dépendances pour le frontend :

      cd ../frontend
      npm install

4.Configurez les variables d'environnement :

Créez un fichier .env dans le dossier backend et ajoutez les configurations suivantes :

      PORT=5000
      MONGODB_URI=votre_mongodb_uri
      JWT_SECRET=votre_secret_jwt

5.Lancer l'Application

Démarrez le serveur backend :

      cd backend
      npm start

Démarrez le serveur frontend :

      cd ../frontend
      npm start

**Conclusion Générale:**

 Ce projet ADAS offre une solution innovante pour la détection et la lecture des panneaux routiers, en intégrant un modèle de machine learning avec une application web MERN. Cette approche permet d'améliorer la sécurité routière et de fournir une expérience utilisateur fluide et sécurisée. Nous espérons que cette application pourra être un outil précieux pour les conducteurs et les développeurs intéressés par les technologies de conduite assistée.
