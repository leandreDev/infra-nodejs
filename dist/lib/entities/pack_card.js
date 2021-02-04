"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_pack_card = void 0;
const Index = require("./Index");
const application_1 = require("./application");
/**
  c'est un paquet de carte
*/
class Entity_pack_card extends application_1.Entity_application {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'pack_card' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        application_1.Entity_application.cast(obj, true);
        if (obj["imageUrl"] != undefined) {
            obj["imageUrl"] = obj["imageUrl"].toString();
        }
        if (obj["companyName"] != undefined) {
            obj["companyName"] = obj["companyName"].toString();
        }
        if (obj["companyId"] != undefined) {
            obj["companyId"] = obj["companyId"].toString();
        }
    }
    static checkimageUrl(val, path = null) {
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
    static checkcompanyName(val, path = null) {
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
    static checkcompanyId(val, path = null) {
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
        err = application_1.Entity_application.check(target, isCompleteObj, path);
        if (target.imageUrl != null && target.imageUrl != undefined) {
            res = Entity_pack_card.checkimageUrl(target.imageUrl, `${path}.imageUrl`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.companyName != null && target.companyName != undefined) {
            res = Entity_pack_card.checkcompanyName(target.companyName, `${path}.companyName`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.companyId != null && target.companyId != undefined) {
            res = Entity_pack_card.checkcompanyId(target.companyId, `${path}.companyId`);
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
            case 'imageUrl':
                //string
                return new String(value).valueOf();
                break;
            case 'companyName':
                //string
                return new String(value).valueOf();
                break;
            case 'companyId':
                //string
                return new String(value).valueOf();
                break;
            default:
                return application_1.Entity_application.castQueryParam(key, value);
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
            case 'imageUrl':
                return null;
            case 'companyName':
                return null;
            case 'companyId':
                return null;
            default:
                return application_1.Entity_application.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_pack_card = Entity_pack_card;
//# sourceMappingURL=pack_card.js.map