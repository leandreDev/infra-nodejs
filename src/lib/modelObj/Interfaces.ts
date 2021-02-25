  import {IBase } from "@hfdev/utils" ;
  export interface I{

  }
  
    /**
    interface de la class string 
    description string est un type de base qui permet de représenter les champ de type string
   */
    export interface Istring extends   Ifield{
        
              /**
               *représente le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *c'est la description du champ. il permet de générer l'aide ou la documentation 
               */
              
               "description":string;
              
       
              /**
               *permet d'indiquer que le champ est un tableau 
               */
              
               "isArrayOf"?:boolean;
              
       
              /**
               *si le champ est obligatoire 
               */
              
               "required"?:boolean;
              
       
              /**
               *indique que la valeur du champ doit être unique 
               */
              
               "unique"?:boolean;
              
       
              /**
               *????? je suis plus sure 
               */
              
               "index"?:boolean;
              
       
              /**
               *valeur par defaut 
               */
              
               "default"?:string;
              
       
              /**
               *convertie la donnée en minuscule 
               */
              
               "lowercase"?:boolean;
              
       
              /**
               *convertie la donnée en majuscule 
               */
              
               "uppercase"?:boolean;
              
       
              /**
               *élimine les espaces au début et a la fin de la valeur 
               */
              
               "trim"?:boolean;
              
       
              /**
               *ne pas utiliser pour l'instant ce doit être une expression regulière 
               */
              
               "match"?:string;
              
       
              /**
               *liste des valeur possible du champ 
               */
              
               "enum"?:string[];
              
       
   }

    /**
    interface de la class licence_temporelle 
    description c'est une licence qui dure un certain temps
   */
    export interface Ilicence_temporelle extends   Ilicence{
        
              /**
               *c'est la date a partir de la quelle, la licence peut être utilisé 
               */
              
               "validityStartDate"?:Date;
              
       
              /**
               *c'est la  date de fin de validité de cette licence 
               */
              
               "validityEndDate"?:Date;
              
       
              /**
               *c'est la durée d’accès au service grâce a cette licence (en seconde) 
               */
              
               "licenceDuration"?:number;
              
       
              /**
               *c'est la date de fin de licence (si elle n'est pas renseigné, c'est la date de première utilisation + la durée de la licence) 
               */
              
               "licenceEndDate"?:Date;
              
       
   }

    /**
    interface de la class ui_menu_mongo_editor_separateur 
    description représente un séparateur dans le menu
   */
    export interface Iui_menu_mongo_editor_separateur extends   Iui_menu_mongo_editor{
        
              /**
               *nom de la classe css à appliquer 
               */
              
               "cssClass"?:string;
              
       
   }

    /**
    interface de la class certificat 
    description certificat
   */
    export interface Icertificat extends  IBase {
        
              /**
               *nom du certificat 
               */
              
               "name"?:string;
              
       
   }

    /**
    interface de la class service_sso 
    description c'est un sso
   */
    export interface Iservice_sso extends   Iservice{
        
   }

    /**
    interface de la class date 
    description ce champ représente les dates
   */
    export interface Idate extends   Ifield{
        
              /**
               *représente le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *c'est la description du champ. il permet de générer l'aide ou la documentation 
               */
              
               "description":string;
              
       
              /**
               *permet d'indiquer que le champ est un tableau 
               */
              
               "isArrayOf"?:boolean;
              
       
              /**
               *si le champ est obligatoire 
               */
              
               "required"?:boolean;
              
       
              /**
               *indique que la valeur du champ doit être unique 
               */
              
               "unique"?:boolean;
              
       
              /**
               *????? je suis plus sure 
               */
              
               "index"?:boolean;
              
       
              /**
               *valeur par défaut 
               */
              
               "default"?:Date;
              
       
              /**
               *valeur minimum accepté 
               */
              
               "min"?:Date;
              
       
              /**
               *valeur maximum accepté 
               */
              
               "max"?:Date;
              
       
   }

    /**
    interface de la class number 
    description ce champ représente les valeurs numériques
   */
    export interface Inumber extends   Ifield{
        
              /**
               *représente le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *c'est la description du champ. il permet de générer l'aide ou la documentation 
               */
              
               "description":string;
              
       
              /**
               *permet d'indiquer que le champ est un tableau 
               */
              
               "isArrayOf"?:boolean;
              
       
              /**
               *si le champ est obligatoire 
               */
              
               "required"?:boolean;
              
       
              /**
               *indique que la valeur du champ doit être unique 
               */
              
               "unique"?:boolean;
              
       
              /**
               *????? je suis plus sure 
               */
              
               "index"?:boolean;
              
       
              /**
               *valeur par defaut 
               */
              
               "default"?:number;
              
       
              /**
               *valeur minimum acceptée 
               */
              
               "min"?:number;
              
       
              /**
               *valeur maximum acceptée 
               */
              
               "max"?:number;
              
       
              /**
               *le pas d'incrément 
               */
              
               "step"?:number;
              
       
   }

    /**
    interface de la class jwks 
    description JSON Web Key Set (JWK Set)
   */
    export interface Ijwks extends  IBase {
        
              /**
               *The value of the "keys" member is an array of JWK values. 
               */
              
              "keys"?:Ijwk[];
              
       
   }

    /**
    interface de la class jwk 
    description JSON Web Key 
   */
    export interface Ijwk extends  IBase {
        
              /**
               *The "kty" (key type) member identifies the cryptographic algorithm    family used with the key, such as "RSA" or "EC". 
               */
              
               "kty"?:string;
              
       
              /**
               *The "use" (public key use) member identifies the intended use of the    public key.  
               */
              
               "use"?:string;
              
       
              /**
               *The "key_ops" (key operations) member identifies the operation(s)    that the key is intended to be used for. 
               */
              
               "key_ops"?:string[];
              
       
              /**
               *The "alg" (algorithm) member identifies the algorithm intended for    use with the key.   
               */
              
               "alg"?:string;
              
       
              /**
               *The "kid" (key ID) member is used to match a specific key.  
               */
              
               "kid"?:string;
              
       
              /**
               *The "x5u" (X.509 URL) member is a URI [RFC3986] that refers to a    resource for an X.509 public key certificate or certificate chain. 
               */
              
               "x5u"?:string;
              
       
              /**
               *The "x5c" (X.509 Certificate Chain) member contains a chain of one or    more PKIX certificates 
               */
              
               "x5c"?:string[];
              
       
              /**
               *    The "x5t" (X.509 Certificate SHA-1 Thumbprint) member is a base64url    encoded SHA-1 thumbprint (a.k.a. digest) of the DER encoding of anX.509 certificate. 
               */
              
               "x5t"?:string;
              
       
              /**
               *The "x5t#S256" (X.509 Certificate SHA-256 Thumbprint) member is a    base64url encoded SHA-256 thumbprint (a.k.a. digest) of the DER    encoding of an X.509 certificate 
               */
              
               "x5t#S256"?:string;
              
       
   }

    /**
    interface de la class boolean 
    description ce champ représente les booléains
   */
    export interface Iboolean extends   Ifield{
        
              /**
               *représente le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *c'est la description du champ. il permet de générer l'aide ou la documentation 
               */
              
               "description":string;
              
       
              /**
               *permet d'indiquer que le champ est un tableau 
               */
              
               "isArrayOf"?:boolean;
              
       
              /**
               *si le champ est obligatoire 
               */
              
               "required"?:boolean;
              
       
              /**
               *indique que la valeur du champ doit être unique 
               */
              
               "unique"?:boolean;
              
       
              /**
               *????? je suis plus sure 
               */
              
               "index"?:boolean;
              
       
              /**
               *valeur par defaut 
               */
              
               "default"?:boolean;
              
       
   }

    /**
    interface de la class htmltexte 
    description champ pour le html
   */
    export interface Ihtmltexte extends   Istring{
        
              /**
               *représente le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *c'est la description du champ. il permet de générer l'aide ou la documentation 
               */
              
               "description":string;
              
       
              /**
               *permet d'indiquer que le champ est un tableau 
               */
              
               "isArrayOf"?:boolean;
              
       
              /**
               *si le champ est obligatoire 
               */
              
               "required"?:boolean;
              
       
              /**
               *indique que la valeur du champ doit être unique 
               */
              
               "unique"?:boolean;
              
       
              /**
               *????? je suis plus sure 
               */
              
               "index"?:boolean;
              
       
              /**
               *valeur par defaut 
               */
              
               "default"?:string;
              
       
              /**
               *convertie la donnée en minuscule 
               */
              
               "lowercase"?:boolean;
              
       
              /**
               *convertie la donnée en majuscule 
               */
              
               "uppercase"?:boolean;
              
       
              /**
               *élimine les espaces au début et a la fin de la valeur 
               */
              
               "trim"?:boolean;
              
       
              /**
               *ne pas utiliser pour l'instant ce doit être une expression regulière 
               */
              
               "match"?:string;
              
       
              /**
               *liste des valeur possible du champ 
               */
              
               "enum"?:string[];
              
       
   }

    /**
    interface de la class subdoc 
    description ce champ permet d'insérer un document dans un autre
   */
    export interface Isubdoc extends   Ifield{
        
              /**
               *représente le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *c'est la description du champ. il permet de générer l'aide ou la documentation 
               */
              
               "description":string;
              
       
              /**
               *permet d'indiquer que le champ est un tableau 
               */
              
               "isArrayOf"?:boolean;
              
       
              /**
               *si le champ est obligatoire 
               */
              
               "required"?:boolean;
              
       
              /**
               *indique que la valeur du champ doit être unique 
               */
              
               "unique"?:boolean;
              
       
              /**
               *????? je suis plus sure 
               */
              
               "index"?:boolean;
              
       
              /**
               *c'est la référence au schéma du ce sous objet 
               */
              
               "protoSchemaId"?:string;
              
       
   }

    /**
    interface de la class modelid 
    description modelid
   */
    export interface Imodelid extends   Ifield{
        
              /**
               *représente le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *c'est la description du champ. il permet de générer l'aide ou la documentation 
               */
              
               "description":string;
              
       
              /**
               *permet d'indiquer que le champ est un tableau 
               */
              
               "isArrayOf"?:boolean;
              
       
              /**
               *si le champ est obligatoire 
               */
              
               "required"?:boolean;
              
       
              /**
               *indique que la valeur du champ doit être unique 
               */
              
               "unique"?:boolean;
              
       
              /**
               *????? je suis plus sure 
               */
              
               "index"?:boolean;
              
       
              /**
               *ref 
               */
              
               "ref"?:string;
              
       
   }

    /**
    interface de la class password 
    description password
   */
    export interface Ipassword extends   Istring{
        
   }

    /**
    interface de la class texte 
    description champ pour texte long
   */
    export interface Itexte extends   Istring{
        
              /**
               *représente le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *c'est la description du champ. il permet de générer l'aide ou la documentation 
               */
              
               "description":string;
              
       
              /**
               *permet d'indiquer que le champ est un tableau 
               */
              
               "isArrayOf"?:boolean;
              
       
              /**
               *si le champ est obligatoire 
               */
              
               "required"?:boolean;
              
       
              /**
               *indique que la valeur du champ doit être unique 
               */
              
               "unique"?:boolean;
              
       
              /**
               *????? je suis plus sure 
               */
              
               "index"?:boolean;
              
       
              /**
               *valeur par defaut 
               */
              
               "default"?:string;
              
       
              /**
               *convertie la donnée en minuscule 
               */
              
               "lowercase"?:boolean;
              
       
              /**
               *convertie la donnée en majuscule 
               */
              
               "uppercase"?:boolean;
              
       
              /**
               *élimine les espaces au début et a la fin de la valeur 
               */
              
               "trim"?:boolean;
              
       
              /**
               *ne pas utiliser pour l'instant ce doit être une expression regulière 
               */
              
               "match"?:string;
              
       
              /**
               *liste des valeur possible du champ 
               */
              
               "enum"?:string[];
              
       
   }

    /**
    interface de la class objectid 
    description c'est un champ de base qui permet de référence un document d'une autre base.
   */
    export interface Iobjectid extends   Ifield{
        
              /**
               *représente le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *c'est la description du champ. il permet de générer l'aide ou la documentation 
               */
              
               "description":string;
              
       
              /**
               *permet d'indiquer que le champ est un tableau 
               */
              
               "isArrayOf"?:boolean;
              
       
              /**
               *si le champ est obligatoire 
               */
              
               "required"?:boolean;
              
       
              /**
               *indique que la valeur du champ doit être unique 
               */
              
               "unique"?:boolean;
              
       
              /**
               *????? je suis plus sure 
               */
              
               "index"?:boolean;
              
       
              /**
               *c'est la référence a la collection dans lequelle  sont les document a référencer 
               */
              
               "ref":string;
              
       
   }

    /**
    interface de la class user_roles 
    description paire utilisateurs role
   */
    export interface Iuser_roles extends  IBase {
        
              /**
               *utilisateur 
               */
              
               "user"?:string;
              
       
              /**
               *liste des roles de l'utilisateur 
               */
              
               "roles"?:string[];
              
       
   }

    /**
    interface de la class service_init 
    description service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
   */
    export interface Iservice_init extends   Iservice{
        
   }

    /**
    interface de la class rsa 
    description certificat RSA
   */
    export interface Irsa extends   Icertificat{
        
              /**
               *kty 
               */
              
               "kty"?:string;
              
       
              /**
               *usage 
               */
              
               "use"?:string;
              
       
              /**
               *d 
               */
              
               "d"?:string;
              
       
              /**
               *dp 
               */
              
               "dp"?:string;
              
       
              /**
               *dq 
               */
              
               "dq"?:string;
              
       
              /**
               *e 
               */
              
               "e"?:string;
              
       
              /**
               *n 
               */
              
               "n"?:string;
              
       
              /**
               *p 
               */
              
               "p"?:string;
              
       
              /**
               *q 
               */
              
               "q"?:string;
              
       
              /**
               *qi 
               */
              
               "qi"?:string;
              
       
   }

    /**
    interface de la class node_fork_option_env 
    description les paramètres d’environnement a passer aux sous-processus
   */
    export interface Inode_fork_option_env extends  IBase {
        
              /**
               *l'url du serveur de configuration 
               */
              
               "CONF_URL"?:string;
              
       
              /**
               *configuration du service 
               */
              
               "SRV_ID"?:string;
              
       
   }

    /**
    interface de la class node_fork_option 
    description option d'un sous processus node 
   */
    export interface Inode_fork_option extends  IBase {
        
              /**
               *Current working directory of the child process 
               */
              
               "cwd"?:string;
              
       
              /**
               *Environment key-value pairs 
               */
              
              "env"?:Inode_fork_option_env;
              
       
   }

    /**
    interface de la class service_supervision_service_conf 
    description configuration d'un service dans le superviseur
   */
    export interface Iservice_supervision_service_conf extends  IBase {
        
              /**
               *le nom du service 
               */
              
               "name"?:string;
              
       
              /**
               *le chemin vers le fichier js 
               */
              
               "path"?:string;
              
       
              /**
               *liste des arguments passé au sous processus 
               */
              
               "args"?:string[];
              
       
              /**
               *nodejs sub process options 
               */
              
              "options"?:Inode_fork_option;
              
       
              /**
               *active le redémarrage automatique 
               */
              
               "restart"?:boolean;
              
       
              /**
               *nombre maximum de redémarrage automatique  
               */
              
               "maxKill"?:number;
              
       
              /**
               *définit le temps maximum qui peut s'écouler entre un démarrage et une fermeture pour considérer que c'est un crache au démarrage 
               */
              
               "minTime"?:number;
              
       
   }

    /**
    interface de la class service_mailtoinfra 
    description service qui permet de configurer l'authentification a partir d'un mail
   */
    export interface Iservice_mailtoinfra extends   Iservice{
        
              /**
               *liste des configuration attacher a un mail 
               */
              
              "mailsMapping"?:Imail_connexion_conf[];
              
       
   }

    /**
    interface de la class mail_connexion_conf 
    description associe un mail a une configuration de connexion sso+ app
   */
    export interface Imail_connexion_conf extends  IBase {
        
              /**
               *le patern du mail a matcher 
               */
              
               "mailPatern"?:string;
              
       
              /**
               *clientId du sso 
               */
              
               "clientId"?:string;
              
       
              /**
               *configuration de la redirection du sso 
               */
              
               "redirectUri"?:string;
              
       
              /**
               *end_client  
               */
              
               "end_client"?:string;
              
       
              /**
               *application_instance 
               */
              
               "application_instance"?:string;
              
       
              /**
               *url du service de licence 
               */
              
               "licence_service"?:string;
              
       
   }

    /**
    interface de la class application_configuration_phoneCard 
    description configuration d'une application phoneCard
   */
    export interface Iapplication_configuration_phoneCard extends   Iapplication_configuration{
        
   }

    /**
    interface de la class passport_strategie_facebook 
    description Facebook authentication strategy for Passport  (https://github.com/jaredhanson/passport-facebook)
   */
    export interface Ipassport_strategie_facebook extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *FACEBOOK_APP_ID 
               */
              
               "clientID":string;
              
       
              /**
               *FACEBOOK_APP_SECRET 
               */
              
               "clientSecret":string;
              
       
              /**
               *url de callback 
               */
              
               "callbackURL":string;
              
       
              /**
               *scope 
               */
              
               "scope":string[];
              
       
              /**
               *The Facebook profile contains a lot of information about a user. By default, not all the fields in a profile are returned. The fields needed by an application can be indicated by setting the profileFields option. 
               */
              
               "profileFields"?:string[];
              
       
              /**
               *enableProof 
               */
              
               "enableProof"?:boolean;
              
       
   }

    /**
    interface de la class passport_strategie_google 
    description Passport strategies for authenticating with Google using OAuth 1.0a and OAuth 2.0 (https://github.com/jaredhanson/passport-google-oauth)
   */
    export interface Ipassport_strategie_google extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *GOOGLE_CLIENT_ID 
               */
              
               "clientID":string;
              
       
              /**
               *GOOGLE_CLIENT_SECRET 
               */
              
               "clientSecret":string;
              
       
              /**
               *url de callback 
               */
              
               "callbackURL":string;
              
       
              /**
               *scope 
               */
              
               "scope":string[];
              
       
   }

    /**
    interface de la class passport_strategie_linkedin 
    description Passport strategy for authenticating with LinkedIn using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-linkedin)
   */
    export interface Ipassport_strategie_linkedin extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *LINKEDIN_API_KEY 
               */
              
               "consumerKey":string;
              
       
              /**
               *LINKEDIN_SECRET_KEY 
               */
              
               "consumerSecret":string;
              
       
              /**
               *callbackURL 
               */
              
               "callbackURL":string;
              
       
              /**
               *scope 
               */
              
               "scope":string[];
              
       
              /**
               *The LinkedIn profile is very rich, and may contain a lot of information. The strategy can be configured with a profileFields parameter which specifies a list of fields your application needs. For example, to fetch the user's ID, name, email address, and headline, configure strategy like this. 
               */
              
               "profileFields"?:string[];
              
       
   }

    /**
    interface de la class name_url 
    description c'est une paire nom url
   */
    export interface Iname_url extends  IBase {
        
              /**
               *nom du service 
               */
              
               "name":string;
              
       
              /**
               *url du service 
               */
              
               "url":string;
              
       
              /**
               *Id de l'objet 
               */
              
               "refId"?:string;
              
       
   }

    /**
    interface de la class passport_strategie 
    description configuration d'une stratégie passport à déployer sur le sso
   */
    export interface Ipassport_strategie extends  IBase {
        
              /**
               *nom de la route 
               */
              
               "name":string;
              
       
              /**
               *création automatique d'un compte si il n’existe pas 
               */
              
               "autoCreate"?:boolean;
              
       
              /**
               *connexion automatique au compte contenant le même email  
               */
              
               "autoLoginWMail"?:boolean;
              
       
   }

    /**
    interface de la class oidc_Client 
    description description d'un client openId (c'est une application)
   */
    export interface Ioidc_Client extends  IBase {
        
              /**
               *client_id 
               */
              
               "client_id":string;
              
       
              /**
               *client_secret est la clef secrète qui permet de sécuriser l’accès depuis un serveur. 
               */
              
               "client_secret":string;
              
       
              /**
               *grant_types 
               */
              
               "grant_types":string[];
              
       
              /**
               *redirect_uris représente la liste des url de redirection autorisé 
               */
              
               "redirect_uris":string[];
              
       
              /**
               *List de valeur response_type (OAuth 2.0) que le Client déclare et qu'il se restreint à utiliser. 
               */
              
               "response_types"?:string[];
              
       
              /**
               *Type de l'application (Si omit elle est définie comme 'web' ) 
               */
              
               "application_type"?:string;
              
       
              /**
               *List d'E-mails des responsable de l'application 
               */
              
               "contacts"?:string[];
              
       
              /**
               *Nom du Client à présenter à l' End-User 
               */
              
               "client_name"?:string;
              
       
              /**
               *URl qui référence le Logo de l'application. 
               */
              
               "logo_uri"?:string;
              
       
              /**
               *URL de la page Home du Client. 
               */
              
               "client_uri"?:string;
              
       
              /**
               *Url que le Client fourni à l'utilisateur (End-User) pour définir l'étendu de l'utilisation de l'information recueilli. 
               */
              
               "policy_uri"?:string;
              
       
              /**
               *URL que le Client fourni à l'End-User pour lire les termes du service. 
               */
              
               "tos_uri"?:string;
              
       
              /**
               *URL pour le document JWK (JSON Web Key Set) du Client 
               */
              
               "jwks_uri"?:string;
              
       
              /**
               *Client's JSON Web Key Set [JWK] document, passed by value. 
               */
              
              "jwks"?:Ijwks;
              
       
              /**
               *URl utilisant le schéma https à utilisé pour le calcul d'Identifiant Pseudo-anonyme par l'OP. 
               */
              
               "sector_identifier_uri"?:string;
              
       
              /**
               *subject_type demandé comme réponse par le Client. 
               */
              
               "subject_type"?:string;
              
       
              /**
               *JWA algorithm REQUIS pour la signature de l'ID Token émit par le Client ('none' NE DOIT PAS être utilisé) . 
               */
              
               "id_token_signed_response_alg"?:string;
              
       
              /**
               *JWA algorithm REQUIS pour l'encryption de l'ID Token émit par le Client. 
               */
              
               "id_token_encrypted_response_alg"?:string;
              
       
              /**
               *JWE enc algorithme [JWA] REQUIS pour le cryptage de l'ID Token émit pars le Client. 
               */
              
               "id_token_encrypted_response_enc"?:string;
              
       
              /**
               *WS alg algorithme [JWA] REQUIS pour la  réponse de signature UserInfo. 
               */
              
               "userinfo_signed_response_alg"?:string;
              
       
              /**
               *[JWE] alg algorithm [JWA] REQUIRED for encrypting UserInfo Responses. 
               */
              
               "userinfo_encrypted_response_alg"?:string;
              
       
              /**
               *JWE enc algorithm [JWA] REQUIRED for encrypting UserInfo Responses. 
               */
              
               "userinfo_encrypted_response_enc"?:string;
              
       
              /**
               *[JWS] alg algorithm [JWA] that MUST be used for signing Request Objects sent to the OP. 
               */
              
               "request_object_signing_alg"?:string;
              
       
              /**
               *[JWE] alg algorithm [JWA] the RP is declaring that it may use for encrypting Request Objects sent to the OP. 
               */
              
               "request_object_encryption_alg"?:string;
              
       
              /**
               *JWE enc algorithm [JWA] the RP is declaring that it may use for encrypting Request Objects sent to the OP. 
               */
              
               "request_object_encryption_enc"?:string;
              
       
              /**
               *Requested Client Authentication method for the Token Endpoint.  
               */
              
               "token_endpoint_auth_method"?:string;
              
       
              /**
               *[JWS] alg algorithm [JWA] that MUST be used for signing the JWT [JWT] used to authenticate the Client at the Token Endpoint for the private_key_jwt and client_secret_jwt authentication methods. 
               */
              
               "token_endpoint_auth_signing_alg"?:string;
              
       
              /**
               * Default Maximum Authentication Age. (in seconds) 
               */
              
               "default_max_age"?:number;
              
       
              /**
               *Boolean value specifying whether the auth_time Claim in the ID Token is REQUIRED.  
               */
              
               "require_auth_time"?:boolean;
              
       
              /**
               *Default requested Authentication Context Class Reference values.  
               */
              
               "default_acr_values"?:string[];
              
       
              /**
               *URI using the https scheme that a third party can use to initiate a login by the RP 
               */
              
               "initiate_login_uri"?:string;
              
       
              /**
               *Array of request_uri values that are pre-registered by the RP for use at the OP.  
               */
              
               "request_uris"?:string[];
              
       
              /**
               *paire utilisateur/roles 
               */
              
              "users"?:Iuser_roles[];
              
       
              /**
               *list des url de redirection pour le logout 
               */
              
               "post_logout_redirect_uris"?:string[];
              
       
              /**
               *configuration des connecteurs sociaux 
               */
              
              "passportConfig"?:Ipassport_strategie[];
              
       
              /**
               *paramètre de gestion des utilisateurs 
               */
              
              "userManagment"?:Ioidc_clientUserManagment;
              
       
   }

    /**
    interface de la class passport_strategie_twitter 
    description Passport strategy for authenticating with Twitter using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-twitter)
   */
    export interface Ipassport_strategie_twitter extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *TWITTER_CONSUMER_KEY 
               */
              
               "consumerKey":string;
              
       
              /**
               *TWITTER_CONSUMER_SECRET 
               */
              
               "consumerSecret":string;
              
       
              /**
               *url de callback 
               */
              
               "callbackURL":string;
              
       
   }

    /**
    interface de la class passport_strategie_instagram 
    description Passport strategy for authenticating with Instagram using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-instagram)
   */
    export interface Ipassport_strategie_instagram extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *INSTAGRAM_CLIENT_ID 
               */
              
               "clientID":string;
              
       
              /**
               *INSTAGRAM_CLIENT_SECRET 
               */
              
               "clientSecret":string;
              
       
              /**
               *url de callback 
               */
              
               "callbackURL":string;
              
       
   }

    /**
    interface de la class name_value 
    description paire clef valeur
   */
    export interface Iname_value extends  IBase {
        
              /**
               *nom de la clef 
               */
              
               "key":string;
              
       
              /**
               *valeur associé a la clef 
               */
              
               "value"?:string;
              
       
   }

    /**
    interface de la class licenceStore_global 
    description licence store dont les applications sont le catalogue du client
   */
    export interface IlicenceStore_global extends   IlicenceStore{
        
   }

    /**
    interface de la class service_licence_token 
    description c'est un service en charge de valider les licences et retourner les configurations des applications web
   */
    export interface Iservice_licence_token extends   Iservice{
        
              /**
               *l'url du la base hébergeant les licences 
               */
              
               "licenceUrl"?:string;
              
       
              /**
               *l'url de la base contenant les instances d'application 
               */
              
               "application_instanceUrl"?:string;
              
       
              /**
               *durée du token d’accès aux services 
               */
              
               "tockenDuration"?:number;
              
       
              /**
               *l'url de la configuration du serveur sso  
               */
              
               "sso_well-known"?:string;
              
       
              /**
               *liste des certificats 
               */
              
               "certificates"?:string[];
              
       
              /**
               *url de la collection endClient 
               */
              
               "end_clientUrl"?:string;
              
       
   }

    /**
    interface de la class oidc_account 
    description compte de l'utilisateur
   */
    export interface Ioidc_account extends  IBase {
        
              /**
               *id du compte 
               */
              
               "account_id":string;
              
       
              /**
               *birthdate 
               */
              
               "birthdate"?:Date;
              
       
              /**
               *email 
               */
              
               "email":string;
              
       
              /**
               *email_verified 
               */
              
               "email_verified"?:boolean;
              
       
              /**
               *family_name 
               */
              
               "family_name"?:string;
              
       
              /**
               *gender 
               */
              
               "gender"?:string;
              
       
              /**
               *given_name 
               */
              
               "given_name"?:string;
              
       
              /**
               *locale 
               */
              
               "locale"?:string;
              
       
              /**
               *middle_name 
               */
              
               "middle_name"?:string;
              
       
              /**
               *name 
               */
              
               "name"?:string;
              
       
              /**
               *nickname 
               */
              
               "nickname"?:string;
              
       
              /**
               *phone_number 
               */
              
               "phone_number"?:string;
              
       
              /**
               *phone_number_verified 
               */
              
               "phone_number_verified"?:boolean;
              
       
              /**
               *l’empreinte du mot de passe 
               */
              
               "password"?:string;
              
       
              /**
               *url de l'avatar 
               */
              
               "picture"?:string;
              
       
              /**
               *profile sociaux 
               */
              
              "connector"?:Isocial_data[];
              
       
   }

    /**
    interface de la class service_access 
    description décrit les régles de paramètre des servies
   */
    export interface Iservice_access extends  IBase {
        
              /**
               *nom de la configuration 
               */
              
               "name"?:string;
              
       
              /**
               *service au qu'elle s'applique la configuration 
               */
              
               "service"?:string;
              
       
              /**
               *liste les règles d’accès aux routes d'un service 
               */
              
              "httAccess"?:Iurl_role;
              
       
   }

    /**
    interface de la class url_role 
    description règle de sécurité relative aux url
   */
    export interface Iurl_role extends  IBase {
        
              /**
               *sécurité du verbe get 
               */
              
              "_$get"?:Iroute_role[];
              
       
              /**
               *règle de sécurité des post 
               */
              
              "_$post"?:Iroute_role[];
              
       
              /**
               *règle de sécurité du verbe delete 
               */
              
              "_$delete"?:Iroute_role[];
              
       
              /**
               *règle de sécurité du verbe update 
               */
              
              "_$put"?:Iroute_role[];
              
       
              /**
               *règle de sécurité du verbe patch 
               */
              
              "_$patch"?:Iroute_role[];
              
       
   }

    /**
    interface de la class socketIoConfig 
    description socketIoConfig
   */
    export interface IsocketIoConfig extends  IBase {
        
              /**
               *serverOptionPath 
               */
              
               "serverOptionPath"?:string;
              
       
   }

    /**
    interface de la class social_data 
    description donnée des connecteur sociaux
   */
    export interface Isocial_data extends  IBase {
        
   }

    /**
    interface de la class ui_menu_mongo_editor 
    description un noeud de menu de mongoEditor
   */
    export interface Iui_menu_mongo_editor extends  IBase {
        
              /**
               *le nom a aficher 
               */
              
               "label"?:string;
              
       
              /**
               *le path dans l'application web 
               */
              
               "path"?:string;
              
       
              /**
               *icon 
               */
              
               "icon"?:string;
              
       
              /**
               *liste des sous menu 
               */
              
              "child"?:Iui_menu_mongo_editor[];
              
       
   }

    /**
    interface de la class passport_strategie_windowslive 
    description Passport strategy for authenticating with Microsoft accounts (aka Windows Live) using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-windowslive)
   */
    export interface Ipassport_strategie_windowslive extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *WINDOWS_LIVE_CLIENT_ID 
               */
              
               "clientID":string;
              
       
              /**
               *WINDOWS_LIVE_CLIENT_SECRET 
               */
              
               "clientSecret":string;
              
       
              /**
               *url de callback 
               */
              
               "callbackURL":string;
              
       
              /**
               *scope 
               */
              
               "scope"?:string;
              
       
   }

    /**
    interface de la class passport_strategie_dropbox 
    description Passport strategy for authenticating with Dropbox using the OAuth 2.0 API. (https://github.com/florianheinemann/passport-dropbox-oauth2)
   */
    export interface Ipassport_strategie_dropbox extends   Ipassport_strategie{
        
              /**
               *lib 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *DROPBOX_CLIENT_ID 
               */
              
               "clientID":string;
              
       
              /**
               *DROPBOX_CLIENT_SECRET 
               */
              
               "clientSecret":string;
              
       
              /**
               *url de callback 
               */
              
               "callbackURL":string;
              
       
              /**
               *apiVersion 
               */
              
               "apiVersion"?:number;
              
       
   }

    /**
    interface de la class dataTableInit 
    description initalisation des listes
   */
    export interface IdataTableInit extends  IBase {
        
              /**
               *liste des champs a afficher  
               */
              
               "fieldsNames"?:string[];
              
       
              /**
               *champ a trier  
               */
              
               "sortField"?:string;
              
       
              /**
               *direction du tri 
               */
              
               "direction"?:string;
              
       
   }

    /**
    interface de la class periodicalDistrution_month 
    description permet de limiter la distribution chaque jour du mois
   */
    export interface IperiodicalDistrution_month extends   IperiodicalDistrution{
        
              /**
               *jour de début de distribution 
               */
              
               "startDay"?:number;
              
       
              /**
               *jour de fin de distribution 
               */
              
               "endDay"?:number;
              
       
   }

    /**
    interface de la class periodicalDistrution 
    description période de distribution
   */
    export interface IperiodicalDistrution extends  IBase {
        
              /**
               *nombre maximum de distribution sur cette periode 
               */
              
               "nbMax"?:number;
              
       
              /**
               *nombre de licence disponible sur la période actuelle 
               */
              
               "currentNb"?:number;
              
       
   }

    /**
    interface de la class periodicalDistrution_day 
    description journée autorisé
   */
    export interface IperiodicalDistrution_day extends   IperiodicalDistrution{
        
              /**
               *distribution autorisé le lundi 
               */
              
               "lundi"?:boolean;
              
       
              /**
               *distribution autorisé le mardi 
               */
              
               "mardi"?:boolean;
              
       
              /**
               *distribution autorisé le  mercredi 
               */
              
               "mercredi"?:boolean;
              
       
              /**
               *distribution autorisé le jeudi 
               */
              
               "jeudi"?:boolean;
              
       
              /**
               *distribution autorisé le vendredi 
               */
              
               "vendredi"?:boolean;
              
       
              /**
               *distribution autorisé le samedi 
               */
              
               "samedi"?:boolean;
              
       
              /**
               *distribution autorisé le dimanche 
               */
              
               "dimanche"?:boolean;
              
       
   }

    /**
    interface de la class periodicalDistrution_periode 
    description permet de créer une plage de date de distribution
   */
    export interface IperiodicalDistrution_periode extends   IperiodicalDistrution{
        
              /**
               *date de début de distribution 
               */
              
               "startDate"?:Date;
              
       
              /**
               *date de fin de distribution 
               */
              
               "endDate"?:Date;
              
       
   }

    /**
    interface de la class mail_sendgrid 
    description objet envoyé a l'api sendgrid 
   */
    export interface Imail_sendgrid extends   Imail{
        
              /**
               *content 
               */
              
               "content"?:string;
              
       
              /**
               *from 
               */
              
               "from"?:string;
              
       
              /**
               *personalizations 
               */
              
               "personalizations"?:string;
              
       
              /**
               *reply_to 
               */
              
               "reply_to"?:string;
              
       
              /**
               *subject 
               */
              
               "subject"?:string;
              
       
              /**
               *la date d'envoie demandé 
               */
              
               "send_at"?:Date;
              
       
              /**
               *template_id 
               */
              
               "template_id"?:string;
              
       
   }

    /**
    interface de la class schema_name 
    description mapping de schema et de nom
   */
    export interface Ischema_name extends  IBase {
        
              /**
               *nom du schema 
               */
              
               "entity"?:string;
              
       
              /**
               *le nom humain au singulier 
               */
              
               "singular"?:string;
              
       
              /**
               *le nom humain au pluriel 
               */
              
               "plural"?:string;
              
       
              /**
               *permet d'indiquer le champ qui sert de nom dans le fil d'ariane 
               */
              
               "fieldName"?:string;
              
       
              /**
               *liste des champs à masquer à l'utilisateur 
               */
              
               "unvisibleFields"?:string[];
              
       
              /**
               *mappage des nom de champ avec les nom utilisateurs 
               */
              
              "fieldsNames"?:Iname_value[];
              
       
              /**
               *prametre d'initalisation des listes 
               */
              
              "listParameter"?:IdataTableInit;
              
       
              /**
               *activer le bouton nouveau 
               */
              
               "create"?:boolean;
              
       
              /**
               *active le bouton delete 
               */
              
               "delete"?:boolean;
              
       
              /**
               *active le bouton clone 
               */
              
               "clone"?:boolean;
              
       
              /**
               *active le bouton enregistrer 
               */
              
               "update"?:boolean;
              
       
   }

    /**
    interface de la class pack_card 
    description c'est un paquet de carte
   */
    export interface Ipack_card extends   Iapplication{
        
              /**
               *l'url de l'image 
               */
              
               "imageUrl"?:string;
              
       
              /**
               *nom de la compagnie dans l'infra de goshaba  
               */
              
               "companyName"?:string;
              
       
              /**
               *l'id de la compagnie dans l'infra de goshaba 
               */
              
               "companyId"?:string;
              
       
   }

    /**
    interface de la class service_goshabaGateway 
    description passerelle pour goshaba
   */
    export interface Iservice_goshabaGateway extends   Iservice{
        
              /**
               *clef privée d'echange entre les serveurs 
               */
              
               "privateKey":string;
              
       
              /**
               *url de la collection de pack de carte 
               */
              
               "packUrl":string;
              
       
   }

    /**
    interface de la class service_socketIo 
    description communication temps réelle multi format
   */
    export interface Iservice_socketIo extends   Iservice{
        
              /**
               *la valeur a retourner 
               */
              
               "returnValue"?:string;
              
       
              /**
               *allowCrossOrigin 
               */
              
               "allowCrossOrigin"?:boolean;
              
       
              /**
               *socketIo configuration 
               */
              
              "socketIo"?:IsocketIoConfig;
              
       
   }

    /**
    interface de la class service_supervision 
    description service_supervision
   */
    export interface Iservice_supervision extends   Iservice{
        
              /**
               *mongoosePath vers les log 
               */
              
               "mongoosePath"?:string;
              
       
              /**
               *base sur laquelle la connexion s'etabli 
               */
              
               "mongoAuthSource"?:string;
              
       
              /**
               *configuration de démarrages des services 
               */
              
              "services"?:Iservice_supervision_service_conf[];
              
       
   }

    /**
    interface de la class service_configuration 
    description c'est le service de distribution des configurations des services
   */
    export interface Iservice_configuration extends   Iservice{
        
              /**
               *l'url du service de base de donnée de l'infra 
               */
              
               "srvUrl"?:string;
              
       
              /**
               *le nom de la collection des services 
               */
              
               "serviceCollectionName"?:string;
              
       
              /**
               *les configurations de service des applications 
               */
              
               "serviceConfigCollectionName"?:string;
              
       
   }

    /**
    interface de la class protoschema 
    description protoschema est un méta modéle. il permet de créer les autres modèle de la base
   */
    export interface Iprotoschema extends  IBase {
        
              /**
               *le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *la description de ce que représente le modéle 
               */
              
               "description":string;
              
       
              /**
               *tag indiquant que l'objet est abstrait, seule ces enfants doivent être utilisé comme donnée 
               */
              
               "isAbstract"?:boolean;
              
       
              /**
               *si il est activé le schéma ne crée pas de collection  
               */
              
               "isSchema"?:boolean;
              
       
              /**
               *permet d'hériter du schema parentMadel 
               */
              
               "parentModel"?:string;
              
       
              /**
               *liste des champs du documents 
               */
              
              "fields"?:Ifield[];
              
       
   }

    /**
    interface de la class entity_source 
    description association d'une entité et de l'url de son service
   */
    export interface Ientity_source extends  IBase {
        
              /**
               *url du service 
               */
              
               "url"?:string;
              
       
              /**
               *nom de l'entité 
               */
              
               "entityName"?:string[];
              
       
   }

    /**
    interface de la class oidc_clientUserManagment 
    description configuration du gestionnaire d'utilisateur
   */
    export interface Ioidc_clientUserManagment extends  IBase {
        
              /**
               *url du service d'enregistrement 
               */
              
               "sign_in_uri":string;
              
       
              /**
               *url du service de récupération de mot de passe 
               */
              
               "password_recovery_uri":string;
              
       
   }

    /**
    interface de la class mail 
    description collection de mail
   */
    export interface Imail extends  IBase {
        
   }

    /**
    interface de la class mongo_aggregation 
    description les opérateurs d'aggregation du pipe de mongo
   */
    export interface Imongo_aggregation extends  IBase {
        
              /**
               *Target collection for the $graphLookup operation to search, recursively matching the connectFromField to the connectToField. The from collection cannot be sharded and must be in the same database as any other collections used in the operation. 
               */
              
               "from"?:string;
              
       
   }

    /**
    interface de la class mongo_queryfilter 
    description mongo_queryfilter
   */
    export interface Imongo_queryfilter extends  IBase {
        
   }

    /**
    interface de la class mongo_expression_eq 
    description https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_eq
   */
    export interface Imongo_expression_eq extends   Imongo_expression_comp{
        
   }

    /**
    interface de la class mongo_expression_gt 
    description https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_gt
   */
    export interface Imongo_expression_gt extends   Imongo_expression_comp{
        
   }

    /**
    interface de la class mongo_expression_gte 
    description https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_gte
   */
    export interface Imongo_expression_gte extends   Imongo_expression_comp{
        
   }

    /**
    interface de la class mongo_expression_in 
    description https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_in
   */
    export interface Imongo_expression_in extends   Imongo_expression_comp{
        
   }

    /**
    interface de la class mongo_expression_lt 
    description https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_lt
   */
    export interface Imongo_expression_lt extends   Imongo_expression_comp{
        
   }

    /**
    interface de la class mongo_expression_lte 
    description https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_lte
   */
    export interface Imongo_expression_lte extends   Imongo_expression_comp{
        
   }

    /**
    interface de la class mongo_expression_ne 
    description https://docs.mongodb.com/manual/reference/operator/query/eq/#op._S_nin
   */
    export interface Imongo_expression_ne extends   Imongo_expression_comp{
        
   }

    /**
    interface de la class mongo_expression_comp 
    description mongo_expression_comp
   */
    export interface Imongo_expression_comp extends   Imongo_expression{
        
              /**
               *field name, for subDonc prop.fieldName 
               */
              
               "field"?:string;
              
       
              /**
               *valeur de l'égalité 
               */
              
               "value":string[];
              
       
              /**
               *type de donnée a comparer 
               */
              
               "dataType":string;
              
       
              /**
               *la donnée est un tableau 
               */
              
               "isArray"?:boolean;
              
       
   }

    /**
    interface de la class mongo_expression 
    description mongo_expression
   */
    export interface Imongo_expression extends  IBase {
        
   }

    /**
    interface de la class mongo_expression_logical 
    description Logical Query Operators
   */
    export interface Imongo_expression_logical extends   Imongo_expression{
        
   }

    /**
    interface de la class mongo_expression_and 
    description https://docs.mongodb.com/manual/reference/operator/query/and/
   */
    export interface Imongo_expression_and extends   Imongo_expression_logical{
        
              /**
               *expression 
               */
              
              "expression":Imongo_expression[];
              
       
   }

    /**
    interface de la class mongo_expression_not 
    description https://docs.mongodb.com/manual/reference/operator/query/not/
   */
    export interface Imongo_expression_not extends   Imongo_expression_logical{
        
              /**
               *field 
               */
              
               "field":string;
              
       
              /**
               *expression 
               */
              
              "expression":Imongo_expression[];
              
       
   }

    /**
    interface de la class mongo_expression_nor 
    description https://docs.mongodb.com/manual/reference/operator/query/nor/
   */
    export interface Imongo_expression_nor extends   Imongo_expression_logical{
        
              /**
               *expression 
               */
              
              "expression":Imongo_expression[];
              
       
   }

    /**
    interface de la class mongo_expression_or 
    description https://docs.mongodb.com/manual/reference/operator/query/or/
   */
    export interface Imongo_expression_or extends   Imongo_expression_logical{
        
              /**
               *expression 
               */
              
              "expression":Imongo_expression[];
              
       
   }

    /**
    interface de la class mongo_expression_array 
    description mongo_expression_array
   */
    export interface Imongo_expression_array extends   Imongo_expression{
        
              /**
               *value 
               */
              
               "value"?:string[];
              
       
              /**
               *valueType 
               */
              
               "valueType"?:string;
              
       
              /**
               *isArray 
               */
              
               "isArray"?:boolean;
              
       
   }

    /**
    interface de la class nginxConfigurationFile 
    description description d'un fichier de configuration nginx
   */
    export interface InginxConfigurationFile extends  IBase {
        
              /**
               *suffix a utiliser pour générer le fichier de configuration (idService_suffix.config) 
               */
              
               "suffix"?:string;
              
       
              /**
               *le template à répéter avec les services 
               */
              
               "template"?:string;
              
       
              /**
               *liste des services 
               */
              
               "services"?:string[];
              
       
   }

    /**
    interface de la class service_nginxConfigurator 
    description service_nginxConfigurator
   */
    export interface Iservice_nginxConfigurator extends   Iservice{
        
   }

    /**
    interface de la class nginxConfigurationFileApp 
    description description d'un fichier de configuration nginx
   */
    export interface InginxConfigurationFileApp extends  IBase {
        
              /**
               *suffix a utiliser pour générer le fichier de configuration (idService_suffix.config) 
               */
              
               "suffix"?:string;
              
       
              /**
               *le template à répéter avec les services 
               */
              
               "template"?:string;
              
       
              /**
               *liste des applications 
               */
              
               "applications":string[];
              
       
              /**
               *le client associé 
               */
              
               "clients":string[];
              
       
   }

    /**
    interface de la class application_configuration_appCoach 
    description c'est la configuration d'une application Coach
   */
    export interface Iapplication_configuration_appCoach extends   Iapplication_configuration{
        
   }

    /**
    interface de la class application_configuration_super_admin_mongo 
    description configuration de l'application superAdminMongo
   */
    export interface Iapplication_configuration_super_admin_mongo extends   Iapplication_configuration{
        
              /**
               *liste des url des services de base mongo 
               */
              
               "servicesUrl"?:string[];
              
       
              /**
               *l'url du forum 
               */
              
               "forumUrl"?:string;
              
       
              /**
               *l'url du remote fso  
               */
              
               "fileServiceUrl"?:string;
              
       
              /**
               *url du file service 
               */
              
               "URL_FileService"?:string;
              
       
              /**
               *nginx 
               */
              
              "nginx"?:Iname_url[];
              
       
              /**
               *liste des service de supervision 
               */
              
              "supervisor"?:Iname_url[];
              
       
              /**
               *menu de l'appli 
               */
              
              "menu"?:Iui_menu_mongo_editor[];
              
       
              /**
               *entityUrl 
               */
              
              "entityUrl"?:Ientity_source[];
              
       
              /**
               *permet de paramétrer le rendu des schemas 
               */
              
              "entityName"?:Ischema_name[];
              
       
   }

    /**
    interface de la class service_push_notification 
    description Service pour gérer les notifications push des applications
   */
    export interface Iservice_push_notification extends   Iservice{
        
   }

    /**
    interface de la class service_like 
    description service permettant de liker un objet de la base
   */
    export interface Iservice_like extends   Iservice{
        
              /**
               *url de la collection des like 
               */
              
               "likeCollection":string;
              
       
              /**
               *url de la collection de notes 
               */
              
               "noteCollection":string;
              
       
   }

    /**
    interface de la class service_serviceOrchestrator 
    description service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
   */
    export interface Iservice_serviceOrchestrator extends  IBase {
        
   }

    /**
    interface de la class object 
    description ce champ représente les objets
   */
    export interface Iobject extends   Ifield{
        
   }

    /**
    interface de la class _view 
    description créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
   */
    export interface I_view extends  IBase {
        
              /**
               *nom de la route d'accés 
               */
              
               "name":string;
              
       
              /**
               *la description qui apparaîtra dans la doc 
               */
              
               "description":string;
              
       
              /**
               *le format attendu en sortie 
               */
              
               "output":string;
              
       
              /**
               *model sur le quelle on opère l'agrégation 
               */
              
               "model":string;
              
       
              /**
               *liste des operation du pipeline 
               */
              
               "pipeline"?:any[];              
              
       
   }

    /**
    interface de la class castParam 
    description paramètre d'une querry qui doit être casté
   */
    export interface IcastParam extends  IBase {
        
              /**
               *paramètre a ajouter a l'objet ctx.params 
               */
              
               "paramName":string;
              
       
              /**
               *type de paramétre 
               */
              
               "type"?:string;
              
       
              /**
               *contexte a caster 
               */
              
               "param":string;
              
       
   }

    /**
    interface de la class _view_params 
    description view avec des params
   */
    export interface I_view_params extends   I_view{
        
              /**
               *liste des paramètres de la route 
               */
              
              "params"?:IrouteParam[];
              
       
              /**
               *parametre a caster 
               */
              
              "castParams"?:IcastParam[];
              
       
   }

    /**
    interface de la class routeParam 
    description paramètre d'une route
   */
    export interface IrouteParam extends  IBase {
        
              /**
               *paramètre de la route 
               */
              
               "paramName":string;
              
       
              /**
               *type de paramétre 
               */
              
               "type"?:string;
              
       
   }

    /**
    interface de la class licence 
    description représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
   */
    export interface Ilicence extends  IBase {
        
              /**
               *le end_client qui a distribué la licence 
               */
              
               "end_client"?:string;
              
       
              /**
               *l'utilisateur bénéficiant de la licence 
               */
              
               "user"?:string;
              
       
              /**
               *l'instance de l'application qui est sous licence 
               */
              
               "application_instance"?:string[];
              
       
              /**
               *les ressources externes 
               */
              
               "ressource"?:string[];
              
       
              /**
               *référence du licence store qui a émis cette licence 
               */
              
               "licenceStoreRef"?:string;
              
       
              /**
               *date de création 
               */
              
               "creationDate":Date;
              
       
              /**
               *date de la première utilisation 
               */
              
               "usingDate"?:Date;
              
       
   }

    /**
    interface de la class service_dumy_fso 
    description simple remote file system a n utiliser que pour des test
   */
    export interface Iservice_dumy_fso extends   Iservice{
        
              /**
               *le chemin du repertoire de base de stockage 
               */
              
               "fsoBase"?:string;
              
       
              /**
               *Url de la basse de donnée 
               */
              
               "url_bd"?:string;
              
       
              /**
               *url de la colection des "directories" 
               */
              
               "url_folder_collection"?:string;
              
       
              /**
               *URL de la colletion "files" 
               */
              
               "url_file_collection"?:string;
              
       
              /**
               *URL du service 
               */
              
               "url_service"?:string;
              
       
              /**
               *Repertoire ou seront sauvegardé les fichiers 
               */
              
               "root_file_directory"?:string;
              
       
   }

    /**
    interface de la class licenceStore 
    description stock de licence distribuable
   */
    export interface IlicenceStore extends  IBase {
        
              /**
               *nombre de licence a distrubuer 
               */
              
               "nbLicence"?:number;
              
       
              /**
               *licence paramétré 
               */
              
              "licenceTemplate"?:Ilicence[];
              
       
              /**
               *assignation automatique d'une licence 
               */
              
               "autoAssign"?:boolean;
              
       
              /**
               *date de début de distribution possible 
               */
              
               "validytyStartDate"?:Date;
              
       
              /**
               *date de fin de validité 
               */
              
               "validityEndDate"?:Date;
              
       
              /**
               *permet de gérer des limites de distribution 
               */
              
              "distributionPeriode"?:IperiodicalDistrution[];
              
       
              /**
               *nom de pack de licence 
               */
              
               "name":string;
              
       
              /**
               *nombre de licence mise a disposition 
               */
              
               "nbLicenceOriginal":number;
              
       
              /**
               *référence du licenceStore 
               */
              
               "ref"?:string;
              
       
   }

    /**
    interface de la class application_configuration_antico 
    description configuration d'un parcourt anticoruption
   */
    export interface Iapplication_configuration_antico extends   Iapplication_configuration{
        
   }

    /**
    interface de la class MultilangSendGridTemplate 
    description décrit un template multi langue d'envoie de mail avec sendGrid
   */
    export interface IMultilangSendGridTemplate extends  IBase {
        
              /**
               *le nom du template 
               */
              
               "name":string;
              
       
              /**
               *liste des Template sendgrid 
               */
              
              "sendGridTemplates"?:IsendGridTemplate[];
              
       
   }

    /**
    interface de la class service_sendGrid 
    description permet d'envoyer des mail via l'api send grid v3
   */
    export interface Iservice_sendGrid extends   Iservice{
        
              /**
               *la clef d'api de sendgrid 
               */
              
               "sendGridApiKey":string;
              
       
              /**
               *url de la collection de message pour les sauvegarder 
               */
              
               "messageUrl":string;
              
       
              /**
               *l'url de la collection de user 
               */
              
               "userUrl":string;
              
       
              /**
               *liste des templates  
               */
              
               "templates"?:string[];
              
       
   }

    /**
    interface de la class service_trainingCoursesService 
    description service de gestion des parcourts de formation
   */
    export interface Iservice_trainingCoursesService extends   Iservice{
        
              /**
               *url de la bdd des sessions 
               */
              
               "apiSession":string;
              
       
              /**
               *url du licence service 
               */
              
               "licenceServiceUrl":string;
              
       
              /**
               *url du service de gestion des tache planifier 
               */
              
               "taskServiceUrl":string;
              
       
              /**
               *url du service d'envoie de mail 
               */
              
               "mailServiceUrl":string;
              
       
              /**
               *l'url de la bd d'infra 
               */
              
               "clientInfraUrl":string;
              
       
   }

    /**
    interface de la class aclIdentity 
    description description d'une identit   pour l'acl
   */
    export interface IaclIdentity extends  IBase {
        
              /**
               *end_client ayant droit 
               */
              
               "end_client"?:string;
              
       
              /**
               *application instance ayant droit 
               */
              
               "applicaton_instance"?:string;
              
       
              /**
               *r  le ayant droit 
               */
              
               "role"?:string;
              
       
              /**
               *utilisateur ayant droit 
               */
              
               "user"?:string;
              
       
   }

    /**
    interface de la class _acl 
    description Acl d'un enregistrement
   */
    export interface I_acl extends  IBase {
        
              /**
               *id du createur 
               */
              
               "creator"?:string;
              
       
              /**
               *liste des ayant droit en lecture 
               */
              
              "readers"?:IaclIdentity[];
              
       
              /**
               *liste des ayants droit d'  criture 
               */
              
              "writers"?:IaclIdentity[];
              
       
              /**
               *liste des ayants doit de modification 
               */
              
              "admins"?:IaclIdentity[];
              
       
   }

    /**
    interface de la class application_configuration_appClient 
    description c'est la configuration d'une application Client
   */
    export interface Iapplication_configuration_appClient extends   Iapplication_configuration{
        
              /**
               *url de la bd de l'application 
               */
              
               "configurationUrlDb":string;
              
       
              /**
               *url racine des services 
               */
              
               "urlBase":string;
              
       
              /**
               *url du service d'enregistrement d'utilisateur 
               */
              
               "signinUrl":string;
              
       
              /**
               *url du service de gestion des sessions 
               */
              
               "serviceSessionUrl":string;
              
       
              /**
               *url du service d'acces au info client 
               */
              
               "clientServiceUrl":string;
              
       
              /**
               *template des acl 
               */
              
              "aclTemplate"?:I_acl;
              
       
   }

    /**
    interface de la class service_orchestrator 
    description service d'orchestration
   */
    export interface Iservice_orchestrator extends   Iservice{
        
              /**
               *url de la configuration de l'orchestrateur 
               */
              
               "apiUrl":string;
              
       
   }

    /**
    interface de la class service_socket_io 
    description service messagerie de soket.io
   */
    export interface Iservice_socket_io extends   Iservice{
        
              /**
               *liste des namespace a créer sur le serveur 
               */
              
               "namespaces"?:string[];
              
       
   }

    /**
    interface de la class service_tutor 
    description service de gestion des message tutoré
   */
    export interface Iservice_tutor extends   Iservice{
        
              /**
               *url du service de bd a utiliser 
               */
              
               "apiSession":string;
              
       
   }

    /**
    interface de la class application_configuration_appApprenant 
    description c'est la configuration d'une application Apprenant
   */
    export interface Iapplication_configuration_appApprenant extends   Iapplication_configuration{
        
              /**
               *url de service de bdd du forum 
               */
              
               "forumUrl"?:string;
              
       
              /**
               *url du file service pour le forum 
               */
              
               "fileServiceUrl"?:string;
              
       
              /**
               *url du file service du drive 
               */
              
               "URL_FileService"?:string;
              
       
              /**
               *c'est l'url de la base de donnée de l'application 
               */
              
               "configurationUrlDb":string;
              
       
              /**
               *l'url racine des services 
               */
              
               "urlBase":string;
              
       
              /**
               *l'url du service de like et note 
               */
              
               "likeServiceUrl":string;
              
       
              /**
               *template générique a appliquer aux enregistrements 
               */
              
              "aclTemplate"?:I_acl;
              
       
              /**
               *url du service trainning course 
               */
              
               "trainingCourseServiceUrl":string;
              
       
              /**
               *url du soketio avec le namespace 
               */
              
               "syncSoketioUrl":string;
              
       
              /**
               *le path d'acces pour le soket.io 
               */
              
               "syncSoketioPath":string;
              
       
              /**
               *url du service de video call 
               */
              
               "tutorVideoCallUrl":string;
              
       
              /**
               *url du service de tutora 
               */
              
               "tutorServiceUrl":string;
              
       
   }

    /**
    interface de la class passport_strategie_saml 
    description strategie saml pour passport (https://github.com/bergie/passport-saml)
   */
    export interface Ipassport_strategie_saml extends   Ipassport_strategie{
        
              /**
               *librairie a appeller 
               */
              
               "lib":string;
              
       
              /**
               *la class de stratégie à appeler dans la lib 
               */
              
               "strategieName":string;
              
       
              /**
               *full callbackUrl  
               */
              
               "callbackUrl":string;
              
       
              /**
               * identity provider entrypoint 
               */
              
               "entryPoint"?:string;
              
       
              /**
               *issuer string to supply to identity provider 
               */
              
               "issuer"?:string;
              
       
              /**
               *see 'security and signatures' 
               */
              
               "cert"?:string;
              
       
              /**
               *see 'security and signatures' 
               */
              
               "privateCert"?:string;
              
       
              /**
               *optional private key that will be used to attempt to decrypt any encrypted assertions that are received 
               */
              
               "decryptionPvk"?:string;
              
       
              /**
               * optionally set the signature algorithm for signing requests, valid values are 'sha1' (default), 'sha256', or 'sha512' 
               */
              
               "signatureAlgorithm"?:string;
              
       
              /**
               * dictionary of additional query params to add to all requests 
               */
              
               "additionalParams"?:string;
              
       
              /**
               *if truthy, name identifier format to request from identity provider (default: urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress) 
               */
              
               "identifierFormat"?:string;
              
       
              /**
               *Time in milliseconds of skew that is acceptable between client and server when checking OnBefore and NotOnOrAfter assertion condition validity timestamps. Setting to -1 will disable checking these conditions entirely. Default is 0 
               */
              
               "acceptedClockSkewMs"?:number;
              
       
              /**
               *optional AttributeConsumingServiceIndex attribute to add to AuthnRequest to instruct the IDP which attribute set to attach to the response (link) 
               */
              
               "attributeConsumingServiceIndex"?:string;
              
       
              /**
               *if truthy, do not request a specific auth context 
               */
              
               "disableRequestedAuthnContext"?:boolean;
              
       
              /**
               *if truthy, name identifier format to request auth context (default: urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport) 
               */
              
               "authnContext"?:string;
              
       
              /**
               *if set to true, the initial SAML request from the service provider specifies that the IdP should force re-authentication of the user, even if they possess a valid session. 
               */
              
               "forceAuthn"?:boolean;
              
       
              /**
               *if set to true, the SAML request from the service provider won't be compressed. authnRequestBinding: if set to HTTP-POST, will request authentication from IDP via HTTP POST binding, otherwise defaults to HTTP Redirect 
               */
              
               "skipRequestCompression"?:boolean;
              
       
              /**
               *if truthy, then InResponseTo will be validated from incoming SAML responses 
               */
              
               "validateInResponseTo"?:string;
              
       
              /**
               *Defines the expiration time when a Request ID generated for a SAML request will not be valid if seen in a SAML response in the InResponseTo field. Default is 8 hours. 
               */
              
               "requestIdExpirationPeriodMs"?:number;
              
       
              /**
               *if truthy, req will be passed as the first argument to the verify callback (default: false) 
               */
              
               "passReqToCallback"?:boolean;
              
       
              /**
               *base address to call with logout requests (default: entryPoint) 
               */
              
               "logoutUrl"?:string;
              
       
              /**
               *dictionary of additional query params to add to 'logout' requests 
               */
              
               "additionalLogoutParams"?:string;
              
       
              /**
               *The value with which to populate the Location attribute in the SingleLogoutService elements in the generated service provider metadata. 
               */
              
               "logoutCallbackUrl"?:string;
              
       
   }

    /**
    interface de la class application 
    description liste des applications
   */
    export interface Iapplication extends  IBase {
        
              /**
               *le nom de l'application 
               */
              
               "name"?:string;
              
       
              /**
               *la description public de l'appli 
               */
              
               "description"?:string;
              
       
              /**
               *nom du depot de l'app 
               */
              
               "depot"?:string;
              
       
   }

    /**
    interface de la class TemplateLodash 
    description template lodash + nom
   */
    export interface ITemplateLodash extends  IBase {
        
              /**
               *nom du template 
               */
              
               "name":string;
              
       
              /**
               *contenu du template 
               */
              
               "template":string;
              
       
   }

    /**
    interface de la class service_init_js 
    description service qui retourne un init.js
   */
    export interface Iservice_init_js extends   Iservice{
        
              /**
               *liste des templates disponnibles 
               */
              
              "templates":ITemplateLodash[];
              
       
   }

    /**
    interface de la class service_infra_admin 
    description administration de l'infra
   */
    export interface Iservice_infra_admin extends   Iservice{
        
              /**
               *url du service de bd du sso 
               */
              
               "ssoBdUrl":string;
              
       
              /**
               *url du service de bd de l'infra 
               */
              
               "infraBdUrl":string;
              
       
              /**
               *url de la bd de la plateform 
               */
              
               "platformBdUrl"?:string;
              
       
              /**
               *id du service service_nginxMultiConfigurator 
               */
              
               "service_nginxMultiConfiguratorId":string;
              
       
              /**
               *nginxApplicationSuffix 
               */
              
               "nginxApplicationSuffix"?:string;
              
       
   }

    /**
    interface de la class mailtoinfra2 
    description retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
   */
    export interface Imailtoinfra2 extends   Iservice{
        
              /**
               *url de la base de donnée du sso 
               */
              
               "ssoBdUrl":string;
              
       
              /**
               *url du service de base de donnée de l'infra 
               */
              
               "infraBdUrl":string;
              
       
              /**
               *id de l'application savy 
               */
              
               "savyLearnerId"?:string;
              
       
              /**
               *confMapping 
               */
              
              "confMapping"?:Imail_connexion_conf[];
              
       
   }

    /**
    interface de la class service_planned_tasks 
    description Service de Taches planifiées
   */
    export interface Iservice_planned_tasks extends   Iservice{
        
              /**
               *Url de la bdd 
               */
              
               "bdd_url":string;
              
       
              /**
               *temps en ms entre deux getions des taches. 
               */
              
               "handlerInterval"?:number;
              
       
              /**
               *si la gestion des tache doit étre lancer au demarage du service 
               */
              
               "startHandlingOnServiceStart"?:boolean;
              
       
              /**
               *schedule_url 
               */
              
               "schedule_url"?:string;
              
       
              /**
               *task_url 
               */
              
               "task_url"?:string;
              
       
              /**
               *licencesService_url 
               */
              
               "licencesService_url"?:string;
              
       
              /**
               *url de la base de donnée 
               */
              
               "apiUrl":string;
              
       
   }

    /**
    interface de la class end_client 
    description c'est le client que l'on facture
   */
    export interface Iend_client extends  IBase {
        
              /**
               *le nom de la société 
               */
              
               "name"?:string;
              
       
              /**
               *le nom humain à afficher pour l'entreprise 
               */
              
               "label"?:string;
              
       
              /**
               *liste des instance d'application au quelle le end_client a accés 
               */
              
               "applications"?:string[];
              
       
              /**
               *liste des administrateurs du end_client 
               */
              
               "admins"?:string[];
              
       
              /**
               *distributeur de licence 
               */
              
              "licenceStore"?:IlicenceStore[];
              
       
              /**
               *client notices 
               */
              
              "client_notices"?:Inotice_field[];
              
       
   }

    /**
    interface de la class Service_scorm_gateway 
    description service passerelle d'un package scorm vers l'interne
   */
    export interface IService_scorm_gateway extends   Iservice{
        
              /**
               *clef privé a mettre dans le package scorm 
               */
              
               "privateKey":string;
              
       
              /**
               *id du end client 
               */
              
               "endClientId":string;
              
       
              /**
               *url du service de signin 
               */
              
               "signinUrl":string;
              
       
              /**
               *url du service de licence 
               */
              
               "licenceUrl":string;
              
       
              /**
               *templateUser 
               */
              
               "templateUser":any;              
              
       
              /**
               *templateProfileUser 
               */
              
               "templateProfileUser":any;              
              
       
              /**
               *apiUrl 
               */
              
               "apiUrl"?:string;
              
       
   }

    /**
    interface de la class notice_field 
    description notice field
   */
    export interface Inotice_field extends  IBase {
        
              /**
               *name of notices 
               */
              
               "name"?:string;
              
       
              /**
               *content 
               */
              
               "content"?:string;
              
       
   }

    /**
    interface de la class client_notices 
    description notices for client
   */
    export interface Iclient_notices extends  IBase {
        
              /**
               *client notices values 
               */
              
              "values"?:Inotice_field[];
              
       
   }

    /**
    interface de la class Request 
    description description d'une requete avec request
   */
    export interface IRequest extends  IBase {
        
              /**
               * fully qualified uri or a parsed url object from url.parse() 
               */
              
               "url":string;
              
       
              /**
               *http method (default: "GET") 
               */
              
               "method":string;
              
       
              /**
               *http headers  
               */
              
              "headers"?:Iname_value[];
              
       
              /**
               *entity body for PATCH, POST and PUT requests. Must be a Buffer, String or ReadStream. If json is true, then body must be a JSON-serializable object. 
               */
              
               "body"?:any;              
              
       
   }

    /**
    interface de la class ftpsConfig 
    description configuration pour un service sftp
   */
    export interface IftpsConfig extends  IBase {
        
              /**
               *port sftp 
               */
              
               "port":number;
              
       
              /**
               *private certifaicate cert 
               */
              
               "certPath":string;
              
       
              /**
               *file folder path 
               */
              
               "folderPath":string;
              
       
              /**
               *login for ftp 
               */
              
               "login":string;
              
       
              /**
               *hash of password 
               */
              
               "password"?:string;
              
       
              /**
               *hook when new file create 
               */
              
              "newFileHook"?:IRequest;
              
       
   }

    /**
    interface de la class service_nginxMultiConfigurator 
    description configuration d'un service nginx multi configuration
   */
    export interface Iservice_nginxMultiConfigurator extends   Iservice_nginxConfigurator{
        
              /**
               * le login de l'utilisateur utilisé pour s'impersonifier 
               */
              
               "nginxUser"?:string;
              
       
              /**
               *l'url de la collection des services 
               */
              
               "serviceUrl"?:string;
              
       
              /**
               *url du service de client 
               */
              
               "clientUrl":string;
              
       
              /**
               *url du service d'application instance 
               */
              
               "appInstanceUrl"?:string;
              
       
              /**
               *url du service d'application instance 
               */
              
               "appUrl":string;
              
       
              /**
               *fichier de configuration a générer 
               */
              
              "configurationFile"?:InginxConfigurationFile[];
              
       
              /**
               *liste des applications a publier 
               */
              
              "confApplication"?:InginxConfigurationFileApp[];
              
       
   }

    /**
    interface de la class service_client_ftp 
    description client ftps
   */
    export interface Iservice_client_ftp extends   Iservice{
        
              /**
               *host 
               */
              
               "host":string;
              
       
              /**
               *port 
               */
              
               "ftpPort":number;
              
       
              /**
               *user 
               */
              
               "user":string;
              
       
              /**
               *password 
               */
              
               "password":string;
              
       
              /**
               *downloadPath 
               */
              
               "downloadPath":string;
              
       
   }

    /**
    interface de la class field 
    description ce champ est le champ représente les champs de la base. Il est abstrait, vous devez utiliser ces enfants
   */
    export interface Ifield extends  IBase {
        
              /**
               *représente le nom du champ 
               */
              
               "name":string;
              
       
              /**
               *c'est la description du champ. il permet de générer l'aide ou la documentation 
               */
              
               "description":string;
              
       
              /**
               *permet d'indiquer que le champ est un tableau 
               */
              
               "isArrayOf"?:boolean;
              
       
              /**
               *si le champ est obligatoire 
               */
              
               "required"?:boolean;
              
       
              /**
               *indique que la valeur du champ doit être unique 
               */
              
               "unique"?:boolean;
              
       
              /**
               *????? je suis plus sure 
               */
              
               "index"?:boolean;
              
       
              /**
               *nom pour les interfaces 
               */
              
               "humanName"?:string;
              
       
   }

    /**
    interface de la class application_configuration 
    description c'est la configuration d'une application
   */
    export interface Iapplication_configuration extends  IBase {
        
              /**
               *le nom de la configuration 
               */
              
               "name"?:string;
              
       
              /**
               *configurations de services 
               */
              
               "services"?:string[];
              
       
              /**
               *nom de l'application a afficher 
               */
              
               "appName"?:string;
              
       
   }

    /**
    interface de la class service_polo_celio 
    description service de tirage au sort de polo
   */
    export interface Iservice_polo_celio extends   Iservice{
        
              /**
               *url du service de bdd 
               */
              
               "bdd_url"?:string;
              
       
              /**
               *nombre maximum de gagnan 
               */
              
               "maxNumberOfWinner":number;
              
       
              /**
               *stat de tirage 
               */
              
               "drawStat"?:number;
              
       
              /**
               *stat de tirage du gros lot 
               */
              
               "bigDrawStat"?:number;
              
       
   }

    /**
    interface de la class service_fso 
    description remote file system
   */
    export interface Iservice_fso extends   Iservice{
        
              /**
               *local file path 
               */
              
               "filePath":string;
              
       
              /**
               *url du service de bd 
               */
              
               "bddServiceUrl":string;
              
       
   }

    /**
    interface de la class AppConf_minds_up_admin 
    description config de l'app minds up admin
   */
    export interface IAppConf_minds_up_admin extends   Iapplication_configuration{
        
              /**
               *url de l'api 
               */
              
               "apiUrl":string;
              
       
              /**
               *url du service métier mindsUp 
               */
              
               "serviceMindsUpUrl":string;
              
       
              /**
               *texte a afficher pour valider la rgpd 
               */
              
               "rgpd"?:string;
              
       
              /**
               *url de l'api d'upload 
               */
              
               "uploadUrl":string;
              
       
   }

    /**
    interface de la class service_pdfrip 
    description service de creation de pdf
   */
    export interface Iservice_pdfrip extends   Iservice{
        
   }

    /**
    interface de la class sendGridTemplate 
    description template send grid
   */
    export interface IsendGridTemplate extends  IBase {
        
              /**
               *langue du template 
               */
              
               "lang":string;
              
       
              /**
               *id du template de mail chez sendGrid 
               */
              
               "templateId":string;
              
       
              /**
               *liste des substitutions a réaliser sur le template 
               */
              
              "parametre"?:Iname_value[];
              
       
              /**
               *dynamic_template_data de send grid 
               */
              
              "dynamic_template_data"?:Iname_value[];
              
       
   }

    /**
    interface de la class service_signin 
    description service d'enregistrement
   */
    export interface Iservice_signin extends   Iservice{
        
              /**
               *url de la collection des users 
               */
              
               "userUrl":string;
              
       
              /**
               *mailResetUrl 
               */
              
               "mailResetUrl":string;
              
       
              /**
               *mailInfoUrl 
               */
              
               "mailInfoUrl":string;
              
       
              /**
               *mailAccountCreatedUrl 
               */
              
               "mailAccountCreatedUrl":string;
              
       
              /**
               *nombre de jour de validité d'une demande de reset de password 
               */
              
               "durationResetDay":number;
              
       
              /**
               *url de la collection des user de l'app 
               */
              
               "userAppUrl":string;
              
       
              /**
               *url des profiles des users  
               */
              
               "userProfileUrl":string;
              
       
              /**
               *url du service de bd de la bdd du sso 
               */
              
               "bddSsoUrl"?:string;
              
       
              /**
               *url du service de mail 
               */
              
               "mailerUrl"?:string;
              
       
              /**
               *nom a faire apparaitre dans les mails 
               */
              
               "mailerName"?:string;
              
       
              /**
               *email d'envoie des mail 
               */
              
               "mailerMail"?:string;
              
       
              /**
               *mail de demande de reset de mot de pass 
               */
              
               "resetMail"?:string;
              
       
              /**
               *mail d'information de l'update d'un compte 
               */
              
               "updateMail"?:string;
              
       
   }

    /**
    interface de la class application_instance 
    description c'est le couple application configuration 
   */
    export interface Iapplication_instance extends  IBase {
        
              /**
               *le nom du couple app/config 
               */
              
               "name"?:string;
              
       
              /**
               *l'application représenté 
               */
              
               "application"?:string;
              
       
              /**
               *la configuration de l'application 
               */
              
               "configuration"?:string;
              
       
              /**
               *le end_client de l aplli 
               */
              
               "end_client":string;
              
       
              /**
               *le compte oidc du client pour la connection 
               */
              
               "oidc_client":string;
              
       
              /**
               *la css root de l'app 
               */
              
               "css"?:string;
              
       
              /**
               *data public 
               */
              
               "public_data"?:any;              
              
       
              /**
               *port de publication 
               */
              
               "port"?:number;
              
       
   }

    /**
    interface de la class application_configuration_reportApp 
    description configuration d'un app template
   */
    export interface Iapplication_configuration_reportApp extends   Iapplication_configuration{
        
   }

    /**
    interface de la class application_configuration_celio2020Admin 
    description conf de l'app celio 2020
   */
    export interface Iapplication_configuration_celio2020Admin extends   Iapplication_configuration{
        
              /**
               *url du service de bdd 
               */
              
               "serviceBddUrl"?:string;
              
       
   }

    /**
    interface de la class application_configuration_manu_admin 
    description cond des comptoire de l'or admin
   */
    export interface Iapplication_configuration_manu_admin extends   Iapplication_configuration{
        
              /**
               *url du service d'api 
               */
              
               "bddApiUrl"?:string;
              
       
              /**
               *url du service métier 
               */
              
               "serviceUrl"?:string;
              
       
   }

    /**
    interface de la class application_configuration_comptoire_or_admin 
    description cond des comptoire de l'or admin
   */
    export interface Iapplication_configuration_comptoire_or_admin extends   Iapplication_configuration{
        
              /**
               *url du service d'api 
               */
              
               "bddApiUrl"?:string;
              
       
              /**
               *url du service métier 
               */
              
               "serviceUrl"?:string;
              
       
   }

    /**
    interface de la class route_role 
    description paire route et role
   */
    export interface Iroute_role extends  IBase {
        
              /**
               *route à protéger 
               */
              
               "route"?:string;
              
       
              /**
               *liste des roles 
               */
              
               "role"?:string[];
              
       
   }

    /**
    interface de la class service_mindsUp 
    description service minds up metier
   */
    export interface Iservice_mindsUp extends   Iservice{
        
              /**
               *url du service de bdd de mindsUp 
               */
              
               "urlApi":string;
              
       
              /**
               *url de l'api du sso 
               */
              
               "urlSsoApi":string;
              
       
              /**
               *urlLicenceService 
               */
              
               "urlLicenceService":string;
              
       
              /**
               *url du service d'infra 
               */
              
               "urlInfraBdd":string;
              
       
              /**
               *urlMailerService 
               */
              
               "urlMailerService":string;
              
       
              /**
               *url du rip de pdf 
               */
              
               "urlPdfrip"?:string;
              
       
              /**
               *url des rapport 
               */
              
               "reportUrl"?:string;
              
       
              /**
               *url du service fso 
               */
              
               "urlFsoService":string;
              
       
              /**
               *id de la configuration de l'app cliente 
               */
              
               "applicationClienteConfig":string;
              
       
              /**
               *id de la configuration de l'app admin 
               */
              
               "applicationAdminConfig":string;
              
       
              /**
               *configuration du ftp 
               */
              
              "ftpConf"?:IftpsConfig;
              
       
              /**
               *id de l application instance client 
               */
              
               "appId":string;
              
       
              /**
               *id de l application instance de l'admin 
               */
              
               "adminAppId":string;
              
       
              /**
               *end_client 
               */
              
               "end_client"?:string;
              
       
              /**
               *licenceStoreId de l app cliente 
               */
              
               "licenceStoreId":string;
              
       
              /**
               *id du licence store du l app admin 
               */
              
               "adminLicenceStoreId":string;
              
       
              /**
               *name of the mailer 
               */
              
               "emailSenderName":string;
              
       
              /**
               *Email du mailer 
               */
              
               "emailSenderEmail":string;
              
       
              /**
               *mailIRelance360 
               */
              
               "mailIRelance360":string;
              
       
              /**
               *reference du mail d'invitation a un 360 
               */
              
               "mailInvitation360":string;
              
       
              /**
               *mail d'invitation a participer a une campagne 360 
               */
              
               "mailInvitationCampaign360"?:string;
              
       
              /**
               *mailCreation360 
               */
              
               "mailCreation360"?:string;
              
       
              /**
               *nom de l'application cliente chez le client 
               */
              
               "appName"?:string;
              
       
              /**
               *url de publication de l'application cliente 
               */
              
               "appUrl"?:string;
              
       
              /**
               *Inquiry360UserResponseInfo 
               */
              
               "mailInquiry360UserResponseInfo"?:string;
              
       
              /**
               *Inquiry360UserResponse 
               */
              
               "mailInquiry360UserResponse"?:string;
              
       
              /**
               *url des app en fonction de la langue 
               */
              
              "langUrl"?:Iname_value[];
              
       
   }

    /**
    interface de la class application_configuration_celiofront 
    description configuration de l appli celio front
   */
    export interface Iapplication_configuration_celiofront extends   Iapplication_configuration{
        
   }

    /**
    interface de la class application_configuration_celioback 
    description configuration de l appli celio back
   */
    export interface Iapplication_configuration_celioback extends   Iapplication_configuration{
        
   }

    /**
    interface de la class application_configuration_celioadmin 
    description configuration de l appli celio admin
   */
    export interface Iapplication_configuration_celioadmin extends   Iapplication_configuration{
        
   }

    /**
    interface de la class service_webAppConf 
    description permet de générer les fichier de conf des app (css, js, ...)
   */
    export interface Iservice_webAppConf extends   Iservice{
        
              /**
               *url de la bdd de l'infra 
               */
              
               "infraBddUrl":string;
              
       
              /**
               *url de la bdd du sso 
               */
              
               "ssoBddUrl":string;
              
       
              /**
               *url  de l openid-configuration du sso 
               */
              
               "ssoUrl"?:string;
              
       
              /**
               *ssoIssuer 
               */
              
               "ssoIssuer"?:string;
              
       
              /**
               *url du serveur de licence 
               */
              
               "configurationUrl"?:string;
              
       
   }

    /**
    interface de la class swagger_conv 
    description convertisseur de swagger
   */
    export interface Iswagger_conv extends   Iservice{
        
              /**
               *url de la bdd a mettre a jour 
               */
              
               "urlBdd"?:string;
              
       
   }

    /**
    interface de la class service_mongo 
    description configure un service mongo
   */
    export interface Iservice_mongo extends   Iservice{
        
              /**
               *l'url de connection a mongodb 
               */
              
               "mongoosePath"?:string;
              
       
              /**
               *le nom de la base sur laquelle la connexion doit s'établir. Cela permet de pouvoir créer des bases automatiquements 
               */
              
               "mongoAuthSource"?:string;
              
       
   }

    /**
    interface de la class application_configuration_ferrand 
    description la conf ferrand
   */
    export interface Iapplication_configuration_ferrand extends   Iapplication_configuration{
        
              /**
               *url du service 
               */
              
               "apiUrl"?:string;
              
       
              /**
               *bddUrl 
               */
              
               "bddUrl"?:string;
              
       
   }

    /**
    interface de la class application_configuration_celio 
    description configuration générale application celio
   */
    export interface Iapplication_configuration_celio extends   Iapplication_configuration{
        
              /**
               *url des services de fid 
               */
              
               "fidServiceUrl":string;
              
       
              /**
               *url du service de QCM 
               */
              
               "qcmServiceUrl"?:string;
              
       
              /**
               *url de la bdd fid 
               */
              
               "FidBDDUrl"?:string;
              
       
              /**
               *url de la BDD qcm 
               */
              
               "QcmBDDUrl"?:string;
              
       
   }

    /**
    interface de la class service_celio_qcm_admin 
    description service celio qcm admin
   */
    export interface Iservice_celio_qcm_admin extends   Iservice{
        
              /**
               *url du service de bdd 
               */
              
               "bddUrl":string;
              
       
              /**
               *url du service fid 
               */
              
               "serviceFidUrl":string;
              
       
   }

    /**
    interface de la class service_ferrand 
    description service ferrand
   */
    export interface Iservice_ferrand extends   Iservice{
        
              /**
               *url du service de bdd 
               */
              
               "bddUrl":string;
              
       
   }

    /**
    interface de la class service 
    description identification du service
   */
    export interface Iservice extends  IBase {
        
              /**
               *le nom du service 
               */
              
               "name"?:string;
              
       
              /**
               *l'url racine du service 
               */
              
               "urlBase"?:string;
              
       
              /**
               *le port de publication 
               */
              
               "port"?:number;
              
       
              /**
               *active le debug 
               */
              
               "debug"?:boolean;
              
       
              /**
               *licence_well-known 
               */
              
               "licence_well-known"?:string;
              
       
              /**
               *clef secrète de signature inter service 
               */
              
               "secretKey"?:string;
              
       
              /**
               *paramétrage des accès public 
               */
              
              "publicAccess"?:Iurl_role;
              
       
              /**
               *ip to bind 
               */
              
               "bindIp"?:string;
              
       
              /**
               *liste des headers à ajouter dans les requêtes 
               */
              
              "headers"?:Iname_value[];
              
       
              /**
               *liste des domaines autorisé 
               */
              
               "accessControlAllowOrigin"?:string[];
              
       
              /**
               *url du serveur de configuration 
               */
              
               "confServiceUrl"?:string;
              
       
   }

    /**
    interface de la class AppConf_minds_up 
    description config de l'app minds up
   */
    export interface IAppConf_minds_up extends   Iapplication_configuration{
        
              /**
               *titre de l'introduction 
               */
              
               "introTitle"?:string;
              
       
              /**
               *texte de l'introduction 
               */
              
               "introText"?:string;
              
       
              /**
               *url de la video d intro sur youtub 
               */
              
               "videoUrl"?:string;
              
       
              /**
               *texte à afficher pour valider la rgpd 
               */
              
               "rgpd"?:string;
              
       
              /**
               *url du service metier mindsUp 
               */
              
               "serviceMindsUpUrl":string;
              
       
              /**
               *indique si l'on peut observer son manager 
               */
              
               "managerObservable"?:boolean;
              
       
              /**
               *défini si le manager peut créer un échange sur lui même 
               */
              
               "managerAutoExchange"?:boolean;
              
       
              /**
               *url de l'api de la bdd minds Up 
               */
              
               "apiUrl":string;
              
       
              /**
               *definit si le module 360 est actif 
               */
              
               "module360"?:boolean;
              
       
              /**
               *définie si le module repo est accéssible 
               */
              
               "moduleRepo"?:boolean;
              
       
              /**
               *active la partie progression 
               */
              
               "moduleProgress"?:boolean;
              
       
              /**
               *liste des langues disponibles 
               */
              
              "lang"?:Iname_value[];
              
       
              /**
               *force les collaborateurs des 360 a être anonyme 
               */
              
               "collaborateurAnonyme"?:boolean;
              
       
              /**
               *email validation pour l'ajout de nouveau utilisateur 
               */
              
               "emailValidator"?:string;
              
       
              /**
               *message d'erreur pour le validateur de mail 
               */
              
               "emailValidatorErrorMessage"?:string;
              
       
   }

    /**
    interface de la class application_configuration_petit_moulin 
    description conf petit_moulin
   */
    export interface Iapplication_configuration_petit_moulin extends   Iapplication_configuration{
        
   }

    /**
    interface de la class service_petit_moulin 
    description service petit moulin
   */
    export interface Iservice_petit_moulin extends   Iservice{
        
              /**
               *url de la base de donnée 
               */
              
               "bddUrl"?:string;
              
       
   }

    /**
    interface de la class service_celio_fid 
    description service celio fid
   */
    export interface Iservice_celio_fid extends   Iservice{
        
              /**
               *url du service de bdd 
               */
              
               "bddUrl"?:string;
              
       
              /**
               *url du point d'acces des token 
               */
              
               "accessTokenUrl":string;
              
       
              /**
               *client_id celio 
               */
              
               "client_id":string;
              
       
              /**
               *client_secret celio 
               */
              
               "client_secret"?:string;
              
       
              /**
               *url de l'api hybris 
               */
              
               "hybrisUrl":string;
              
       
              /**
               *baseSiteId des api celio 
               */
              
               "baseSiteId"?:string;
              
       
              /**
               *secretToken apm 
               */
              
               "secretToken"?:string;
              
       
              /**
               *serverUrl apm 
               */
              
               "serverUrl"?:string;
              
       
              /**
               *url du certificat de bdd si il est renseigné, la connection passe en ssl  
               */
              
               "caPath"?:string;
              
       
   }

    /**
    interface de la class service_celio_qcm 
    description service celio qcm
   */
    export interface Iservice_celio_qcm extends   Iservice{
        
              /**
               *url du service de bdd 
               */
              
               "bddUrl":string;
              
       
              /**
               *url du service fid 
               */
              
               "serviceFidUrl":string;
              
       
              /**
               *secretToken apm 
               */
              
               "secretToken"?:string;
              
       
              /**
               *serverUrl apm 
               */
              
               "serverUrl"?:string;
              
       
              /**
               *chemin du certificat, si il est renseigné il active la connexion a la bd en ssl 
               */
              
               "caPath"?:string;
              
       
   }

    /**
    interface de la class service_comptoireOr 
    description service_comptoireOr
   */
    export interface Iservice_comptoireOr extends   Iservice{
        
              /**
               *bddApiUrl 
               */
              
               "bddApiUrl"?:string;
              
       
              /**
               *url du service de bdd du sso 
               */
              
               "ssoApiUrl"?:string;
              
       
              /**
               *licenceApiUrl 
               */
              
               "licenceApiUrl"?:string;
              
       
              /**
               *url de la bdd infra 
               */
              
               "infraBddUrl"?:string;
              
       
              /**
               *Id de la configuration de l'app admin 
               */
              
               "adminConfId"?:string;
              
       
              /**
               *end_client 
               */
              
               "end_client"?:string;
              
       
              /**
               *adminLicenceStoreId 
               */
              
               "adminLicenceStoreId"?:string;
              
       
              /**
               *id de l'app adminApp 
               */
              
               "adminAppId"?:string;
              
       
              /**
               *url de l api send grid 
               */
              
               "sendgridApiUrl"?:string;
              
       
              /**
               *nom de l emeteur 
               */
              
               "senderName"?:string;
              
       
              /**
               *email de l'emeteur 
               */
              
               "senderEmail"?:string;
              
       
              /**
               *template du mail envoyé lors d une transaction 
               */
              
               "transactionEmailTemplate"?:string;
              
       
   }

    /**
    interface de la class MarketingCloudApisConf 
    description config pour MarketingCloudApis
   */
    export interface IMarketingCloudApisConf extends  IBase {
        
              /**
               *accessTokenUrl 
               */
              
               "accessTokenUrl"?:string;
              
       
              /**
               *client_id 
               */
              
               "client_id"?:string;
              
       
              /**
               *client_secret 
               */
              
               "client_secret"?:string;
              
       
              /**
               *account_id 
               */
              
               "account_id"?:string;
              
       
              /**
               *subDomain 
               */
              
               "subDomain"?:string;
              
       
   }

    /**
    interface de la class service_celio_back_task 
    description service celio back_task
   */
    export interface Iservice_celio_back_task extends   Iservice{
        
              /**
               *url du service de bdd fid 
               */
              
               "fidBddUrl":string;
              
       
              /**
               *url du service de bdd qcm 
               */
              
               "qcmBddUrl":string;
              
       
              /**
               *url du service fid 
               */
              
               "serviceFidUrl":string;
              
       
              /**
               *site id de hybris 
               */
              
               "siteId"?:string;
              
       
              /**
               *secretToken apm 
               */
              
               "secretToken"?:string;
              
       
              /**
               *serverUrl apm 
               */
              
               "serverUrl"?:string;
              
       
              /**
               *chemin vers le certificat de bd, si il est renseigné, il active la connexion ssl 
               */
              
               "caPath"?:string;
              
       
              /**
               *url du service hybris 
               */
              
               "hybrisUrl":string;
              
       
              /**
               *client_id hybris 
               */
              
               "client_id":string;
              
       
              /**
               *client_secret hybris 
               */
              
               "client_secret":string;
              
       
              /**
               *url de l accessToken 
               */
              
               "accessTokenUrl":string;
              
       
              /**
               *MarketingCloudApisConf 
               */
              
              "marketingCloudApisConf"?:IMarketingCloudApisConf;
              
       
   }

    /**
    interface de la class ftpConf 
    description configuration ftp
   */
    export interface IftpConf extends  IBase {
        
              /**
               *host 
               */
              
               "host":string;
              
       
              /**
               *port 
               */
              
               "port":number;
              
       
              /**
               *username 
               */
              
               "username":string;
              
       
              /**
               *password 
               */
              
               "password"?:string;
              
       
   }

    /**
    interface de la class application_configuration_petit_moulin_admin 
    description conf petit_moulin_admin
   */
    export interface Iapplication_configuration_petit_moulin_admin extends   Iapplication_configuration{
        
              /**
               *url du service 
               */
              
               "serviceUrl"?:string;
              
       
              /**
               *url de la base de donnée 
               */
              
               "bddUrl"?:string;
              
       
              /**
               *url du filesystem 
               */
              
               "fsoUrl"?:string;
              
       
   }

    /**
    interface de la class service_celio_fid_admin 
    description service celio fid admin
   */
    export interface Iservice_celio_fid_admin extends   Iservice{
        
              /**
               *url du service de bdd de la fid 
               */
              
               "fiBddUrl":string;
              
       
              /**
               *url de la bdd des qcm 
               */
              
               "qcmBddUrl":string;
              
       
              /**
               *url du point d'acces des token 
               */
              
               "accessTokenUrl":string;
              
       
              /**
               *validateTokenUrl 
               */
              
               "validateTokenUrl":string;
              
       
              /**
               *client_id celio 
               */
              
               "client_id":string;
              
       
              /**
               *client_secret celio 
               */
              
               "client_secret"?:string;
              
       
              /**
               *url de l'api hybris 
               */
              
               "hybrisUrl":string;
              
       
              /**
               *conversion des euros en point lors d'un earn 
               */
              
               "earnEuroToPoint":number;
              
       
              /**
               *conversion des euro en point lors d'un burn 
               */
              
               "burnEuroToPoint":number;
              
       
              /**
               *url du server apm 
               */
              
               "serverUrl"?:string;
              
       
              /**
               *secretToken apm 
               */
              
               "secretToken"?:string;
              
       
              /**
               *baseSiteId celio 
               */
              
               "basSiteId"?:string;
              
       
              /**
               *certifPath 
               */
              
               "certifPath"?:string;
              
       
              /**
               *chemin vers le certificat de la bdd, si il est renseigné, il active la connexion en ssl 
               */
              
               "caPath"?:string;
              
       
              /**
               *configuration de la connection au sftp 
               */
              
              "sftp":IftpConf;
              
       
              /**
               *chemin d’accès au répertoire ftp source des tickets ex: /tickets/out/SERVICES/FID/RECEIPTS/ 
               */
              
               "sftpTicketSrcPath"?:string;
              
       
              /**
               *chemin d'accès au répertoire de destination des ticket traité ex: /tickets/out/SERVICES/FID/RECEIPTS/BACKUP/ 
               */
              
               "sftpTicketDestPath"?:string;
              
       
              /**
               *url du service fid admin a appeller depuis un noeud du service fid admin (il se peut que l'url interne vers le loadbalanceur ne soit pas la même que l'externe) 
               */
              
               "cbFidAdminUrl":string;
              
       
              /**
               *liste des centres de coût exclue de la gestion de la fid 
               */
              
               "ticket_costCenterExcluded"?:string[];
              
       
              /**
               *taille des pages scan earn 
               */
              
               "scanOrderEarnPageSize"?:number;
              
       
              /**
               *taille des pages scan eaBurn 
               */
              
               "scanOrderEaBurnPageSize"?:number;
              
       
   }

    /**
    interface de la class service_airport 
    description service airport
   */
    export interface Iservice_airport extends   Iservice{
        
              /**
               *url de la base de donnée 
               */
              
               "bddUrl"?:string;
              
       
   }

    /**
    interface de la class MangoConf 
    description Données de configuration
   */
    export interface IMangoConf extends  IBase {
        
              /**
               *Identifiant client spécifié au moment de l'activation de compte mango 
               */
              
               "clientId":string;
              
       
              /**
               *API MangoPay Version 
               */
              
               "version":string;
              
       
              /**
               *Clé secrète de l'API communiquée à l'activation de compte 
               */
              
               "apiKey":string;
              
       
              /**
               *url de base de l'api mango 
               */
              
               "serverUrl":string;
              
       
              /**
               *url de redirection après paiement 
               */
              
               "paymentRedirectUrl"?:string;
              
       
              /**
               *UserId propriétaire de l'instance mangopay 
               */
              
               "clientUserId"?:string;
              
       
   }

    /**
    interface de la class application_configuration_qbp_admin 
    description config qbp admin
   */
    export interface Iapplication_configuration_qbp_admin extends   Iapplication_configuration{
        
              /**
               *url de la bdd 
               */
              
               "qbpBddUrl"?:string;
              
       
              /**
               *url du service qbp 
               */
              
               "qbpAdminService"?:string;
              
       
              /**
               *url du service fso 
               */
              
               "fsoUrl"?:string;
              
       
              /**
               *données de configuration de mangopay 
               */
              
              "mangoConf"?:IMangoConf;
              
       
   }

    /**
    interface de la class QBP_service 
    description service métier de QBP
   */
    export interface IQBP_service extends   Iservice{
        
              /**
               *url de la bdd QBP 
               */
              
               "QbpBddUrl"?:string;
              
       
              /**
               *url de l'api du sso 
               */
              
               "ssoApiUrl"?:string;
              
       
              /**
               *licenceApiUrl 
               */
              
               "licenceApiUrl"?:string;
              
       
              /**
               *sendgridApiUrl 
               */
              
               "sendgridApiUrl"?:string;
              
       
              /**
               *appId 
               */
              
               "appId"?:string;
              
       
              /**
               *end_client 
               */
              
               "end_client"?:string;
              
       
              /**
               *licenceStoreId 
               */
              
               "licenceStoreId"?:string;
              
       
              /**
               *url su service de bdd 
               */
              
               "ssoBddUrl"?:string;
              
       
              /**
               *client_id sso 
               */
              
               "client_id"?:string;
              
       
              /**
               *client_secret du sso 
               */
              
               "client_secret"?:string;
              
       
              /**
               *application instance id of seller 
               */
              
               "sellerAppId":string;
              
       
              /**
               *licenceStore for seller user licence 
               */
              
               "sellerLicenceStoreId"?:string;
              
       
              /**
               *application instance id of the admin 
               */
              
               "adminAppId"?:string;
              
       
              /**
               *licenceStoreId for admin 
               */
              
               "adminLicenceStoreId"?:string;
              
       
              /**
               *url de la bdd d 'infra 
               */
              
               "infraBddUrl"?:string;
              
       
              /**
               *template du sso client 
               */
              
               "sellerSso_Client_template"?:string;
              
       
              /**
               *template du endClient seller 
               */
              
               "sellerEndClientTemplate"?:string;
              
       
              /**
               *template de l application instance du vendeur 
               */
              
               "sellerAppInstanceTemplate"?:string;
              
       
              /**
               *données de configuration de mangopay 
               */
              
              "mangoConf"?:IMangoConf;
              
       
   }

    /**
    interface de la class application_configuration_qbp_admin_seller 
    description config qbp admin
   */
    export interface Iapplication_configuration_qbp_admin_seller extends   Iapplication_configuration{
        
              /**
               *url du service seller 
               */
              
               "qbpSellerApi"?:string;
              
       
              /**
               *qbpBddUrl 
               */
              
               "qbpBddUrl"?:string;
              
       
              /**
               *url du service de fso 
               */
              
               "fsoUrl"?:string;
              
       
              /**
               *données de configuration de mangopay 
               */
              
              "mangoConf"?:IMangoConf;
              
       
   }

    /**
    interface de la class application_configuration_qbp 
    description config qbp
   */
    export interface Iapplication_configuration_qbp extends   Iapplication_configuration{
        
              /**
               *url du service client de qbp 
               */
              
               "qbpCustomerApi"?:string;
              
       
              /**
               *url de lapi de bdd qbp 
               */
              
               "qbpBddUrl"?:string;
              
       
              /**
               *url du service fso qbp 
               */
              
               "fsoUrl"?:string;
              
       
              /**
               *données de l'api mangopay 
               */
              
              "mangoConf"?:IMangoConf;
              
       
   }
