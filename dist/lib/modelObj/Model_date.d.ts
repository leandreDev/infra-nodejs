import * as Interface from "./Interfaces";
import { Model_field } from "./Model_field";
/**
  ce champ représente les dates
*/
export declare class Model_date extends Model_field implements Interface.Idate {
    /**
      ce champ représente les dates
    */
    constructor(obj?: any);
    _class: string;
    /**
représente le nom du champ
*/
    "name": string;
    /**
c'est la description du champ. il permet de générer l'aide ou la documentation
*/
    "description": string;
    /**
permet d'indiquer que le champ est un tableau
*/
    "isArrayOf"?: boolean;
    /**
si le champ est obligatoire
*/
    "required"?: boolean;
    /**
indique que la valeur du champ doit être unique
*/
    "unique"?: boolean;
    /**
????? je suis plus sure
*/
    "index"?: boolean;
    /**
valeur par défaut
*/
    "default"?: Date;
    /**
valeur minimum accepté
*/
    "min"?: Date;
    /**
valeur maximum accepté
*/
    "max"?: Date;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_date>;
}
