import * as Interface from "./Interfaces";
import { Model_application_configuration } from "./Model_application_configuration";
/**
  c'est la configuration d'une application Coach
*/
export declare class Model_application_configuration_appCoach extends Model_application_configuration implements Interface.Iapplication_configuration_appCoach {
    /**
      c'est la configuration d'une application Coach
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_application_configuration_appCoach>;
}
