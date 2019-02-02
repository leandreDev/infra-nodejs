import * as Interface from "./Interfaces";
import { Model_field } from "./Model_field";
/**
  string est un type de base qui permet de représenter les champ de type string
*/
export declare class Model_string extends Model_field implements Interface.Istring {
    /**
      string est un type de base qui permet de représenter les champ de type string
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
valeur par defaut
*/
    "default"?: string;
    /**
convertie la donnée en minuscule
*/
    "lowercase"?: boolean;
    /**
convertie la donnée en majuscule
*/
    "uppercase"?: boolean;
    /**
élimine les espaces au début et a la fin de la valeur
*/
    "trim"?: boolean;
    /**
ne pas utiliser pour l'instant ce doit être une expression regulière
*/
    "match"?: string;
    /**
liste des valeur possible du champ
*/
    "enum"?: string[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_string>;
}
