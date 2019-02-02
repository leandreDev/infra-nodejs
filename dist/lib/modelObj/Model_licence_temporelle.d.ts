import * as Interface from "./Interfaces";
import { Model_licence } from "./Model_licence";
/**
  c'est une licence qui dure un certain temps
*/
export declare class Model_licence_temporelle extends Model_licence implements Interface.Ilicence_temporelle {
    /**
      c'est une licence qui dure un certain temps
    */
    constructor(obj?: any);
    _class: string;
    /**
c'est la date a partir de la quelle, la licence peut être utilisé
*/
    "validityStartDate"?: Date;
    /**
c'est la  date de fin de validité de cette licence
*/
    "validityEndDate"?: Date;
    /**
c'est la durée d’accès au service grâce a cette licence (en seconde)
*/
    "licenceDuration"?: number;
    /**
c'est la date de fin de licence (si elle n'est pas renseigné, c'est la date de première utilisation + la durée de la licence)
*/
    "licenceEndDate"?: Date;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_licence_temporelle>;
}
