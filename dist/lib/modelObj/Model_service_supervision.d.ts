import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service_supervision
*/
export declare class Model_service_supervision extends Model_service implements Interface.Iservice_supervision {
    /**
      service_supervision
    */
    constructor(obj?: any);
    _class: string;
    /**
mongoosePath vers les log
*/
    "mongoosePath"?: string;
    /**
base sur laquelle la connexion s'etabli
*/
    "mongoAuthSource"?: string;
    /**
configuration de démarrages des services
*/
    "services"?: Interface.Iservice_supervision_service_conf[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_supervision>;
}
