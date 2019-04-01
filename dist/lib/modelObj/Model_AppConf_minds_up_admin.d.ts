import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  config de l'app minds up admin
*/
export declare class Model_AppConf_minds_up_admin extends Model_application_configuration implements Interface.IAppConf_minds_up_admin {
    /**
      config de l'app minds up admin
    */
    constructor(obj?: any);
    _class: string;
    /**
url de l'api
*/
    "apiUrl": string;
    /**
url du service métier mindsUp
*/
    "serviceMindsUpUrl": string;
    /**
texte a afficher pour valider la rgpd
*/
    "rgpd"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_AppConf_minds_up_admin>;
}
