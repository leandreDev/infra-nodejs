import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service_nginxConfigurator
*/
export declare class Model_service_nginxConfigurator extends Model_service implements Interface.Iservice_nginxConfigurator {
    /**
      service_nginxConfigurator
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_nginxConfigurator>;
}
