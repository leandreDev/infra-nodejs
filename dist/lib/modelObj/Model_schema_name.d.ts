import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  mapping de schema et de nom
*/
export declare class Model_schema_name extends Base implements Interface.Ischema_name {
    /**
      mapping de schema et de nom
    */
    constructor(obj?: any);
    _class: string;
    /**
nom du schema
*/
    "entity"?: string;
    /**
le nom humain au singulier
*/
    "singular"?: string;
    /**
le nom humain au pluriel
*/
    "plural"?: string;
    /**
permet d'indiquer le champ qui sert de nom dans le fil d'ariane
*/
    "fieldName"?: string;
    /**
liste des champs à masquer à l'utilisateur
*/
    "unvisibleFields"?: string[];
    /**
mappage des nom de champ avec les nom utilisateurs
*/
    "fieldsNames"?: Interface.Iname_value[];
    /**
prametre d'initalisation des listes
*/
    "listParameter"?: Interface.IdataTableInit;
    /**
activer le bouton nouveau
*/
    "create"?: boolean;
    /**
active le bouton delete
*/
    "delete"?: boolean;
    /**
active le bouton clone
*/
    "clone"?: boolean;
    /**
active le bouton enregistrer
*/
    "update"?: boolean;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_schema_name>;
}
