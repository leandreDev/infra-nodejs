import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  stock de licence distribuable
*/
export declare class Model_licenceStore extends Base implements Interface.IlicenceStore {
    /**
      stock de licence distribuable
    */
    constructor(obj?: any);
    _class: string;
    /**
nombre de licence a distrubuer
*/
    "nbLicence"?: number;
    /**
licence paramétré
*/
    "licenceTemplate"?: Interface.Ilicence[];
    /**
assignation automatique d'une licence
*/
    "autoAssign"?: boolean;
    /**
date de début de distribution possible
*/
    "validytyStartDate"?: Date;
    /**
date de fin de validité
*/
    "validityEndDate"?: Date;
    /**
permet de gérer des limites de distribution
*/
    "distributionPeriode"?: Interface.IperiodicalDistrution[];
    /**
nom de pack de licence
*/
    "name": string;
    /**
nombre de licence mise a disposition
*/
    "nbLicenceOriginal": number;
    /**
référence du licenceStore
*/
    "ref"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_licenceStore>;
}
