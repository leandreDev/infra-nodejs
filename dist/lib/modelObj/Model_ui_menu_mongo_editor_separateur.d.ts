import * as Interface from "./Interfaces";
import { Model_ui_menu_mongo_editor } from "./Model_ui_menu_mongo_editor";
/**
  représente un séparateur dans le menu
*/
export declare class Model_ui_menu_mongo_editor_separateur extends Model_ui_menu_mongo_editor implements Interface.Iui_menu_mongo_editor_separateur {
    /**
      représente un séparateur dans le menu
    */
    constructor(obj?: any);
    _class: string;
    /**
nom de la classe css à appliquer
*/
    "cssClass"?: string;
    static check(target: any, isCompleteObj?: boolean, path?: string): Promise<boolean>;
    static create(target: any, path?: string): Promise<Model_ui_menu_mongo_editor_separateur>;
}
