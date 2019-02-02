import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  initalisation des listes
*/
export declare class Model_dataTableInit extends Base implements Interface.IdataTableInit {
    /**
      initalisation des listes
    */
    constructor(obj?: any);
    _class: string;
    /**
liste des champs a afficher
*/
    "fieldsNames"?: string[];
    /**
champ a trier
*/
    "sortField"?: string;
    /**
direction du tri
*/
    "direction"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_dataTableInit>;
}
