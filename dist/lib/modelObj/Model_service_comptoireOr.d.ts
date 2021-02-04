import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service_comptoireOr
*/
export declare class Model_service_comptoireOr extends Model_service implements Interface.Iservice_comptoireOr {
    /**
      service_comptoireOr
    */
    constructor(obj?: any);
    _class: string;
    /**
bddApiUrl
*/
    "bddApiUrl"?: string;
    /**
url du service de bdd du sso
*/
    "ssoApiUrl"?: string;
    /**
licenceApiUrl
*/
    "licenceApiUrl"?: string;
    /**
url de la bdd infra
*/
    "infraBddUrl"?: string;
    /**
Id de la configuration de l'app admin
*/
    "adminConfId"?: string;
    /**
end_client
*/
    "end_client"?: string;
    /**
adminLicenceStoreId
*/
    "adminLicenceStoreId"?: string;
    /**
id de l'app adminApp
*/
    "adminAppId"?: string;
    /**
url de l api send grid
*/
    "sendgridApiUrl"?: string;
    /**
nom de l emeteur
*/
    "senderName"?: string;
    /**
email de l'emeteur
*/
    "senderEmail"?: string;
    /**
template du mail envoyé lors d une transaction
*/
    "transactionEmailTemplate"?: string;
}
