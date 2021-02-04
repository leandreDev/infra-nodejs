"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model_ui_menu_mongo_editor = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  un noeud de menu de mongoEditor
*/
class Model_ui_menu_mongo_editor extends utils_1.Base {
    /**
      un noeud de menu de mongoEditor
    */
    constructor(obj = {}) {
        super(obj);
        this._class = "ui_menu_mongo_editor";
        /**
  icon
  */
        this["icon"] = "description";
        if (obj["label"] != undefined) {
            this["label"] = obj["label"].toString();
        }
        if (obj["path"] != undefined) {
            this["path"] = obj["path"].toString();
        }
        if (obj["icon"] != undefined) {
            this["icon"] = obj["icon"].toString();
        }
        if (obj["child"] != undefined && obj["child"] != null && _.isArray(obj["child"])) {
            this["child"] = obj["child"].map((value) => {
                if (value._class) {
                    return new Index[value._class](value);
                }
                else {
                    return new Index["ui_menu_mongo_editor"](value);
                }
            });
        }
    }
}
exports.Model_ui_menu_mongo_editor = Model_ui_menu_mongo_editor;
//# sourceMappingURL=Model_ui_menu_mongo_editor.js.map