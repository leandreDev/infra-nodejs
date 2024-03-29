import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  liste des applications
*/
export declare class Model_application extends Base implements Interface.Iapplication {
    /**
      liste des applications
    */
    constructor(obj?: any);
    _class: string;
    /**
le nom de l'application
*/
    "name"?: string;
    /**
la description public de l'appli
*/
    "description"?: string;
    /**
nom du depot de l'app
*/
    "depot"?: string;
}
