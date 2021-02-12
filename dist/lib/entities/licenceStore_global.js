"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_licenceStore_global = void 0;
const Index = require("./Index");
const licenceStore_1 = require("./licenceStore");
/**
  licence store dont les applications sont le catalogue du client
*/
class Entity_licenceStore_global extends licenceStore_1.Entity_licenceStore {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'licenceStore_global' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        licenceStore_1.Entity_licenceStore.cast(obj, true);
    }
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        err = licenceStore_1.Entity_licenceStore.check(target, isCompleteObj, path);
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
            default:
                return licenceStore_1.Entity_licenceStore.castQueryParam(key, value);
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
            default:
                return licenceStore_1.Entity_licenceStore.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_licenceStore_global = Entity_licenceStore_global;
