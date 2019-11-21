import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service minds up metier
*/
export declare class Model_service_mindsUp extends Model_service implements Interface.Iservice_mindsUp {
    /**
      service minds up metier
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service de bdd de mindsUp
*/
    "urlApi": string;
    /**
url de l'api du sso
*/
    "urlSsoApi": string;
    /**
urlLicenceService
*/
    "urlLicenceService": string;
    /**
url du service d'infra
*/
    "urlInfraBdd": string;
    /**
urlMailerService
*/
    "urlMailerService": string;
    /**
url du rip de pdf
*/
    "urlPdfrip"?: string;
    /**
url des rapport
*/
    "reportUrl"?: string;
    /**
url du service fso
*/
    "urlFsoService": string;
    /**
id de la configuration de l'app cliente
*/
    "applicationClienteConfig": string;
    /**
id de la configuration de l'app admin
*/
    "applicationAdminConfig": string;
    /**
configuration du ftp
*/
    "ftpConf"?: Interface.IftpsConfig;
    /**
id de l application instance client
*/
    "appId": string;
    /**
id de l application instance de l'admin
*/
    "adminAppId": string;
    /**
end_client
*/
    "end_client"?: string;
    /**
licenceStoreId de l app cliente
*/
    "licenceStoreId": string;
    /**
id du licence store du l app admin
*/
    "adminLicenceStoreId": string;
    /**
name of the mailer
*/
    "emailSenderName": string;
    /**
Email du mailer
*/
    "emailSenderEmail": string;
    /**
mailIRelance360
*/
    "mailIRelance360": string;
    /**
reference du mail d'invitation a un 360
*/
    "mailInvitation360": string;
    /**
mail d'invitation a participer a une campagne 360
*/
    "mailInvitationCampaign360"?: string;
    /**
mailCreation360
*/
    "mailCreation360"?: string;
    /**
nom de l'application cliente chez le client
*/
    "appName"?: string;
    /**
url de publication de l'application cliente
*/
    "appUrl"?: string;
    /**
Inquiry360UserResponseInfo
*/
    "mailInquiry360UserResponseInfo"?: string;
    /**
Inquiry360UserResponse
*/
    "mailInquiry360UserResponse"?: string;
}
