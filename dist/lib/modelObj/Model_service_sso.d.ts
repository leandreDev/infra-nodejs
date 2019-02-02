import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  c'est un sso
*/
export declare class Model_service_sso extends Model_service implements Interface.Iservice_sso {
    /**
      c'est un sso
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_sso>;
}
