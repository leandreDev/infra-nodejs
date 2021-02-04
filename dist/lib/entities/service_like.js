"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_like = void 0;
const Index = require("./Index");
const service_1 = require("./service");
/**
  service permettant de liker un objet de la base
*/
class Entity_service_like extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_like' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["likeCollection"] != undefined) {
            obj["likeCollection"] = obj["likeCollection"].toString();
        }
        if (obj["noteCollection"] != undefined) {
            obj["noteCollection"] = obj["noteCollection"].toString();
        }
    }
    static checklikeCollection(val, path = null) {
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
    static checknoteCollection(val, path = null) {
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
        if (isCompleteObj && (target.likeCollection == null || target.likeCollection == undefined)) {
            err.push(path + ".likeCollection is required");
        }
        if (target.likeCollection != null && target.likeCollection != undefined) {
            res = Entity_service_like.checklikeCollection(target.likeCollection, `${path}.likeCollection`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.noteCollection == null || target.noteCollection == undefined)) {
            err.push(path + ".noteCollection is required");
        }
        if (target.noteCollection != null && target.noteCollection != undefined) {
            res = Entity_service_like.checknoteCollection(target.noteCollection, `${path}.noteCollection`);
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
            case 'likeCollection':
                //string
                return new String(value).valueOf();
                break;
            case 'noteCollection':
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
            case 'likeCollection':
                return null;
            case 'noteCollection':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_like = Entity_service_like;
//# sourceMappingURL=service_like.js.map