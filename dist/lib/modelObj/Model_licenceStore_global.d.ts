import * as Interface from "./Interfaces";
import { Model_licenceStore } from "./Model_licenceStore";
/**
  licence store dont les applications sont le catalogue du client
*/
export declare class Model_licenceStore_global extends Model_licenceStore implements Interface.IlicenceStore_global {
    /**
      licence store dont les applications sont le catalogue du client
    */
    constructor(obj?: any);
    _class: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_licenceStore_global>;
}
