import * as Interface from "./Interfaces";
import { Model_periodicalDistrution } from "./Model_periodicalDistrution";
/**
  permet de créer une plage de date de distribution
*/
export declare class Model_periodicalDistrution_periode extends Model_periodicalDistrution implements Interface.IperiodicalDistrution_periode {
    /**
      permet de créer une plage de date de distribution
    */
    constructor(obj?: any);
    _class: string;
    /**
date de début de distribution
*/
    "startDate"?: Date;
    /**
date de fin de distribution
*/
    "endDate"?: Date;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_periodicalDistrution_periode>;
}
