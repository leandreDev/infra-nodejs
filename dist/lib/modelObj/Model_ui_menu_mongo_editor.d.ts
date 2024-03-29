import * as Interface from "./Interfaces";
import { Base } from "@leandredev/utils";
/**
  un noeud de menu de mongoEditor
*/
export declare class Model_ui_menu_mongo_editor extends Base implements Interface.Iui_menu_mongo_editor {
    /**
      un noeud de menu de mongoEditor
    */
    constructor(obj?: any);
    _class: string;
    /**
le nom a aficher
*/
    "label"?: string;
    /**
le path dans l'application web
*/
    "path"?: string;
    /**
icon
*/
    "icon"?: string;
    /**
liste des sous menu
*/
    "child"?: Interface.Iui_menu_mongo_editor[];
}
