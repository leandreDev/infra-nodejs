import * as Interface from "./Interfaces";
import { Model__view } from "./Model__view";
/**
  view avec des params
*/
export declare class Model__view_params extends Model__view implements Interface.I_view_params {
    /**
      view avec des params
    */
    constructor(obj?: any);
    _class: string;
    /**
liste des paramètres de la route
*/
    "params"?: Interface.IrouteParam[];
    /**
parametre a caster
*/
    "castParams"?: Interface.IcastParam[];
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model__view_params>;
}
