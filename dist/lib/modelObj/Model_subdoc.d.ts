import * as Interface from "./Interfaces";
import { Model_field } from "./Model_field";
/**
  ce champ permet d'insérer un document dans un autre
*/
export declare class Model_subdoc extends Model_field implements Interface.Isubdoc {
    /**
      ce champ permet d'insérer un document dans un autre
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
c'est la référence au schéma du ce sous objet
*/
    "protoSchemaId"?: string;
}
