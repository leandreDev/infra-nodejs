"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Model_ui_menu_mongo_editor_1 = require("./Model_ui_menu_mongo_editor");
/**
  représente un séparateur dans le menu
*/
class Model_ui_menu_mongo_editor_separateur extends Model_ui_menu_mongo_editor_1.Model_ui_menu_mongo_editor {
    /**
      représente un séparateur dans le menu
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "ui_menu_mongo_editor_separateur";
        /**
  nom de la classe css à appliquer
  */
        this["cssClass"] = "separateur";
        if (obj["cssClass"] != undefined) {
            this["cssClass"] = obj["cssClass"].toString();
        }
    }
}
exports.Model_ui_menu_mongo_editor_separateur = Model_ui_menu_mongo_editor_separateur;
//# sourceMappingURL=Model_ui_menu_mongo_editor_separateur.js.map