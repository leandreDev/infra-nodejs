import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  configuration d'un parcourt anticoruption
*/
export declare class Model_application_configuration_antico extends Model_application_configuration implements Interface.Iapplication_configuration_antico {
    /**
      configuration d'un parcourt anticoruption
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_antico>;
}
