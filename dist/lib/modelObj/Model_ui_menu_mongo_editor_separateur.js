"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
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
    static check(target, isCompleteObj = true, path = "") {
        return super.check(target, isCompleteObj, path)
            .then((boolean) => {
            var promArr = [Promise.resolve(true)];
            if (target["cssClass"] != null && target["cssClass"] != undefined) {
                let _cssClass = target["cssClass"];
                if (!_.isString(_cssClass)) {
                    throw new Error(path + "cssClass is not a string");
                }
            }
            return Promise.all(promArr).then(() => { return true; });
        }).catch((err) => {
            throw err;
        });
    }
    static create(target, path = "") {
        return Model_ui_menu_mongo_editor_separateur.check(target, true, path).then(() => {
            return new Model_ui_menu_mongo_editor_separateur(target);
        });
    }
}
exports.Model_ui_menu_mongo_editor_separateur = Model_ui_menu_mongo_editor_separateur;
//# sourceMappingURL=Model_ui_menu_mongo_editor_separateur.js.map