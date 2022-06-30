import { UtilsSecu, HttpServiceBddBase, HttpServiceBddAdminBase, HttpServiceBddBaseView, mongo, IBase, IHttpResult } from "@leandredev/utils";
import * as Interface from "../../lib/modelObj/Interfaces";
import { IPlateforme } from './IPlateforme';
export declare class bdd_collection_plateform {
    constructor(conf: any);
    getHttpService(colName: string): HttpServiceBddBase<IBase>;
    protected url: string;
    protected secure: UtilsSecu;
    /**
     service d'accès à la collection :certificat
     desc: certificat
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Irsa      certificat RSA
     
     
    */
    certificat: HttpServiceBddBase<Interface.Icertificat>;
    admin_certificat: HttpServiceBddAdminBase<Interface.Icertificat>;
    /**
    service d'accès a la sous-collection :rsa
    desc: certificat RSA
    info: vous ne pouvez voir que ce type d'objet
   */
    rsa: HttpServiceBddBase<Interface.Irsa>;
    admin_rsa: HttpServiceBddAdminBase<Interface.Irsa>;
    /**
     service d'accès à la collection :oidc_Client
     desc: description d'un client openId (c'est une application)
     

     
    */
    oidc_Client: HttpServiceBddBase<Interface.Ioidc_Client>;
    admin_oidc_Client: HttpServiceBddAdminBase<Interface.Ioidc_Client>;
    /**
     service d'accès à la collection :oidc_account
     desc: compte de l'utilisateur
     

     
    */
    oidc_account: HttpServiceBddBase<Interface.Ioidc_account>;
    admin_oidc_account: HttpServiceBddAdminBase<Interface.Ioidc_account>;
    /**
     service d'accès à la collection :service_access
     desc: décrit les régles de paramètre des servies
     

     
    */
    service_access: HttpServiceBddBase<Interface.Iservice_access>;
    admin_service_access: HttpServiceBddAdminBase<Interface.Iservice_access>;
    /**
     service d'accès à la collection :protoschema
     desc: protoschema est un méta modéle. il permet de créer les autres modèle de la base
     

     
    */
    protoschema: HttpServiceBddBase<Interface.Iprotoschema>;
    admin_protoschema: HttpServiceBddAdminBase<Interface.Iprotoschema>;
    /**
     service d'accès à la collection :mail
     desc: collection de mail
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Imail_sendgrid      objet envoyé a l'api sendgrid
     
     
    */
    mail: HttpServiceBddBase<Interface.Imail>;
    admin_mail: HttpServiceBddAdminBase<Interface.Imail>;
    /**
    service d'accès a la sous-collection :mail_sendgrid
    desc: objet envoyé a l'api sendgrid
    info: vous ne pouvez voir que ce type d'objet
   */
    mail_sendgrid: HttpServiceBddBase<Interface.Imail_sendgrid>;
    admin_mail_sendgrid: HttpServiceBddAdminBase<Interface.Imail_sendgrid>;
    /**
     service d'accès à la collection :service_serviceOrchestrator
     desc: service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
     

     
    */
    service_serviceOrchestrator: HttpServiceBddBase<Interface.Iservice_serviceOrchestrator>;
    admin_service_serviceOrchestrator: HttpServiceBddAdminBase<Interface.Iservice_serviceOrchestrator>;
    /**
     service d'accès à la collection :_view
     desc: créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        I_view_params      view avec des params
     
     
    */
    _view: HttpServiceBddBase<Interface.I_view>;
    admin__view: HttpServiceBddAdminBase<Interface.I_view>;
    /**
    service d'accès a la sous-collection :_view_params
    desc: view avec des params
    info: vous ne pouvez voir que ce type d'objet
   */
    _view_params: HttpServiceBddBase<Interface.I_view_params>;
    admin__view_params: HttpServiceBddAdminBase<Interface.I_view_params>;
    /**
     service d'accès à la collection :licence
     desc: représente la licence d'un utilisateur pour un service (ou application) distribué par un end_client
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Ilicence_temporelle      c'est une licence qui dure un certain temps
     
     
    */
    licence: HttpServiceBddBase<Interface.Ilicence>;
    admin_licence: HttpServiceBddAdminBase<Interface.Ilicence>;
    /**
    service d'accès a la sous-collection :licence_temporelle
    desc: c'est une licence qui dure un certain temps
    info: vous ne pouvez voir que ce type d'objet
   */
    licence_temporelle: HttpServiceBddBase<Interface.Ilicence_temporelle>;
    admin_licence_temporelle: HttpServiceBddAdminBase<Interface.Ilicence_temporelle>;
    /**
     service d'accès à la collection :MultilangSendGridTemplate
     desc: décrit un template multi langue d'envoie de mail avec sendGrid
     

     
    */
    MultilangSendGridTemplate: HttpServiceBddBase<Interface.IMultilangSendGridTemplate>;
    admin_MultilangSendGridTemplate: HttpServiceBddAdminBase<Interface.IMultilangSendGridTemplate>;
    /**
     service d'accès à la collection :application
     desc: liste des applications
     
     info: vous pouvez voir tous les objets de cette collection y compris les enfants
     liste des interfaces héritées possibles:
     
        Ipack_card      c'est un paquet de carte
     
     
    */
    application: HttpServiceBddBase<Interface.Iapplication>;
    admin_application: HttpServiceBddAdminBase<Interface.Iapplication>;
    /**
    service d'accès a la sous-collection :pack_card
    desc: c'est un paquet de carte
    info: vous ne pouvez voir que ce type d'objet
   */
    pack_card: HttpServiceBddBase<Interface.Ipack_card>;
    admin_pack_card: HttpServiceBddAdminBase<Interface.Ipack_card>;
    /**
     service d'accès à la collection :TemplateLodash
     desc: template lodash + nom
     

     
    */
    TemplateLodash: HttpServiceBddBase<Interface.ITemplateLodash>;
    admin_TemplateLodash: HttpServiceBddAdminBase<Interface.ITemplateLodash>;
    /**
     service d'accès à la collection :end_client
     desc: c'est le client que l'on facture
     

     
    */
    end_client: HttpServiceBddBase<Interface.Iend_client>;
    admin_end_client: HttpServiceBddAdminBase<Interface.Iend_client>;
    /**
     service d'accès à la collection :Request
     desc: description d'une requete avec request
     

     
    */
    Request: HttpServiceBddBase<Interface.IRequest>;
    admin_Request: HttpServiceBddAdminBase<Interface.IRequest>;
    /**
     service d'accès à la collection :ftpsConfig
     desc: configuration pour un service sftp
     

     
    */
    ftpsConfig: HttpServiceBddBase<Interface.IftpsConfig>;
    admin_ftpsConfig: HttpServiceBddAdminBase<Interface.IftpsConfig>;
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
     
        Iapplication_configuration_airport_admin      config airport
     
        Iapplication_configuration_airport      config airport
     
        Iapplication_configuration_boisdor      config boisdor
     
        Iapplication_configuration_r3      config r3
     
        Iapplication_configuration_boisdor_admin_seller      config boisdor admin
     
        Iapplication_configuration_qbp_admin      config qbp admin
     
        Iapplication_configuration_qbp_admin_seller      config qbp admin
     
        Iapplication_configuration_boisdor_admin      config boisdor admin
     
        Iapplication_configuration_qbp      config qbp
     
        Iapplication_configuration_r3_admin_seller      config r3 admin
     
        Iapplication_configuration_r3_admin      config r3 admin
     
        Iapplication_configuration_dcbm_static      dcbm static
     
     
    */
    application_configuration: HttpServiceBddBase<Interface.Iapplication_configuration>;
    admin_application_configuration: HttpServiceBddAdminBase<Interface.Iapplication_configuration>;
    /**
    service d'accès a la sous-collection :application_configuration_phoneCard
    desc: configuration d'une application phoneCard
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_phoneCard: HttpServiceBddBase<Interface.Iapplication_configuration_phoneCard>;
    admin_application_configuration_phoneCard: HttpServiceBddAdminBase<Interface.Iapplication_configuration_phoneCard>;
    /**
    service d'accès a la sous-collection :application_configuration_appCoach
    desc: c'est la configuration d'une application Coach
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_appCoach: HttpServiceBddBase<Interface.Iapplication_configuration_appCoach>;
    admin_application_configuration_appCoach: HttpServiceBddAdminBase<Interface.Iapplication_configuration_appCoach>;
    /**
    service d'accès a la sous-collection :application_configuration_super_admin_mongo
    desc: configuration de l'application superAdminMongo
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_super_admin_mongo: HttpServiceBddBase<Interface.Iapplication_configuration_super_admin_mongo>;
    admin_application_configuration_super_admin_mongo: HttpServiceBddAdminBase<Interface.Iapplication_configuration_super_admin_mongo>;
    /**
    service d'accès a la sous-collection :application_configuration_antico
    desc: configuration d'un parcourt anticoruption
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_antico: HttpServiceBddBase<Interface.Iapplication_configuration_antico>;
    admin_application_configuration_antico: HttpServiceBddAdminBase<Interface.Iapplication_configuration_antico>;
    /**
    service d'accès a la sous-collection :application_configuration_appClient
    desc: c'est la configuration d'une application Client
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_appClient: HttpServiceBddBase<Interface.Iapplication_configuration_appClient>;
    admin_application_configuration_appClient: HttpServiceBddAdminBase<Interface.Iapplication_configuration_appClient>;
    /**
    service d'accès a la sous-collection :application_configuration_appApprenant
    desc: c'est la configuration d'une application Apprenant
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_appApprenant: HttpServiceBddBase<Interface.Iapplication_configuration_appApprenant>;
    admin_application_configuration_appApprenant: HttpServiceBddAdminBase<Interface.Iapplication_configuration_appApprenant>;
    /**
    service d'accès a la sous-collection :AppConf_minds_up_admin
    desc: config de l'app minds up admin
    info: vous ne pouvez voir que ce type d'objet
   */
    AppConf_minds_up_admin: HttpServiceBddBase<Interface.IAppConf_minds_up_admin>;
    admin_AppConf_minds_up_admin: HttpServiceBddAdminBase<Interface.IAppConf_minds_up_admin>;
    /**
    service d'accès a la sous-collection :application_configuration_reportApp
    desc: configuration d'un app template
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_reportApp: HttpServiceBddBase<Interface.Iapplication_configuration_reportApp>;
    admin_application_configuration_reportApp: HttpServiceBddAdminBase<Interface.Iapplication_configuration_reportApp>;
    /**
    service d'accès a la sous-collection :application_configuration_celio2020Admin
    desc: conf de l'app celio 2020
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_celio2020Admin: HttpServiceBddBase<Interface.Iapplication_configuration_celio2020Admin>;
    admin_application_configuration_celio2020Admin: HttpServiceBddAdminBase<Interface.Iapplication_configuration_celio2020Admin>;
    /**
    service d'accès a la sous-collection :application_configuration_manu_admin
    desc: cond des comptoire de l'or admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_manu_admin: HttpServiceBddBase<Interface.Iapplication_configuration_manu_admin>;
    admin_application_configuration_manu_admin: HttpServiceBddAdminBase<Interface.Iapplication_configuration_manu_admin>;
    /**
    service d'accès a la sous-collection :application_configuration_comptoire_or_admin
    desc: cond des comptoire de l'or admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_comptoire_or_admin: HttpServiceBddBase<Interface.Iapplication_configuration_comptoire_or_admin>;
    admin_application_configuration_comptoire_or_admin: HttpServiceBddAdminBase<Interface.Iapplication_configuration_comptoire_or_admin>;
    /**
    service d'accès a la sous-collection :application_configuration_celiofront
    desc: configuration de l appli celio front
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_celiofront: HttpServiceBddBase<Interface.Iapplication_configuration_celiofront>;
    admin_application_configuration_celiofront: HttpServiceBddAdminBase<Interface.Iapplication_configuration_celiofront>;
    /**
    service d'accès a la sous-collection :application_configuration_celioback
    desc: configuration de l appli celio back
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_celioback: HttpServiceBddBase<Interface.Iapplication_configuration_celioback>;
    admin_application_configuration_celioback: HttpServiceBddAdminBase<Interface.Iapplication_configuration_celioback>;
    /**
    service d'accès a la sous-collection :application_configuration_celioadmin
    desc: configuration de l appli celio admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_celioadmin: HttpServiceBddBase<Interface.Iapplication_configuration_celioadmin>;
    admin_application_configuration_celioadmin: HttpServiceBddAdminBase<Interface.Iapplication_configuration_celioadmin>;
    /**
    service d'accès a la sous-collection :application_configuration_ferrand
    desc: la conf ferrand
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_ferrand: HttpServiceBddBase<Interface.Iapplication_configuration_ferrand>;
    admin_application_configuration_ferrand: HttpServiceBddAdminBase<Interface.Iapplication_configuration_ferrand>;
    /**
    service d'accès a la sous-collection :application_configuration_celio
    desc: configuration générale application celio
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_celio: HttpServiceBddBase<Interface.Iapplication_configuration_celio>;
    admin_application_configuration_celio: HttpServiceBddAdminBase<Interface.Iapplication_configuration_celio>;
    /**
    service d'accès a la sous-collection :AppConf_minds_up
    desc: config de l'app minds up
    info: vous ne pouvez voir que ce type d'objet
   */
    AppConf_minds_up: HttpServiceBddBase<Interface.IAppConf_minds_up>;
    admin_AppConf_minds_up: HttpServiceBddAdminBase<Interface.IAppConf_minds_up>;
    /**
    service d'accès a la sous-collection :application_configuration_petit_moulin
    desc: conf petit_moulin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_petit_moulin: HttpServiceBddBase<Interface.Iapplication_configuration_petit_moulin>;
    admin_application_configuration_petit_moulin: HttpServiceBddAdminBase<Interface.Iapplication_configuration_petit_moulin>;
    /**
    service d'accès a la sous-collection :application_configuration_petit_moulin_admin
    desc: conf petit_moulin_admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_petit_moulin_admin: HttpServiceBddBase<Interface.Iapplication_configuration_petit_moulin_admin>;
    admin_application_configuration_petit_moulin_admin: HttpServiceBddAdminBase<Interface.Iapplication_configuration_petit_moulin_admin>;
    /**
    service d'accès a la sous-collection :application_configuration_airport_admin
    desc: config airport
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_airport_admin: HttpServiceBddBase<Interface.Iapplication_configuration_airport_admin>;
    admin_application_configuration_airport_admin: HttpServiceBddAdminBase<Interface.Iapplication_configuration_airport_admin>;
    /**
    service d'accès a la sous-collection :application_configuration_airport
    desc: config airport
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_airport: HttpServiceBddBase<Interface.Iapplication_configuration_airport>;
    admin_application_configuration_airport: HttpServiceBddAdminBase<Interface.Iapplication_configuration_airport>;
    /**
    service d'accès a la sous-collection :application_configuration_boisdor
    desc: config boisdor
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_boisdor: HttpServiceBddBase<Interface.Iapplication_configuration_boisdor>;
    admin_application_configuration_boisdor: HttpServiceBddAdminBase<Interface.Iapplication_configuration_boisdor>;
    /**
    service d'accès a la sous-collection :application_configuration_r3
    desc: config r3
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_r3: HttpServiceBddBase<Interface.Iapplication_configuration_r3>;
    admin_application_configuration_r3: HttpServiceBddAdminBase<Interface.Iapplication_configuration_r3>;
    /**
    service d'accès a la sous-collection :application_configuration_boisdor_admin_seller
    desc: config boisdor admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_boisdor_admin_seller: HttpServiceBddBase<Interface.Iapplication_configuration_boisdor_admin_seller>;
    admin_application_configuration_boisdor_admin_seller: HttpServiceBddAdminBase<Interface.Iapplication_configuration_boisdor_admin_seller>;
    /**
    service d'accès a la sous-collection :application_configuration_qbp_admin
    desc: config qbp admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_qbp_admin: HttpServiceBddBase<Interface.Iapplication_configuration_qbp_admin>;
    admin_application_configuration_qbp_admin: HttpServiceBddAdminBase<Interface.Iapplication_configuration_qbp_admin>;
    /**
    service d'accès a la sous-collection :application_configuration_qbp_admin_seller
    desc: config qbp admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_qbp_admin_seller: HttpServiceBddBase<Interface.Iapplication_configuration_qbp_admin_seller>;
    admin_application_configuration_qbp_admin_seller: HttpServiceBddAdminBase<Interface.Iapplication_configuration_qbp_admin_seller>;
    /**
    service d'accès a la sous-collection :application_configuration_boisdor_admin
    desc: config boisdor admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_boisdor_admin: HttpServiceBddBase<Interface.Iapplication_configuration_boisdor_admin>;
    admin_application_configuration_boisdor_admin: HttpServiceBddAdminBase<Interface.Iapplication_configuration_boisdor_admin>;
    /**
    service d'accès a la sous-collection :application_configuration_qbp
    desc: config qbp
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_qbp: HttpServiceBddBase<Interface.Iapplication_configuration_qbp>;
    admin_application_configuration_qbp: HttpServiceBddAdminBase<Interface.Iapplication_configuration_qbp>;
    /**
    service d'accès a la sous-collection :application_configuration_r3_admin_seller
    desc: config r3 admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_r3_admin_seller: HttpServiceBddBase<Interface.Iapplication_configuration_r3_admin_seller>;
    admin_application_configuration_r3_admin_seller: HttpServiceBddAdminBase<Interface.Iapplication_configuration_r3_admin_seller>;
    /**
    service d'accès a la sous-collection :application_configuration_r3_admin
    desc: config r3 admin
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_r3_admin: HttpServiceBddBase<Interface.Iapplication_configuration_r3_admin>;
    admin_application_configuration_r3_admin: HttpServiceBddAdminBase<Interface.Iapplication_configuration_r3_admin>;
    /**
    service d'accès a la sous-collection :application_configuration_dcbm_static
    desc: dcbm static
    info: vous ne pouvez voir que ce type d'objet
   */
    application_configuration_dcbm_static: HttpServiceBddBase<Interface.Iapplication_configuration_dcbm_static>;
    admin_application_configuration_dcbm_static: HttpServiceBddAdminBase<Interface.Iapplication_configuration_dcbm_static>;
    /**
     service d'accès à la collection :application_instance
     desc: c'est le couple application configuration
     

     
    */
    application_instance: HttpServiceBddBase<Interface.Iapplication_instance>;
    admin_application_instance: HttpServiceBddAdminBase<Interface.Iapplication_instance>;
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
     
        Iservice_celio_qcm      service celio qcm
     
        Iservice_comptoireOr      service_comptoireOr
     
        Iservice_airport      service airport
     
        Iservice_celio_back_task      service celio back_task
     
        Iservice_celio_fid      service celio fid
     
        Idpd_dervice      Proxy pou rles service c'evoi de colis de DPD
     
        Iservice_celio_fid_admin      service celio fid admin
     
        Iboisdor_service      service métier de boisdor
     
        IQBP_service      service métier de QBP
     
        Iservice_qcbm      service_qcbm
     
        Ir3_service      service métier de QBP
     
     
    */
    service: HttpServiceBddBase<Interface.Iservice>;
    admin_service: HttpServiceBddAdminBase<Interface.Iservice>;
    /**
    service d'accès a la sous-collection :service_sso
    desc: c'est un sso
    info: vous ne pouvez voir que ce type d'objet
   */
    service_sso: HttpServiceBddBase<Interface.Iservice_sso>;
    admin_service_sso: HttpServiceBddAdminBase<Interface.Iservice_sso>;
    /**
    service d'accès a la sous-collection :service_init
    desc: service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
    info: vous ne pouvez voir que ce type d'objet
   */
    service_init: HttpServiceBddBase<Interface.Iservice_init>;
    admin_service_init: HttpServiceBddAdminBase<Interface.Iservice_init>;
    /**
    service d'accès a la sous-collection :service_mailtoinfra
    desc: service qui permet de configurer l'authentification a partir d'un mail
    info: vous ne pouvez voir que ce type d'objet
   */
    service_mailtoinfra: HttpServiceBddBase<Interface.Iservice_mailtoinfra>;
    admin_service_mailtoinfra: HttpServiceBddAdminBase<Interface.Iservice_mailtoinfra>;
    /**
    service d'accès a la sous-collection :service_licence_token
    desc: c'est un service en charge de valider les licences et retourner les configurations des applications web
    info: vous ne pouvez voir que ce type d'objet
   */
    service_licence_token: HttpServiceBddBase<Interface.Iservice_licence_token>;
    admin_service_licence_token: HttpServiceBddAdminBase<Interface.Iservice_licence_token>;
    /**
    service d'accès a la sous-collection :service_goshabaGateway
    desc: passerelle pour goshaba
    info: vous ne pouvez voir que ce type d'objet
   */
    service_goshabaGateway: HttpServiceBddBase<Interface.Iservice_goshabaGateway>;
    admin_service_goshabaGateway: HttpServiceBddAdminBase<Interface.Iservice_goshabaGateway>;
    /**
    service d'accès a la sous-collection :service_socketIo
    desc: communication temps réelle multi format
    info: vous ne pouvez voir que ce type d'objet
   */
    service_socketIo: HttpServiceBddBase<Interface.Iservice_socketIo>;
    admin_service_socketIo: HttpServiceBddAdminBase<Interface.Iservice_socketIo>;
    /**
    service d'accès a la sous-collection :service_supervision
    desc: service_supervision
    info: vous ne pouvez voir que ce type d'objet
   */
    service_supervision: HttpServiceBddBase<Interface.Iservice_supervision>;
    admin_service_supervision: HttpServiceBddAdminBase<Interface.Iservice_supervision>;
    /**
    service d'accès a la sous-collection :service_configuration
    desc: c'est le service de distribution des configurations des services
    info: vous ne pouvez voir que ce type d'objet
   */
    service_configuration: HttpServiceBddBase<Interface.Iservice_configuration>;
    admin_service_configuration: HttpServiceBddAdminBase<Interface.Iservice_configuration>;
    /**
    service d'accès a la sous-collection :service_nginxConfigurator
    desc: service_nginxConfigurator
    info: vous ne pouvez voir que ce type d'objet
   */
    service_nginxConfigurator: HttpServiceBddBase<Interface.Iservice_nginxConfigurator>;
    admin_service_nginxConfigurator: HttpServiceBddAdminBase<Interface.Iservice_nginxConfigurator>;
    /**
    service d'accès a la sous-collection :service_push_notification
    desc: Service pour gérer les notifications push des applications
    info: vous ne pouvez voir que ce type d'objet
   */
    service_push_notification: HttpServiceBddBase<Interface.Iservice_push_notification>;
    admin_service_push_notification: HttpServiceBddAdminBase<Interface.Iservice_push_notification>;
    /**
    service d'accès a la sous-collection :service_like
    desc: service permettant de liker un objet de la base
    info: vous ne pouvez voir que ce type d'objet
   */
    service_like: HttpServiceBddBase<Interface.Iservice_like>;
    admin_service_like: HttpServiceBddAdminBase<Interface.Iservice_like>;
    /**
    service d'accès a la sous-collection :service_dumy_fso
    desc: simple remote file system a n utiliser que pour des test
    info: vous ne pouvez voir que ce type d'objet
   */
    service_dumy_fso: HttpServiceBddBase<Interface.Iservice_dumy_fso>;
    admin_service_dumy_fso: HttpServiceBddAdminBase<Interface.Iservice_dumy_fso>;
    /**
    service d'accès a la sous-collection :service_sendGrid
    desc: permet d'envoyer des mail via l'api send grid v3
    info: vous ne pouvez voir que ce type d'objet
   */
    service_sendGrid: HttpServiceBddBase<Interface.Iservice_sendGrid>;
    admin_service_sendGrid: HttpServiceBddAdminBase<Interface.Iservice_sendGrid>;
    /**
    service d'accès a la sous-collection :service_trainingCoursesService
    desc: service de gestion des parcourts de formation
    info: vous ne pouvez voir que ce type d'objet
   */
    service_trainingCoursesService: HttpServiceBddBase<Interface.Iservice_trainingCoursesService>;
    admin_service_trainingCoursesService: HttpServiceBddAdminBase<Interface.Iservice_trainingCoursesService>;
    /**
    service d'accès a la sous-collection :service_orchestrator
    desc: service d'orchestration
    info: vous ne pouvez voir que ce type d'objet
   */
    service_orchestrator: HttpServiceBddBase<Interface.Iservice_orchestrator>;
    admin_service_orchestrator: HttpServiceBddAdminBase<Interface.Iservice_orchestrator>;
    /**
    service d'accès a la sous-collection :service_socket_io
    desc: service messagerie de soket.io
    info: vous ne pouvez voir que ce type d'objet
   */
    service_socket_io: HttpServiceBddBase<Interface.Iservice_socket_io>;
    admin_service_socket_io: HttpServiceBddAdminBase<Interface.Iservice_socket_io>;
    /**
    service d'accès a la sous-collection :service_tutor
    desc: service de gestion des message tutoré
    info: vous ne pouvez voir que ce type d'objet
   */
    service_tutor: HttpServiceBddBase<Interface.Iservice_tutor>;
    admin_service_tutor: HttpServiceBddAdminBase<Interface.Iservice_tutor>;
    /**
    service d'accès a la sous-collection :service_init_js
    desc: service qui retourne un init.js
    info: vous ne pouvez voir que ce type d'objet
   */
    service_init_js: HttpServiceBddBase<Interface.Iservice_init_js>;
    admin_service_init_js: HttpServiceBddAdminBase<Interface.Iservice_init_js>;
    /**
    service d'accès a la sous-collection :service_infra_admin
    desc: administration de l'infra
    info: vous ne pouvez voir que ce type d'objet
   */
    service_infra_admin: HttpServiceBddBase<Interface.Iservice_infra_admin>;
    admin_service_infra_admin: HttpServiceBddAdminBase<Interface.Iservice_infra_admin>;
    /**
    service d'accès a la sous-collection :mailtoinfra2
    desc: retrouve la configuration de connection de l'app savy a partir du mail de l'utilisateur
    info: vous ne pouvez voir que ce type d'objet
   */
    mailtoinfra2: HttpServiceBddBase<Interface.Imailtoinfra2>;
    admin_mailtoinfra2: HttpServiceBddAdminBase<Interface.Imailtoinfra2>;
    /**
    service d'accès a la sous-collection :service_planned_tasks
    desc: Service de Taches planifiées
    info: vous ne pouvez voir que ce type d'objet
   */
    service_planned_tasks: HttpServiceBddBase<Interface.Iservice_planned_tasks>;
    admin_service_planned_tasks: HttpServiceBddAdminBase<Interface.Iservice_planned_tasks>;
    /**
    service d'accès a la sous-collection :Service_scorm_gateway
    desc: service passerelle d'un package scorm vers l'interne
    info: vous ne pouvez voir que ce type d'objet
   */
    Service_scorm_gateway: HttpServiceBddBase<Interface.IService_scorm_gateway>;
    admin_Service_scorm_gateway: HttpServiceBddAdminBase<Interface.IService_scorm_gateway>;
    /**
    service d'accès a la sous-collection :service_nginxMultiConfigurator
    desc: configuration d'un service nginx multi configuration
    info: vous ne pouvez voir que ce type d'objet
   */
    service_nginxMultiConfigurator: HttpServiceBddBase<Interface.Iservice_nginxMultiConfigurator>;
    admin_service_nginxMultiConfigurator: HttpServiceBddAdminBase<Interface.Iservice_nginxMultiConfigurator>;
    /**
    service d'accès a la sous-collection :service_client_ftp
    desc: client ftps
    info: vous ne pouvez voir que ce type d'objet
   */
    service_client_ftp: HttpServiceBddBase<Interface.Iservice_client_ftp>;
    admin_service_client_ftp: HttpServiceBddAdminBase<Interface.Iservice_client_ftp>;
    /**
    service d'accès a la sous-collection :service_polo_celio
    desc: service de tirage au sort de polo
    info: vous ne pouvez voir que ce type d'objet
   */
    service_polo_celio: HttpServiceBddBase<Interface.Iservice_polo_celio>;
    admin_service_polo_celio: HttpServiceBddAdminBase<Interface.Iservice_polo_celio>;
    /**
    service d'accès a la sous-collection :service_fso
    desc: remote file system
    info: vous ne pouvez voir que ce type d'objet
   */
    service_fso: HttpServiceBddBase<Interface.Iservice_fso>;
    admin_service_fso: HttpServiceBddAdminBase<Interface.Iservice_fso>;
    /**
    service d'accès a la sous-collection :service_pdfrip
    desc: service de creation de pdf
    info: vous ne pouvez voir que ce type d'objet
   */
    service_pdfrip: HttpServiceBddBase<Interface.Iservice_pdfrip>;
    admin_service_pdfrip: HttpServiceBddAdminBase<Interface.Iservice_pdfrip>;
    /**
    service d'accès a la sous-collection :service_signin
    desc: service d'enregistrement
    info: vous ne pouvez voir que ce type d'objet
   */
    service_signin: HttpServiceBddBase<Interface.Iservice_signin>;
    admin_service_signin: HttpServiceBddAdminBase<Interface.Iservice_signin>;
    /**
    service d'accès a la sous-collection :service_mindsUp
    desc: service minds up metier
    info: vous ne pouvez voir que ce type d'objet
   */
    service_mindsUp: HttpServiceBddBase<Interface.Iservice_mindsUp>;
    admin_service_mindsUp: HttpServiceBddAdminBase<Interface.Iservice_mindsUp>;
    /**
    service d'accès a la sous-collection :service_webAppConf
    desc: permet de générer les fichier de conf des app (css, js, ...)
    info: vous ne pouvez voir que ce type d'objet
   */
    service_webAppConf: HttpServiceBddBase<Interface.Iservice_webAppConf>;
    admin_service_webAppConf: HttpServiceBddAdminBase<Interface.Iservice_webAppConf>;
    /**
    service d'accès a la sous-collection :swagger_conv
    desc: convertisseur de swagger
    info: vous ne pouvez voir que ce type d'objet
   */
    swagger_conv: HttpServiceBddBase<Interface.Iswagger_conv>;
    admin_swagger_conv: HttpServiceBddAdminBase<Interface.Iswagger_conv>;
    /**
    service d'accès a la sous-collection :service_mongo
    desc: configure un service mongo
    info: vous ne pouvez voir que ce type d'objet
   */
    service_mongo: HttpServiceBddBase<Interface.Iservice_mongo>;
    admin_service_mongo: HttpServiceBddAdminBase<Interface.Iservice_mongo>;
    /**
    service d'accès a la sous-collection :service_celio_qcm_admin
    desc: service celio qcm admin
    info: vous ne pouvez voir que ce type d'objet
   */
    service_celio_qcm_admin: HttpServiceBddBase<Interface.Iservice_celio_qcm_admin>;
    admin_service_celio_qcm_admin: HttpServiceBddAdminBase<Interface.Iservice_celio_qcm_admin>;
    /**
    service d'accès a la sous-collection :service_ferrand
    desc: service ferrand
    info: vous ne pouvez voir que ce type d'objet
   */
    service_ferrand: HttpServiceBddBase<Interface.Iservice_ferrand>;
    admin_service_ferrand: HttpServiceBddAdminBase<Interface.Iservice_ferrand>;
    /**
    service d'accès a la sous-collection :service_petit_moulin
    desc: service petit moulin
    info: vous ne pouvez voir que ce type d'objet
   */
    service_petit_moulin: HttpServiceBddBase<Interface.Iservice_petit_moulin>;
    admin_service_petit_moulin: HttpServiceBddAdminBase<Interface.Iservice_petit_moulin>;
    /**
    service d'accès a la sous-collection :service_celio_qcm
    desc: service celio qcm
    info: vous ne pouvez voir que ce type d'objet
   */
    service_celio_qcm: HttpServiceBddBase<Interface.Iservice_celio_qcm>;
    admin_service_celio_qcm: HttpServiceBddAdminBase<Interface.Iservice_celio_qcm>;
    /**
    service d'accès a la sous-collection :service_comptoireOr
    desc: service_comptoireOr
    info: vous ne pouvez voir que ce type d'objet
   */
    service_comptoireOr: HttpServiceBddBase<Interface.Iservice_comptoireOr>;
    admin_service_comptoireOr: HttpServiceBddAdminBase<Interface.Iservice_comptoireOr>;
    /**
    service d'accès a la sous-collection :service_airport
    desc: service airport
    info: vous ne pouvez voir que ce type d'objet
   */
    service_airport: HttpServiceBddBase<Interface.Iservice_airport>;
    admin_service_airport: HttpServiceBddAdminBase<Interface.Iservice_airport>;
    /**
    service d'accès a la sous-collection :service_celio_back_task
    desc: service celio back_task
    info: vous ne pouvez voir que ce type d'objet
   */
    service_celio_back_task: HttpServiceBddBase<Interface.Iservice_celio_back_task>;
    admin_service_celio_back_task: HttpServiceBddAdminBase<Interface.Iservice_celio_back_task>;
    /**
    service d'accès a la sous-collection :service_celio_fid
    desc: service celio fid
    info: vous ne pouvez voir que ce type d'objet
   */
    service_celio_fid: HttpServiceBddBase<Interface.Iservice_celio_fid>;
    admin_service_celio_fid: HttpServiceBddAdminBase<Interface.Iservice_celio_fid>;
    /**
    service d'accès a la sous-collection :dpd_dervice
    desc: Proxy pou rles service c'evoi de colis de DPD
    info: vous ne pouvez voir que ce type d'objet
   */
    dpd_dervice: HttpServiceBddBase<Interface.Idpd_dervice>;
    admin_dpd_dervice: HttpServiceBddAdminBase<Interface.Idpd_dervice>;
    /**
    service d'accès a la sous-collection :service_celio_fid_admin
    desc: service celio fid admin
    info: vous ne pouvez voir que ce type d'objet
   */
    service_celio_fid_admin: HttpServiceBddBase<Interface.Iservice_celio_fid_admin>;
    admin_service_celio_fid_admin: HttpServiceBddAdminBase<Interface.Iservice_celio_fid_admin>;
    /**
    service d'accès a la sous-collection :boisdor_service
    desc: service métier de boisdor
    info: vous ne pouvez voir que ce type d'objet
   */
    boisdor_service: HttpServiceBddBase<Interface.Iboisdor_service>;
    admin_boisdor_service: HttpServiceBddAdminBase<Interface.Iboisdor_service>;
    /**
    service d'accès a la sous-collection :QBP_service
    desc: service métier de QBP
    info: vous ne pouvez voir que ce type d'objet
   */
    QBP_service: HttpServiceBddBase<Interface.IQBP_service>;
    admin_QBP_service: HttpServiceBddAdminBase<Interface.IQBP_service>;
    /**
    service d'accès a la sous-collection :service_qcbm
    desc: service_qcbm
    info: vous ne pouvez voir que ce type d'objet
   */
    service_qcbm: HttpServiceBddBase<Interface.Iservice_qcbm>;
    admin_service_qcbm: HttpServiceBddAdminBase<Interface.Iservice_qcbm>;
    /**
    service d'accès a la sous-collection :r3_service
    desc: service métier de QBP
    info: vous ne pouvez voir que ce type d'objet
   */
    r3_service: HttpServiceBddBase<Interface.Ir3_service>;
    admin_r3_service: HttpServiceBddAdminBase<Interface.Ir3_service>;
    /**
     service d'accès à la collection :bois_dor_mailer
     desc: liste de tous les templates de mail pour bois d'or
     

     
    */
    bois_dor_mailer: HttpServiceBddBase<Interface.Ibois_dor_mailer>;
    admin_bois_dor_mailer: HttpServiceBddAdminBase<Interface.Ibois_dor_mailer>;
}
/**
    accès à la vue :Client
    retourne la donnée du client connecté
*/
export declare class bdd_view_Client extends HttpServiceBddBaseView<Interface.Iend_client> {
    conf: any;
    /**
        accès à la vue :Client
        
    */
    constructor(conf: any);
    /**
    génére une requette sur la vue Client
    
    */
    private agregate;
    get(query?: string, headers?: any, ctx?: any): Promise<IHttpResult<Interface.Iend_client>>;
}
/**
    accès à la vue :UserLicence
    retourne la liste des licences d'un utilisateur pour le client courrant
*/
export declare class bdd_view_UserLicence extends HttpServiceBddBaseView<Interface.Ilicence> {
    conf: any;
    /**
        accès à la vue :UserLicence
        
    */
    constructor(conf: any);
    /**
    génére une requette sur la vue UserLicence
    
    */
    private agregate;
    get(userId: string, query?: string, headers?: any, ctx?: any): Promise<IHttpResult<Interface.Ilicence>>;
}
export declare class bdd_view_plateform {
    conf: any;
    constructor(conf: any, collections: any);
    /**
    accès à la vue :Client     retourne la donnée du client connecté
    */
    Client: bdd_view_Client;
    /**
    accès à la vue :UserLicence     retourne la liste des licences d'un utilisateur pour le client courrant
    */
    UserLicence: bdd_view_UserLicence;
}
export declare class Bdd_plateforme implements IPlateforme {
    conf: {
        url: string;
        secure: any;
        debug?: boolean;
        bdd?: Promise<mongo.Db>;
        caPath?: string;
    };
    constructor(conf: {
        url: string;
        secure: any;
        debug?: boolean;
        bdd?: Promise<mongo.Db>;
        caPath?: string;
    });
    /**
        liste des collections de l'api
    */
    collections: bdd_collection_plateform;
    /**
        liste des vues de l'api
    */
    views: bdd_view_plateform;
}
