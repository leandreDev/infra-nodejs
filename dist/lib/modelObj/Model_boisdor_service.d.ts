import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service métier de boisdor
*/
export declare class Model_boisdor_service extends Model_service implements Interface.Iboisdor_service {
    /**
      service métier de boisdor
    */
    constructor(obj?: any);
    _class: string;
    /**
url de la bdd boisdor
*/
    "boisdorBddUrl"?: string;
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
url de redirection de l'utilisateur pour réinitialiser sont mot de passe
*/
    "resetPasswordRedirect"?: string;
    /**
configuration de tous les templates de mail
*/
    "sendgrid_conf"?: Interface.Ibois_dor_mailer;
}
