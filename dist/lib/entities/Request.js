"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_Request = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("utils");
/**
  description d'une requete avec request
*/
class Entity_Request extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'Request' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["url"] != undefined) {
            obj["url"] = obj["url"].toString();
        }
        if (obj["method"] != undefined) {
            obj["method"] = obj["method"].toString();
        }
        if (obj["headers"] != undefined && obj["headers"] != null && _.isArray(obj["headers"])) {
            obj["headers"].forEach((value) => {
                Index.Entity_name_value.cast(value);
            });
        }
        if (obj["body"] != undefined) {
            obj["body"] = obj["body"];
        }
    }
    static checkurl(val, path = null) {
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
    static checkmethod(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let _enum = ["GET", "POST", "PUT", "PATCH", "DELETE"];
        if (_enum.indexOf(val) == -1) {
            res.push(`${path} dont match one of GET , POST , PUT , PATCH , DELETE`);
        }
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkheaders(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_name_value.check(val, false, path);
            //59c62581c3c9d3a0f9e88616
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkbody(val, path = null) {
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
        if (isCompleteObj && (target.url == null || target.url == undefined)) {
            err.push(path + ".url is required");
        }
        if (target.url != null && target.url != undefined) {
            res = Entity_Request.checkurl(target.url, `${path}.url`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.method == null || target.method == undefined)) {
            err.push(path + ".method is required");
        }
        if (target.method != null && target.method != undefined) {
            res = Entity_Request.checkmethod(target.method, `${path}.method`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.headers != null && target.headers != undefined) {
            target.headers.forEach((data, index) => {
                res = Entity_Request.checkheaders(target.headers[index], `${path}.headers.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.body != null && target.body != undefined) {
            res = Entity_Request.checkbody(target.body, `${path}.body`);
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
            case 'url':
                //string
                return new String(value).valueOf();
                break;
            case 'method':
                //string
                return new String(value).valueOf();
                break;
            case 'headers':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_name_value.castQueryParam(subPath, value);
                }
                break;
            case 'body':
                //object
                return value;
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
            case 'url':
                return null;
            case 'method':
                return null;
            case 'headers':
                return Index.Entity_name_value.getClassNameOfProp(subPath);
            case 'body':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_Request = Entity_Request;
