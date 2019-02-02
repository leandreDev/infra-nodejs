import * as Interface from "./Interfaces";
import { Model_periodicalDistrution } from "./Model_periodicalDistrution";
/**
  permet de limiter la distribution chaque jour du mois
*/
export declare class Model_periodicalDistrution_month extends Model_periodicalDistrution implements Interface.IperiodicalDistrution_month {
    /**
      permet de limiter la distribution chaque jour du mois
    */
    constructor(obj?: any);
    _class: string;
    /**
jour de début de distribution
*/
    "startDay"?: number;
    /**
jour de fin de distribution
*/
    "endDay"?: number;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_periodicalDistrution_month>;
}
