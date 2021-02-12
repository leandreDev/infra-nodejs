"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bdd_plateforme = exports.bdd_view_plateform = exports.bdd_view_UserLicence = exports.bdd_view_Client = exports.bdd_collection_plateform = void 0;
const utils_1 = require("utils");
const Index = require("../../lib/entities/Index");
const fs = require("fs");
class bdd_collection_plateform {
    constructor(conf) {
        this.secure = null;
        this.url = conf.url;
        this.secure = conf.secure;
        this.certificat = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'certificats', entity: Index.Entity_certificat, debug: conf.debug, collections: this });
        this.admin_certificat = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'certificats', entity: Index.Entity_certificat, debug: conf.debug });
        this.rsa = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'certificats', entity: Index.Entity_rsa, _class: 'rsa', debug: conf.debug, collections: this });
        this.admin_rsa = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'certificats', entity: Index.Entity_rsa, _class: 'rsa', debug: conf.debug });
        this.oidc_Client = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'oidc_clients', entity: Index.Entity_oidc_Client, debug: conf.debug, collections: this });
        this.admin_oidc_Client = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'oidc_clients', entity: Index.Entity_oidc_Client, debug: conf.debug });
        this.oidc_account = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'oidc_accounts', entity: Index.Entity_oidc_account, debug: conf.debug, collections: this });
        this.admin_oidc_account = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'oidc_accounts', entity: Index.Entity_oidc_account, debug: conf.debug });
        this.service_access = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'service_accesses', entity: Index.Entity_service_access, debug: conf.debug, collections: this });
        this.admin_service_access = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'service_accesses', entity: Index.Entity_service_access, debug: conf.debug });
        this.protoschema = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'protoschemas', entity: Index.Entity_protoschema, debug: conf.debug, collections: this });
        this.admin_protoschema = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'protoschemas', entity: Index.Entity_protoschema, debug: conf.debug });
        this.mail = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'mails', entity: Index.Entity_mail, debug: conf.debug, collections: this });
        this.admin_mail = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'mails', entity: Index.Entity_mail, debug: conf.debug });
        this.mail_sendgrid = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'mails', entity: Index.Entity_mail_sendgrid, _class: 'mail_sendgrid', debug: conf.debug, collections: this });
        this.admin_mail_sendgrid = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'mails', entity: Index.Entity_mail_sendgrid, _class: 'mail_sendgrid', debug: conf.debug });
        this.service_serviceOrchestrator = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'service_serviceorchestrators', entity: Index.Entity_service_serviceOrchestrator, debug: conf.debug, collections: this });
        this.admin_service_serviceOrchestrator = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'service_serviceorchestrators', entity: Index.Entity_service_serviceOrchestrator, debug: conf.debug });
        this._view = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: '_views', entity: Index.Entity__view, debug: conf.debug, collections: this });
        this.admin__view = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: '_views', entity: Index.Entity__view, debug: conf.debug });
        this._view_params = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: '_views', entity: Index.Entity__view_params, _class: '_view_params', debug: conf.debug, collections: this });
        this.admin__view_params = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: '_views', entity: Index.Entity__view_params, _class: '_view_params', debug: conf.debug });
        this.licence = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'licences', entity: Index.Entity_licence, debug: conf.debug, collections: this });
        this.admin_licence = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'licences', entity: Index.Entity_licence, debug: conf.debug });
        this.licence_temporelle = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'licences', entity: Index.Entity_licence_temporelle, _class: 'licence_temporelle', debug: conf.debug, collections: this });
        this.admin_licence_temporelle = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'licences', entity: Index.Entity_licence_temporelle, _class: 'licence_temporelle', debug: conf.debug });
        this.MultilangSendGridTemplate = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'multilangsendgridtemplates', entity: Index.Entity_MultilangSendGridTemplate, debug: conf.debug, collections: this });
        this.admin_MultilangSendGridTemplate = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'multilangsendgridtemplates', entity: Index.Entity_MultilangSendGridTemplate, debug: conf.debug });
        this.application = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'applications', entity: Index.Entity_application, debug: conf.debug, collections: this });
        this.admin_application = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'applications', entity: Index.Entity_application, debug: conf.debug });
        this.pack_card = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'applications', entity: Index.Entity_pack_card, _class: 'pack_card', debug: conf.debug, collections: this });
        this.admin_pack_card = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'applications', entity: Index.Entity_pack_card, _class: 'pack_card', debug: conf.debug });
        this.TemplateLodash = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'templatelodashes', entity: Index.Entity_TemplateLodash, debug: conf.debug, collections: this });
        this.admin_TemplateLodash = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'templatelodashes', entity: Index.Entity_TemplateLodash, debug: conf.debug });
        this.end_client = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'end_clients', entity: Index.Entity_end_client, debug: conf.debug, collections: this });
        this.admin_end_client = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'end_clients', entity: Index.Entity_end_client, debug: conf.debug });
        this.Request = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'requests', entity: Index.Entity_Request, debug: conf.debug, collections: this });
        this.admin_Request = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'requests', entity: Index.Entity_Request, debug: conf.debug });
        this.ftpsConfig = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'ftpsconfigs', entity: Index.Entity_ftpsConfig, debug: conf.debug, collections: this });
        this.admin_ftpsConfig = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'ftpsconfigs', entity: Index.Entity_ftpsConfig, debug: conf.debug });
        this.application_configuration = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration, debug: conf.debug, collections: this });
        this.admin_application_configuration = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration, debug: conf.debug });
        this.application_configuration_phoneCard = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_phoneCard, _class: 'application_configuration_phoneCard', debug: conf.debug, collections: this });
        this.admin_application_configuration_phoneCard = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_phoneCard, _class: 'application_configuration_phoneCard', debug: conf.debug });
        this.application_configuration_appCoach = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_appCoach, _class: 'application_configuration_appCoach', debug: conf.debug, collections: this });
        this.admin_application_configuration_appCoach = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_appCoach, _class: 'application_configuration_appCoach', debug: conf.debug });
        this.application_configuration_super_admin_mongo = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_super_admin_mongo, _class: 'application_configuration_super_admin_mongo', debug: conf.debug, collections: this });
        this.admin_application_configuration_super_admin_mongo = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_super_admin_mongo, _class: 'application_configuration_super_admin_mongo', debug: conf.debug });
        this.application_configuration_antico = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_antico, _class: 'application_configuration_antico', debug: conf.debug, collections: this });
        this.admin_application_configuration_antico = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_antico, _class: 'application_configuration_antico', debug: conf.debug });
        this.application_configuration_appClient = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_appClient, _class: 'application_configuration_appClient', debug: conf.debug, collections: this });
        this.admin_application_configuration_appClient = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_appClient, _class: 'application_configuration_appClient', debug: conf.debug });
        this.application_configuration_appApprenant = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_appApprenant, _class: 'application_configuration_appApprenant', debug: conf.debug, collections: this });
        this.admin_application_configuration_appApprenant = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_appApprenant, _class: 'application_configuration_appApprenant', debug: conf.debug });
        this.AppConf_minds_up_admin = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_AppConf_minds_up_admin, _class: 'AppConf_minds_up_admin', debug: conf.debug, collections: this });
        this.admin_AppConf_minds_up_admin = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_AppConf_minds_up_admin, _class: 'AppConf_minds_up_admin', debug: conf.debug });
        this.application_configuration_reportApp = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_reportApp, _class: 'application_configuration_reportApp', debug: conf.debug, collections: this });
        this.admin_application_configuration_reportApp = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_reportApp, _class: 'application_configuration_reportApp', debug: conf.debug });
        this.application_configuration_celio2020Admin = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_celio2020Admin, _class: 'application_configuration_celio2020Admin', debug: conf.debug, collections: this });
        this.admin_application_configuration_celio2020Admin = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_celio2020Admin, _class: 'application_configuration_celio2020Admin', debug: conf.debug });
        this.application_configuration_manu_admin = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_manu_admin, _class: 'application_configuration_manu_admin', debug: conf.debug, collections: this });
        this.admin_application_configuration_manu_admin = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_manu_admin, _class: 'application_configuration_manu_admin', debug: conf.debug });
        this.application_configuration_comptoire_or_admin = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_comptoire_or_admin, _class: 'application_configuration_comptoire_or_admin', debug: conf.debug, collections: this });
        this.admin_application_configuration_comptoire_or_admin = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_comptoire_or_admin, _class: 'application_configuration_comptoire_or_admin', debug: conf.debug });
        this.application_configuration_celiofront = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_celiofront, _class: 'application_configuration_celiofront', debug: conf.debug, collections: this });
        this.admin_application_configuration_celiofront = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_celiofront, _class: 'application_configuration_celiofront', debug: conf.debug });
        this.application_configuration_celioback = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_celioback, _class: 'application_configuration_celioback', debug: conf.debug, collections: this });
        this.admin_application_configuration_celioback = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_celioback, _class: 'application_configuration_celioback', debug: conf.debug });
        this.application_configuration_celioadmin = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_celioadmin, _class: 'application_configuration_celioadmin', debug: conf.debug, collections: this });
        this.admin_application_configuration_celioadmin = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_celioadmin, _class: 'application_configuration_celioadmin', debug: conf.debug });
        this.application_configuration_ferrand = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_ferrand, _class: 'application_configuration_ferrand', debug: conf.debug, collections: this });
        this.admin_application_configuration_ferrand = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_ferrand, _class: 'application_configuration_ferrand', debug: conf.debug });
        this.application_configuration_celio = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_celio, _class: 'application_configuration_celio', debug: conf.debug, collections: this });
        this.admin_application_configuration_celio = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_celio, _class: 'application_configuration_celio', debug: conf.debug });
        this.AppConf_minds_up = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_AppConf_minds_up, _class: 'AppConf_minds_up', debug: conf.debug, collections: this });
        this.admin_AppConf_minds_up = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_AppConf_minds_up, _class: 'AppConf_minds_up', debug: conf.debug });
        this.application_configuration_petit_moulin = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_petit_moulin, _class: 'application_configuration_petit_moulin', debug: conf.debug, collections: this });
        this.admin_application_configuration_petit_moulin = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_petit_moulin, _class: 'application_configuration_petit_moulin', debug: conf.debug });
        this.application_configuration_petit_moulin_admin = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_petit_moulin_admin, _class: 'application_configuration_petit_moulin_admin', debug: conf.debug, collections: this });
        this.admin_application_configuration_petit_moulin_admin = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_petit_moulin_admin, _class: 'application_configuration_petit_moulin_admin', debug: conf.debug });
        this.application_configuration_qbp = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_qbp, _class: 'application_configuration_qbp', debug: conf.debug, collections: this });
        this.admin_application_configuration_qbp = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_qbp, _class: 'application_configuration_qbp', debug: conf.debug });
        this.application_configuration_qbp_admin_seller = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_qbp_admin_seller, _class: 'application_configuration_qbp_admin_seller', debug: conf.debug, collections: this });
        this.admin_application_configuration_qbp_admin_seller = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_qbp_admin_seller, _class: 'application_configuration_qbp_admin_seller', debug: conf.debug });
        this.application_configuration_qbp_admin = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_qbp_admin, _class: 'application_configuration_qbp_admin', debug: conf.debug, collections: this });
        this.admin_application_configuration_qbp_admin = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_configurations', entity: Index.Entity_application_configuration_qbp_admin, _class: 'application_configuration_qbp_admin', debug: conf.debug });
        this.application_instance = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'application_instances', entity: Index.Entity_application_instance, debug: conf.debug, collections: this });
        this.admin_application_instance = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'application_instances', entity: Index.Entity_application_instance, debug: conf.debug });
        this.service = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service, debug: conf.debug, collections: this });
        this.admin_service = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service, debug: conf.debug });
        this.service_sso = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_sso, _class: 'service_sso', debug: conf.debug, collections: this });
        this.admin_service_sso = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_sso, _class: 'service_sso', debug: conf.debug });
        this.service_init = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_init, _class: 'service_init', debug: conf.debug, collections: this });
        this.admin_service_init = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_init, _class: 'service_init', debug: conf.debug });
        this.service_mailtoinfra = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_mailtoinfra, _class: 'service_mailtoinfra', debug: conf.debug, collections: this });
        this.admin_service_mailtoinfra = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_mailtoinfra, _class: 'service_mailtoinfra', debug: conf.debug });
        this.service_licence_token = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_licence_token, _class: 'service_licence_token', debug: conf.debug, collections: this });
        this.admin_service_licence_token = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_licence_token, _class: 'service_licence_token', debug: conf.debug });
        this.service_goshabaGateway = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_goshabaGateway, _class: 'service_goshabaGateway', debug: conf.debug, collections: this });
        this.admin_service_goshabaGateway = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_goshabaGateway, _class: 'service_goshabaGateway', debug: conf.debug });
        this.service_socketIo = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_socketIo, _class: 'service_socketIo', debug: conf.debug, collections: this });
        this.admin_service_socketIo = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_socketIo, _class: 'service_socketIo', debug: conf.debug });
        this.service_supervision = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_supervision, _class: 'service_supervision', debug: conf.debug, collections: this });
        this.admin_service_supervision = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_supervision, _class: 'service_supervision', debug: conf.debug });
        this.service_configuration = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_configuration, _class: 'service_configuration', debug: conf.debug, collections: this });
        this.admin_service_configuration = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_configuration, _class: 'service_configuration', debug: conf.debug });
        this.service_nginxConfigurator = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_nginxConfigurator, _class: 'service_nginxConfigurator', debug: conf.debug, collections: this });
        this.admin_service_nginxConfigurator = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_nginxConfigurator, _class: 'service_nginxConfigurator', debug: conf.debug });
        this.service_push_notification = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_push_notification, _class: 'service_push_notification', debug: conf.debug, collections: this });
        this.admin_service_push_notification = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_push_notification, _class: 'service_push_notification', debug: conf.debug });
        this.service_like = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_like, _class: 'service_like', debug: conf.debug, collections: this });
        this.admin_service_like = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_like, _class: 'service_like', debug: conf.debug });
        this.service_dumy_fso = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_dumy_fso, _class: 'service_dumy_fso', debug: conf.debug, collections: this });
        this.admin_service_dumy_fso = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_dumy_fso, _class: 'service_dumy_fso', debug: conf.debug });
        this.service_sendGrid = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_sendGrid, _class: 'service_sendGrid', debug: conf.debug, collections: this });
        this.admin_service_sendGrid = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_sendGrid, _class: 'service_sendGrid', debug: conf.debug });
        this.service_trainingCoursesService = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_trainingCoursesService, _class: 'service_trainingCoursesService', debug: conf.debug, collections: this });
        this.admin_service_trainingCoursesService = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_trainingCoursesService, _class: 'service_trainingCoursesService', debug: conf.debug });
        this.service_orchestrator = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_orchestrator, _class: 'service_orchestrator', debug: conf.debug, collections: this });
        this.admin_service_orchestrator = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_orchestrator, _class: 'service_orchestrator', debug: conf.debug });
        this.service_socket_io = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_socket_io, _class: 'service_socket_io', debug: conf.debug, collections: this });
        this.admin_service_socket_io = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_socket_io, _class: 'service_socket_io', debug: conf.debug });
        this.service_tutor = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_tutor, _class: 'service_tutor', debug: conf.debug, collections: this });
        this.admin_service_tutor = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_tutor, _class: 'service_tutor', debug: conf.debug });
        this.service_init_js = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_init_js, _class: 'service_init_js', debug: conf.debug, collections: this });
        this.admin_service_init_js = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_init_js, _class: 'service_init_js', debug: conf.debug });
        this.service_infra_admin = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_infra_admin, _class: 'service_infra_admin', debug: conf.debug, collections: this });
        this.admin_service_infra_admin = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_infra_admin, _class: 'service_infra_admin', debug: conf.debug });
        this.mailtoinfra2 = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_mailtoinfra2, _class: 'mailtoinfra2', debug: conf.debug, collections: this });
        this.admin_mailtoinfra2 = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_mailtoinfra2, _class: 'mailtoinfra2', debug: conf.debug });
        this.service_planned_tasks = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_planned_tasks, _class: 'service_planned_tasks', debug: conf.debug, collections: this });
        this.admin_service_planned_tasks = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_planned_tasks, _class: 'service_planned_tasks', debug: conf.debug });
        this.Service_scorm_gateway = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_Service_scorm_gateway, _class: 'Service_scorm_gateway', debug: conf.debug, collections: this });
        this.admin_Service_scorm_gateway = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_Service_scorm_gateway, _class: 'Service_scorm_gateway', debug: conf.debug });
        this.service_nginxMultiConfigurator = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_nginxMultiConfigurator, _class: 'service_nginxMultiConfigurator', debug: conf.debug, collections: this });
        this.admin_service_nginxMultiConfigurator = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_nginxMultiConfigurator, _class: 'service_nginxMultiConfigurator', debug: conf.debug });
        this.service_client_ftp = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_client_ftp, _class: 'service_client_ftp', debug: conf.debug, collections: this });
        this.admin_service_client_ftp = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_client_ftp, _class: 'service_client_ftp', debug: conf.debug });
        this.service_polo_celio = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_polo_celio, _class: 'service_polo_celio', debug: conf.debug, collections: this });
        this.admin_service_polo_celio = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_polo_celio, _class: 'service_polo_celio', debug: conf.debug });
        this.service_fso = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_fso, _class: 'service_fso', debug: conf.debug, collections: this });
        this.admin_service_fso = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_fso, _class: 'service_fso', debug: conf.debug });
        this.service_pdfrip = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_pdfrip, _class: 'service_pdfrip', debug: conf.debug, collections: this });
        this.admin_service_pdfrip = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_pdfrip, _class: 'service_pdfrip', debug: conf.debug });
        this.service_signin = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_signin, _class: 'service_signin', debug: conf.debug, collections: this });
        this.admin_service_signin = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_signin, _class: 'service_signin', debug: conf.debug });
        this.service_mindsUp = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_mindsUp, _class: 'service_mindsUp', debug: conf.debug, collections: this });
        this.admin_service_mindsUp = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_mindsUp, _class: 'service_mindsUp', debug: conf.debug });
        this.service_webAppConf = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_webAppConf, _class: 'service_webAppConf', debug: conf.debug, collections: this });
        this.admin_service_webAppConf = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_webAppConf, _class: 'service_webAppConf', debug: conf.debug });
        this.swagger_conv = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_swagger_conv, _class: 'swagger_conv', debug: conf.debug, collections: this });
        this.admin_swagger_conv = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_swagger_conv, _class: 'swagger_conv', debug: conf.debug });
        this.service_mongo = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_mongo, _class: 'service_mongo', debug: conf.debug, collections: this });
        this.admin_service_mongo = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_mongo, _class: 'service_mongo', debug: conf.debug });
        this.service_celio_qcm_admin = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_celio_qcm_admin, _class: 'service_celio_qcm_admin', debug: conf.debug, collections: this });
        this.admin_service_celio_qcm_admin = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_celio_qcm_admin, _class: 'service_celio_qcm_admin', debug: conf.debug });
        this.service_ferrand = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_ferrand, _class: 'service_ferrand', debug: conf.debug, collections: this });
        this.admin_service_ferrand = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_ferrand, _class: 'service_ferrand', debug: conf.debug });
        this.service_petit_moulin = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_petit_moulin, _class: 'service_petit_moulin', debug: conf.debug, collections: this });
        this.admin_service_petit_moulin = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_petit_moulin, _class: 'service_petit_moulin', debug: conf.debug });
        this.service_celio_fid = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_celio_fid, _class: 'service_celio_fid', debug: conf.debug, collections: this });
        this.admin_service_celio_fid = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_celio_fid, _class: 'service_celio_fid', debug: conf.debug });
        this.service_celio_qcm = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_celio_qcm, _class: 'service_celio_qcm', debug: conf.debug, collections: this });
        this.admin_service_celio_qcm = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_celio_qcm, _class: 'service_celio_qcm', debug: conf.debug });
        this.service_comptoireOr = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_comptoireOr, _class: 'service_comptoireOr', debug: conf.debug, collections: this });
        this.admin_service_comptoireOr = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_comptoireOr, _class: 'service_comptoireOr', debug: conf.debug });
        this.service_celio_back_task = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_celio_back_task, _class: 'service_celio_back_task', debug: conf.debug, collections: this });
        this.admin_service_celio_back_task = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_celio_back_task, _class: 'service_celio_back_task', debug: conf.debug });
        this.service_celio_fid_admin = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_celio_fid_admin, _class: 'service_celio_fid_admin', debug: conf.debug, collections: this });
        this.admin_service_celio_fid_admin = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_celio_fid_admin, _class: 'service_celio_fid_admin', debug: conf.debug });
        this.service_airport = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_airport, _class: 'service_airport', debug: conf.debug, collections: this });
        this.admin_service_airport = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_service_airport, _class: 'service_airport', debug: conf.debug });
        this.QBP_service = new utils_1.HttpServiceBddBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_QBP_service, _class: 'QBP_service', debug: conf.debug, collections: this });
        this.admin_QBP_service = new utils_1.HttpServiceBddAdminBase({ bdd: conf.bdd, collectionName: 'services', entity: Index.Entity_QBP_service, _class: 'QBP_service', debug: conf.debug });
    }
    getHttpService(colName) {
        return this[colName];
    }
}
exports.bdd_collection_plateform = bdd_collection_plateform;
/**
    accès à la vue :Client
    retourne la donnée du client connecté
*/
class bdd_view_Client extends utils_1.HttpServiceBddBaseView {
    /**
        accès à la vue :Client
        
    */
    constructor(conf) {
        super(conf);
        this.conf = conf;
        /**
        génére une requette sur la vue Client
        
        */
        this.agregate = [{ "$match": { "_id": "$ctx.params.clientId" } }];
    }
    get(query = '*', headers = {}, ctx = {}) {
        //ajouter les params dans ctx
        ctx.params = {};
        return super.get(query, headers, this.agregate, ctx);
    }
}
exports.bdd_view_Client = bdd_view_Client;
/**
    accès à la vue :UserLicence
    retourne la liste des licences d'un utilisateur pour le client courrant
*/
class bdd_view_UserLicence extends utils_1.HttpServiceBddBaseView {
    /**
        accès à la vue :UserLicence
        
    */
    constructor(conf) {
        super(conf);
        this.conf = conf;
        /**
        génére une requette sur la vue UserLicence
        
        */
        this.agregate = [{ "$match": { "user": "$ctx.params.userId", "end_client": "$ctx.params.clientId" } }];
    }
    get(userId, query = '*', headers = {}, ctx = {}) {
        //ajouter les params dans ctx
        ctx.params = {};
        return super.get(query, headers, this.agregate, ctx);
    }
}
exports.bdd_view_UserLicence = bdd_view_UserLicence;
class bdd_view_plateform {
    constructor(conf, collections) {
        this.conf = conf;
        this.Client = new bdd_view_Client({ bdd: conf.bdd, collectionName: 'end_client', entity: Index.Entity_end_client, debug: conf.debug, collections: collections });
        this.UserLicence = new bdd_view_UserLicence({ bdd: conf.bdd, collectionName: 'licence', entity: Index.Entity_licence, debug: conf.debug, collections: collections });
    }
}
exports.bdd_view_plateform = bdd_view_plateform;
class Bdd_plateforme {
    constructor(conf) {
        this.conf = conf;
        if (!conf.bdd) {
            conf.bdd = new Promise((resolve, reject) => {
                if (conf.caPath) {
                    var ca = [fs.readFileSync(conf.caPath)];
                    utils_1.mongo.MongoClient.connect(conf.url, {
                        sslValidate: true,
                        sslCA: ca,
                        useNewUrlParser: true
                    })
                        .then(mongoCLient => {
                        resolve(mongoCLient.db());
                    });
                }
                else {
                    utils_1.mongo.MongoClient.connect(conf.url)
                        .then(mongoCLient => {
                        resolve(mongoCLient.db());
                    });
                }
            });
        }
        this.collections = new bdd_collection_plateform(conf);
        this.views = new bdd_view_plateform(conf, this.collections);
    }
}
exports.Bdd_plateforme = Bdd_plateforme;
//# sourceMappingURL=Bdd_plateforme.js.map