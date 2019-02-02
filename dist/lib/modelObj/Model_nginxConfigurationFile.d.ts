import * as Interface from "./Interfaces";
import { Base } from "utils";
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
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_nginxConfigurationFile>;
}
