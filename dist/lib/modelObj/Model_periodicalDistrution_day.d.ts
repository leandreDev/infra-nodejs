import * as Interface from "./Interfaces";
import { Model_periodicalDistrution } from "./Model_periodicalDistrution";
/**
  journée autorisé
*/
export declare class Model_periodicalDistrution_day extends Model_periodicalDistrution implements Interface.IperiodicalDistrution_day {
    /**
      journée autorisé
    */
    constructor(obj?: any);
    _class: string;
    /**
distribution autorisé le lundi
*/
    "lundi"?: boolean;
    /**
distribution autorisé le mardi
*/
    "mardi"?: boolean;
    /**
distribution autorisé le  mercredi
*/
    "mercredi"?: boolean;
    /**
distribution autorisé le jeudi
*/
    "jeudi"?: boolean;
    /**
distribution autorisé le vendredi
*/
    "vendredi"?: boolean;
    /**
distribution autorisé le samedi
*/
    "samedi"?: boolean;
    /**
distribution autorisé le dimanche
*/
    "dimanche"?: boolean;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_periodicalDistrution_day>;
}
