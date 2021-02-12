"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_node_fork_option_env = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  les paramètres d’environnement a passer aux sous-processus
*/
class Entity_node_fork_option_env extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'node_fork_option_env' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["CONF_URL"] != undefined) {
            obj["CONF_URL"] = obj["CONF_URL"].toString();
        }
        if (obj["SRV_ID"] != undefined) {
            if (_.isString(obj["SRV_ID"])) {
                obj["SRV_ID"] = new utils_1.mongo.ObjectId(obj["SRV_ID"]);
            }
            else if (obj["SRV_ID"]._id) {
                obj["SRV_ID"] = new utils_1.mongo.ObjectId(obj["SRV_ID"]._id);
            }
        }
    }
    static checkCONF_URL(val, path = null) {
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
    static checkSRV_ID(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!utils_1.mongo.ObjectId.isValid(val)) {
            res.push(`${path}  is not an ObjectId`);
        }
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
        if (target.CONF_URL != null && target.CONF_URL != undefined) {
            res = Entity_node_fork_option_env.checkCONF_URL(target.CONF_URL, `${path}.CONF_URL`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.SRV_ID != null && target.SRV_ID != undefined) {
            res = Entity_node_fork_option_env.checkSRV_ID(target.SRV_ID, `${path}.SRV_ID`);
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
            case 'CONF_URL':
                //string
                return new String(value).valueOf();
                break;
            case 'SRV_ID':
                //objectid
                return new utils_1.mongo.ObjectId(value);
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
            case 'CONF_URL':
                return null;
            case 'SRV_ID':
                return 'service';
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_node_fork_option_env = Entity_node_fork_option_env;
