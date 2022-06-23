  import {IBase } from "@leandredev/utils" ;
  interface I{

  }
  
  

    /**
    interface de la class certificat 
    description certificat
   */
    export class certificat extends  IBase {
        
              /**
               *nom du certificat 
               */
              
               "name"?:string;
              
       
   }


  

    /**
    interface de la class oidc_Client 
    description description d'un client openId (c'est une application)
   */
    export class oidc_Client extends  IBase {
        
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
    interface de la class oidc_account 
    description compte de l'utilisateur
   */
    export class oidc_account extends  IBase {
        
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
    export class service_access extends  IBase {
        
              /**
               *nom de la configuration 
               */
              
               "name"?:string;
              
       
              /**
               *service au qu'elle s'applique la configuration 
               */
              
               "service"?:string | Iservice;
              
       
              /**
               *liste les règles d’accès aux routes d'un service 
               */
              
              "httAccess"?:Iurl_role;
              
       
   }


  

  

    /**
    interface de la class mail 
    description collection de mail
   */
    export class mail extends  IBase {
        
   }


  

    /**
    interface de la class service_serviceOrchestrator 
    description service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
   */
    export class service_serviceOrchestrator extends  IBase {
        
   }


  

  

    /**
    interface de la class licence 
    description représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
   */
    export class licence extends  IBase {
        
              /**
               *le end_client qui a distribué la licence 
               */
              
               "end_client"?:string | Iend_client;
              
       
              /**
               *l'utilisateur bénéficiant de la licence 
               */
              
               "user"?:string | Ioidc_account;
              
       
              /**
               *l'instance de l'application qui est sous licence 
               */
              
               "application_instance"?:string[] | Iapplication_instance[];
              
       
              /**
               *les ressources externes 
               */
              
               "ressource"?:string[] | Ipack_card[];
              
       
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
    interface de la class MultilangSendGridTemplate 
    description décrit un template multi langue d'envoie de mail avec sendGrid
   */
    export class MultilangSendGridTemplate extends  IBase {
        
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
    interface de la class application 
    description liste des applications
   */
    export class application extends  IBase {
        
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
    export class TemplateLodash extends  IBase {
        
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
    interface de la class end_client 
    description c'est le client que l'on facture
   */
    export class end_client extends  IBase {
        
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
              
               "applications"?:string[] | Iapplication_instance[];
              
       
              /**
               *liste des administrateurs du end_client 
               */
              
               "admins"?:string[] | Ioidc_account[];
              
       
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
    interface de la class Request 
    description description d'une requete avec request
   */
    export class Request extends  IBase {
        
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
    export class ftpsConfig extends  IBase {
        
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
    interface de la class application_configuration 
    description c'est la configuration d'une application
   */
    export class application_configuration extends  IBase {
        
              /**
               *le nom de la configuration 
               */
              
               "name"?:string;
              
       
              /**
               *configurations de services 
               */
              
               "services"?:string[] | Iservice_access[];
              
       
              /**
               *nom de l'application a afficher 
               */
              
               "appName"?:string;
              
       
   }


  

    /**
    interface de la class application_instance 
    description c'est le couple application configuration 
   */
    export class application_instance extends  IBase {
        
              /**
               *le nom du couple app/config 
               */
              
               "name"?:string;
              
       
              /**
               *l'application représenté 
               */
              
               "application"?:string | Iapplication;
              
       
              /**
               *la configuration de l'application 
               */
              
               "configuration"?:string | Iapplication_configuration;
              
       
              /**
               *le end_client de l aplli 
               */
              
               "end_client":string | Iend_client;
              
       
              /**
               *le compte oidc du client pour la connection 
               */
              
               "oidc_client":string | Ioidc_Client;
              
       
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
    interface de la class bois_dor_mailer 
    description liste de tous les templates de mail pour bois d'or
   */
    export class bois_dor_mailer extends  IBase {
        
              /**
               *comptoirOr_info 
               */
              
               "comptoirOr_info"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_orderDelivred 
               */
              
               "boisdor_fr_orderDelivred"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_orderRegister 
               */
              
               "boisdor_fr_orderRegister"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_resetPassword 
               */
              
               "boisdor_fr_resetPassword"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_accountCreated 
               */
              
               "boisdor_fr_accountCreated"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_orderRefund 
               */
              
               "boisdor_fr_orderRefund"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_orderCancelled 
               */
              
               "boisdor_fr_orderCancelled"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_orderValidatedForDelivery 
               */
              
               "boisdor_fr_orderValidatedForDelivery"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_orderValidatedForPickup 
               */
              
               "boisdor_fr_orderValidatedForPickup"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_orderToCustomer 
               */
              
               "boisdor_fr_orderToCustomer"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_orderToSeller 
               */
              
               "boisdor_fr_orderToSeller"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_sav 
               */
              
               "boisdor_fr_sav"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_contact 
               */
              
               "boisdor_fr_contact"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_reply_sav 
               */
              
               "boisdor_fr_reply_sav"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_reply_contact 
               */
              
               "boisdor_fr_reply_contact"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_orderToCustomerPending 
               */
              
               "boisdor_fr_orderToCustomerPending"?:string | IMultilangSendGridTemplate;
              
       
              /**
               *boisdor_fr_orderToCustomerDiff 
               */
              
               "boisdor_fr_orderToCustomerDiff"?:string | IMultilangSendGridTemplate;
              
       
   }




  


    /**
    interface de la class rsa 
    description certificat RSA
   */
    export class rsa extends   Icertificat{
        
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
    interface de la class licence_temporelle 
    description c'est une licence qui dure un certain temps
   */
    export class licence_temporelle extends   Ilicence{
        
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
    interface de la class pack_card 
    description c'est un paquet de carte
   */
    export class pack_card extends   Iapplication{
        
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
    interface de la class application_configuration_phoneCard 
    description configuration d'une application phoneCard
   */
    export class application_configuration_phoneCard extends   Iapplication_configuration{
        
   }
  
   

    /**
    interface de la class application_configuration_appCoach 
    description c'est la configuration d'une application Coach
   */
    export class application_configuration_appCoach extends   Iapplication_configuration{
        
   }
  
   

    /**
    interface de la class application_configuration_super_admin_mongo 
    description configuration de l'application superAdminMongo
   */
    export class application_configuration_super_admin_mongo extends   Iapplication_configuration{
        
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
    interface de la class application_configuration_antico 
    description configuration d'un parcourt anticoruption
   */
    export class application_configuration_antico extends   Iapplication_configuration{
        
   }
  
   

    /**
    interface de la class application_configuration_appClient 
    description c'est la configuration d'une application Client
   */
    export class application_configuration_appClient extends   Iapplication_configuration{
        
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
    interface de la class application_configuration_appApprenant 
    description c'est la configuration d'une application Apprenant
   */
    export class application_configuration_appApprenant extends   Iapplication_configuration{
        
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
    interface de la class AppConf_minds_up_admin 
    description config de l'app minds up admin
   */
    export class AppConf_minds_up_admin extends   Iapplication_configuration{
        
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
    interface de la class application_configuration_reportApp 
    description configuration d'un app template
   */
    export class application_configuration_reportApp extends   Iapplication_configuration{
        
   }
  
   

    /**
    interface de la class application_configuration_celio2020Admin 
    description conf de l'app celio 2020
   */
    export class application_configuration_celio2020Admin extends   Iapplication_configuration{
        
              /**
               *url du service de bdd 
               */
              
               "serviceBddUrl"?:string;
              
       
   }
  
   

    /**
    interface de la class application_configuration_manu_admin 
    description cond des comptoire de l'or admin
   */
    export class application_configuration_manu_admin extends   Iapplication_configuration{
        
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
    export class application_configuration_comptoire_or_admin extends   Iapplication_configuration{
        
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
    interface de la class application_configuration_celiofront 
    description configuration de l appli celio front
   */
    export class application_configuration_celiofront extends   Iapplication_configuration{
        
   }
  
   

    /**
    interface de la class application_configuration_celioback 
    description configuration de l appli celio back
   */
    export class application_configuration_celioback extends   Iapplication_configuration{
        
   }
  
   

    /**
    interface de la class application_configuration_celioadmin 
    description configuration de l appli celio admin
   */
    export class application_configuration_celioadmin extends   Iapplication_configuration{
        
   }
  
   

    /**
    interface de la class application_configuration_ferrand 
    description la conf ferrand
   */
    export class application_configuration_ferrand extends   Iapplication_configuration{
        
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
    export class application_configuration_celio extends   Iapplication_configuration{
        
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
    interface de la class AppConf_minds_up 
    description config de l'app minds up
   */
    export class AppConf_minds_up extends   Iapplication_configuration{
        
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
    export class application_configuration_petit_moulin extends   Iapplication_configuration{
        
   }
  
   

    /**
    interface de la class application_configuration_petit_moulin_admin 
    description conf petit_moulin_admin
   */
    export class application_configuration_petit_moulin_admin extends   Iapplication_configuration{
        
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
    interface de la class application_configuration_airport_admin 
    description config airport
   */
    export class application_configuration_airport_admin extends   Iapplication_configuration{
        
              /**
               *url des api airport 
               */
              
               "airportApi"?:string;
              
       
              /**
               *url de lapi de bdd airport 
               */
              
               "airportBddUrl"?:string;
              
       
              /**
               *url du service fso airport 
               */
              
               "fsoUrl"?:string;
              
       
   }
  
   

    /**
    interface de la class application_configuration_airport 
    description config airport
   */
    export class application_configuration_airport extends   Iapplication_configuration{
        
              /**
               *url des api airport 
               */
              
               "airportApi"?:string;
              
       
              /**
               *url de lapi de bdd airport 
               */
              
               "airportBddUrl"?:string;
              
       
              /**
               *url du service fso airport 
               */
              
               "fsoUrl"?:string;
              
       
   }
  
   

    /**
    interface de la class application_configuration_boisdor 
    description config boisdor
   */
    export class application_configuration_boisdor extends   Iapplication_configuration{
        
              /**
               *url du service client de boisdor 
               */
              
               "boisdorCustomerApi"?:string;
              
       
              /**
               *url de lapi de bdd boisdor 
               */
              
               "boisdorBddUrl"?:string;
              
       
              /**
               *url du service fso boisdor 
               */
              
               "fsoUrl"?:string;
              
       
              /**
               *url de l api de paiement 
               */
              
               "payementUrl"?:string;
              
       
   }
  
   

    /**
    interface de la class application_configuration_r3 
    description config r3
   */
    export class application_configuration_r3 extends   Iapplication_configuration{
        
              /**
               *url de la bdd 
               */
              
               "bddUrl"?:string;
              
       
   }
  
   

    /**
    interface de la class application_configuration_boisdor_admin_seller 
    description config boisdor admin
   */
    export class application_configuration_boisdor_admin_seller extends   Iapplication_configuration{
        
              /**
               *url du service seller 
               */
              
               "boisdorSellerApi"?:string;
              
       
              /**
               *boisdorBddUrl 
               */
              
               "boisdorBddUrl"?:string;
              
       
              /**
               *url du service de fso 
               */
              
               "fsoUrl"?:string;
              
       
              /**
               *url api public 
               */
              
               "apiPublicUrl"?:string;
              
       
              /**
               *url du service d'envoie de mail 
               */
              
               "boisdorMailService"?:string;
              
       
   }
  
   

    /**
    interface de la class application_configuration_qbp_admin 
    description config qbp admin
   */
    export class application_configuration_qbp_admin extends   Iapplication_configuration{
        
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
              
       
              /**
               *Order Service 
               */
              
               "orderService"?:string;
              
       
              /**
               *url du end point de l api sav 
               */
              
               "savService"?:string;
              
       
   }
  
   

    /**
    interface de la class application_configuration_qbp_admin_seller 
    description config qbp admin
   */
    export class application_configuration_qbp_admin_seller extends   Iapplication_configuration{
        
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
              
       
              /**
               *Order service 
               */
              
               "orderService"?:string;
              
       
              /**
               *Service pour ticket 
               */
              
               "ticketService"?:string;
              
       
              /**
               *url du end point de l api sav 
               */
              
               "savService"?:string;
              
       
   }
  
   

    /**
    interface de la class application_configuration_boisdor_admin 
    description config boisdor admin
   */
    export class application_configuration_boisdor_admin extends   Iapplication_configuration{
        
              /**
               *url de la bdd 
               */
              
               "boisdorBddUrl"?:string;
              
       
              /**
               *url du service boisdor 
               */
              
               "boisdorAdminService"?:string;
              
       
              /**
               *url du service fso 
               */
              
               "fsoUrl"?:string;
              
       
              /**
               *boisdorMailService 
               */
              
               "boisdorMailService"?:string;
              
       
   }
  
   

    /**
    interface de la class application_configuration_qbp 
    description config qbp
   */
    export class application_configuration_qbp extends   Iapplication_configuration{
        
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
              
       
              /**
               *url de base de redirection vers le site des assureurs 
               */
              
               "assUrl":string;
              
       
              /**
               *liste de functionalites a activer uo pas dans le site quelbon plan , exemple {bankWire: false | true} 
               */
              
              "featuresConf"?:IQbpFeaturesConfiguration;
              
       
   }
  
   

    /**
    interface de la class application_configuration_r3_admin_seller 
    description config r3 admin
   */
    export class application_configuration_r3_admin_seller extends   Iapplication_configuration{
        
              /**
               *url de la bdd 
               */
              
               "bddUrl"?:string;
              
       
              /**
               *url du servie r3  
               */
              
               "apiUrl"?:string;
              
       
              /**
               *url du service de fichiers (fso) 
               */
              
               "fsoUrl"?:string;
              
       
   }
  
   

    /**
    interface de la class application_configuration_r3_admin 
    description config r3 admin
   */
    export class application_configuration_r3_admin extends   Iapplication_configuration{
        
              /**
               *url de la bdd 
               */
              
               "bddUrl"?:string;
              
       
              /**
               *uploadUrl url du service de telechargement des images 
               */
              
               "uploadUrl"?:string;
              
       
              /**
               *l"url de l'api 
               */
              
               "apiUrl"?:string;
              
       
   }
  
   

    /**
    interface de la class application_configuration_dcbm_static 
    description dcbm static
   */
    export class application_configuration_dcbm_static extends   Iapplication_configuration{
        
   }
  
   


  



  

  


