import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  c'est la configuration d'une application
*/
export declare class Model_application_configuration extends Base implements Interface.Iapplication_configuration {
    /**
      c'est la configuration d'une application
    */
    constructor(obj?: any);
    _class: string;
    /**
le nom de la configuration
*/
    "name"?: string;
    /**
configurations de services
*/
    "services"?: string[];
    /**
nom de l'application a afficher
*/
    "appName"?: string;
}
