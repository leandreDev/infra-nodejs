"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_QbpFeaturesConfiguration = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  liste de functionalites pouvant etre actives ou desactives
*/
class Entity_QbpFeaturesConfiguration extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'QbpFeaturesConfiguration' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["bankWire"] != undefined) {
            obj["bankWire"] = new Boolean(obj["bankWire"]).valueOf();
        }
    }
    static checkbankWire(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isBoolean(val)) {
            res.push(`${path}  is not a boolean`);
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
        if (target.bankWire != null && target.bankWire != undefined) {
            res = Entity_QbpFeaturesConfiguration.checkbankWire(target.bankWire, `${path}.bankWire`);
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
            case 'bankWire':
                //boolean
                return new Boolean(value).valueOf();
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
            case 'bankWire':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_QbpFeaturesConfiguration = Entity_QbpFeaturesConfiguration;
