import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  description d'un fichier de configuration nginx
*/
export declare class Model_nginxConfigurationFile extends Base implements Interface.InginxConfigurationFile {
    /**
      description d'un fichier de configuration nginx
    */
    constructor(obj?: any);
    _class: string;
    /**
suffix a utiliser pour générer le fichier de configuration (idService_suffix.config)
*/
    "suffix"?: string;
    /**
le template à répéter avec les services
*/
    "template"?: string;
    /**
liste des services
*/
    "services"?: string[];
}
