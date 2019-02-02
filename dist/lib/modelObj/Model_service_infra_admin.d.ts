import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  administration de l'infra
*/
export declare class Model_service_infra_admin extends Model_service implements Interface.Iservice_infra_admin {
    /**
      administration de l'infra
    */
    constructor(obj?: any);
    _class: string;
    /**
url du service de bd du sso
*/
    "ssoBdUrl": string;
    /**
url du service de bd de l'infra
*/
    "infraBdUrl": string;
    /**
url de la bd de la plateform
*/
    "platformBdUrl"?: string;
    /**
id du service service_nginxMultiConfigurator
*/
    "service_nginxMultiConfiguratorId": string;
    /**
nginxApplicationSuffix
*/
    "nginxApplicationSuffix"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_infra_admin>;
}
