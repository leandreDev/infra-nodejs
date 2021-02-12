"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_service_polo_celio = void 0;
const _ = require("lodash");
const Index = require("./Index");
const service_1 = require("./service");
/**
  service de tirage au sort de polo
*/
class Entity_service_polo_celio extends service_1.Entity_service {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'service_polo_celio' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        service_1.Entity_service.cast(obj, true);
        if (obj["bdd_url"] != undefined) {
            obj["bdd_url"] = obj["bdd_url"].toString();
        }
        if (obj["maxNumberOfWinner"] != undefined) {
            obj["maxNumberOfWinner"] = new Number(obj["maxNumberOfWinner"]).valueOf();
        }
        if (obj["drawStat"] != undefined) {
            obj["drawStat"] = new Number(obj["drawStat"]).valueOf();
        }
        if (obj["bigDrawStat"] != undefined) {
            obj["bigDrawStat"] = new Number(obj["bigDrawStat"]).valueOf();
        }
    }
    static checkbdd_url(val, path = null) {
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
    static checkmaxNumberOfWinner(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkdrawStat(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkbigDrawStat(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        if (!_.isNumber(val)) {
            res.push(`${path} is not a number`);
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
        err = service_1.Entity_service.check(target, isCompleteObj, path);
        if (target.bdd_url != null && target.bdd_url != undefined) {
            res = Entity_service_polo_celio.checkbdd_url(target.bdd_url, `${path}.bdd_url`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.maxNumberOfWinner == null || target.maxNumberOfWinner == undefined)) {
            err.push(path + ".maxNumberOfWinner is required");
        }
        if (target.maxNumberOfWinner != null && target.maxNumberOfWinner != undefined) {
            res = Entity_service_polo_celio.checkmaxNumberOfWinner(target.maxNumberOfWinner, `${path}.maxNumberOfWinner`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.drawStat != null && target.drawStat != undefined) {
            res = Entity_service_polo_celio.checkdrawStat(target.drawStat, `${path}.drawStat`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.bigDrawStat != null && target.bigDrawStat != undefined) {
            res = Entity_service_polo_celio.checkbigDrawStat(target.bigDrawStat, `${path}.bigDrawStat`);
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
            case 'bdd_url':
                //string
                return new String(value).valueOf();
                break;
            case 'maxNumberOfWinner':
                //number
                return new Number(value).valueOf();
                break;
            case 'drawStat':
                //number
                return new Number(value).valueOf();
                break;
            case 'bigDrawStat':
                //number
                return new Number(value).valueOf();
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
            case 'bdd_url':
                return null;
            case 'maxNumberOfWinner':
                return null;
            case 'drawStat':
                return null;
            case 'bigDrawStat':
                return null;
            default:
                return service_1.Entity_service.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_service_polo_celio = Entity_service_polo_celio;
