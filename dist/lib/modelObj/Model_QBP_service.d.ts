import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service métier de QBP
*/
export declare class Model_QBP_service extends Model_service implements Interface.IQBP_service {
    /**
      service métier de QBP
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la bdd QBP
*/
    "QbpBddUrl"?: string;
    /**
url de l'api du sso
*/
    "ssoApiUrl"?: string;
    /**
licenceApiUrl
*/
    "licenceApiUrl"?: string;
    /**
sendgridApiUrl
*/
    "sendgridApiUrl"?: string;
    /**
appId
*/
    "appId"?: string;
    /**
end_client
*/
    "end_client"?: string;
    /**
licenceStoreId
*/
    "licenceStoreId"?: string;
    /**
url su service de bdd
*/
    "ssoBddUrl"?: string;
    /**
client_id sso
*/
    "client_id"?: string;
    /**
client_secret du sso
*/
    "client_secret"?: string;
    /**
application instance id of seller
*/
    "sellerAppId": string;
    /**
licenceStore for seller user licence
*/
    "sellerLicenceStoreId"?: string;
    /**
application instance id of the admin
*/
    "adminAppId"?: string;
    /**
licenceStoreId for admin
*/
    "adminLicenceStoreId"?: string;
    /**
url de la bdd d 'infra
*/
    "infraBddUrl"?: string;
    /**
template du sso client
*/
    "sellerSso_Client_template"?: string;
    /**
template du endClient seller
*/
    "sellerEndClientTemplate"?: string;
    /**
template de l application instance du vendeur
*/
    "sellerAppInstanceTemplate"?: string;
    /**
données de configuration de mangopay
*/
    "mangoConf"?: Interface.IMangoConf;
    /**
api key pour l'api d assurance
*/
    "assuranceApiKey"?: string;
    /**
Configuration BigBen
*/
    "bigBen"?: Interface.IBigBenConf;
    /**
Url du service DPD
*/
    "dpdServiceUrl"?: string;
    /**
connecteur sftp gras savoie oi
*/
    "sftpGS"?: Interface.IftpConf;
    /**
Base url pour qbp
*/
    "QbpBaseUrl"?: string;
    /**
Configuration url quelbonplan
*/
    "qbpServiceUrl"?: string;
    /**
suffix de création du domaine de l application du partenaire
*/
    "sellerDomainPatern"?: string;
    /**
Url du service FSO
*/
    "fsoServiceUrl": string;
    /**
Affichage des assurances
*/
    "isInsuranceEnable"?: boolean;
    /**
configuration pour l'envoie de mails
*/
    "sendGridConf"?: Interface.IQbpMailer;
    /**
liste de functionalites active ou pas
*/
    "featuresConf"?: Interface.IQbpFeaturesConfiguration;
    /**
Configuration pour les taches auto
*/
    "automationConf"?: Interface.IConfAutomation;
    /**
url de l api floa
*/
    "floaUrl"?: string;
    /**
key de l api floa
*/
    "floaApiKey"?: string;
    /**
id du wallet mango de floa
*/
    "floaMangoWalletId"?: string;
    /**
ID wallet dedier uniquement au promotion
*/
    "qbpPromoWalletId"?: string;
    /**
Id de l utilsateur mango qui effectue le transfert
*/
    "qbpPromoMangoUserId"?: string;
    /**
email secret avis garantie
*/
    "avisGarantisSecretEmail"?: string;
}
