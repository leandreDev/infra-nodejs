import * as Interface from "./Interfaces";
import { Model_service_nginxConfigurator } from "./Model_service_nginxConfigurator";
/**
  configuration d'un service nginx multi configuration
*/
export declare class Model_service_nginxMultiConfigurator extends Model_service_nginxConfigurator implements Interface.Iservice_nginxMultiConfigurator {
    /**
      configuration d'un service nginx multi configuration
    */
    constructor(obj?: any);
    _class: string;
    /**
le login de l'utilisateur utilisé pour s'impersonifier
*/
    "nginxUser"?: string;
    /**
l'url de la collection des services
*/
    "serviceUrl"?: string;
    /**
url du service de client
*/
    "clientUrl": string;
    /**
url du service d'application instance
*/
    "appInstanceUrl"?: string;
    /**
url du service d'application instance
*/
    "appUrl": string;
    /**
fichier de configuration a générer
*/
    "configurationFile"?: Interface.InginxConfigurationFile[];
    /**
liste des applications a publier
*/
    "confApplication"?: Interface.InginxConfigurationFileApp[];
}
