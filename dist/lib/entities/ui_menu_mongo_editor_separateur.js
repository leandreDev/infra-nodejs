"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_ui_menu_mongo_editor_separateur = void 0;
const Index = require("./Index");
const ui_menu_mongo_editor_1 = require("./ui_menu_mongo_editor");
/**
  représente un séparateur dans le menu
*/
class Entity_ui_menu_mongo_editor_separateur extends ui_menu_mongo_editor_1.Entity_ui_menu_mongo_editor {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'ui_menu_mongo_editor_separateur' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        ui_menu_mongo_editor_1.Entity_ui_menu_mongo_editor.cast(obj, true);
        if (obj["cssClass"] != undefined) {
            obj["cssClass"] = obj["cssClass"].toString();
        }
    }
    static checkcssClass(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = ui_menu_mongo_editor_1.Entity_ui_menu_mongo_editor.check(target, isCompleteObj, path);
        if (target.cssClass != null && target.cssClass != undefined) {
            res = Entity_ui_menu_mongo_editor_separateur.checkcssClass(target.cssClass, `${path}.cssClass`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        return err;
    }
    static castQueryParam(path, value) {
        let key = '';
        let subPath = '';
        if (value === null) {
            return null;
        }
        if (path.indexOf('.') === -1) {
            key = path;
        }
        else {
            let arr = path.split('.');
            key = arr.shift();
            subPath = arr.join('.');
            if (subPath === null || subPath.trim() === '') {
                throw new Error(`subPath is empty for ${path} ${value}`);
            }
        }
        if (key === null || key.trim() === '') {
            throw new Error(`key path is empty for ${path} ${value}`);
        }
        switch (key) {
            case 'cssClass':
                //string
                return new String(value).valueOf();
                break;
            default:
                return ui_menu_mongo_editor_1.Entity_ui_menu_mongo_editor.castQueryParam(key, value);
                break;
        }
    }
    static getClassNameOfProp(path) {
        let key = '';
        let subPath = '';
        if (path.indexOf('.') === -1) {
            key = path;
        }
        else {
            let arr = path.split('.');
            key = arr.shift();
            subPath = arr.join('.');
            if (subPath === null || subPath.trim() === '') {
                throw new Error(`subPath is empty for ${path} `);
            }
        }
        if (key === null || key.trim() === '') {
            throw new Error(`key path is empty for ${path}`);
        }
        switch (key) {
            case 'cssClass':
                return null;
            default:
                return ui_menu_mongo_editor_1.Entity_ui_menu_mongo_editor.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_ui_menu_mongo_editor_separateur = Entity_ui_menu_mongo_editor_separateur;
//# sourceMappingURL=ui_menu_mongo_editor_separateur.js.map