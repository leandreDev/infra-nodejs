import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service celio back_task
*/
export declare class Model_service_celio_back_task extends Model_service implements Interface.Iservice_celio_back_task {
    /**
      service celio back_task
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service de bdd fid
*/
    "fidBddUrl": string;
    /**
url du service de bdd qcm
*/
    "qcmBddUrl": string;
    /**
url du service fid
*/
    "serviceFidUrl": string;
    /**
site id de hybris
*/
    "siteId"?: string;
    /**
secretToken apm
*/
    "secretToken"?: string;
    /**
serverUrl apm
*/
    "serverUrl"?: string;
    /**
chemin vers le certificat de bd, si il est renseigné, il active la connexion ssl
*/
    "caPath"?: string;
    /**
url du service hybris
*/
    "hybrisUrl": string;
    /**
client_id hybris
*/
    "client_id": string;
    /**
client_secret hybris
*/
    "client_secret": string;
    /**
url de l accessToken
*/
    "accessTokenUrl": string;
    /**
MarketingCloudApisConf
*/
    "marketingCloudApisConf"?: Interface.IMarketingCloudApisConf;
    /**
prefixe pour le customer de chez marketingCloud
*/
    "customerPrefix"?: string;
}
