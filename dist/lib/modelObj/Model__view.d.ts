import * as Interface from "./Interfaces";
import { Base } from "utils";
/**
  créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
*/
export declare class Model__view extends Base implements Interface.I_view {
    /**
      créer des pipe d'agrégation intérogeable https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/
    */
    constructor(obj?: any);
    _class: string;
    /**
nom de la route d'accés
*/
    "name": string;
    /**
la description qui apparaîtra dans la doc
*/
    "description": string;
    /**
le format attendu en sortie
*/
    "output": string;
    /**
model sur le quelle on opère l'agrégation
*/
    "model": string;
    /**
liste des operation du pipeline
*/
    "pipeline"?: any[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model__view>;
}
