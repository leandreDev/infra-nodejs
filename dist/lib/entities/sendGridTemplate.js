"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_sendGridTemplate = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  template send grid
*/
class Entity_sendGridTemplate extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'sendGridTemplate' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["lang"] != undefined) {
            obj["lang"] = obj["lang"].toString();
        }
        if (obj["templateId"] != undefined) {
            obj["templateId"] = obj["templateId"].toString();
        }
        if (obj["parametre"] != undefined && obj["parametre"] != null && _.isArray(obj["parametre"])) {
            obj["parametre"].forEach((value) => {
                Index.Entity_name_value.cast(value);
            });
        }
        if (obj["dynamic_template_data"] != undefined && obj["dynamic_template_data"] != null && _.isArray(obj["dynamic_template_data"])) {
            obj["dynamic_template_data"].forEach((value) => {
                Index.Entity_name_value.cast(value);
            });
        }
    }
    static checklang(val, path = null) {
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
    static checktemplateId(val, path = null) {
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
    static checkparametre(val, path = null) {
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
    static checkdynamic_template_data(val, path = null) {
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
    static check(target, isCompleteObj = true, path = "") {
        var err = [];
        let res;
        if (isCompleteObj && (target.lang == null || target.lang == undefined)) {
            err.push(path + ".lang is required");
        }
        if (target.lang != null && target.lang != undefined) {
            res = Entity_sendGridTemplate.checklang(target.lang, `${path}.lang`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.templateId == null || target.templateId == undefined)) {
            err.push(path + ".templateId is required");
        }
        if (target.templateId != null && target.templateId != undefined) {
            res = Entity_sendGridTemplate.checktemplateId(target.templateId, `${path}.templateId`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.parametre != null && target.parametre != undefined) {
            target.parametre.forEach((data, index) => {
                res = Entity_sendGridTemplate.checkparametre(target.parametre[index], `${path}.parametre.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.dynamic_template_data != null && target.dynamic_template_data != undefined) {
            target.dynamic_template_data.forEach((data, index) => {
                res = Entity_sendGridTemplate.checkdynamic_template_data(target.dynamic_template_data[index], `${path}.dynamic_template_data.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
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
            case 'lang':
                //string
                return new String(value).valueOf();
                break;
            case 'templateId':
                //string
                return new String(value).valueOf();
                break;
            case 'parametre':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_name_value.castQueryParam(subPath, value);
                }
                break;
            case 'dynamic_template_data':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_name_value.castQueryParam(subPath, value);
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
            case 'lang':
                return null;
            case 'templateId':
                return null;
            case 'parametre':
                return Index.Entity_name_value.getClassNameOfProp(subPath);
            case 'dynamic_template_data':
                return Index.Entity_name_value.getClassNameOfProp(subPath);
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_sendGridTemplate = Entity_sendGridTemplate;
