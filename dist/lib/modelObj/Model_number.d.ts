import * as Interface from "./Interfaces";
import { Model_field } from "./Model_field";
/**
  ce champ représente les valeurs numériques
*/
export declare class Model_number extends Model_field implements Interface.Inumber {
    /**
      ce champ représente les valeurs numériques
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
    "default"?: number;
    /**
valeur minimum acceptée
*/
    "min"?: number;
    /**
valeur maximum acceptée
*/
    "max"?: number;
    /**
le pas d'incrément
*/
    "step"?: number;
}
