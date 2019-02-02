  import {IBase } from "utils" ;
  export interface I{

  }
  
    /**
    interface de la class string 
    description string est un type de base qui permet de représenter les champ de type string
   */
    export interface Istring extends   Ifield{
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "isArrayOf"?:boolean;
              
       
              
               "required"?:boolean;
              
       
              
               "unique"?:boolean;
              
       
              
               "index"?:boolean;
              
       
              
               "default"?:string;
              
       
              
               "lowercase"?:boolean;
              
       
              
               "uppercase"?:boolean;
              
       
              
               "trim"?:boolean;
              
       
              
               "match"?:string;
              
       
              
               "enum"?:string[];
              
       
   }

    /**
    interface de la class licence_temporelle 
    description c'est une licence qui dure un certain temps
   */
    export interface Ilicence_temporelle extends   Ilicence{
        
              
               "validityStartDate"?:Date;
              
       
              
               "validityEndDate"?:Date;
              
       
              
               "licenceDuration"?:number;
              
       
              
               "licenceEndDate"?:Date;
              
       
   }

    /**
    interface de la class ui_menu_mongo_editor_separateur 
    description représente un séparateur dans le menu
   */
    export interface Iui_menu_mongo_editor_separateur extends   Iui_menu_mongo_editor{
        
              
               "cssClass"?:string;
              
       
   }

    /**
    interface de la class certificat 
    description certificat
   */
    export interface Icertificat extends  IBase {
        
              
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
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "isArrayOf"?:boolean;
              
       
              
               "required"?:boolean;
              
       
              
               "unique"?:boolean;
              
       
              
               "index"?:boolean;
              
       
              
               "default"?:Date;
              
       
              
               "min"?:Date;
              
       
              
               "max"?:Date;
              
       
   }

    /**
    interface de la class number 
    description ce champ représente les valeurs numériques
   */
    export interface Inumber extends   Ifield{
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "isArrayOf"?:boolean;
              
       
              
               "required"?:boolean;
              
       
              
               "unique"?:boolean;
              
       
              
               "index"?:boolean;
              
       
              
               "default"?:number;
              
       
              
               "min"?:number;
              
       
              
               "max"?:number;
              
       
              
               "step"?:number;
              
       
   }

    /**
    interface de la class jwks 
    description JSON Web Key Set (JWK Set)
   */
    export interface Ijwks extends  IBase {
        
              
               "keys"?:Ijwk[];
              
       
   }

    /**
    interface de la class jwk 
    description JSON Web Key 
   */
    export interface Ijwk extends  IBase {
        
              
               "kty"?:string;
              
       
              
               "use"?:string;
              
       
              
               "key_ops"?:string[];
              
       
              
               "alg"?:string;
              
       
              
               "kid"?:string;
              
       
              
               "x5u"?:string;
              
       
              
               "x5c"?:string[];
              
       
              
               "x5t"?:string;
              
       
              
               "x5t#S256"?:string;
              
       
   }

    /**
    interface de la class boolean 
    description ce champ représente les booléains
   */
    export interface Iboolean extends   Ifield{
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "isArrayOf"?:boolean;
              
       
              
               "required"?:boolean;
              
       
              
               "unique"?:boolean;
              
       
              
               "index"?:boolean;
              
       
              
               "default"?:boolean;
              
       
   }

    /**
    interface de la class htmltexte 
    description champ pour le html
   */
    export interface Ihtmltexte extends   Istring{
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "isArrayOf"?:boolean;
              
       
              
               "required"?:boolean;
              
       
              
               "unique"?:boolean;
              
       
              
               "index"?:boolean;
              
       
              
               "default"?:string;
              
       
              
               "lowercase"?:boolean;
              
       
              
               "uppercase"?:boolean;
              
       
              
               "trim"?:boolean;
              
       
              
               "match"?:string;
              
       
              
               "enum"?:string[];
              
       
   }

    /**
    interface de la class subdoc 
    description ce champ permet d'insérer un document dans un autre
   */
    export interface Isubdoc extends   Ifield{
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "isArrayOf"?:boolean;
              
       
              
               "required"?:boolean;
              
       
              
               "unique"?:boolean;
              
       
              
               "index"?:boolean;
              
       
              
               "protoSchemaId"?:string;
              
       
   }

    /**
    interface de la class modelid 
    description modelid
   */
    export interface Imodelid extends   Ifield{
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "isArrayOf"?:boolean;
              
       
              
               "required"?:boolean;
              
       
              
               "unique"?:boolean;
              
       
              
               "index"?:boolean;
              
       
              
               "ref"?:string;
              
       
   }

    /**
    interface de la class password 
    description password
   */
    export interface Ipassword extends   Istring{
        
   }

    /**
    interface de la class field 
    description ce champ est le champ représente les champs de la base. Il est abstrait, vous devez utiliser ces enfants
   */
    export interface Ifield extends  IBase {
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "isArrayOf"?:boolean;
              
       
              
               "required"?:boolean;
              
       
              
               "unique"?:boolean;
              
       
              
               "index"?:boolean;
              
       
   }

    /**
    interface de la class texte 
    description champ pour texte long
   */
    export interface Itexte extends   Istring{
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "isArrayOf"?:boolean;
              
       
              
               "required"?:boolean;
              
       
              
               "unique"?:boolean;
              
       
              
               "index"?:boolean;
              
       
              
               "default"?:string;
              
       
              
               "lowercase"?:boolean;
              
       
              
               "uppercase"?:boolean;
              
       
              
               "trim"?:boolean;
              
       
              
               "match"?:string;
              
       
              
               "enum"?:string[];
              
       
   }

    /**
    interface de la class objectid 
    description c'est un champ de base qui permet de référence un document d'une autre base.
   */
    export interface Iobjectid extends   Ifield{
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "isArrayOf"?:boolean;
              
       
              
               "required"?:boolean;
              
       
              
               "unique"?:boolean;
              
       
              
               "index"?:boolean;
              
       
              
               "ref":string;
              
       
   }

    /**
    interface de la class user_roles 
    description paire utilisateurs role
   */
    export interface Iuser_roles extends  IBase {
        
              
               "user"?:string | Ioidc_account;
              
       
              
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
        
              
               "kty"?:string;
              
       
              
               "use"?:string;
              
       
              
               "d"?:string;
              
       
              
               "dp"?:string;
              
       
              
               "dq"?:string;
              
       
              
               "e"?:string;
              
       
              
               "n"?:string;
              
       
              
               "p"?:string;
              
       
              
               "q"?:string;
              
       
              
               "qi"?:string;
              
       
   }

    /**
    interface de la class node_fork_option_env 
    description les paramètres d’environnement a passer aux sous-processus
   */
    export interface Inode_fork_option_env extends  IBase {
        
              
               "CONF_URL"?:string;
              
       
              
               "SRV_ID"?:string | Iservice;
              
       
   }

    /**
    interface de la class node_fork_option 
    description option d'un sous processus node 
   */
    export interface Inode_fork_option extends  IBase {
        
              
               "cwd"?:string;
              
       
              
               "env"?:Inode_fork_option_env;
              
       
   }

    /**
    interface de la class service_supervision_service_conf 
    description configuration d'un service dans le superviseur
   */
    export interface Iservice_supervision_service_conf extends  IBase {
        
              
               "name"?:string;
              
       
              
               "path"?:string;
              
       
              
               "args"?:string[];
              
       
              
               "options"?:Inode_fork_option;
              
       
              
               "restart"?:boolean;
              
       
              
               "maxKill"?:number;
              
       
              
               "minTime"?:number;
              
       
   }

    /**
    interface de la class route_role 
    description paire route et role
   */
    export interface Iroute_role extends  IBase {
        
              
               "route"?:string;
              
       
              
               "role"?:string[];
              
       
   }

    /**
    interface de la class service_mailtoinfra 
    description service qui permet de configurer l'authentification a partir d'un mail
   */
    export interface Iservice_mailtoinfra extends   Iservice{
        
              
               "mailsMapping"?:Imail_connexion_conf[];
              
       
   }

    /**
    interface de la class mail_connexion_conf 
    description associe un mail a une configuration de connexion sso+ app
   */
    export interface Imail_connexion_conf extends  IBase {
        
              
               "mailPatern"?:string;
              
       
              
               "clientId"?:string;
              
       
              
               "redirectUri"?:string;
              
       
              
               "end_client"?:string | Iend_client;
              
       
              
               "application_instance"?:string | Iapplication_instance;
              
       
              
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
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "clientID":string;
              
       
              
               "clientSecret":string;
              
       
              
               "callbackURL":string;
              
       
              
               "scope":string[];
              
       
              
               "profileFields"?:string[];
              
       
              
               "enableProof"?:boolean;
              
       
   }

    /**
    interface de la class passport_strategie_google 
    description Passport strategies for authenticating with Google using OAuth 1.0a and OAuth 2.0 (https://github.com/jaredhanson/passport-google-oauth)
   */
    export interface Ipassport_strategie_google extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "clientID":string;
              
       
              
               "clientSecret":string;
              
       
              
               "callbackURL":string;
              
       
              
               "scope":string[];
              
       
   }

    /**
    interface de la class passport_strategie_linkedin 
    description Passport strategy for authenticating with LinkedIn using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-linkedin)
   */
    export interface Ipassport_strategie_linkedin extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "consumerKey":string;
              
       
              
               "consumerSecret":string;
              
       
              
               "callbackURL":string;
              
       
              
               "scope":string[];
              
       
              
               "profileFields"?:string[];
              
       
   }

    /**
    interface de la class name_url 
    description c'est une paire nom url
   */
    export interface Iname_url extends  IBase {
        
              
               "name":string;
              
       
              
               "url":string;
              
       
              
               "refId"?:string;
              
       
   }

    /**
    interface de la class passport_strategie 
    description configuration d'une stratégie passport à déployer sur le sso
   */
    export interface Ipassport_strategie extends  IBase {
        
              
               "name":string;
              
       
              
               "autoCreate"?:boolean;
              
       
              
               "autoLoginWMail"?:boolean;
              
       
   }

    /**
    interface de la class oidc_Client 
    description description d'un client openId (c'est une application)
   */
    export interface Ioidc_Client extends  IBase {
        
              
               "client_id":string;
              
       
              
               "client_secret":string;
              
       
              
               "grant_types":string[];
              
       
              
               "redirect_uris":string[];
              
       
              
               "response_types"?:string[];
              
       
              
               "application_type"?:string;
              
       
              
               "contacts"?:string[];
              
       
              
               "client_name"?:string;
              
       
              
               "logo_uri"?:string;
              
       
              
               "client_uri"?:string;
              
       
              
               "policy_uri"?:string;
              
       
              
               "tos_uri"?:string;
              
       
              
               "jwks_uri"?:string;
              
       
              
               "jwks"?:Ijwks;
              
       
              
               "sector_identifier_uri"?:string;
              
       
              
               "subject_type"?:string;
              
       
              
               "id_token_signed_response_alg"?:string;
              
       
              
               "id_token_encrypted_response_alg"?:string;
              
       
              
               "id_token_encrypted_response_enc"?:string;
              
       
              
               "userinfo_signed_response_alg"?:string;
              
       
              
               "userinfo_encrypted_response_alg"?:string;
              
       
              
               "userinfo_encrypted_response_enc"?:string;
              
       
              
               "request_object_signing_alg"?:string;
              
       
              
               "request_object_encryption_alg"?:string;
              
       
              
               "request_object_encryption_enc"?:string;
              
       
              
               "token_endpoint_auth_method"?:string;
              
       
              
               "token_endpoint_auth_signing_alg"?:string;
              
       
              
               "default_max_age"?:number;
              
       
              
               "require_auth_time"?:boolean;
              
       
              
               "default_acr_values"?:string[];
              
       
              
               "initiate_login_uri"?:string;
              
       
              
               "request_uris"?:string[];
              
       
              
               "users"?:Iuser_roles[];
              
       
              
               "post_logout_redirect_uris"?:string[];
              
       
              
               "passportConfig"?:Ipassport_strategie[];
              
       
              
               "userManagment"?:Ioidc_clientUserManagment;
              
       
   }

    /**
    interface de la class application_configuration 
    description c'est la configuration d'une application
   */
    export interface Iapplication_configuration extends  IBase {
        
              
               "name"?:string;
              
       
              
               "services"?:string[] | Iservice_access[];
              
       
              
               "appName"?:string;
              
       
   }

    /**
    interface de la class application_instance 
    description c'est le couple application configuration 
   */
    export interface Iapplication_instance extends  IBase {
        
              
               "name"?:string;
              
       
              
               "application"?:string | Iapplication;
              
       
              
               "configuration"?:string | Iapplication_configuration;
              
       
              
               "users"?:string[] | Ioidc_account[];
              
       
   }

    /**
    interface de la class passport_strategie_twitter 
    description Passport strategy for authenticating with Twitter using the OAuth 1.0a API. (https://github.com/jaredhanson/passport-twitter)
   */
    export interface Ipassport_strategie_twitter extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "consumerKey":string;
              
       
              
               "consumerSecret":string;
              
       
              
               "callbackURL":string;
              
       
   }

    /**
    interface de la class passport_strategie_instagram 
    description Passport strategy for authenticating with Instagram using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-instagram)
   */
    export interface Ipassport_strategie_instagram extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "clientID":string;
              
       
              
               "clientSecret":string;
              
       
              
               "callbackURL":string;
              
       
   }

    /**
    interface de la class name_value 
    description paire clef valeur
   */
    export interface Iname_value extends  IBase {
        
              
               "key":string;
              
       
              
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
        
              
               "licenceUrl"?:string;
              
       
              
               "application_instanceUrl"?:string;
              
       
              
               "tockenDuration"?:number;
              
       
              
               "sso_well-known"?:string;
              
       
              
               "certificates"?:string[] | Icertificat[];
              
       
              
               "end_clientUrl"?:string;
              
       
   }

    /**
    interface de la class oidc_account 
    description compte de l'utilisateur
   */
    export interface Ioidc_account extends  IBase {
        
              
               "account_id":string;
              
       
              
               "birthdate"?:Date;
              
       
              
               "email":string;
              
       
              
               "email_verified"?:boolean;
              
       
              
               "family_name"?:string;
              
       
              
               "gender"?:string;
              
       
              
               "given_name"?:string;
              
       
              
               "locale"?:string;
              
       
              
               "middle_name"?:string;
              
       
              
               "name"?:string;
              
       
              
               "nickname"?:string;
              
       
              
               "phone_number"?:string;
              
       
              
               "phone_number_verified"?:boolean;
              
       
              
               "password"?:string;
              
       
              
               "picture"?:string;
              
       
              
               "connector"?:Isocial_data[];
              
       
   }

    /**
    interface de la class service_access 
    description décrit les régles de paramètre des servies
   */
    export interface Iservice_access extends  IBase {
        
              
               "name"?:string;
              
       
              
               "service"?:string | Iservice;
              
       
              
               "httAccess"?:Iurl_role;
              
       
   }

    /**
    interface de la class url_role 
    description règle de sécurité relative aux url
   */
    export interface Iurl_role extends  IBase {
        
              
               "_$get"?:Iroute_role[];
              
       
              
               "_$post"?:Iroute_role[];
              
       
              
               "_$delete"?:Iroute_role[];
              
       
              
               "_$put"?:Iroute_role[];
              
       
              
               "_$patch"?:Iroute_role[];
              
       
   }

    /**
    interface de la class socketIoConfig 
    description socketIoConfig
   */
    export interface IsocketIoConfig extends  IBase {
        
              
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
        
              
               "label"?:string;
              
       
              
               "path"?:string;
              
       
              
               "icon"?:string;
              
       
              
               "child"?:Iui_menu_mongo_editor[];
              
       
   }

    /**
    interface de la class passport_strategie_windowslive 
    description Passport strategy for authenticating with Microsoft accounts (aka Windows Live) using the OAuth 2.0 API. (https://github.com/jaredhanson/passport-windowslive)
   */
    export interface Ipassport_strategie_windowslive extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "clientID":string;
              
       
              
               "clientSecret":string;
              
       
              
               "callbackURL":string;
              
       
              
               "scope"?:string;
              
       
   }

    /**
    interface de la class passport_strategie_dropbox 
    description Passport strategy for authenticating with Dropbox using the OAuth 2.0 API. (https://github.com/florianheinemann/passport-dropbox-oauth2)
   */
    export interface Ipassport_strategie_dropbox extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "clientID":string;
              
       
              
               "clientSecret":string;
              
       
              
               "callbackURL":string;
              
       
              
               "apiVersion"?:number;
              
       
   }

    /**
    interface de la class dataTableInit 
    description initalisation des listes
   */
    export interface IdataTableInit extends  IBase {
        
              
               "fieldsNames"?:string[];
              
       
              
               "sortField"?:string;
              
       
              
               "direction"?:string;
              
       
   }

    /**
    interface de la class periodicalDistrution_month 
    description permet de limiter la distribution chaque jour du mois
   */
    export interface IperiodicalDistrution_month extends   IperiodicalDistrution{
        
              
               "startDay"?:number;
              
       
              
               "endDay"?:number;
              
       
   }

    /**
    interface de la class periodicalDistrution 
    description période de distribution
   */
    export interface IperiodicalDistrution extends  IBase {
        
              
               "nbMax"?:number;
              
       
              
               "currentNb"?:number;
              
       
   }

    /**
    interface de la class periodicalDistrution_day 
    description journée autorisé
   */
    export interface IperiodicalDistrution_day extends   IperiodicalDistrution{
        
              
               "lundi"?:boolean;
              
       
              
               "mardi"?:boolean;
              
       
              
               "mercredi"?:boolean;
              
       
              
               "jeudi"?:boolean;
              
       
              
               "vendredi"?:boolean;
              
       
              
               "samedi"?:boolean;
              
       
              
               "dimanche"?:boolean;
              
       
   }

    /**
    interface de la class periodicalDistrution_periode 
    description permet de créer une plage de date de distribution
   */
    export interface IperiodicalDistrution_periode extends   IperiodicalDistrution{
        
              
               "startDate"?:Date;
              
       
              
               "endDate"?:Date;
              
       
   }

    /**
    interface de la class mail_sendgrid 
    description objet envoyé a l'api sendgrid 
   */
    export interface Imail_sendgrid extends   Imail{
        
              
               "content"?:string;
              
       
              
               "from"?:string;
              
       
              
               "personalizations"?:string;
              
       
              
               "reply_to"?:string;
              
       
              
               "subject"?:string;
              
       
              
               "send_at"?:Date;
              
       
              
               "template_id"?:string;
              
       
   }

    /**
    interface de la class service 
    description identification du service
   */
    export interface Iservice extends  IBase {
        
              
               "name"?:string;
              
       
              
               "urlBase"?:string;
              
       
              
               "port"?:number;
              
       
              
               "debug"?:boolean;
              
       
              
               "licence_well-known"?:string;
              
       
              
               "secretKey"?:string;
              
       
              
               "publicAccess"?:Iurl_role;
              
       
   }

    /**
    interface de la class sendGridTemplate 
    description template send grid
   */
    export interface IsendGridTemplate extends  IBase {
        
              
               "lang":string;
              
       
              
               "templateId":string;
              
       
              
               "parametre"?:Iname_value[];
              
       
   }

    /**
    interface de la class schema_name 
    description mapping de schema et de nom
   */
    export interface Ischema_name extends  IBase {
        
              
               "entity"?:string;
              
       
              
               "singular"?:string;
              
       
              
               "plural"?:string;
              
       
              
               "fieldName"?:string;
              
       
              
               "unvisibleFields"?:string[];
              
       
              
               "fieldsNames"?:Iname_value[];
              
       
              
               "listParameter"?:IdataTableInit;
              
       
              
               "create"?:boolean;
              
       
              
               "delete"?:boolean;
              
       
              
               "clone"?:boolean;
              
       
              
               "update"?:boolean;
              
       
   }

    /**
    interface de la class pack_card 
    description c'est un paquet de carte
   */
    export interface Ipack_card extends   Iapplication{
        
              
               "imageUrl"?:string;
              
       
              
               "companyName"?:string;
              
       
              
               "companyId"?:string;
              
       
   }

    /**
    interface de la class service_goshabaGateway 
    description passerelle pour goshaba
   */
    export interface Iservice_goshabaGateway extends   Iservice{
        
              
               "privateKey":string;
              
       
              
               "packUrl":string;
              
       
   }

    /**
    interface de la class service_mongo 
    description configure un service mongo
   */
    export interface Iservice_mongo extends   Iservice{
        
              
               "mongoosePath"?:string;
              
       
              
               "mongoAuthSource"?:string;
              
       
              
               "secretKey"?:string;
              
       
   }

    /**
    interface de la class service_socketIo 
    description communication temps réelle multi format
   */
    export interface Iservice_socketIo extends   Iservice{
        
              
               "returnValue"?:string;
              
       
              
               "allowCrossOrigin"?:boolean;
              
       
              
               "socketIo"?:IsocketIoConfig;
              
       
   }

    /**
    interface de la class service_supervision 
    description service_supervision
   */
    export interface Iservice_supervision extends   Iservice{
        
              
               "mongoosePath"?:string;
              
       
              
               "mongoAuthSource"?:string;
              
       
              
               "services"?:Iservice_supervision_service_conf[];
              
       
   }

    /**
    interface de la class service_configuration 
    description c'est le service de distribution des configurations des services
   */
    export interface Iservice_configuration extends   Iservice{
        
              
               "srvUrl"?:string;
              
       
              
               "serviceCollectionName"?:string;
              
       
              
               "serviceConfigCollectionName"?:string;
              
       
   }

    /**
    interface de la class protoschema 
    description protoschema est un méta modéle. il permet de créer les autres modèle de la base
   */
    export interface Iprotoschema extends  IBase {
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "isAbstract"?:boolean;
              
       
              
               "isSchema"?:boolean;
              
       
              
               "parentModel"?:string | Iprotoschema;
              
       
              
               "fields"?:Ifield[];
              
       
   }

    /**
    interface de la class entity_source 
    description association d'une entité et de l'url de son service
   */
    export interface Ientity_source extends  IBase {
        
              
               "url"?:string;
              
       
              
               "entityName"?:string[];
              
       
   }

    /**
    interface de la class oidc_clientUserManagment 
    description configuration du gestionnaire d'utilisateur
   */
    export interface Ioidc_clientUserManagment extends  IBase {
        
              
               "sign_in_uri":string;
              
       
              
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
        
              
               "field"?:string;
              
       
              
               "value":string[];
              
       
              
               "dataType":string;
              
       
              
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
        
              
               "expression":Imongo_expression[];
              
       
   }

    /**
    interface de la class mongo_expression_not 
    description https://docs.mongodb.com/manual/reference/operator/query/not/
   */
    export interface Imongo_expression_not extends   Imongo_expression_logical{
        
              
               "field":string;
              
       
              
               "expression":Imongo_expression[];
              
       
   }

    /**
    interface de la class mongo_expression_nor 
    description https://docs.mongodb.com/manual/reference/operator/query/nor/
   */
    export interface Imongo_expression_nor extends   Imongo_expression_logical{
        
              
               "expression":Imongo_expression[];
              
       
   }

    /**
    interface de la class mongo_expression_or 
    description https://docs.mongodb.com/manual/reference/operator/query/or/
   */
    export interface Imongo_expression_or extends   Imongo_expression_logical{
        
              
               "expression":Imongo_expression[];
              
       
   }

    /**
    interface de la class mongo_expression_array 
    description mongo_expression_array
   */
    export interface Imongo_expression_array extends   Imongo_expression{
        
              
               "value"?:string[];
              
       
              
               "valueType"?:string;
              
       
              
               "isArray"?:boolean;
              
       
   }

    /**
    interface de la class nginxConfigurationFile 
    description description d'un fichier de configuration nginx
   */
    export interface InginxConfigurationFile extends  IBase {
        
              
               "suffix"?:string;
              
       
              
               "template"?:string;
              
       
              
               "services"?:string[] | Iservice[];
              
       
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
        
              
               "suffix"?:string;
              
       
              
               "template"?:string;
              
       
              
               "applications":string[] | Iapplication_instance[];
              
       
              
               "clients":string[] | Iend_client[];
              
       
   }

    /**
    interface de la class service_nginxMultiConfigurator 
    description configuration d'un service nginx multi configuration
   */
    export interface Iservice_nginxMultiConfigurator extends   Iservice_nginxConfigurator{
        
              
               "nginxUser"?:string;
              
       
              
               "serviceUrl"?:string;
              
       
              
               "clientUrl":string;
              
       
              
               "appInstanceUrl"?:string;
              
       
              
               "appUrl":string;
              
       
              
               "configurationFile"?:InginxConfigurationFile[];
              
       
              
               "configurationApplication"?:InginxConfigurationFileApp[];
              
       
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
        
              
               "servicesUrl"?:string[];
              
       
              
               "forumUrl"?:string;
              
       
              
               "fileServiceUrl"?:string;
              
       
              
               "URL_FileService"?:string;
              
       
              
               "nginx"?:Iname_url[];
              
       
              
               "supervisor"?:Iname_url[];
              
       
              
               "menu"?:Iui_menu_mongo_editor[];
              
       
              
               "entityUrl"?:Ientity_source[];
              
       
              
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
        
              
               "likeCollection":string;
              
       
              
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
        
              
               "name":string;
              
       
              
               "description":string;
              
       
              
               "output":string;
              
       
              
               "model":string;
              
       
              
               "pipeline"?:any[];              
              
       
   }

    /**
    interface de la class castParam 
    description paramètre d'une querry qui doit être casté
   */
    export interface IcastParam extends  IBase {
        
              
               "paramName":string;
              
       
              
               "type"?:string;
              
       
              
               "param":string;
              
       
   }

    /**
    interface de la class _view_params 
    description view avec des params
   */
    export interface I_view_params extends   I_view{
        
              
               "params"?:IrouteParam[];
              
       
              
               "castParams"?:IcastParam[];
              
       
   }

    /**
    interface de la class routeParam 
    description paramètre d'une route
   */
    export interface IrouteParam extends  IBase {
        
              
               "paramName":string;
              
       
              
               "type"?:string;
              
       
   }

    /**
    interface de la class licence 
    description représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
   */
    export interface Ilicence extends  IBase {
        
              
               "end_client"?:string | Iend_client;
              
       
              
               "user"?:string | Ioidc_account;
              
       
              
               "application_instance"?:string[] | Iapplication_instance[];
              
       
              
               "ressource"?:string[] | Ipack_card[];
              
       
              
               "licenceStoreRef"?:string;
              
       
              
               "creationDate":Date;
              
       
              
               "usingDate"?:Date;
              
       
   }

    /**
    interface de la class service_dumy_fso 
    description simple remote file system a n utiliser que pour des test
   */
    export interface Iservice_dumy_fso extends   Iservice{
        
              
               "fsoBase"?:string;
              
       
              
               "url_bd"?:string;
              
       
              
               "url_folder_collection"?:string;
              
       
              
               "url_file_collection"?:string;
              
       
              
               "url_service"?:string;
              
       
              
               "root_file_directory"?:string;
              
       
   }

    /**
    interface de la class licenceStore 
    description stock de licence distribuable
   */
    export interface IlicenceStore extends  IBase {
        
              
               "nbLicence"?:number;
              
       
              
               "licenceTemplate"?:Ilicence[];
              
       
              
               "autoAssign"?:boolean;
              
       
              
               "validytyStartDate"?:Date;
              
       
              
               "validityEndDate"?:Date;
              
       
              
               "distributionPeriode"?:IperiodicalDistrution[];
              
       
              
               "name":string;
              
       
              
               "nbLicenceOriginal":number;
              
       
              
               "ref"?:string;
              
       
   }

    /**
    interface de la class application_configuration_antico 
    description configuration d'un parcourt anticoruption
   */
    export interface Iapplication_configuration_antico extends   Iapplication_configuration{
        
   }

    /**
    interface de la class service_signin 
    description service d'enregistrement
   */
    export interface Iservice_signin extends   Iservice{
        
              
               "userUrl":string;
              
       
              
               "mailResetUrl":string;
              
       
              
               "mailInfoUrl":string;
              
       
              
               "mailAccountCreatedUrl":string;
              
       
              
               "durationResetDay":number;
              
       
              
               "userAppUrl":string;
              
       
              
               "userProfileUrl":string;
              
       
   }

    /**
    interface de la class MultilangSendGridTemplate 
    description décrit un template multi langue d'envoie de mail avec sendGrid
   */
    export interface IMultilangSendGridTemplate extends  IBase {
        
              
               "name":string;
              
       
              
               "sendGridTemplates"?:IsendGridTemplate[];
              
       
   }

    /**
    interface de la class service_sendGrid 
    description permet d'envoyer des mail via l'api send grid v3
   */
    export interface Iservice_sendGrid extends   Iservice{
        
              
               "sendGridApiKey":string;
              
       
              
               "messageUrl":string;
              
       
              
               "userUrl":string;
              
       
              
               "templates"?:string[] | IMultilangSendGridTemplate[];
              
       
   }

    /**
    interface de la class service_trainingCoursesService 
    description service de gestion des parcourts de formation
   */
    export interface Iservice_trainingCoursesService extends   Iservice{
        
              
               "apiSession":string;
              
       
              
               "licenceServiceUrl":string;
              
       
              
               "taskServiceUrl":string;
              
       
              
               "mailServiceUrl":string;
              
       
              
               "clientInfraUrl":string;
              
       
   }

    /**
    interface de la class aclIdentity 
    description description d'une identit   pour l'acl
   */
    export interface IaclIdentity extends  IBase {
        
              
               "end_client"?:string | Iend_client;
              
       
              
               "applicaton_instance"?:string | Iapplication_instance;
              
       
              
               "role"?:string;
              
       
              
               "user"?:string | Ioidc_account;
              
       
   }

    /**
    interface de la class _acl 
    description Acl d'un enregistrement
   */
    export interface I_acl extends  IBase {
        
              
               "creator"?:string | Ioidc_account;
              
       
              
               "readers"?:IaclIdentity[];
              
       
              
               "writers"?:IaclIdentity[];
              
       
              
               "admins"?:IaclIdentity[];
              
       
   }

    /**
    interface de la class application_configuration_appClient 
    description c'est la configuration d'une application Client
   */
    export interface Iapplication_configuration_appClient extends   Iapplication_configuration{
        
              
               "configurationUrlDb":string;
              
       
              
               "urlBase":string;
              
       
              
               "signinUrl":string;
              
       
              
               "serviceSessionUrl":string;
              
       
              
               "clientServiceUrl":string;
              
       
              
               "aclTemplate"?:I_acl;
              
       
   }

    /**
    interface de la class service_orchestrator 
    description service d'orchestration
   */
    export interface Iservice_orchestrator extends   Iservice{
        
              
               "apiUrl":string;
              
       
   }

    /**
    interface de la class service_socket_io 
    description service messagerie de soket.io
   */
    export interface Iservice_socket_io extends   Iservice{
        
              
               "namespaces"?:string[];
              
       
   }

    /**
    interface de la class service_tutor 
    description service de gestion des message tutoré
   */
    export interface Iservice_tutor extends   Iservice{
        
              
               "apiSession":string;
              
       
   }

    /**
    interface de la class application_configuration_appApprenant 
    description c'est la configuration d'une application Apprenant
   */
    export interface Iapplication_configuration_appApprenant extends   Iapplication_configuration{
        
              
               "forumUrl"?:string;
              
       
              
               "fileServiceUrl"?:string;
              
       
              
               "URL_FileService"?:string;
              
       
              
               "configurationUrlDb":string;
              
       
              
               "urlBase":string;
              
       
              
               "likeServiceUrl":string;
              
       
              
               "aclTemplate"?:I_acl;
              
       
              
               "trainingCourseServiceUrl":string;
              
       
              
               "syncSoketioUrl":string;
              
       
              
               "syncSoketioPath":string;
              
       
              
               "tutorVideoCallUrl":string;
              
       
              
               "tutorServiceUrl":string;
              
       
   }

    /**
    interface de la class passport_strategie_saml 
    description strategie saml pour passport (https://github.com/bergie/passport-saml)
   */
    export interface Ipassport_strategie_saml extends   Ipassport_strategie{
        
              
               "lib":string;
              
       
              
               "strategieName":string;
              
       
              
               "callbackUrl":string;
              
       
              
               "entryPoint"?:string;
              
       
              
               "issuer"?:string;
              
       
              
               "cert"?:string;
              
       
              
               "privateCert"?:string;
              
       
              
               "decryptionPvk"?:string;
              
       
              
               "signatureAlgorithm"?:string;
              
       
              
               "additionalParams"?:string;
              
       
              
               "identifierFormat"?:string;
              
       
              
               "acceptedClockSkewMs"?:number;
              
       
              
               "attributeConsumingServiceIndex"?:string;
              
       
              
               "disableRequestedAuthnContext"?:boolean;
              
       
              
               "authnContext"?:string;
              
       
              
               "forceAuthn"?:boolean;
              
       
              
               "skipRequestCompression"?:boolean;
              
       
              
               "validateInResponseTo"?:string;
              
       
              
               "requestIdExpirationPeriodMs"?:number;
              
       
              
               "passReqToCallback"?:boolean;
              
       
              
               "logoutUrl"?:string;
              
       
              
               "additionalLogoutParams"?:string;
              
       
              
               "logoutCallbackUrl"?:string;
              
       
   }

    /**
    interface de la class application 
    description liste des applications
   */
    export interface Iapplication extends  IBase {
        
              
               "name"?:string;
              
       
              
               "description"?:string;
              
       
              
               "depot"?:string;
              
       
   }

    /**
    interface de la class TemplateLodash 
    description template lodash + nom
   */
    export interface ITemplateLodash extends  IBase {
        
              
               "name":string;
              
       
              
               "template":string;
              
       
   }

    /**
    interface de la class service_init_js 
    description service qui retourne un init.js
   */
    export interface Iservice_init_js extends   Iservice{
        
              
               "templates":ITemplateLodash[];
              
       
   }

    /**
    interface de la class service_infra_admin 
    description administration de l'infra
   */
    export interface Iservice_infra_admin extends   Iservice{
        
              
               "ssoBdUrl":string;
              
       
              
               "infraBdUrl":string;
              
       
              
               "platformBdUrl"?:string;
              
       
              
               "service_nginxMultiConfiguratorId":string | Iservice_nginxMultiConfigurator;
              
       
              
               "nginxApplicationSuffix"?:string;
              
       
   }

    /**
    interface de la class mailtoinfra2 
    description retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
   */
    export interface Imailtoinfra2 extends   Iservice{
        
              
               "ssoBdUrl":string;
              
       
              
               "infraBdUrl":string;
              
       
              
               "savyLearnerId"?:string | Iapplication;
              
       
              
               "confMapping"?:Imail_connexion_conf[];
              
       
   }

    /**
    interface de la class service_planned_tasks 
    description Service de Taches planifiées
   */
    export interface Iservice_planned_tasks extends   Iservice{
        
              
               "bdd_url":string;
              
       
              
               "handlerInterval"?:number;
              
       
              
               "startHandlingOnServiceStart"?:boolean;
              
       
              
               "schedule_url"?:string;
              
       
              
               "task_url"?:string;
              
       
              
               "licencesService_url"?:string;
              
       
              
               "apiUrl":string;
              
       
   }

    /**
    interface de la class end_client 
    description c'est le client que l'on facture
   */
    export interface Iend_client extends  IBase {
        
              
               "name"?:string;
              
       
              
               "label"?:string;
              
       
              
               "applications"?:string[] | Iapplication_instance[];
              
       
              
               "admins"?:string[] | Ioidc_account[];
              
       
              
               "licenceStore"?:IlicenceStore[];
              
       
              
               "client_notices"?:I[];
              
       
   }

    /**
    interface de la class Service_scorm_gateway 
    description service passerelle d'un package scorm vers l'interne
   */
    export interface IService_scorm_gateway extends   Iservice{
        
              
               "privateKey":string;
              
       
              
               "endClientId":string | Iend_client;
              
       
              
               "signinUrl":string;
              
       
              
               "licenceUrl":string;
              
       
              
               "templateUser":any;              
              
       
              
               "templateProfileUser":any;              
              
       
              
               "apiUrl"?:string;
              
       
   }
