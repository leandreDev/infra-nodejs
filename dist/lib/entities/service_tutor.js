"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_tutor = void 0;
const Index = require("./Index");
const service_1 = require("./service");
/**
  service de gestion des message tutoré
*/
class Entity_service_tutor extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_tutor' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["apiSession"] != undefined) {
            obj["apiSession"] = obj["apiSession"].toString();
        }
    }
    static checkapiSession(val, path = null) {
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
        err = service_1.Entity_service.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.apiSession == null || target.apiSession == undefined)) {
            err.push(path + ".apiSession is required");
        }
        if (target.apiSession != null && target.apiSession != undefined) {
            res = Entity_service_tutor.checkapiSession(target.apiSession, `${path}.apiSession`);
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
            case 'apiSession':
                //string
                return new String(value).valueOf();
                break;
            default:
                return service_1.Entity_service.castQueryParam(key, value);
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
            case 'apiSession':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_tutor = Entity_service_tutor;
//# sourceMappingURL=service_tutor.js.map