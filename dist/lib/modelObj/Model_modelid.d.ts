import * as Interface from "./Interfaces";
import { Model_field } from "./Model_field";
/**
  modelid
*/
export declare class Model_modelid extends Model_field implements Interface.Imodelid {
    /**
      modelid
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
ref
*/
    "ref"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_modelid>;
}
