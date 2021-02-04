"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_node_fork_option = void 0;
const Index = require("./Index");
const utils_1 = require("utils");
/**
  option d'un sous processus node
*/
class Entity_node_fork_option extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'node_fork_option' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["cwd"] != undefined) {
            obj["cwd"] = obj["cwd"].toString();
        }
        if (obj["env"] != undefined) {
            Index.Entity_node_fork_option_env.cast(obj["env"]);
            //596cb4327233b914583e459f
        }
    }
    static checkcwd(val, path = null) {
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
    static checkenv(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_node_fork_option_env.check(val, false, path);
            //596cb4327233b914583e459f
        }
        res = [...res, ...result];
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
        if (target.cwd != null && target.cwd != undefined) {
            res = Entity_node_fork_option.checkcwd(target.cwd, `${path}.cwd`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.env != null && target.env != undefined) {
            res = Entity_node_fork_option.checkenv(target.env, `${path}.env`);
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
            case 'cwd':
                //string
                return new String(value).valueOf();
                break;
            case 'env':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_node_fork_option_env.castQueryParam(subPath, value);
                }
                break;
            default:
                return utils_1.Entity.castQueryParam(key, value);
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
            case 'cwd':
                return null;
            case 'env':
                return Index.Entity_node_fork_option_env.getClassNameOfProp(subPath);
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_node_fork_option = Entity_node_fork_option;
//# sourceMappingURL=node_fork_option.js.map