import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  config de l'app minds up
*/
export declare class Model_AppConf_minds_up extends Model_application_configuration implements Interface.IAppConf_minds_up {
    /**
      config de l'app minds up
    */
    constructor(obj?: any);
    _class: string;
    /**
url de l'api de la bdd minds Up
*/
    "apiUrl": string;
    /**
url du service metier mindsUp
*/
    "serviceMindsUpUrl": string;
    /**
url de la video d intro sur youtub
*/
    "videoUrl"?: string;
    /**
titre de l'introduction
*/
    "introTitle"?: string;
    /**
texte de l'introduction
*/
    "introText"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_AppConf_minds_up>;
}
