import * as Interface from "./Interfaces";
import { Model_service } from "./Model_service";
/**
  service de creation de pdf
*/
export declare class Model_service_pdfrip extends Model_service implements Interface.Iservice_pdfrip {
    /**
      service de creation de pdf
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_service_pdfrip>;
}
