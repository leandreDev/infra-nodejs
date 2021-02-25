"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_schema_name = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
/**
  mapping de schema et de nom
*/
class Entity_schema_name extends utils_1.Entity {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'schema_name' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        utils_1.Entity.cast(obj, true);
        if (obj["entity"] != undefined) {
            obj["entity"] = obj["entity"].toString();
        }
        if (obj["singular"] != undefined) {
            obj["singular"] = obj["singular"].toString();
        }
        if (obj["plural"] != undefined) {
            obj["plural"] = obj["plural"].toString();
        }
        if (obj["fieldName"] != undefined) {
            obj["fieldName"] = obj["fieldName"].toString();
        }
        if (obj["unvisibleFields"] != undefined && obj["unvisibleFields"] != null && _.isArray(obj["unvisibleFields"])) {
            obj["unvisibleFields"] = obj["unvisibleFields"].map((value) => {
                return value.toString();
            });
        }
        if (obj["fieldsNames"] != undefined && obj["fieldsNames"] != null && _.isArray(obj["fieldsNames"])) {
            obj["fieldsNames"].forEach((value) => {
                Index.Entity_name_value.cast(value);
            });
        }
        if (obj["listParameter"] != undefined) {
            Index.Entity_dataTableInit.cast(obj["listParameter"]);
            //59c68193de78709571cff36b
        }
        if (obj["create"] != undefined) {
            obj["create"] = new Boolean(obj["create"]).valueOf();
        }
        if (obj["delete"] != undefined) {
            obj["delete"] = new Boolean(obj["delete"]).valueOf();
        }
        if (obj["clone"] != undefined) {
            obj["clone"] = new Boolean(obj["clone"]).valueOf();
        }
        if (obj["update"] != undefined) {
            obj["update"] = new Boolean(obj["update"]).valueOf();
        }
    }
    static checkentity(val, path = null) {
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
    static checksingular(val, path = null) {
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
    static checkplural(val, path = null) {
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
    static checkfieldName(val, path = null) {
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
    static checkunvisibleFields(val, path = null) {
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
    static checkfieldsNames(val, path = null) {
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
    static checklistParameter(val, path = null) {
        if (val == null) {
            return null;
        }
        let res = [];
        let result;
        if (val._class) {
            result = Index['Entity_' + val._class].check(val, false, path);
        }
        else {
            result = Index.Entity_dataTableInit.check(val, false, path);
            //59c68193de78709571cff36b
        }
        res = [...res, ...result];
        if (res.length === 0) {
            return null;
        }
        else {
            return res;
        }
    }
    static checkcreate(val, path = null) {
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
    static checkdelete(val, path = null) {
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
    static checkclone(val, path = null) {
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
    static checkupdate(val, path = null) {
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
        if (target.entity != null && target.entity != undefined) {
            res = Entity_schema_name.checkentity(target.entity, `${path}.entity`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.singular != null && target.singular != undefined) {
            res = Entity_schema_name.checksingular(target.singular, `${path}.singular`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.plural != null && target.plural != undefined) {
            res = Entity_schema_name.checkplural(target.plural, `${path}.plural`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.fieldName != null && target.fieldName != undefined) {
            res = Entity_schema_name.checkfieldName(target.fieldName, `${path}.fieldName`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.unvisibleFields != null && target.unvisibleFields != undefined) {
            target.unvisibleFields.forEach((data, index) => {
                res = Entity_schema_name.checkunvisibleFields(target.unvisibleFields[index], `${path}.unvisibleFields.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.fieldsNames != null && target.fieldsNames != undefined) {
            target.fieldsNames.forEach((data, index) => {
                res = Entity_schema_name.checkfieldsNames(target.fieldsNames[index], `${path}.fieldsNames.${index}`);
                if (res && res.length > 0) {
                    err = [...err, ...res];
                }
            });
        }
        if (target.listParameter != null && target.listParameter != undefined) {
            res = Entity_schema_name.checklistParameter(target.listParameter, `${path}.listParameter`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.create != null && target.create != undefined) {
            res = Entity_schema_name.checkcreate(target.create, `${path}.create`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.delete != null && target.delete != undefined) {
            res = Entity_schema_name.checkdelete(target.delete, `${path}.delete`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.clone != null && target.clone != undefined) {
            res = Entity_schema_name.checkclone(target.clone, `${path}.clone`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.update != null && target.update != undefined) {
            res = Entity_schema_name.checkupdate(target.update, `${path}.update`);
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
            case 'entity':
                //string
                return new String(value).valueOf();
                break;
            case 'singular':
                //string
                return new String(value).valueOf();
                break;
            case 'plural':
                //string
                return new String(value).valueOf();
                break;
            case 'fieldName':
                //string
                return new String(value).valueOf();
                break;
            case 'unvisibleFields':
                //string
                return new String(value).valueOf();
                break;
            case 'fieldsNames':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_name_value.castQueryParam(subPath, value);
                }
                break;
            case 'listParameter':
                //subdoc
                if (value._class) {
                    return Index['Entity_' + value._class].castQueryParam(subPath, value);
                }
                else {
                    return Index.Entity_dataTableInit.castQueryParam(subPath, value);
                }
                break;
            case 'create':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'delete':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'clone':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'update':
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
            case 'entity':
                return null;
            case 'singular':
                return null;
            case 'plural':
                return null;
            case 'fieldName':
                return null;
            case 'unvisibleFields':
                return null;
            case 'fieldsNames':
                return Index.Entity_name_value.getClassNameOfProp(subPath);
            case 'listParameter':
                return Index.Entity_dataTableInit.getClassNameOfProp(subPath);
            case 'create':
                return null;
            case 'delete':
                return null;
            case 'clone':
                return null;
            case 'update':
                return null;
            default:
                return utils_1.Entity.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_schema_name = Entity_schema_name;
