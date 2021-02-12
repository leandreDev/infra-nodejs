import { UtilsSecu, CtxInterpretor, IHttpResult, HttpServiceBase, HttpServiceAdminBase, HttpAbstractService } from "@hfdev/utils";
import * as Interfaces from "../../lib/modelObj/Interfaces";
import { IPlateforme } from './IPlateforme';
export declare class api_collection_plateform {
    constructor(conf: any);
    protected url: string;
    protected secure: UtilsSecu;
    /**
     service d'accès à la collection :certificat
     desc: certificat
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Irsa      certificat RSA
     
     
    */
    certificat: HttpServiceBase<Interfaces.Icertificat>;
    admin_certificat: HttpServiceAdminBase<Interfaces.Icertificat>;
    /**
    service d'accès a la sous-collection :rsa
    desc: certificat RSA
    info: vous ne pouvez voir que ce type d'objet
   */
    rsa: HttpServiceBase<Interfaces.Irsa>;
    admin_rsa: HttpServiceAdminBase<Interfaces.Irsa>;
    /**
     service d'accès à la collection :oidc_Client
     desc: description d'un client openId (c'est une application)
     

     
    */
    oidc_Client: HttpServiceBase<Interfaces.Ioidc_Client>;
    admin_oidc_Client: HttpServiceAdminBase<Interfaces.Ioidc_Client>;
    /**
     service d'accès à la collection :oidc_account
     desc: compte de l'utilisateur
     

     
    */
    oidc_account: HttpServiceBase<Interfaces.Ioidc_account>;
    admin_oidc_account: HttpServiceAdminBase<Interfaces.Ioidc_account>;
    /**
     service d'accès à la collection :service_access
     desc: décrit les régles de paramètre des servies
     

     
    */
    service_access: HttpServiceBase<Interfaces.Iservice_access>;
    admin_service_access: HttpServiceAdminBase<Interfaces.Iservice_access>;
    /**
     service d'accès à la collection :protoschema
     desc: protoschema est un méta modéle. il permet de créer les autres modèle de la base
     

     
    */
    protoschema: HttpServiceBase<Interfaces.Iprotoschema>;
    admin_protoschema: HttpServiceAdminBase<Interfaces.Iprotoschema>;
    /**
     service d'accès à la collection :mail
     desc: collection de mail
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Imail_sendgrid      objet envoyé a l'api sendgrid
     
     
    */
    mail: HttpServiceBase<Interfaces.Imail>;
    admin_mail: HttpServiceAdminBase<Interfaces.Imail>;
    /**
    service d'accès a la sous-collection :mail_sendgrid
    desc: objet envoyé a l'api sendgrid
    info: vous ne pouvez voir que ce type d'objet
   */
    mail_sendgrid: HttpServiceBase<Interfaces.Imail_sendgrid>;
    admin_mail_sendgrid: HttpServiceAdminBase<Interfaces.Imail_sendgrid>;
    /**
     service d'accès à la collection :service_serviceOrchestrator
     desc: service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
     

     
    */
    service_serviceOrchestrator: HttpServiceBase<Interfaces.Iservice_serviceOrchestrator>;
    admin_service_serviceOrchestrator: HttpServiceAdminBase<Interfaces.Iservice_serviceOrchestrator>;
    /**
     service d'accès à la collection :_view
     desc: créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        I_view_params      view avec des params
     
     
    */
    _view: HttpServiceBase<Interfaces.I_view>;
    admin__view: HttpServiceAdminBase<Interfaces.I_view>;
    /**
    service d'accès a la sous-collection :_view_params
    desc: view avec des params
    info: vous ne pouvez voir que ce type d'objet
   */
    _view_params: HttpServiceBase<Interfaces.I_view_params>;
    admin__view_params: HttpServiceAdminBase<Interfaces.I_view_params>;
    /**
     service d'accès à la collection :licence
     desc: représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Ilicence_temporelle      c'est une licence qui dure un certain temps
     
     
    */
    licence: HttpServiceBase<Interfaces.Ilicence>;
    admin_licence: HttpServiceAdminBase<Interfaces.Ilicence>;
    /**
    service d'accès a la sous-collection :licence_temporelle
    desc: c'est une licence qui dure un certain temps
    info: vous ne pouvez voir que ce type d'objet
   */
    licence_temporelle: HttpServiceBase<Interfaces.Ilicence_temporelle>;
    admin_licence_temporelle: HttpServiceAdminBase<Interfaces.Ilicence_temporelle>;
    /**
     service d'accès à la collection :MultilangSendGridTemplate
     desc: décrit un template multi langue d'envoie de mail avec sendGrid
     

     
    */
    MultilangSendGridTemplate: HttpServiceBase<Interfaces.IMultilangSendGridTemplate>;
    admin_MultilangSendGridTemplate: HttpServiceAdminBase<Interfaces.IMultilangSendGridTemplate>;
    /**
     service d'accès à la collection :application
     desc: liste des applications
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Ipack_card      c'est un paquet de carte
     
     
    */
    application: HttpServiceBase<Interfaces.Iapplication>;
    admin_application: HttpServiceAdminBase<Interfaces.Iapplication>;
    /**
    service d'accès a la sous-collection :pack_card
    desc: c'est un paquet de carte
    info: vous ne pouvez voir que ce type d'objet
   */
    pack_card: HttpServiceBase<Interfaces.Ipack_card>;
    admin_pack_card: HttpServiceAdminBase<Interfaces.Ipack_card>;
    /**
     service d'accès à la collection :TemplateLodash
     desc: template lodash + nom
     

     
    */
    TemplateLodash: HttpServiceBase<Interfaces.ITemplateLodash>;
    admin_TemplateLodash: HttpServiceAdminBase<Interfaces.ITemplateLodash>;
    /**
     service d'accès à la collection :end_client
     desc: c'est le client que l'on facture
     

     
    */
    end_client: HttpServiceBase<Interfaces.Iend_client>;
    admin_end_client: HttpServiceAdminBase<Interfaces.Iend_client>;
    /**
     service d'accès à la collection :Request
     desc: description d'une requete avec request
     

     
    */
    Request: HttpServiceBase<Interfaces.IRequest>;
    admin_Request: HttpServiceAdminBase<Interfaces.IRequest>;
    /**
     service d'accès à la collection :ftpsConfig
     desc: configuration pour un service sftp
     

     
    */
    ftpsConfig: HttpServiceBase<Interfaces.IftpsConfig>;
    admin_ftpsConfig: HttpServiceAdminBase<Interfaces.IftpsConfig>;
    /**
     service d'accès à la collection :application_configuration
     desc: c'est la configuration d'une application
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Iapplication_configuration_phoneCard      configuration d'une application phoneCard
     
        Iapplication_configuration_appCoach      c'est la configuration d'une application Coach
     
        Iapplication_configuration_super_admin_mongo      configuration de l'application superAdminMongo
     
        Iapplication_configuration_antico      configuration d'un parcourt anticoruption
     
        Iapplication_configuration_appClient      c'est la configuration d'une application Client
     
        Iapplication_configuration_appApprenant      c'est la configuration d'une application Apprenant
     
        IAppConf_minds_up_admin      config de l'app minds up admin
     
        Iapplication_configuration_reportApp      configuration d'un app template
     
        Iapplication_configuration_celio2020Admin      conf de l'app celio 2020
     
        Iapplication_configuration_manu_admin      cond des comptoire de l'or admin
     
        Iapplication_configuration_comptoire_or_admin      cond des comptoire de l'or admin
     
        Iapplication_configuration_celiofront      configuration de l appli celio front
     
        Iapplication_configuration_celioback      configuration de l appli celio back
     
        Iapplication_configuration_celioadmin      configuration de l appli celio admin
     
        Iapplication_configuration_ferrand      la conf ferrand
     
        Iapplication_configuration_celio      configuration générale application celio
     
        IAppConf_minds_up      config de l'app minds up
     
        Iapplication_configuration_petit_moulin      conf petit_moulin
     
        Iapplication_configuration_petit_moulin_admin      conf petit_moulin_admin
     
        Iapplication_configuration_qbp      config qbp
     
        Iapplication_configuration_qbp_admin_seller      config qbp admin
     
        Iapplication_configuration_qbp_admin      config qbp admin
     
     
    */
    application_configuration: HttpServiceBase<Interfaces.Iapplication_configuration>;
    admin_application_configuration: HttpServiceAdminBase<Interfaces.Iapplication_configuration>;
    /**
    service d'accès a la sous-collection :application_configuration_phoneCard
    desc: configuration d'une application phoneCard
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_phoneCard: HttpServiceBase<Interfaces.Iapplication_configuration_phoneCard>;
    admin_application_configuration_phoneCard: HttpServiceAdminBase<Interfaces.Iapplication_configuration_phoneCard>;
    /**
    service d'accès a la sous-collection :application_configuration_appCoach
    desc: c'est la configuration d'une application Coach
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_appCoach: HttpServiceBase<Interfaces.Iapplication_configuration_appCoach>;
    admin_application_configuration_appCoach: HttpServiceAdminBase<Interfaces.Iapplication_configuration_appCoach>;
    /**
    service d'accès a la sous-collection :application_configuration_super_admin_mongo
    desc: configuration de l'application superAdminMongo
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_super_admin_mongo: HttpServiceBase<Interfaces.Iapplication_configuration_super_admin_mongo>;
    admin_application_configuration_super_admin_mongo: HttpServiceAdminBase<Interfaces.Iapplication_configuration_super_admin_mongo>;
    /**
    service d'accès a la sous-collection :application_configuration_antico
    desc: configuration d'un parcourt anticoruption
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_antico: HttpServiceBase<Interfaces.Iapplication_configuration_antico>;
    admin_application_configuration_antico: HttpServiceAdminBase<Interfaces.Iapplication_configuration_antico>;
    /**
    service d'accès a la sous-collection :application_configuration_appClient
    desc: c'est la configuration d'une application Client
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_appClient: HttpServiceBase<Interfaces.Iapplication_configuration_appClient>;
    admin_application_configuration_appClient: HttpServiceAdminBase<Interfaces.Iapplication_configuration_appClient>;
    /**
    service d'accès a la sous-collection :application_configuration_appApprenant
    desc: c'est la configuration d'une application Apprenant
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_appApprenant: HttpServiceBase<Interfaces.Iapplication_configuration_appApprenant>;
    admin_application_configuration_appApprenant: HttpServiceAdminBase<Interfaces.Iapplication_configuration_appApprenant>;
    /**
    service d'accès a la sous-collection :AppConf_minds_up_admin
    desc: config de l'app minds up admin
    info: vous ne pouvez voir que ce type d'objet
   */
    AppConf_minds_up_admin: HttpServiceBase<Interfaces.IAppConf_minds_up_admin>;
    admin_AppConf_minds_up_admin: HttpServiceAdminBase<Interfaces.IAppConf_minds_up_admin>;
    /**
    service d'accès a la sous-collection :application_configuration_reportApp
    desc: configuration d'un app template
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_reportApp: HttpServiceBase<Interfaces.Iapplication_configuration_reportApp>;
    admin_application_configuration_reportApp: HttpServiceAdminBase<Interfaces.Iapplication_configuration_reportApp>;
    /**
    service d'accès a la sous-collection :application_configuration_celio2020Admin
    desc: conf de l'app celio 2020
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_celio2020Admin: HttpServiceBase<Interfaces.Iapplication_configuration_celio2020Admin>;
    admin_application_configuration_celio2020Admin: HttpServiceAdminBase<Interfaces.Iapplication_configuration_celio2020Admin>;
    /**
    service d'accès a la sous-collection :application_configuration_manu_admin
    desc: cond des comptoire de l'or admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_manu_admin: HttpServiceBase<Interfaces.Iapplication_configuration_manu_admin>;
    admin_application_configuration_manu_admin: HttpServiceAdminBase<Interfaces.Iapplication_configuration_manu_admin>;
    /**
    service d'accès a la sous-collection :application_configuration_comptoire_or_admin
    desc: cond des comptoire de l'or admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_comptoire_or_admin: HttpServiceBase<Interfaces.Iapplication_configuration_comptoire_or_admin>;
    admin_application_configuration_comptoire_or_admin: HttpServiceAdminBase<Interfaces.Iapplication_configuration_comptoire_or_admin>;
    /**
    service d'accès a la sous-collection :application_configuration_celiofront
    desc: configuration de l appli celio front
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_celiofront: HttpServiceBase<Interfaces.Iapplication_configuration_celiofront>;
    admin_application_configuration_celiofront: HttpServiceAdminBase<Interfaces.Iapplication_configuration_celiofront>;
    /**
    service d'accès a la sous-collection :application_configuration_celioback
    desc: configuration de l appli celio back
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_celioback: HttpServiceBase<Interfaces.Iapplication_configuration_celioback>;
    admin_application_configuration_celioback: HttpServiceAdminBase<Interfaces.Iapplication_configuration_celioback>;
    /**
    service d'accès a la sous-collection :application_configuration_celioadmin
    desc: configuration de l appli celio admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_celioadmin: HttpServiceBase<Interfaces.Iapplication_configuration_celioadmin>;
    admin_application_configuration_celioadmin: HttpServiceAdminBase<Interfaces.Iapplication_configuration_celioadmin>;
    /**
    service d'accès a la sous-collection :application_configuration_ferrand
    desc: la conf ferrand
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_ferrand: HttpServiceBase<Interfaces.Iapplication_configuration_ferrand>;
    admin_application_configuration_ferrand: HttpServiceAdminBase<Interfaces.Iapplication_configuration_ferrand>;
    /**
    service d'accès a la sous-collection :application_configuration_celio
    desc: configuration générale application celio
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_celio: HttpServiceBase<Interfaces.Iapplication_configuration_celio>;
    admin_application_configuration_celio: HttpServiceAdminBase<Interfaces.Iapplication_configuration_celio>;
    /**
    service d'accès a la sous-collection :AppConf_minds_up
    desc: config de l'app minds up
    info: vous ne pouvez voir que ce type d'objet
   */
    AppConf_minds_up: HttpServiceBase<Interfaces.IAppConf_minds_up>;
    admin_AppConf_minds_up: HttpServiceAdminBase<Interfaces.IAppConf_minds_up>;
    /**
    service d'accès a la sous-collection :application_configuration_petit_moulin
    desc: conf petit_moulin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_petit_moulin: HttpServiceBase<Interfaces.Iapplication_configuration_petit_moulin>;
    admin_application_configuration_petit_moulin: HttpServiceAdminBase<Interfaces.Iapplication_configuration_petit_moulin>;
    /**
    service d'accès a la sous-collection :application_configuration_petit_moulin_admin
    desc: conf petit_moulin_admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_petit_moulin_admin: HttpServiceBase<Interfaces.Iapplication_configuration_petit_moulin_admin>;
    admin_application_configuration_petit_moulin_admin: HttpServiceAdminBase<Interfaces.Iapplication_configuration_petit_moulin_admin>;
    /**
    service d'accès a la sous-collection :application_configuration_qbp
    desc: config qbp
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_qbp: HttpServiceBase<Interfaces.Iapplication_configuration_qbp>;
    admin_application_configuration_qbp: HttpServiceAdminBase<Interfaces.Iapplication_configuration_qbp>;
    /**
    service d'accès a la sous-collection :application_configuration_qbp_admin_seller
    desc: config qbp admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_qbp_admin_seller: HttpServiceBase<Interfaces.Iapplication_configuration_qbp_admin_seller>;
    admin_application_configuration_qbp_admin_seller: HttpServiceAdminBase<Interfaces.Iapplication_configuration_qbp_admin_seller>;
    /**
    service d'accès a la sous-collection :application_configuration_qbp_admin
    desc: config qbp admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_qbp_admin: HttpServiceBase<Interfaces.Iapplication_configuration_qbp_admin>;
    admin_application_configuration_qbp_admin: HttpServiceAdminBase<Interfaces.Iapplication_configuration_qbp_admin>;
    /**
     service d'accès à la collection :application_instance
     desc: c'est le couple application configuration
     

     
    */
    application_instance: HttpServiceBase<Interfaces.Iapplication_instance>;
    admin_application_instance: HttpServiceAdminBase<Interfaces.Iapplication_instance>;
    /**
     service d'accès à la collection :service
     desc: identification du service
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Iservice_sso      c'est un sso
     
        Iservice_init      service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
     
        Iservice_mailtoinfra      service qui permet de configurer l'authentification a partir d'un mail
     
        Iservice_licence_token      c'est un service en charge de valider les licences et retourner les configurations des applications web
     
        Iservice_goshabaGateway      passerelle pour goshaba
     
        Iservice_socketIo      communication temps réelle multi format
     
        Iservice_supervision      service_supervision
     
        Iservice_configuration      c'est le service de distribution des configurations des services
     
        Iservice_nginxConfigurator      service_nginxConfigurator
     
        Iservice_push_notification      Service pour gérer les notifications push des applications
     
        Iservice_like      service permettant de liker un objet de la base
     
        Iservice_dumy_fso      simple remote file system a n utiliser que pour des test
     
        Iservice_sendGrid      permet d'envoyer des mail via l'api send grid v3
     
        Iservice_trainingCoursesService      service de gestion des parcourts de formation
     
        Iservice_orchestrator      service d'orchestration
     
        Iservice_socket_io      service messagerie de soket.io
     
        Iservice_tutor      service de gestion des message tutoré
     
        Iservice_init_js      service qui retourne un init.js
     
        Iservice_infra_admin      administration de l'infra
     
        Imailtoinfra2      retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
     
        Iservice_planned_tasks      Service de Taches planifiées
     
        IService_scorm_gateway      service passerelle d'un package scorm vers l'interne
     
        Iservice_nginxMultiConfigurator      configuration d'un service nginx multi configuration
     
        Iservice_client_ftp      client ftps
     
        Iservice_polo_celio      service de tirage au sort de polo
     
        Iservice_fso      remote file system
     
        Iservice_pdfrip      service de creation de pdf
     
        Iservice_signin      service d'enregistrement
     
        Iservice_mindsUp      service minds up metier
     
        Iservice_webAppConf      permet de générer les fichier de conf des app (css, js, ...)
     
        Iswagger_conv      convertisseur de swagger
     
        Iservice_mongo      configure un service mongo
     
        Iservice_celio_qcm_admin      service celio qcm admin
     
        Iservice_ferrand      service ferrand
     
        Iservice_petit_moulin      service petit moulin
     
        Iservice_celio_fid      service celio fid
     
        Iservice_celio_qcm      service celio qcm
     
        Iservice_comptoireOr      service_comptoireOr
     
        Iservice_celio_back_task      service celio back_task
     
        Iservice_celio_fid_admin      service celio fid admin
     
        Iservice_airport      service airport
     
        IQBP_service      service métier de QBP
     
     
    */
    service: HttpServiceBase<Interfaces.Iservice>;
    admin_service: HttpServiceAdminBase<Interfaces.Iservice>;
    /**
    service d'accès a la sous-collection :service_sso
    desc: c'est un sso
    info: vous ne pouvez voir que ce type d'objet
   */
    service_sso: HttpServiceBase<Interfaces.Iservice_sso>;
    admin_service_sso: HttpServiceAdminBase<Interfaces.Iservice_sso>;
    /**
    service d'accès a la sous-collection :service_init
    desc: service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
    info: vous ne pouvez voir que ce type d'objet
   */
    service_init: HttpServiceBase<Interfaces.Iservice_init>;
    admin_service_init: HttpServiceAdminBase<Interfaces.Iservice_init>;
    /**
    service d'accès a la sous-collection :service_mailtoinfra
    desc: service qui permet de configurer l'authentification a partir d'un mail
    info: vous ne pouvez voir que ce type d'objet
   */
    service_mailtoinfra: HttpServiceBase<Interfaces.Iservice_mailtoinfra>;
    admin_service_mailtoinfra: HttpServiceAdminBase<Interfaces.Iservice_mailtoinfra>;
    /**
    service d'accès a la sous-collection :service_licence_token
    desc: c'est un service en charge de valider les licences et retourner les configurations des applications web
    info: vous ne pouvez voir que ce type d'objet
   */
    service_licence_token: HttpServiceBase<Interfaces.Iservice_licence_token>;
    admin_service_licence_token: HttpServiceAdminBase<Interfaces.Iservice_licence_token>;
    /**
    service d'accès a la sous-collection :service_goshabaGateway
    desc: passerelle pour goshaba
    info: vous ne pouvez voir que ce type d'objet
   */
    service_goshabaGateway: HttpServiceBase<Interfaces.Iservice_goshabaGateway>;
    admin_service_goshabaGateway: HttpServiceAdminBase<Interfaces.Iservice_goshabaGateway>;
    /**
    service d'accès a la sous-collection :service_socketIo
    desc: communication temps réelle multi format
    info: vous ne pouvez voir que ce type d'objet
   */
    service_socketIo: HttpServiceBase<Interfaces.Iservice_socketIo>;
    admin_service_socketIo: HttpServiceAdminBase<Interfaces.Iservice_socketIo>;
    /**
    service d'accès a la sous-collection :service_supervision
    desc: service_supervision
    info: vous ne pouvez voir que ce type d'objet
   */
    service_supervision: HttpServiceBase<Interfaces.Iservice_supervision>;
    admin_service_supervision: HttpServiceAdminBase<Interfaces.Iservice_supervision>;
    /**
    service d'accès a la sous-collection :service_configuration
    desc: c'est le service de distribution des configurations des services
    info: vous ne pouvez voir que ce type d'objet
   */
    service_configuration: HttpServiceBase<Interfaces.Iservice_configuration>;
    admin_service_configuration: HttpServiceAdminBase<Interfaces.Iservice_configuration>;
    /**
    service d'accès a la sous-collection :service_nginxConfigurator
    desc: service_nginxConfigurator
    info: vous ne pouvez voir que ce type d'objet
   */
    service_nginxConfigurator: HttpServiceBase<Interfaces.Iservice_nginxConfigurator>;
    admin_service_nginxConfigurator: HttpServiceAdminBase<Interfaces.Iservice_nginxConfigurator>;
    /**
    service d'accès a la sous-collection :service_push_notification
    desc: Service pour gérer les notifications push des applications
    info: vous ne pouvez voir que ce type d'objet
   */
    service_push_notification: HttpServiceBase<Interfaces.Iservice_push_notification>;
    admin_service_push_notification: HttpServiceAdminBase<Interfaces.Iservice_push_notification>;
    /**
    service d'accès a la sous-collection :service_like
    desc: service permettant de liker un objet de la base
    info: vous ne pouvez voir que ce type d'objet
   */
    service_like: HttpServiceBase<Interfaces.Iservice_like>;
    admin_service_like: HttpServiceAdminBase<Interfaces.Iservice_like>;
    /**
    service d'accès a la sous-collection :service_dumy_fso
    desc: simple remote file system a n utiliser que pour des test
    info: vous ne pouvez voir que ce type d'objet
   */
    service_dumy_fso: HttpServiceBase<Interfaces.Iservice_dumy_fso>;
    admin_service_dumy_fso: HttpServiceAdminBase<Interfaces.Iservice_dumy_fso>;
    /**
    service d'accès a la sous-collection :service_sendGrid
    desc: permet d'envoyer des mail via l'api send grid v3
    info: vous ne pouvez voir que ce type d'objet
   */
    service_sendGrid: HttpServiceBase<Interfaces.Iservice_sendGrid>;
    admin_service_sendGrid: HttpServiceAdminBase<Interfaces.Iservice_sendGrid>;
    /**
    service d'accès a la sous-collection :service_trainingCoursesService
    desc: service de gestion des parcourts de formation
    info: vous ne pouvez voir que ce type d'objet
   */
    service_trainingCoursesService: HttpServiceBase<Interfaces.Iservice_trainingCoursesService>;
    admin_service_trainingCoursesService: HttpServiceAdminBase<Interfaces.Iservice_trainingCoursesService>;
    /**
    service d'accès a la sous-collection :service_orchestrator
    desc: service d'orchestration
    info: vous ne pouvez voir que ce type d'objet
   */
    service_orchestrator: HttpServiceBase<Interfaces.Iservice_orchestrator>;
    admin_service_orchestrator: HttpServiceAdminBase<Interfaces.Iservice_orchestrator>;
    /**
    service d'accès a la sous-collection :service_socket_io
    desc: service messagerie de soket.io
    info: vous ne pouvez voir que ce type d'objet
   */
    service_socket_io: HttpServiceBase<Interfaces.Iservice_socket_io>;
    admin_service_socket_io: HttpServiceAdminBase<Interfaces.Iservice_socket_io>;
    /**
    service d'accès a la sous-collection :service_tutor
    desc: service de gestion des message tutoré
    info: vous ne pouvez voir que ce type d'objet
   */
    service_tutor: HttpServiceBase<Interfaces.Iservice_tutor>;
    admin_service_tutor: HttpServiceAdminBase<Interfaces.Iservice_tutor>;
    /**
    service d'accès a la sous-collection :service_init_js
    desc: service qui retourne un init.js
    info: vous ne pouvez voir que ce type d'objet
   */
    service_init_js: HttpServiceBase<Interfaces.Iservice_init_js>;
    admin_service_init_js: HttpServiceAdminBase<Interfaces.Iservice_init_js>;
    /**
    service d'accès a la sous-collection :service_infra_admin
    desc: administration de l'infra
    info: vous ne pouvez voir que ce type d'objet
   */
    service_infra_admin: HttpServiceBase<Interfaces.Iservice_infra_admin>;
    admin_service_infra_admin: HttpServiceAdminBase<Interfaces.Iservice_infra_admin>;
    /**
    service d'accès a la sous-collection :mailtoinfra2
    desc: retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
    info: vous ne pouvez voir que ce type d'objet
   */
    mailtoinfra2: HttpServiceBase<Interfaces.Imailtoinfra2>;
    admin_mailtoinfra2: HttpServiceAdminBase<Interfaces.Imailtoinfra2>;
    /**
    service d'accès a la sous-collection :service_planned_tasks
    desc: Service de Taches planifiées
    info: vous ne pouvez voir que ce type d'objet
   */
    service_planned_tasks: HttpServiceBase<Interfaces.Iservice_planned_tasks>;
    admin_service_planned_tasks: HttpServiceAdminBase<Interfaces.Iservice_planned_tasks>;
    /**
    service d'accès a la sous-collection :Service_scorm_gateway
    desc: service passerelle d'un package scorm vers l'interne
    info: vous ne pouvez voir que ce type d'objet
   */
    Service_scorm_gateway: HttpServiceBase<Interfaces.IService_scorm_gateway>;
    admin_Service_scorm_gateway: HttpServiceAdminBase<Interfaces.IService_scorm_gateway>;
    /**
    service d'accès a la sous-collection :service_nginxMultiConfigurator
    desc: configuration d'un service nginx multi configuration
    info: vous ne pouvez voir que ce type d'objet
   */
    service_nginxMultiConfigurator: HttpServiceBase<Interfaces.Iservice_nginxMultiConfigurator>;
    admin_service_nginxMultiConfigurator: HttpServiceAdminBase<Interfaces.Iservice_nginxMultiConfigurator>;
    /**
    service d'accès a la sous-collection :service_client_ftp
    desc: client ftps
    info: vous ne pouvez voir que ce type d'objet
   */
    service_client_ftp: HttpServiceBase<Interfaces.Iservice_client_ftp>;
    admin_service_client_ftp: HttpServiceAdminBase<Interfaces.Iservice_client_ftp>;
    /**
    service d'accès a la sous-collection :service_polo_celio
    desc: service de tirage au sort de polo
    info: vous ne pouvez voir que ce type d'objet
   */
    service_polo_celio: HttpServiceBase<Interfaces.Iservice_polo_celio>;
    admin_service_polo_celio: HttpServiceAdminBase<Interfaces.Iservice_polo_celio>;
    /**
    service d'accès a la sous-collection :service_fso
    desc: remote file system
    info: vous ne pouvez voir que ce type d'objet
   */
    service_fso: HttpServiceBase<Interfaces.Iservice_fso>;
    admin_service_fso: HttpServiceAdminBase<Interfaces.Iservice_fso>;
    /**
    service d'accès a la sous-collection :service_pdfrip
    desc: service de creation de pdf
    info: vous ne pouvez voir que ce type d'objet
   */
    service_pdfrip: HttpServiceBase<Interfaces.Iservice_pdfrip>;
    admin_service_pdfrip: HttpServiceAdminBase<Interfaces.Iservice_pdfrip>;
    /**
    service d'accès a la sous-collection :service_signin
    desc: service d'enregistrement
    info: vous ne pouvez voir que ce type d'objet
   */
    service_signin: HttpServiceBase<Interfaces.Iservice_signin>;
    admin_service_signin: HttpServiceAdminBase<Interfaces.Iservice_signin>;
    /**
    service d'accès a la sous-collection :service_mindsUp
    desc: service minds up metier
    info: vous ne pouvez voir que ce type d'objet
   */
    service_mindsUp: HttpServiceBase<Interfaces.Iservice_mindsUp>;
    admin_service_mindsUp: HttpServiceAdminBase<Interfaces.Iservice_mindsUp>;
    /**
    service d'accès a la sous-collection :service_webAppConf
    desc: permet de générer les fichier de conf des app (css, js, ...)
    info: vous ne pouvez voir que ce type d'objet
   */
    service_webAppConf: HttpServiceBase<Interfaces.Iservice_webAppConf>;
    admin_service_webAppConf: HttpServiceAdminBase<Interfaces.Iservice_webAppConf>;
    /**
    service d'accès a la sous-collection :swagger_conv
    desc: convertisseur de swagger
    info: vous ne pouvez voir que ce type d'objet
   */
    swagger_conv: HttpServiceBase<Interfaces.Iswagger_conv>;
    admin_swagger_conv: HttpServiceAdminBase<Interfaces.Iswagger_conv>;
    /**
    service d'accès a la sous-collection :service_mongo
    desc: configure un service mongo
    info: vous ne pouvez voir que ce type d'objet
   */
    service_mongo: HttpServiceBase<Interfaces.Iservice_mongo>;
    admin_service_mongo: HttpServiceAdminBase<Interfaces.Iservice_mongo>;
    /**
    service d'accès a la sous-collection :service_celio_qcm_admin
    desc: service celio qcm admin
    info: vous ne pouvez voir que ce type d'objet
   */
    service_celio_qcm_admin: HttpServiceBase<Interfaces.Iservice_celio_qcm_admin>;
    admin_service_celio_qcm_admin: HttpServiceAdminBase<Interfaces.Iservice_celio_qcm_admin>;
    /**
    service d'accès a la sous-collection :service_ferrand
    desc: service ferrand
    info: vous ne pouvez voir que ce type d'objet
   */
    service_ferrand: HttpServiceBase<Interfaces.Iservice_ferrand>;
    admin_service_ferrand: HttpServiceAdminBase<Interfaces.Iservice_ferrand>;
    /**
    service d'accès a la sous-collection :service_petit_moulin
    desc: service petit moulin
    info: vous ne pouvez voir que ce type d'objet
   */
    service_petit_moulin: HttpServiceBase<Interfaces.Iservice_petit_moulin>;
    admin_service_petit_moulin: HttpServiceAdminBase<Interfaces.Iservice_petit_moulin>;
    /**
    service d'accès a la sous-collection :service_celio_fid
    desc: service celio fid
    info: vous ne pouvez voir que ce type d'objet
   */
    service_celio_fid: HttpServiceBase<Interfaces.Iservice_celio_fid>;
    admin_service_celio_fid: HttpServiceAdminBase<Interfaces.Iservice_celio_fid>;
    /**
    service d'accès a la sous-collection :service_celio_qcm
    desc: service celio qcm
    info: vous ne pouvez voir que ce type d'objet
   */
    service_celio_qcm: HttpServiceBase<Interfaces.Iservice_celio_qcm>;
    admin_service_celio_qcm: HttpServiceAdminBase<Interfaces.Iservice_celio_qcm>;
    /**
    service d'accès a la sous-collection :service_comptoireOr
    desc: service_comptoireOr
    info: vous ne pouvez voir que ce type d'objet
   */
    service_comptoireOr: HttpServiceBase<Interfaces.Iservice_comptoireOr>;
    admin_service_comptoireOr: HttpServiceAdminBase<Interfaces.Iservice_comptoireOr>;
    /**
    service d'accès a la sous-collection :service_celio_back_task
    desc: service celio back_task
    info: vous ne pouvez voir que ce type d'objet
   */
    service_celio_back_task: HttpServiceBase<Interfaces.Iservice_celio_back_task>;
    admin_service_celio_back_task: HttpServiceAdminBase<Interfaces.Iservice_celio_back_task>;
    /**
    service d'accès a la sous-collection :service_celio_fid_admin
    desc: service celio fid admin
    info: vous ne pouvez voir que ce type d'objet
   */
    service_celio_fid_admin: HttpServiceBase<Interfaces.Iservice_celio_fid_admin>;
    admin_service_celio_fid_admin: HttpServiceAdminBase<Interfaces.Iservice_celio_fid_admin>;
    /**
    service d'accès a la sous-collection :service_airport
    desc: service airport
    info: vous ne pouvez voir que ce type d'objet
   */
    service_airport: HttpServiceBase<Interfaces.Iservice_airport>;
    admin_service_airport: HttpServiceAdminBase<Interfaces.Iservice_airport>;
    /**
    service d'accès a la sous-collection :QBP_service
    desc: service métier de QBP
    info: vous ne pouvez voir que ce type d'objet
   */
    QBP_service: HttpServiceBase<Interfaces.IQBP_service>;
    admin_QBP_service: HttpServiceAdminBase<Interfaces.IQBP_service>;
}
/**
    accès à la vue :Client
    retourne la donnée du client connecté
*/
export declare class api_view_Client extends HttpAbstractService {
    conf: any;
    /**
        accès à la vue :Client
        
    */
    constructor(conf: any);
    protected url: string;
    protected globalCtxInt: CtxInterpretor;
    /**
    génére une requette sur la vue Client
    
    */
    get(query?: string, headers?: any): Promise<IHttpResult<Interfaces.Iend_client>>;
}
/**
    accès à la vue :UserLicence
    retourne la liste des licences d'un utilisateur pour le client courrant
*/
export declare class api_view_UserLicence extends HttpAbstractService {
    conf: any;
    /**
        accès à la vue :UserLicence
        
    */
    constructor(conf: any);
    protected url: string;
    protected globalCtxInt: CtxInterpretor;
    /**
    génére une requette sur la vue UserLicence
    
    */
    get(userId: string, query?: string, headers?: any): Promise<IHttpResult<Interfaces.Ilicence>>;
}
export declare class api_view_plateform {
    conf: any;
    constructor(conf: any);
    /**
    accès à la vue :Client     retourne la donnée du client connecté
    */
    Client: api_view_Client;
    /**
    accès à la vue :UserLicence     retourne la liste des licences d'un utilisateur pour le client courrant
    */
    UserLicence: api_view_UserLicence;
}
export declare class Api_plateforme implements IPlateforme {
    conf: any;
    constructor(conf: any);
    /**
        liste des collections de l'api
    */
    collections: api_collection_plateform;
    /**
        liste des vues de l'api
    */
    views: api_view_plateform;
}
