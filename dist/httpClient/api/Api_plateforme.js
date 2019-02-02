"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("utils");
class api_collection_plateform {
    constructor(conf) {
        this.secure = null;
        this.url = conf.url;
        this.secure = conf.secure;
        this.certificat = new utils_1.HttpServiceBase({ url: conf.url + "collection/certificat/", secure: conf.secure });
        this.rsa = new utils_1.HttpServiceBase({ url: conf.url + "collection/rsa/", secure: conf.secure });
        this.oidc_Client = new utils_1.HttpServiceBase({ url: conf.url + "collection/oidc_Client/", secure: conf.secure });
        this.application_configuration = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration/", secure: conf.secure });
        this.application_configuration_phoneCard = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_phoneCard/", secure: conf.secure });
        this.application_configuration_appCoach = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_appCoach/", secure: conf.secure });
        this.application_configuration_super_admin_mongo = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_super_admin_mongo/", secure: conf.secure });
        this.application_configuration_antico = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_antico/", secure: conf.secure });
        this.application_configuration_appClient = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_appClient/", secure: conf.secure });
        this.application_configuration_appApprenant = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_configuration_appApprenant/", secure: conf.secure });
        this.AppConf_minds_up = new utils_1.HttpServiceBase({ url: conf.url + "collection/AppConf_minds_up/", secure: conf.secure });
        this.AppConf_minds_up_admin = new utils_1.HttpServiceBase({ url: conf.url + "collection/AppConf_minds_up_admin/", secure: conf.secure });
        this.oidc_account = new utils_1.HttpServiceBase({ url: conf.url + "collection/oidc_account/", secure: conf.secure });
        this.service_access = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_access/", secure: conf.secure });
        this.service = new utils_1.HttpServiceBase({ url: conf.url + "collection/service/", secure: conf.secure });
        this.service_sso = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_sso/", secure: conf.secure });
        this.service_init = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_init/", secure: conf.secure });
        this.service_mailtoinfra = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_mailtoinfra/", secure: conf.secure });
        this.service_licence_token = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_licence_token/", secure: conf.secure });
        this.service_goshabaGateway = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_goshabaGateway/", secure: conf.secure });
        this.service_mongo = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_mongo/", secure: conf.secure });
        this.service_socketIo = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_socketIo/", secure: conf.secure });
        this.service_supervision = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_supervision/", secure: conf.secure });
        this.service_configuration = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_configuration/", secure: conf.secure });
        this.service_nginxConfigurator = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_nginxConfigurator/", secure: conf.secure });
        this.service_nginxMultiConfigurator = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_nginxMultiConfigurator/", secure: conf.secure });
        this.service_push_notification = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_push_notification/", secure: conf.secure });
        this.service_like = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_like/", secure: conf.secure });
        this.service_dumy_fso = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_dumy_fso/", secure: conf.secure });
        this.service_signin = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_signin/", secure: conf.secure });
        this.service_sendGrid = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_sendGrid/", secure: conf.secure });
        this.service_trainingCoursesService = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_trainingCoursesService/", secure: conf.secure });
        this.service_orchestrator = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_orchestrator/", secure: conf.secure });
        this.service_socket_io = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_socket_io/", secure: conf.secure });
        this.service_tutor = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_tutor/", secure: conf.secure });
        this.service_init_js = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_init_js/", secure: conf.secure });
        this.service_infra_admin = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_infra_admin/", secure: conf.secure });
        this.mailtoinfra2 = new utils_1.HttpServiceBase({ url: conf.url + "collection/mailtoinfra2/", secure: conf.secure });
        this.service_planned_tasks = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_planned_tasks/", secure: conf.secure });
        this.Service_scorm_gateway = new utils_1.HttpServiceBase({ url: conf.url + "collection/Service_scorm_gateway/", secure: conf.secure });
        this.service_mindsUp = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_mindsUp/", secure: conf.secure });
        this.service_webAppConf = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_webAppConf/", secure: conf.secure });
        this.protoschema = new utils_1.HttpServiceBase({ url: conf.url + "collection/protoschema/", secure: conf.secure });
        this.mail = new utils_1.HttpServiceBase({ url: conf.url + "collection/mail/", secure: conf.secure });
        this.mail_sendgrid = new utils_1.HttpServiceBase({ url: conf.url + "collection/mail_sendgrid/", secure: conf.secure });
        this.service_serviceOrchestrator = new utils_1.HttpServiceBase({ url: conf.url + "collection/service_serviceOrchestrator/", secure: conf.secure });
        this._view = new utils_1.HttpServiceBase({ url: conf.url + "collection/_view/", secure: conf.secure });
        this._view_params = new utils_1.HttpServiceBase({ url: conf.url + "collection/_view_params/", secure: conf.secure });
        this.licence = new utils_1.HttpServiceBase({ url: conf.url + "collection/licence/", secure: conf.secure });
        this.licence_temporelle = new utils_1.HttpServiceBase({ url: conf.url + "collection/licence_temporelle/", secure: conf.secure });
        this.MultilangSendGridTemplate = new utils_1.HttpServiceBase({ url: conf.url + "collection/MultilangSendGridTemplate/", secure: conf.secure });
        this.application = new utils_1.HttpServiceBase({ url: conf.url + "collection/application/", secure: conf.secure });
        this.pack_card = new utils_1.HttpServiceBase({ url: conf.url + "collection/pack_card/", secure: conf.secure });
        this.TemplateLodash = new utils_1.HttpServiceBase({ url: conf.url + "collection/TemplateLodash/", secure: conf.secure });
        this.end_client = new utils_1.HttpServiceBase({ url: conf.url + "collection/end_client/", secure: conf.secure });
        this.Request = new utils_1.HttpServiceBase({ url: conf.url + "collection/Request/", secure: conf.secure });
        this.ftpsConfig = new utils_1.HttpServiceBase({ url: conf.url + "collection/ftpsConfig/", secure: conf.secure });
        this.application_instance = new utils_1.HttpServiceBase({ url: conf.url + "collection/application_instance/", secure: conf.secure });
    }
}
exports.api_collection_plateform = api_collection_plateform;
/**
    accès à la vue :Client
    retourne la donnée du client connecté
*/
class api_view_Client extends utils_1.HttpAbstractService {
    /**
        accès à la vue :Client
        
    */
    constructor(conf) {
        super(conf);
        this.conf = conf;
        this.globalCtxInt = new utils_1.CtxInterpretor(process.env);
        /** middleware
        génére une requette sur la vue Client
        
        */
        this.getMiddleware = (config) => {
            config = this.globalCtxInt.updateEnv(config, true);
            return (req, res, next) => {
                var localCtxInt = new utils_1.CtxInterpretor(req.ctx);
                localCtxInt.startPatern = "$ctx.";
                var localConfig = localCtxInt.updateEnv(config, true);
                this.get(localConfig.params.query, localConfig.headers)
                    .then((data) => {
                    req.ctx[localConfig.output] = data;
                    next();
                }).catch((err) => {
                    next(err);
                });
            };
        };
        this.url = conf.url;
    }
    /**
    génére une requette sur la vue Client
    
    */
    get(query = '*', headers = {}) {
        return this.baseGet(this.url + query, headers);
    }
}
exports.api_view_Client = api_view_Client;
/**
    accès à la vue :UserLicence
    retourne la liste des licences d'un utilisateur pour le client courrant
*/
class api_view_UserLicence extends utils_1.HttpAbstractService {
    /**
        accès à la vue :UserLicence
        
    */
    constructor(conf) {
        super(conf);
        this.conf = conf;
        this.globalCtxInt = new utils_1.CtxInterpretor(process.env);
        /** middleware
        génére une requette sur la vue UserLicence
        
        */
        this.getMiddleware = (config) => {
            config = this.globalCtxInt.updateEnv(config, true);
            return (req, res, next) => {
                var localCtxInt = new utils_1.CtxInterpretor(req.ctx);
                localCtxInt.startPatern = "$ctx.";
                var localConfig = localCtxInt.updateEnv(config, true);
                this.get(localConfig.params.userId, localConfig.params.query, localConfig.headers)
                    .then((data) => {
                    req.ctx[localConfig.output] = data;
                    next();
                }).catch((err) => {
                    next(err);
                });
            };
        };
        this.url = conf.url;
    }
    /**
    génére une requette sur la vue UserLicence
    
    */
    get(userId, query = '*', headers = {}) {
        return this.baseGet(this.url + userId.toString() + "/" + query, headers);
    }
}
exports.api_view_UserLicence = api_view_UserLicence;
class api_view_plateform {
    constructor(conf) {
        this.conf = conf;
        this.Client = new api_view_Client({ url: conf.url + "views/Client/", secure: conf.secure });
        this.UserLicence = new api_view_UserLicence({ url: conf.url + "views/UserLicence/", secure: conf.secure });
    }
}
exports.api_view_plateform = api_view_plateform;
class Api_plateforme {
    constructor(conf) {
        this.conf = conf;
        this.collections = new api_collection_plateform(conf);
        this.views = new api_view_plateform(conf);
    }
}
exports.Api_plateforme = Api_plateforme;
//# sourceMappingURL=Api_plateforme.js.map