"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity_subdoc = void 0;
const _ = require("lodash");
const Index = require("./Index");
const utils_1 = require("@leandredev/utils");
const field_1 = require("./field");
/**
  ce champ permet d'insérer un document dans un autre
*/
class Entity_subdoc extends field_1.Entity_field {
    static cast(obj = {}, castChildClass = false) {
        if ((!castChildClass) && obj._class && obj._class != 'subdoc' && [].indexOf(obj._class) !== -1) {
            Index['Entity_' + obj._class].cast(obj, true);
            return;
        }
        field_1.Entity_field.cast(obj, true);
        if (obj["name"] != undefined) {
            obj["name"] = obj["name"].toString();
        }
        if (obj["description"] != undefined) {
            obj["description"] = obj["description"].toString();
        }
        if (obj["isArrayOf"] != undefined) {
            obj["isArrayOf"] = new Boolean(obj["isArrayOf"]).valueOf();
        }
        if (obj["required"] != undefined) {
            obj["required"] = new Boolean(obj["required"]).valueOf();
        }
        if (obj["unique"] != undefined) {
            obj["unique"] = new Boolean(obj["unique"]).valueOf();
        }
        if (obj["index"] != undefined) {
            obj["index"] = new Boolean(obj["index"]).valueOf();
        }
        if (obj["protoSchemaId"] != undefined) {
            if (_.isString(obj["protoSchemaId"])) {
                obj["protoSchemaId"] = new utils_1.mongo.ObjectId(obj["protoSchemaId"]);
            }
            else if (obj["protoSchemaId"]._id) {
                obj["protoSchemaId"] = new utils_1.mongo.ObjectId(obj["protoSchemaId"]._id);
            }
        }
    }
    static checkname(val, path = null) {
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
    static checkdescription(val, path = null) {
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
    static checkisArrayOf(val, path = null) {
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
    static checkrequired(val, path = null) {
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
    static checkunique(val, path = null) {
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
    static checkindex(val, path = null) {
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
    static checkprotoSchemaId(val, path = null) {
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
        err = field_1.Entity_field.check(target, isCompleteObj, path);
        if (isCompleteObj && (target.name == null || target.name == undefined)) {
            err.push(path + ".name is required");
        }
        if (target.name != null && target.name != undefined) {
            res = Entity_subdoc.checkname(target.name, `${path}.name`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (isCompleteObj && (target.description == null || target.description == undefined)) {
            err.push(path + ".description is required");
        }
        if (target.description != null && target.description != undefined) {
            res = Entity_subdoc.checkdescription(target.description, `${path}.description`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.isArrayOf != null && target.isArrayOf != undefined) {
            res = Entity_subdoc.checkisArrayOf(target.isArrayOf, `${path}.isArrayOf`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.required != null && target.required != undefined) {
            res = Entity_subdoc.checkrequired(target.required, `${path}.required`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.unique != null && target.unique != undefined) {
            res = Entity_subdoc.checkunique(target.unique, `${path}.unique`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.index != null && target.index != undefined) {
            res = Entity_subdoc.checkindex(target.index, `${path}.index`);
            if (res && res.length > 0) {
                err = [...err, ...res];
            }
        }
        if (target.protoSchemaId != null && target.protoSchemaId != undefined) {
            res = Entity_subdoc.checkprotoSchemaId(target.protoSchemaId, `${path}.protoSchemaId`);
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
            case 'name':
                //string
                return new String(value).valueOf();
                break;
            case 'description':
                //string
                return new String(value).valueOf();
                break;
            case 'isArrayOf':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'required':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'unique':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'index':
                //boolean
                return new Boolean(value).valueOf();
                break;
            case 'protoSchemaId':
                //modelid
                return new utils_1.mongo.ObjectId(value);
                break;
            default:
                return field_1.Entity_field.castQueryParam(key, value);
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
            case 'name':
                return null;
            case 'description':
                return null;
            case 'isArrayOf':
                return null;
            case 'required':
                return null;
            case 'unique':
                return null;
            case 'index':
                return null;
            case 'protoSchemaId':
                return 'protoschema';
            default:
                return field_1.Entity_field.getClassNameOfProp(key);
                break;
        }
    }
}
exports.Entity_subdoc = Entity_subdoc;
